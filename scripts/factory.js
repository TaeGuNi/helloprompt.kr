import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// --- Configuration ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const TEMPLATE_PATH = path.join(ROOT_DIR, "docs", "POST_TEMPLATE.md");
const KOREAN_POSTS_DIR = path.join(ROOT_DIR, "src", "pages", "posts");
const TARGET_LANGS = ["en", "ja", "zh", "es", "fr", "de", "it", "pt", "ru"];

// --- Helpers ---
const getToday = () => new Date().toISOString().split("T")[0];

const log = (msg, type = "info") => {
  const icons = { info: "ℹ️", success: "✅", error: "❌", warn: "⚠️" };
  console.log(`${icons[type] || ""} ${msg}`);
};

// --- Actions ---

/**
 * Initialize a new post from template
 */
function initPost(slug) {
  if (!slug) {
    log("Usage: pnpm run factory init <slug>", "error");
    process.exit(1);
  }

  const targetPath = path.join(KOREAN_POSTS_DIR, `${slug}.md`);

  if (fs.existsSync(targetPath)) {
    log(`File already exists: ${targetPath}`, "error");
    process.exit(1);
  }

  try {
    let content = fs.readFileSync(TEMPLATE_PATH, "utf-8");
    const today = getToday();

    // Replace Frontmatter placeholders
    content = content
      .replace(/date: ".*"/, `date: "${today}"`)
      .replace(/updatedDate: ".*"/, `updatedDate: "${today}"`)
      .replace(/author: ".*"/, `author: "ZZabbis"`); // Fixed author

    fs.writeFileSync(targetPath, content);
    log(`Draft created: ${targetPath}`, "success");
  } catch (e) {
    log(`Failed to create draft: ${e.message}`, "error");
  }
}

/**
 * Sync (Copy) Korean post to all language folders
 */
function syncPost(slug) {
  if (!slug) {
    log("Usage: pnpm run factory sync <slug>", "error");
    process.exit(1);
  }

  const sourcePath = path.join(KOREAN_POSTS_DIR, `${slug}.md`);

  if (!fs.existsSync(sourcePath)) {
    log(`Source file not found: ${sourcePath}`, "error");
    process.exit(1);
  }

  const content = fs.readFileSync(sourcePath, "utf-8");

  TARGET_LANGS.forEach((lang) => {
    const langDir = path.join(ROOT_DIR, "src", "pages", lang, "posts");
    const destPath = path.join(langDir, `${slug}.md`);

    // Ensure directory exists
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    // Check if destination exists
    if (fs.existsSync(destPath)) {
      log(`[${lang}] Skipped (Already exists): ${destPath}`, "warn");
    } else {
      fs.writeFileSync(destPath, content);
      log(`[${lang}] Synced: ${destPath}`, "success");
    }
  });
}

// --- Main CLI ---
const args = process.argv.slice(2);
const action = args[0];
const slug = args[1];

switch (action) {
  case "init":
    initPost(slug);
    break;
  case "sync":
    syncPost(slug);
    break;
  default:
    log("Unknown action. Available: init, sync", "error");
    console.log("\nUsage:");
    console.log(
      "  pnpm run factory init <slug>   # Create new draft from template",
    );
    console.log(
      "  pnpm run factory sync <slug>   # Copy draft to 9 language folders",
    );
    process.exit(1);
}
