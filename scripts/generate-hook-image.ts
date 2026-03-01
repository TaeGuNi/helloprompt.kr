import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";

const execFileAsync = util.promisify(execFile);

async function processMarkdown(filePath: string) {
  const fullPath = path.resolve(filePath);
  const dirPath = path.dirname(fullPath);
  const slug = path.basename(dirPath);
  const imageFileName = `${slug}.jpg`;
  const publicDir = path.resolve(process.cwd(), "public/images/hooks");
  const imagePath = path.join(publicDir, imageFileName);
  const publicUrl = `/images/hooks/${imageFileName}`;

  // Ensure public directory exists
  try {
    await fs.mkdir(publicDir, { recursive: true });
  } catch (_e) {}

  // Ensure file exists or create from template
  try {
    await fs.access(fullPath);
  } catch {
    console.log(`⚠️ File not found: ${fullPath}`);
    console.log(`📁 Auto-creating directory and copying POST_TEMPLATE.md...`);
    await fs.mkdir(dirPath, { recursive: true });
    await fs.copyFile(
      path.resolve(process.cwd(), "docs/POST_TEMPLATE.md"),
      fullPath,
    );
  }

  // Read Markdown
  let content = await fs.readFile(fullPath, "utf-8");

  // Extract Title from frontmatter
  const titleMatch = content.match(/^title:\s*["']?(.*?)["']?$/m);
  if (!titleMatch || !titleMatch[1].trim()) {
    throw new Error("❌ Extraction Failed: 'title' not found in frontmatter.");
  }
  const titleText = titleMatch[1].trim();

  // Extract Hook (Support both `> _"text"_` and `_text_` or `_"text"_`)
  // Crucially, it must not match across newlines to avoid grabbing HTML comments
  const hookMatch = content.match(/^(?:>\s*)?_"?([^"\n]+)"?_$/m);
  if (!hookMatch || !hookMatch[1].trim()) {
    throw new Error(
      "❌ Extraction Failed: Target 'hook' sentence not found in markdown.",
    );
  }
  const hookText = hookMatch[1].trim();

  console.log(`🎯 Extracted Title: "${titleText}"`);
  console.log(`🎯 Extracted Hook: "${hookText}"`);

  // Generate & Optimize using nested Gemini CLI agent
  try {
    const prompt = `Task:
1. Context Analysis: The user is writing a tech/productivity blog post titled "${titleText}". The opening hook sentence is: "${hookText}". Figure out the core "pain point" or "situation" described here.
2. Generate an image: Create a high-quality 3D isometric illustration that perfectly matches the situation you analyzed. The character should be a professional worker facing the exact problem or situation described in the hook. Use a subtle cyberpunk, dark mode, and neon cyan color palette. Clean aesthetic. Do NOT include any text.
3. Optimize it: Convert the image to highly compressed JPG format, resize it to a maximum width of 800px.
4. Save it to exactly this path: ${imagePath}. 
You must complete this task autonomously without asking for confirmation.`;

    console.log(`🎨 Delegating image generation to Gemini CLI...`);

    await execFileAsync("gemini", [
      "--approval-mode=yolo",
      "-m",
      "gemini-3.1-pro-preview",
      "-p",
      prompt,
    ]);

    console.log(`✅ Nested agent completed image generation to ${imagePath}`);

    // Clean up unwanted artifacts the CLI might produce
    try {
      await fs.unlink(path.join(dirPath, "temp.jpg"));
      console.log(`🧹 Cleaned up temporary files.`);
    } catch {
      // temp.jpg doesn't exist, ignore
    }

    // Update Markdown Body
    const injectionMarker =
      "<!-- 🤖 RUN: pnpm generate:image (여기에 AI 생성 이미지가 삽입됩니다) -->";
    const imageMarkdown = `![${titleText}](${publicUrl})`;

    // Check if an image link already exists
    // The previous regex looked for `./image.jpg`, now we check for the publicUrl
    const existingImageRegex = new RegExp(
      `!\\[.*?\\]\\(${publicUrl.replace(/\//g, "\\/")}\\)`,
    );
    if (existingImageRegex.test(content)) {
      console.log(
        "⚠️ Image markdown already exists. Updating existing alt text for SEO.",
      );
      content = content.replace(existingImageRegex, imageMarkdown);
    } else if (content.includes(injectionMarker)) {
      content = content.replace(injectionMarker, imageMarkdown);
    } else if (hookMatch) {
      // Fallback injection if marker is missing
      content = content.replace(
        hookMatch[0],
        `${hookMatch[0]}\n\n${imageMarkdown}`,
      );
    }

    // Inject 'image: "/images/hooks/[slug].jpg"' into frontmatter for Open Graph fallback
    if (!content.match(/^image:\s*.*$/m)) {
      content = content.replace(
        /(---\n[\s\S]*?\n)(---)/,
        `$1image: "${publicUrl}"\n$2`,
      );
      console.log(`📝 Injected 'image' property into frontmatter.`);
    }

    await fs.writeFile(fullPath, content, "utf-8");
    console.log(`📝 Updated markdown: ${fullPath}`);
  } catch (error) {
    console.error(
      "❌ Failed to delegate image generation to Gemini CLI:",
      error,
    );
    process.exit(1);
  }
}

// CLI Execution
const targetFile = process.argv[2];
if (!targetFile) {
  console.error("❌ Usage: pnpm generate:image <path/to/markdown.md>");
  process.exit(1);
}

processMarkdown(targetFile);
