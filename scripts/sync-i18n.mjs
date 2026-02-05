import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.resolve(__dirname, "../src/pages/posts");
const TARGET_BASE = path.resolve(__dirname, "../src/pages");
const LANGUAGES = ["de", "en", "es", "fr", "it", "ja", "pt", "ru", "zh"];

function processContent(content, lang) {
  // 1. Ensure Layout is absolute
  let newContent = content.replace(
    /layout: .*/,
    "layout: /src/layouts/Layout.astro",
  );

  // 2. Inject or Update 'lang' field in frontmatter
  if (newContent.match(/lang: .*/)) {
    newContent = newContent.replace(/lang: .*/, `lang: ${lang}`);
  } else {
    // Insert lang before the closing --- of frontmatter
    // We assume standard frontmatter format: --- \n ... \n ---
    const secondDashIndex = newContent.indexOf("---", 4);
    if (secondDashIndex !== -1) {
      newContent =
        newContent.slice(0, secondDashIndex) +
        `lang: ${lang}\n` +
        newContent.slice(secondDashIndex);
    }
  }

  return newContent;
}

async function main() {
  console.log(`🚀 Starting Localization Sync...`);

  // 1. Get Source Files
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error("Source directory not found:", SOURCE_DIR);
    return;
  }
  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  console.log(`Found ${files.length} source posts.`);

  let createdCount = 0;

  // 2. Iterate Languages
  for (const lang of LANGUAGES) {
    const langDir = path.join(TARGET_BASE, lang, "posts");

    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    for (const file of files) {
      const targetPath = path.join(langDir, file);

      if (!fs.existsSync(targetPath)) {
        const sourcePath = path.join(SOURCE_DIR, file);
        const content = fs.readFileSync(sourcePath, "utf-8");

        const translatedContent = processContent(content, lang);

        fs.writeFileSync(targetPath, translatedContent);
        createdCount++;
      }
    }
  }

  console.log(
    `✅ Completed! Created ${createdCount} missing translation files.`,
  );
}

main();
