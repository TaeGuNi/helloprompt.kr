import { exec, execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";
import { glob } from "glob";

const _execAsync = util.promisify(exec);
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

async function initQueue(targetDirs?: string[]) {
  let queue = await loadQueue();
  // Always regenerate the pending queue if specific target directories are requested.
  if (targetDirs?.length || !queue.pending || queue.pending.length === 0) {
    console.log("📦 Initializing rewrite queue...");

    let allFiles: string[] = [];

    if (targetDirs && targetDirs.length > 0) {
      console.log(`🎯 Targeting specific directories...`);
      for (const dir of targetDirs) {
        const relativeTarget = path.relative(process.cwd(), dir);
        const searchPattern = `${relativeTarget}/**/*.md`;
        const files = await glob(searchPattern);
        allFiles.push(...files);
      }
    } else {
      const searchPattern = "src/content/posts/**/**/**/*.md";
      allFiles = await glob(searchPattern);
    }

    // Remove duplicates
    allFiles = [...new Set(allFiles)];

    if (allFiles.length === 0) {
      console.log("⚠️ No markdown files found in the target directories.");
    }

    queue = {
      completed: [],
      pending: allFiles,
      errors: [],
    };
    await saveQueue(queue);
    console.log(`Initialized queue with ${allFiles.length} files.`);
  }
  return queue;
}

export async function rewriteWithLocalCLI(
  content: string,
  qualityModel: string,
  postTemplate: string,
  fileName: string,
) {
  const systemInstruction = `You are an elite multilingual copywriter and Markdown structural architect for the 'Hello Prompt' blog.
Your job is to RESTRUCTURE and REWRITE the provided Markdown file to EXACTLY follow the POST_TEMPLATE section order, while applying psychological engagement principles for maximum reader retention.

### MODE: TEMPLATE-ENFORCED RESTRUCTURING (not polishing)

You MUST reorganize the post's sections to match the POST_TEMPLATE's exact order. Move existing content into the correct template slots. If a section is missing, create it from the post's existing material.

### SECTION ORDER (MANDATORY — follow POST_TEMPLATE exactly):

1. **YAML Frontmatter** (preserve date, image, tags — only polish description ≤160 chars)
2. **## 📝 Main Title** — H2, never H1
3. **Metadata block** — 🎯 추천 대상, ⏱️ 소요 시간, 🤖 최상위 성능 + ⭐ 난이도/효과성/활용도 emoji lists (NEVER tables)
4. **> Hook quote** — One pain-point sentence in italics (_"..."_)
5. **Introduction** — PAST framework (Pain → Agitation → Solution → Transformation). Min 1,500 chars. Short paragraphs, bold keywords.
6. **## 📊 증명: Before & After** — MUST come BEFORE 3-line summary. Visual proof section with ❌ Before / ✅ After subsections.
7. **## ⚡️ 3줄 요약 (TL;DR)** — Exactly 3 numbered bullet points.
8. **## 🚀 Prompt Section** — Use the POST_TEMPLATE's header style. Basic Version (🥉) and Pro Version (🥇) with blockquotes (>).
9. **## 💡 작성자 코멘트 (Insight)** — Min 1,500 chars. Expert analysis, variable control tips, real experience.
10. **Modular Snippets** — Pick 1-2 from: 🙋 FAQ, 🧬 프롬프트 해부, 🚀 Advanced Use Cases
11. **## 🎯 결론** — Emotional CTA epilogue. End with the signature sign-off line.

### PSYCHOLOGICAL ENGAGEMENT RULES:

- **3-Second Rule:** The hook quote MUST trigger an emotional "that's me!" response within 3 seconds.
- **Rabbit Hole Effect:** Before & After proof goes EARLY (after intro) to create "I need this" urgency.
- **Goal Gradient Effect:** TL;DR after proof gives readers a roadmap, reducing bounce.
- **Commitment-Consistency Bias:** Once readers copy the prompt, they feel invested and read the Insight section.
- **Endowed Progress:** The conclusion should make readers feel they've already started their journey.

### CRITICAL RULES (VIOLATION = PIPELINE FAILURE):

1. **TEMPLATE STRUCTURE IS LAW:** If the original post has sections in wrong order, MOVE them. If sections are missing, CREATE them from existing content.
2. **CODE PRESERVATION:** Do NOT translate, modify, or remove ANY code blocks or inline code.
3. **NO HALLUCINATIONS:** Do NOT invent facts, examples, or insights that don't exist in the original. You may restructure and expand existing content but never fabricate.
4. **LOCALIZATION & FLUENCY:** Rewrite phrasing for native fluency. Sound like an expert, not a machine translator.
5. **FORMATTING:**
   - Blockquotes (>) for Basic/Pro prompt sections ONLY. All other quotes use italic (_"..."_).
   - BANNED: Tables for ratings. Use emoji lists.
   - Preserve 'image' property in frontmatter exactly as-is.
   - Description ≤ 160 characters for SEO.
   - Post starts with H2 (##), NEVER H1 (#).
6. **TEMPLATE VARIABLES:** Translate ALL placeholder brackets into the target language. NEVER leave Korean inside brackets in non-Korean files.

RETURN FORMAT:
Return ONLY the raw Markdown. Start with '---' for frontmatter. No \`\`\`markdown fences.
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

async function runRewriter(targetDirs?: string[]) {
  console.log("🤖 Starting Local CLI Auto-Rewriter Queue...");

  const qualityModel = await getDoc("QUALITY_MODEL.md");
  const postTemplate = await getDoc("POST_TEMPLATE.md");
  const queue = await initQueue(targetDirs);

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
  const targetDirsArgs = process.argv.slice(2);
  runRewriter(targetDirsArgs.length > 0 ? targetDirsArgs : undefined);
}
