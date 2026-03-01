import { exec } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";
import { glob } from "glob";

const execAsync = util.promisify(exec);

// --- Phase 1: Static Analysis Constants ---
const CHECKS = {
  HAS_TABLE_STYLE: /\|\s*난이도\s*\|\s*효과성\s*\|\s*활용도\s*\|/,
  HAS_INSIGHT: /##\s*💡\s*작성자\s*코멘트/,
  HAS_FAQ: /##\s*🙋\s*자주\s*묻는\s*질문/,
  KOREAN_TEXT: /[가-힣]+/,
  HAS_DATE: /^date:\s*["']?(\d{4}-\d{2}-\d{2}(?:T.*)?)/m,
  HTML_COMMENTS: /<!--[\s\S]*?-->/,
  HAS_IMAGE: /^image:\s*["']?.*["']?/m,
};

// --- Execution Mode ---
const isPreCommit = process.argv.length > 2;
const targetFiles = isPreCommit
  ? process.argv
      .slice(2)
      .filter((f) => f.includes("posts") && f.endsWith(".md"))
  : [];

async function auditFile(filePath: string): Promise<boolean> {
  const fullPath = path.resolve(filePath);
  let content: string;
  try {
    content = await fs.readFile(fullPath, "utf-8");
  } catch (_e) {
    console.error(`❌ [READ_ERROR] Failed to read ${filePath}`);
    return false;
  }

  let passed = true;
  const isKorean =
    filePath.endsWith(".ko.md") ||
    (filePath.endsWith(".md") &&
      !filePath.match(/\.[a-z]{2,3}(?:-[a-zA-Z]{2})?\.md$/i));
  const isStaticPage = [
    "about.md",
    "contact.md",
    "terms.md",
    "privacy.md",
  ].some((f) => filePath.endsWith(f));

  // 1. Comment Strip Check (All files)
  if (CHECKS.HTML_COMMENTS.test(content) && !isStaticPage) {
    console.error(
      `❌ [HTML_COMMENTS] ${filePath} contains unstripped HTML comments (<!-- -->).`,
    );
    passed = false;
  }

  // 2. Korean Check (Only for localized files)
  if (!isKorean && !isStaticPage) {
    const parts = content.split("---");
    const bodyContent =
      parts.length >= 3 ? parts.slice(2).join("---") : content;
    const koMatches =
      bodyContent.match(new RegExp(CHECKS.KOREAN_TEXT, "g")) || [];

    // Auto-fix minor fragments if below threshold
    if (koMatches.length > 0 && koMatches.length <= 5) {
      console.log(
        `🧹 Auto-cleaning ${koMatches.length} Korean fragments in: ${filePath}`,
      );
      const cleaned = content.replace(new RegExp(CHECKS.KOREAN_TEXT, "g"), "");
      await fs.writeFile(fullPath, cleaned, "utf-8");
    } else if (koMatches.length > 5) {
      console.error(
        `❌ [LOC_KOREAN_REMAINS] ${filePath} contains ${koMatches.length} untranslated Korean fragments.`,
      );
      passed = false;
    }
  }

  // 3. Document Quality Check
  if (CHECKS.HAS_TABLE_STYLE.test(content)) {
    console.error(
      `❌ [STYLE_TABLE] ${filePath} uses old table styles. Use emoji lists.`,
    );
    passed = false;
  }

  if (!CHECKS.HAS_DATE.test(content)) {
    console.error(
      `❌ [MISSING_DATE] ${filePath} is missing 'date' in frontmatter.`,
    );
    passed = false;
  }

  if (isKorean && !isStaticPage) {
    if (!CHECKS.HAS_INSIGHT.test(content)) {
      console.error(
        `❌ [MISSING_INSIGHT] ${filePath} is missing Insight section.`,
      );
      passed = false;
    }
    if (!CHECKS.HAS_FAQ.test(content)) {
      console.warn(`⚠️ [MISSING_FAQ] ${filePath} is missing FAQ section.`);
      // FAQ is a warning, doesn't fail build
    }
  }

  // 4. Image Warning (Warning only for now until old posts are updated)
  if (!CHECKS.HAS_IMAGE.test(content) && !isStaticPage) {
    console.warn(
      `⚠️ [MISSING_IMAGE] ${filePath} is missing 'image' in frontmatter.`,
    );
  }

  return passed;
}

// --- Phase 2: Post-Build Analysis ---
async function checkDistArtifacts() {
  console.log(
    "\n🔍 Starting Phase 2: Validating Generated Artifacts (SSR Mode)...",
  );
  let passed = true;

  try {
    await fs.access("dist");
  } catch {
    console.error("❌ 'dist/' directory missing. Build must have failed.");
    return false;
  }

  // With output: "server", only pure static assets go to dist/client,
  // dynamic routes like search.json, sitemap.xml, tags, and rss.xml become Vercel serverless functions.

  // 1. Robots.txt Check (Static file)
  try {
    const robots = await fs.readFile(
      path.join("dist", "client", "robots.txt"),
      "utf-8",
    );
    if (!robots.includes("Sitemap: https://helloprompt.kr/sitemap.xml"))
      throw new Error();
    console.log("✅ Robots.txt points to correct sitemap.");
  } catch {
    console.error(
      "❌ [QA_ROBOTS] dist/client/robots.txt is missing or missing correct sitemap link.",
    );
    passed = false;
  }

  // 2. Verify Vercel Build Output existence
  try {
    await fs.access(".vercel/output");
    console.log("✅ Vercel serverless function outputs successfully bundled.");
  } catch {
    console.error(
      "❌ [QA_VERCEL] .vercel/output directory missing. Server build failed.",
    );
    passed = false;
  }

  if (passed) console.log("✅ Phase 2 Passed.");
  return passed;
}

async function main() {
  console.log("==========================================");
  console.log("🚀 Running Hello Prompt QA Suite");
  console.log("==========================================\n");

  // PHASE 1: Static Markdown Check
  console.log("🔍 Starting Phase 1: Static Markdown Analysis...");
  let filesToCheck: string[] = [];

  if (isPreCommit) {
    filesToCheck = targetFiles;
    if (filesToCheck.length === 0) {
      console.log("ℹ️ No markdown files changed. Skipping QA.");
      process.exit(0);
    }
    console.log(`Checking ${filesToCheck.length} staged file(s)...`);
  } else {
    filesToCheck = await glob("src/content/posts/**/*.md");
    console.log(`Checking all ${filesToCheck.length} markdown file(s)...`);
  }

  let phase1Passed = true;
  for (const file of filesToCheck) {
    const passed = await auditFile(file);
    if (!passed) phase1Passed = false;
  }

  if (!phase1Passed) {
    console.error(
      "\n🚫 Phase 1 Failed. Fix markdown errors before continuing.",
    );
    process.exit(1);
  } else {
    console.log("✅ Phase 1 Passed.");
  }

  // PHASE 2: Production Build Check (Skip if running fast pre-commit check)
  if (isPreCommit) {
    console.log(
      "\n⚡ Pre-commit Hook Detected: Skipping Phase 2 Build Validation to save time.",
    );
    process.exit(0);
  }

  console.log("\n🔨 Compiling Astro Build for Phase 2 check...");
  try {
    const { stdout } = await execAsync("pnpm build");
    if (stdout.includes("error")) {
      console.warn("⚠️ pnpm build produced warnings/errors.");
    }
  } catch (e) {
    console.error("❌ Build Failed horribly!");
    console.error(e);
    process.exit(1);
  }

  const phase2Passed = await checkDistArtifacts();

  if (!phase2Passed) {
    console.error("\n🚫 Phase 2 Failed. Build artifacts failed validation.");
    process.exit(1);
  }

  console.log("\n🎉 ALL QA CHECKS PASSED!");
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
