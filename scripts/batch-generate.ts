import { exec, execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";

const execAsync = util.promisify(exec);
const execFileAsync = util.promisify(execFile);

// Target languages
const TARGET_LANGS = ["en", "de", "es", "fr", "it", "ja", "pt", "ru", "zh"];

async function runCmd(cmd: string) {
  console.log(`\n> ${cmd}`);
  const { stdout, stderr } = await execAsync(cmd);
  if (stderr && !stderr.includes("Warning") && !stderr.includes("Switched")) {
    console.error(`stderr: ${stderr}`);
  }
  return stdout.trim();
}

async function getDoc(fileName: string) {
  return await fs.readFile(
    path.resolve(process.cwd(), "docs", fileName),
    "utf-8",
  );
}

// Global throttle parameters mapping to Gemini Pro specs
const API_DELAY_MS = 15000;

async function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function callGemini(prompt: string): Promise<string> {
  // Enforce a strict sequential throttle window before calling Gemini.
  // This explicitly prevents the rate limiting issue that stalled the previous script.
  await delay(API_DELAY_MS);
  const { stdout } = await execFileAsync("gemini", [
    "--yolo",
    "-m",
    "gemini-3.1-pro-preview",
    "-p",
    prompt,
  ]);

  let text = stdout;
  const match = text.match(/---\n[\s\S]+/);
  if (match) {
    text = match[0];
  }

  text = `${text
    .replace(/^```markdown\n?/i, "")
    .replace(/```$/i, "")
    .trim()}\n`;
  return text;
}

async function translatePost(koContent: string, langCode: string) {
  console.log(`🌐 Translating to ${langCode.toUpperCase()}...`);
  const prompt = `
You are an elite multilingual copywriter for 'Hello Prompt'. 
Translate the following Korean Markdown blog post into ${langCode.toUpperCase()}.

CRITICAL RULES:
1. Preserve EXACTLY the YAML Frontmatter structure, but translate the 'title' and 'description'.
2. Keep the 'date' and 'updatedDate' the exact same as the original.
3. The UI structure MUST strictly follow the <POST_TEMPLATE> format. Keep all English HTML comments exactly the same!
4. LOCALIZATION: Do not machine translate. Sound like a native professional.
5. DO NOT add any extra frontmatter fields that were not in the original.
6. The "Cheat Code Prompt" inside the code block SHOULD BE TRANSLATED so that international users can copy-paste it in their own language.
7. Output ONLY the raw Markdown file starting with '---'.

<KOREAN_POST>
${koContent}
</KOREAN_POST>
`;

  return await callGemini(prompt);
}

async function generateKoreanPost(
  skillName: string,
  skillContent: string,
  template: string,
  quality: string,
): Promise<{ slug: string; content: string }> {
  console.log(`🤖 Generating base Korean post for skill: ${skillName}`);
  const prompt = `
You are an elite copywriter and SEO expert for 'Hello Prompt', a blog for AI beginners and practical users.
Your task is to rewrite a hardcore AI Agent system prompt (SKILL.md) into a highly practical cheat sheet/cheat code blog post (in Korean). 
The goal is to provide a ready-to-use prompt that general users can copy and paste into ChatGPT or Claude.

CRITICAL TONE & PERSONA:
The original creator of this skill is a highly opinionated, hardcore senior developer (often feeling like a mad scientist or a spartan tech lead). They have extremely strong personal tastes, a ruthless coding philosophy, and absolutely zero tolerance for AI hallucinations, "yes-man" flattery, or spaghetti code.
You MUST write this blog post in a fun, engaging, and slightly humorous tone that perfectly reflects this "mad scientist / spartan senior" persona! Make it entertaining and slightly cynical, but ultimately very helpful. Emphasize how this cheat code "tames" the AI, strips away its meaningless flatteries, and forces it to work at an elite, merciless level.

CRITICAL RULES:
1. Adhere strictly to the <POST_TEMPLATE> format. Include all YAML frontmatter.
2. The content MUST score highly according to the <QUALITY_MODEL>. Be pragmatic! Highlight how applying this 'Skill' changes the AI's behavior from a polite chatbot into a hardcore machine.
3. In the YAML Frontmatter:
   - title: Catchy, clickable Korean title making this sound like a secret cheat code or powerful persona. Include an emoji!
   - date: ${new Date().toISOString().split("T")[0]}
   - updatedDate: ${new Date().toISOString().split("T")[0]}
   - description: 1-line catchy SEO description reflecting the fun/hardcore tone.
   - tags: ['prompt-engineering', 'ai-agent', 'cheat-sheet', '${skillName.replace(/_/g, "-")}']
4. VERY IMPORTANT: You must also output a special 'slug: "your-english-kebab-case-slug"' field in the frontmatter. We need this for the folder name. The slug should be English.
5. Do NOT use markdown Tables. Use emoji bullet lists instead (<QUALITY_MODEL> rule).
6. Basic/Pro sections MUST use blockquotes (>). DO NOT use blockquotes (>) anywhere else in the document!
8. DO NOT generate an 'image' property. Only strictly use the fields provided in <POST_TEMPLATE>!
9. Ensure the headers '## 💡 작성자 코멘트 (Insight)' and '## 🙋 자주 묻는 질문 (FAQ)' are exactly written as requested. Weave the creator's hardcore personality heavily into the Insight section.
10. Explicitly provide the "Cheat Code Prompt" inside a markdown code block so users can easily copy it.

<SKILL_RAW_CONTENT>
${skillContent}
</SKILL_RAW_CONTENT>

<POST_TEMPLATE>
${template}
</POST_TEMPLATE>

<QUALITY_MODEL>
${quality}
</QUALITY_MODEL>

Output ONLY the raw markdown content. No explanatory text.
`;

  const content = await callGemini(prompt);

  const slugMatch = content.match(/slug:\s*["']?([a-z0-9-]+)["']?/i);
  const slug = slugMatch
    ? slugMatch[1]
    : skillName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const cleanContent = content.replace(/^slug:.*$/m, "").replace(/\n\n/g, "\n");

  return { slug, content: cleanContent };
}

async function main() {
  try {
    const skillNames = process.argv.slice(2);
    if (skillNames.length === 0) {
      console.error("❌ Error: You must provide at least one skill name.");
      process.exit(1);
    }

    console.log("🚀 Setting up Git workflow...");
    await runCmd("git checkout develop");
    await runCmd("git pull origin develop");

    const batchId = Date.now();
    const branchName = `feat/skill-posts-batch-${batchId}`;
    await runCmd(`git checkout -b ${branchName}`);

    const template = await getDoc("POST_TEMPLATE.md");
    const quality = await getDoc("QUALITY_MODEL.md");

    const { auditFile } = await import("./qa/audit.js");
    const { rewriteWithLocalCLI } = await import("./qa/ai-rewriter.js");

    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");

    let totalCreated = 0;

    for (const skillName of skillNames) {
      const skillPath = path.resolve(
        "/Users/jay/.gemini/antigravity/skills",
        skillName,
        "SKILL.md",
      );
      let skillContent: string;
      try {
        skillContent = await fs.readFile(skillPath, "utf-8");
      } catch (_e) {
        console.error(
          `❌ Error: Could not read SKILL.md for ${skillName}. Skipping...`,
        );
        continue;
      }

      console.log(`\n==========================================`);
      console.log(`🚀 Processing Skill: ${skillName}`);
      console.log(`==========================================\n`);

      const generated = await generateKoreanPost(
        skillName,
        skillContent,
        template,
        quality,
      );
      const slug = generated.slug;
      let koContent = generated.content;

      const postDir = path.resolve(
        process.cwd(),
        "src",
        "content",
        "posts",
        `${year}`,
        month,
        slug,
      );
      console.log(`📁 Creating directory: ${postDir}`);
      await fs.mkdir(postDir, { recursive: true });

      const koFilePath = path.join(postDir, "index.ko.md");
      await fs.writeFile(koFilePath, koContent, "utf-8");

      console.log(`\n🔍 Auditing generated Korean post...`);
      const auditResult = await auditFile(koFilePath);

      if (
        !auditResult.passed ||
        auditResult.issues.some((i) => i.severity === "error")
      ) {
        console.error("❌ QA Failed! Tripping auto-rewriter...");
        try {
          const rewrittenContent = await rewriteWithLocalCLI(
            koContent,
            quality,
            template,
            `index.ko.md`,
          );
          koContent = rewrittenContent;
          await fs.writeFile(koFilePath, koContent, "utf-8");
        } catch (_e: unknown) {
          console.error(`❌ Rewrite failed. Skipping translations.`);
          continue;
        }
      }

      const cleanSourceForTranslation = koContent.replace(
        /<!--[\s\S]*?-->/g,
        "",
      );

      console.log(`🚀 Starting strictly sequential 9-language translations...`);
      for (const lang of TARGET_LANGS) {
        const translated = await translatePost(cleanSourceForTranslation, lang);
        await fs.writeFile(
          path.join(postDir, `index.${lang}.md`),
          translated,
          "utf-8",
        );
      }

      console.log(`✅ All translations complete for ${slug}.`);
      totalCreated += 10;
      console.log(`\n📈 Post count: ${totalCreated} so far.`);
    }

    await runCmd("git add src/content/posts/*");
    await runCmd(
      `git commit -m "feat(content): generate ${skillNames.length} sequential skill posts with spartan persona"`,
    );
    await runCmd(`git push origin ${branchName} --force`);

    console.log("🚀 Creating Pull Request...");
    try {
      await runCmd(
        `gh pr create --title "feat(content): ${skillNames.length} Sequential Spartan Skill Articles" --body "Automated sequentially generated PR converting ${skillNames.length} AI skills into hardcore cheat code posts. Target total generation count: ${totalCreated}" --base develop`,
      );
    } catch (_e) {
      console.log("PR creation failed or exists.");
    }

    console.log("⏳ Waiting for GH CI...");
    let isSuccess = false;
    for (let i = 0; i < 30; i++) {
      const statusStr = await runCmd(
        `gh pr status --json statusCheckRollup -q ".currentBranch.statusCheckRollup[0].state" || echo "UNKNOWN"`,
      );
      if (statusStr.includes("SUCCESS")) {
        isSuccess = true;
        break;
      } else if (statusStr.includes("FAILURE")) {
        process.exit(1);
      }
      await delay(10000);
    }

    if (isSuccess) {
      await runCmd(`gh pr merge --squash --delete-branch`);
      console.log("🎉 SUCCESS!");
    } else {
      console.log("⚠️ TIMEOUT");
    }
  } catch (e) {
    console.error("Pipeline script failed:", e);
    process.exit(1);
  }
}

main();
