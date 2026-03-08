import { exec, execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";
import { glob } from "glob";

const _execAsync = util.promisify(exec);
const execFileAsync = util.promisify(execFile);
const QUEUE_FILE = path.resolve(process.cwd(), "rewrite-queue.json");

// --- Configuration ---
const MODEL_PRO = "gemini-2.5-pro";
const MODEL_FLASH = "gemini-2.5-flash";
const BATCH_SIZE_PHASE1 = 15;
const BATCH_SIZE_PHASE2 = 20;
const SUPPORTED_LANGS = ["en", "de", "es", "fr", "it", "ja", "pt", "ru", "zh"];

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

// --- System Instructions ---
function getRestructuringInstruction() {
  return [
    "You are an elite multilingual copywriter and Markdown structural architect for the 'Hello Prompt' blog.",
    "Your job is to RESTRUCTURE and REWRITE the provided Markdown file to EXACTLY follow the POST_TEMPLATE section order, while applying psychological engagement principles for maximum reader retention.",
    "",
    "### MODE: TEMPLATE-ENFORCED RESTRUCTURING (not polishing)",
    "",
    "You MUST reorganize the post's sections to match the POST_TEMPLATE's exact order. Move existing content into the correct template slots. If a section is missing, create it from the post's existing material.",
    "",
    "### SECTION ORDER (MANDATORY — follow POST_TEMPLATE exactly):",
    "",
    "1. **YAML Frontmatter** (preserve date, image, tags — only polish description ≤160 chars)",
    "2. **## 📝 Main Title** — H2, never H1",
    "3. **Metadata block** — 🎯 추천 대상, ⏱️ 소요 시간, 🤖 최상위 성능 + ⭐ 난이도/효과성/활용도 emoji lists (NEVER tables)",
    '4. **> Hook quote** — One pain-point sentence in italics (_"..."_)',
    "5. **Introduction** — PAST framework (Pain → Agitation → Solution → Transformation). Min 1,500 chars. Short paragraphs, bold keywords.",
    "6. **## 📊 증명: Before & After** — MUST come BEFORE 3-line summary. Visual proof section with ❌ Before / ✅ After subsections.",
    "7. **## ⚡️ 3줄 요약 (TL;DR)** — Exactly 3 numbered bullet points.",
    "8. **## 🚀 Prompt Section** — Use the POST_TEMPLATE header style. Basic Version (🥉) and Pro Version (🥇) with blockquotes (>).",
    "9. **## 💡 작성자 코멘트 (Insight)** — Min 1,500 chars. Expert analysis, variable control tips, real experience.",
    "10. **Modular Snippets** — Pick 1-2 from: 🙋 FAQ, 🧬 프롬프트 해부, 🚀 Advanced Use Cases",
    "11. **## 🎯 결론** — Emotional CTA epilogue. End with the signature sign-off line.",
    "",
    "### PSYCHOLOGICAL ENGAGEMENT RULES:",
    "",
    "- **3-Second Rule:** The hook quote MUST trigger an emotional \"that's me response within 3 seconds.",
    '- **Rabbit Hole Effect:** Before & After proof goes EARLY (after intro) to create "I need this" urgency.',
    "- **Goal Gradient Effect:** TL;DR after proof gives readers a roadmap, reducing bounce.",
    "- **Commitment-Consistency Bias:** Once readers copy the prompt, they feel invested and read the Insight section.",
    "- **Endowed Progress:** The conclusion should make readers feel they've already started their journey.",
    "",
    "### CRITICAL RULES (VIOLATION = PIPELINE FAILURE):",
    "",
    "1. **TEMPLATE STRUCTURE IS LAW:** If the original post has sections in wrong order, MOVE them. If sections are missing, CREATE them from existing content.",
    "2. **CODE PRESERVATION:** Do NOT translate, modify, or remove ANY code blocks or inline code.",
    "3. **NO HALLUCINATIONS:** Do NOT invent facts, examples, or insights that don't exist in the original. You may restructure and expand existing content but never fabricate.",
    "4. **LOCALIZATION & FLUENCY:** Rewrite phrasing for native fluency. Sound like an expert, not a machine translator.",
    "5. **FORMATTING:**",
    '   - Blockquotes (>) for Basic/Pro prompt sections ONLY. All other quotes use italic (_"..."_).',
    "   - BANNED: Tables for ratings. Use emoji lists.",
    "   - Preserve 'image' property in frontmatter exactly as-is.",
    "   - Description ≤ 160 characters for SEO.",
    "   - Post starts with H2 (##), NEVER H1 (#).",
    "6. **TEMPLATE VARIABLES:** Translate ALL placeholder brackets into the target language. NEVER leave Korean inside brackets in non-Korean files.",
    "",
    "RETURN FORMAT:",
    "Return ONLY the raw Markdown. Start with '---' for frontmatter. No ```markdown fences.",
  ].join("\n");
}

function getTranslationInstruction(targetLang: string) {
  const langNames: Record<string, string> = {
    en: "English",
    de: "German",
    es: "Spanish",
    fr: "French",
    it: "Italian",
    ja: "Japanese",
    pt: "Portuguese",
    ru: "Russian",
    zh: "Chinese (Simplified)",
  };
  const langName = langNames[targetLang] || targetLang;

  return [
    "You are an elite professional translator and copywriter for the 'Hello Prompt' blog.",
    "Your job is to translate the provided Korean (ko) Markdown post into fluent, native-level " +
      langName +
      " (" +
      targetLang +
      ").",
    "",
    "### MODE: STRUCTURE-PRESERVING TRANSLATION",
    "",
    "The Korean source file has ALREADY been restructured to the correct template format.",
    "You MUST preserve the EXACT same section structure, header order, and formatting.",
    "Your ONLY job is translation — do NOT reorganize, add, or remove any sections.",
    "",
    "### CRITICAL RULES:",
    "",
    "1. **STRUCTURE PRESERVATION:** Keep the EXACT same headers, section order, bullet points, and formatting as the Korean source.",
    "2. **CODE PRESERVATION:** Do NOT translate, modify, or remove ANY code blocks or inline code. Keep code exactly as-is.",
    "3. **NATIVE FLUENCY:** Translate to sound like a native " +
      langName +
      " professional writer, NOT a machine translator.",
    "4. **FRONTMATTER:**",
    "   - Translate 'title' and 'description' to " + langName + ".",
    "   - Description MUST be ≤ 160 characters for SEO.",
    "   - Keep date, image, author, tags, category EXACTLY as-is.",
    "5. **TEMPLATE VARIABLES:** Translate ALL placeholder brackets into " +
      langName +
      ". NEVER leave Korean text inside brackets.",
    "6. **BLOCKQUOTES:** Translate content inside blockquotes (>) but preserve the blockquote formatting.",
    "7. **EMOJI:** Keep all emojis exactly as they appear in the Korean source.",
    "8. **NO HALLUCINATIONS:** Translate what exists. Do NOT add new content or examples.",
    "",
    "RETURN FORMAT:",
    "Return ONLY the raw Markdown. Start with '---' for frontmatter. No ```markdown fences.",
  ].join("\n");
}

// --- Core Rewrite Function ---
async function rewriteWithCLI(prompt: string, model: string): Promise<string> {
  const { stdout } = await execFileAsync("gemini", [
    "--yolo",
    "-m",
    model,
    "-p",
    prompt,
  ]);

  let text = stdout;

  // Extract only the generated Markdown output (skip CLI startup logs)
  const match = text.match(/---\n[\s\S]+/);
  if (match) {
    text = match[0];
  }

  // Clean off markdown fences if injected
  text =
    text
      .replace(/^```markdown\n?/i, "")
      .replace(/```$/i, "")
      .trim() + "\n";
  return text;
}

function buildRestructurePrompt(
  systemInstruction: string,
  qualityModel: string,
  postTemplate: string,
  fileName: string,
  content: string,
): string {
  return [
    systemInstruction,
    "",
    "<QUALITY_MODEL>",
    qualityModel,
    "</QUALITY_MODEL>",
    "",
    "<POST_TEMPLATE>",
    postTemplate,
    "</POST_TEMPLATE>",
    "",
    "<TARGET_FILE_TO_RESTRUCTURE>",
    "File Name: " + fileName,
    "",
    content,
    "</TARGET_FILE_TO_RESTRUCTURE>",
  ].join("\n");
}

function buildTranslatePrompt(
  instruction: string,
  koContent: string,
  lang: string,
): string {
  return [
    instruction,
    "",
    "<KOREAN_SOURCE_FILE>",
    koContent,
    "</KOREAN_SOURCE_FILE>",
    "",
    "Translate the above Korean Markdown post into " +
      lang +
      ". Preserve all structure exactly.",
  ].join("\n");
}

// --- Phase 1: Korean Restructuring ---
async function phase1Restructure(targetDirs?: string[]) {
  console.log("\n🔥 PHASE 1: Korean Restructuring (Pro Model)");
  console.log("=".repeat(50));

  const qualityModel = await getDoc("QUALITY_MODEL.md");
  const postTemplate = await getDoc("POST_TEMPLATE.md");
  const systemInstruction = getRestructuringInstruction();

  let koFiles: string[] = [];

  if (targetDirs && targetDirs.length > 0) {
    for (const dir of targetDirs) {
      const relDir = path.relative(process.cwd(), dir);
      const files = await glob(relDir + "/**/index.ko.md");
      koFiles.push(...files);
    }
  } else {
    koFiles = await glob("src/content/posts/**/index.ko.md");
  }

  koFiles = [...new Set(koFiles)];
  console.log("📄 Found " + koFiles.length + " Korean source files.");

  if (koFiles.length === 0) {
    console.log("⚠️ No Korean files found. Skipping Phase 1.");
    return [];
  }

  const completed: string[] = [];
  const errors: Array<{ file: string; error: string }> = [];
  let batchNum = 0;
  const totalFiles = koFiles.length;

  while (koFiles.length > 0) {
    const batch = koFiles.splice(0, BATCH_SIZE_PHASE1);
    batchNum++;
    const processed = totalFiles - koFiles.length - batch.length;
    console.log(
      "\n⏳ [Phase 1] Batch " +
        batchNum +
        ": " +
        batch.length +
        " files (" +
        processed +
        "/" +
        totalFiles +
        " total)",
    );

    const promises = batch.map(async (file) => {
      try {
        const content = await fs.readFile(file, "utf-8");
        const prompt = buildRestructurePrompt(
          systemInstruction,
          qualityModel,
          postTemplate,
          path.basename(file),
          content,
        );

        const result = await rewriteWithCLI(prompt, MODEL_PRO);

        if (result.length < 50 || !result.startsWith("---")) {
          throw new Error(
            "AI returned malformed markdown (missing frontmatter).",
          );
        }

        await fs.writeFile(file, result, "utf-8");
        return { file, success: true };
      } catch (e: unknown) {
        return { file, success: false, error: (e as Error).message };
      }
    });

    const results = await Promise.allSettled(promises);

    for (const result of results) {
      if (result.status === "fulfilled") {
        const val = result.value;
        if (val.success) {
          console.log("   ✅ " + val.file);
          completed.push(val.file);
        } else {
          console.error("   ❌ " + val.file + ": " + val.error);
          errors.push({ file: val.file, error: val.error || "unknown" });
        }
      }
    }
  }

  console.log(
    "\n📊 Phase 1 Complete: " +
      completed.length +
      " success, " +
      errors.length +
      " errors.",
  );
  return completed;
}

// --- Phase 2: Translation ---
async function phase2Translate(koFiles: string[], targetDirs?: string[]) {
  console.log("\n🌐 PHASE 2: Multi-language Translation (Flash Model)");
  console.log("=".repeat(50));

  let filesToProcess: string[] = [];

  if (koFiles.length > 0) {
    filesToProcess = koFiles;
  } else if (targetDirs && targetDirs.length > 0) {
    for (const dir of targetDirs) {
      const relDir = path.relative(process.cwd(), dir);
      const found = await glob(relDir + "/**/index.ko.md");
      filesToProcess.push(...found);
    }
  } else {
    filesToProcess = await glob("src/content/posts/**/index.ko.md");
  }

  const tasks: Array<{ koFile: string; targetFile: string; lang: string }> = [];

  for (const koFile of filesToProcess) {
    const dir = path.dirname(koFile);
    for (const lang of SUPPORTED_LANGS) {
      const targetFile = path.join(dir, "index." + lang + ".md");
      tasks.push({ koFile, targetFile, lang });
    }
  }

  console.log(
    "📄 Found " +
      tasks.length +
      " translation tasks (" +
      filesToProcess.length +
      " posts × " +
      SUPPORTED_LANGS.length +
      " languages).",
  );

  if (tasks.length === 0) {
    console.log("⚠️ No translation tasks. Skipping Phase 2.");
    return;
  }

  const completed: string[] = [];
  const errors: Array<{ file: string; error: string }> = [];
  let batchNum = 0;
  const totalTasks = tasks.length;

  while (tasks.length > 0) {
    const batch = tasks.splice(0, BATCH_SIZE_PHASE2);
    batchNum++;
    const processed = totalTasks - tasks.length - batch.length;
    console.log(
      "\n⏳ [Phase 2] Batch " +
        batchNum +
        ": " +
        batch.length +
        " files (" +
        processed +
        "/" +
        totalTasks +
        " total)",
    );

    const promises = batch.map(async (task) => {
      try {
        const koContent = await fs.readFile(task.koFile, "utf-8");
        const instruction = getTranslationInstruction(task.lang);
        const prompt = buildTranslatePrompt(instruction, koContent, task.lang);

        const result = await rewriteWithCLI(prompt, MODEL_FLASH);

        if (result.length < 50 || !result.startsWith("---")) {
          throw new Error(
            "AI returned malformed markdown (missing frontmatter).",
          );
        }

        await fs.writeFile(task.targetFile, result, "utf-8");
        return { file: task.targetFile, success: true };
      } catch (e: unknown) {
        return {
          file: task.targetFile,
          success: false,
          error: (e as Error).message,
        };
      }
    });

    const results = await Promise.allSettled(promises);

    for (const result of results) {
      if (result.status === "fulfilled") {
        const val = result.value;
        if (val.success) {
          console.log("   ✅ " + val.file);
          completed.push(val.file);
        } else {
          console.error("   ❌ " + val.file + ": " + val.error);
          errors.push({ file: val.file, error: val.error || "unknown" });
        }
      }
    }
  }

  console.log(
    "\n📊 Phase 2 Complete: " +
      completed.length +
      " success, " +
      errors.length +
      " errors.",
  );
}

// --- Legacy Mode (backward compat) ---
async function legacyRewrite(targetDirs?: string[]) {
  console.log("🤖 Starting Legacy Rewriter (single-phase)...");

  const qualityModel = await getDoc("QUALITY_MODEL.md");
  const postTemplate = await getDoc("POST_TEMPLATE.md");
  const systemInstruction = getRestructuringInstruction();
  const queue = await initLegacyQueue(targetDirs);

  if (queue.pending.length === 0) {
    console.log("No pending files to rewrite. Exiting.");
    return;
  }

  console.log(
    "Queue Status: " +
      queue.pending.length +
      " pending, " +
      queue.completed.length +
      " completed.",
  );

  while (queue.pending.length > 0) {
    const batch = queue.pending.splice(0, BATCH_SIZE_PHASE1);
    console.log("\n⏳ Rewriting Batch of " + batch.length + " files...");

    const promises = batch.map(async (file: string) => {
      try {
        const content = await fs.readFile(file, "utf-8");
        const prompt = buildRestructurePrompt(
          systemInstruction,
          qualityModel,
          postTemplate,
          path.basename(file),
          content,
        );

        const result = await rewriteWithCLI(prompt, MODEL_PRO);

        if (result.length < 50 || !result.startsWith("---")) {
          throw new Error(
            "AI returned malformed markdown (missing frontmatter).",
          );
        }
        await fs.writeFile(file, result, "utf-8");
        return { file, success: true };
      } catch (e: unknown) {
        return { file, success: false, error: (e as Error).message };
      }
    });

    const results = await Promise.allSettled(promises);

    for (const result of results) {
      if (result.status === "fulfilled") {
        const val = result.value;
        if (val.success) {
          console.log("   ✅ Rewrite successful: " + val.file);
          queue.completed.push(val.file);
        } else {
          console.error("   ❌ Error on " + val.file + ": " + val.error);
          queue.errors.push({ file: val.file, error: val.error });
        }
      }
    }

    await saveQueue(queue);
  }

  console.log("\n🎉 Queue completely exhausted!");
}

async function initLegacyQueue(targetDirs?: string[]) {
  let queue = await loadQueue();
  if (
    (targetDirs && targetDirs.length > 0) ||
    !queue.pending ||
    queue.pending.length === 0
  ) {
    console.log("📦 Initializing rewrite queue...");

    let allFiles: string[] = [];

    if (targetDirs && targetDirs.length > 0) {
      for (const dir of targetDirs) {
        const relDir = path.relative(process.cwd(), dir);
        const files = await glob(relDir + "/**/*.md");
        allFiles.push(...files);
      }
    } else {
      allFiles = await glob("src/content/posts/**/**/**/*.md");
    }

    allFiles = [...new Set(allFiles)];
    queue = { completed: [], pending: allFiles, errors: [] };
    await saveQueue(queue);
    console.log("Initialized queue with " + allFiles.length + " files.");
  }
  return queue;
}

// --- Main ---
async function main() {
  const args = process.argv.slice(2);

  const phase1Only = args.includes("--phase1");
  const phase2Only = args.includes("--phase2");
  const legacyMode = args.includes("--legacy");
  const targetDirs = args.filter((a) => !a.startsWith("--"));

  console.log("==========================================");
  console.log("🚀 Hello Prompt QA Rewriter v2.0");
  console.log("   2-Phase Pipeline Edition");
  console.log("==========================================");

  if (legacyMode) {
    await legacyRewrite(targetDirs.length > 0 ? targetDirs : undefined);
    return;
  }

  if (phase2Only) {
    await phase2Translate([], targetDirs.length > 0 ? targetDirs : undefined);
    return;
  }

  // Phase 1
  const completedKoFiles = await phase1Restructure(
    targetDirs.length > 0 ? targetDirs : undefined,
  );

  // Phase 2 (skip if --phase1 flag)
  if (!phase1Only) {
    await phase2Translate(completedKoFiles);
  }

  console.log("\n🎉 ALL PHASES COMPLETE!");
}

if (import.meta.url === "file://" + process.argv[1]) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

export { rewriteWithCLI, phase1Restructure, phase2Translate };
