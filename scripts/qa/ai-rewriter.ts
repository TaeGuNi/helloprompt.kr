import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import { execFile } from "child_process";
import util from "util";

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

async function initQueue() {
  let queue = await loadQueue();
  if (!queue.pending || queue.pending.length === 0) {
    console.log("📦 Initializing rewrite queue...");
    // SCOPED FOR DEMONSTRATION FIRST: We will test on 1 specific folder
    const files = await glob("src/content/posts/**/**/**/*.md");
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

async function rewriteWithLocalCLI(
  content: string,
  qualityModel: string,
  postTemplate: string,
  fileName: string,
) {
  const systemInstruction = `You are an elite multilingual copywriter and Markdown structural engineer for the 'Hello Prompt' blog.
Your job is to REWRITE the provided Markdown file to perfection.

### CRITICAL RULES:
1. DO NOT change the YAML Frontmatter at all, except to perhaps fix grammar in the 'description'. Keep the exact same 'date', 'pubDate', 'title', 'lang', 'tags', etc.
2. The UI structure MUST strictly follow the <POST_TEMPLATE> format. 
   - Basic/Pro sections use blockquotes (>)
   - Tables for ratings are BANNED. You MUST use emoji lists (e.g. - ⭐ **난이도:** ⭐⭐☆☆☆).
3. LOCALIZATION: If this file is a translation (e.g. index.en.md, index.ja.md), you must completely rewrite the translation to sound like a native professional. No awkward machine translation. It must sound expert and persuasive.
4. QUALITY (Utility & Insight): Ensure the "Hook" sentence is captivating. Ensure "💡 작성자 코멘트 (Insight)" and "🙋 자주 묻는 질문 (FAQ)" exist and are highly valuable and localized to the target language.

RETURN FORMAT:
Return ONLY the raw, perfectly rewritten Markdown file content. Do NOT wrap it in \`\`\`markdown JSON fences. Literally start with '---' for the frontmatter and end with the last character of the markdown file.
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
  text =
    text
      .replace(/^```markdown\n?/i, "")
      .replace(/```$/i, "")
      .trim() + "\n";
  return text;
}

async function runRewriter() {
  console.log("🤖 Starting Local CLI Auto-Rewriter Queue...");

  const qualityModel = await getDoc("QUALITY_MODEL.md");
  const postTemplate = await getDoc("POST_TEMPLATE.md");
  const queue = await initQueue();

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

runRewriter();
