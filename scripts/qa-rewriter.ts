import { exec, execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";
import { glob } from "glob";

const execAsync = util.promisify(exec);
const execFileAsync = util.promisify(execFile);
const QUEUE_FILE = path.resolve(process.cwd(), "rewrite-queue.json");

async function getDoc(fileName: string) {
  const modelPath = path.resolve(process.cwd(), "docs", fileName);
  return await fs.readFile(modelPath, "utf-8");
}

async function loadQueue() {
  try {
    const data = await fs.readFile(QUEUE_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return { completed: [], pending: [], errors: [] };
  }
}

async function saveQueue(queue: Record<string, unknown>) {
  await fs.writeFile(QUEUE_FILE, JSON.stringify(queue, null, 2), "utf-8");
}

async function initQueue(targetDir?: string) {
  let queue = await loadQueue();
  // Always regenerate the pending queue if a specific target directory is requested.
  if (targetDir || !queue.pending || queue.pending.length === 0) {
    console.log("📦 Initializing rewrite queue...");
    let searchPattern = "src/content/posts/**/**/**/*.md";
    if (targetDir) {
      // Clean up trailing slashes and ensure it's a relative path to glob correctly
      const relativeTarget = path.relative(process.cwd(), targetDir);
      searchPattern = `${relativeTarget}/**/*.md`;
      console.log(`🎯 Targeting specific directory: ${searchPattern}`);
    }
    const files = await glob(searchPattern);

    if (files.length === 0) {
      console.log("⚠️ No markdown files found in the target directory.");
    }

    queue = {
      completed: [],
      pending: files,
      errors: [],
    };
    await saveQueue(queue);
    console.log(`Initialized queue with ${files.length} files.`);
  }
  return queue;
}

export async function rewriteWithLocalCLI(
  content: string,
  qualityModel: string,
  postTemplate: string,
  fileName: string,
) {
  const systemInstruction = `You are an elite multilingual copywriter and Markdown structural editor for the 'Hello Prompt' blog.
Your job is to REVISE the provided Markdown file for perfect native fluency while STRICTLY PRESERVING its 1:1 original structure.

### CRITICAL RULES (VIOLATION WILL CAUSE PIPELINE FAILURE):
1. **1:1 STRUCTURAL INTEGRITY:** Do NOT change the YAML Frontmatter (except grammar in 'description'). Do NOT add new headers, do NOT remove blockquotes, and do NOT alter the bullet point count.
2. **CODE PRESERVATION:** Do NOT translate, modify, or remove ANY code blocks (e.g. \`\`\`python) or inline code (\`code\`).
3. **NO HALLUCINATIONS:** If an insight or FAQ did not exist in the original text, DO NOT invent one. Polish only what is there.
4. **LOCALIZATION & FLUENCY:** You must rewrite the phrasing to sound like a native professional, NOT a machine translator. Make it sound expert and persuasive, but NEVER alter the actual information architecture.
5. **TEMPLATE RULES:** 
   - Basic/Pro sections use blockquotes (>)
   - Tables for ratings are BANNED. You MUST use emoji lists (e.g. - ⭐ **Difficulty:** ⭐⭐☆☆☆).
   - DO NOT add an 'image' property.
   
RETURN FORMAT:
Return ONLY the raw, perfectly revised Markdown file content. Do NOT wrap it in \`\`\`markdown JSON fences. Literally start with '---' for the frontmatter and end with the last character of the markdown file.
`;

  const prompt = `
${systemInstruction}

<QUALITY_MODEL>
${qualityModel}
</QUALITY_MODEL>

<POST_TEMPLATE>
${postTemplate}
</POST_TEMPLATE>

<TARGET_FILE_TO_REWRITE_AND_LOCALIZE>
File Name: ${fileName}

${content}
</TARGET_FILE_TO_REWRITE_AND_LOCALIZE>
`;

  // Use the local gemini CLI passed by the user
  const { stdout } = await execFileAsync("gemini", [
    "--yolo",
    "-m",
    "gemini-3.1-pro-preview",
    "-p",
    prompt,
  ]);

  let text = stdout;

  // The CLI outputs some startup logs ("YOLO mode is enabled...", "Loaded cached credentials...").
  // We need to extract only the generated Markdown output.
  // We'll look for the first '---' block which denotes the start of the file.
  const match = text.match(/---\n[\s\S]+/);
  if (match) {
    text = match[0];
  }

  // Clean off markdown fences if the CLI injected them despite instructions
  text = `${text
    .replace(/^```markdown\n?/i, "")
    .replace(/```$/i, "")
    .trim()}\n`;
  return text;
}

async function runRewriter(targetDir?: string) {
  console.log("🤖 Starting Local CLI Auto-Rewriter Queue...");

  const qualityModel = await getDoc("QUALITY_MODEL.md");
  const postTemplate = await getDoc("POST_TEMPLATE.md");
  const queue = await initQueue(targetDir);

  if (queue.pending.length === 0) {
    console.log("No pending files to rewrite. Exiting.");
    return;
  }

  console.log(
    `Queue Status: ${queue.pending.length} pending, ${queue.completed.length} completed.`,
  );

  const BATCH_SIZE = 5;

  while (queue.pending.length > 0) {
    const batch = queue.pending.splice(0, BATCH_SIZE);
    console.log(`\n⏳ Local CLI Rewriting Batch of ${batch.length} files...`);

    const promises = batch.map(async (file: string) => {
      try {
        const content = await fs.readFile(file, "utf-8");
        const rewrittenContent = await rewriteWithLocalCLI(
          content,
          qualityModel,
          postTemplate,
          path.basename(file),
        );

        if (
          rewrittenContent.length < 50 ||
          !rewrittenContent.startsWith("---")
        ) {
          throw new Error(
            "AI returned malformed markdown structure (missing frontmatter).",
          );
        }
        await fs.writeFile(file, rewrittenContent, "utf-8");

        if (file.endsWith("index.ko.md")) {
          console.log(`   🎨 Triggering Image Generation for ${file}...`);
          try {
            await execAsync(`pnpm generate:image ${file}`);
          } catch (imgErr) {
            console.error(`   ❌ Image generation failed for ${file}:`, imgErr);
          }
        }

        return { file, success: true };
      } catch (e: unknown) {
        return { file, success: false, error: (e as Error).message };
      }
    });

    const results = await Promise.allSettled(promises);

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        const val = result.value;
        if (val.success) {
          console.log(`   ✅ Rewrite successful: ${val.file}`);
          queue.completed.push(val.file);
        } else {
          console.error(`   ❌ Error on ${val.file}: ${val.error}`);
          queue.errors.push({ file: val.file, error: val.error });
        }
      }
    });

    // Save state after batch completes
    await saveQueue(queue);
  }

  console.log(`\n🎉 Queue completely exhausted!`);
}

// Only run queue normally if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const targetDirArg = process.argv[2];
  runRewriter(targetDirArg);
}
