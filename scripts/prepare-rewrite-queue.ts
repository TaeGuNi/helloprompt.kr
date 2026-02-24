import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";

const TARGET_LANGS = [
  "de",
  "en",
  "es",
  "fr",
  "it",
  "ja",
  "ko",
  "pt",
  "ru",
  "zh",
];
const QUEUE_FILE = path.resolve(process.cwd(), "rewrite-queue.json");

async function main() {
  const dirs = await glob("src/content/posts/2026/02/*/");
  const missingFilesToRewrite: string[] = [];

  for (const dir of dirs) {
    const defaultIndex = path.join(dir, "index.md");

    // Check what currently exists
    const existingFiles = await glob(path.join(dir, "index*.md"));

    // Attempt mapping
    const existingLangs = existingFiles
      .map((f: string) => {
        const match = f.match(/index\.([a-z]{2})\.md/);
        return match ? match[1] : null;
      })
      .filter(Boolean) as string[];

    if (existingFiles.includes(defaultIndex)) {
      if (!existingLangs.includes("en")) {
        existingLangs.push("en");
      }
    }

    if (existingLangs.length >= 10) continue;

    // Find the source file: Try ko first, then en, then plain index
    let sourceFile = path.join(dir, "index.ko.md");
    if (!existingFiles.includes(sourceFile)) {
      sourceFile = path.join(dir, "index.en.md");
      if (!existingFiles.includes(sourceFile)) {
        sourceFile = path.join(dir, "index.md");
      }
    }

    // If source file doesn't exist, skip
    if (!existingFiles.includes(sourceFile)) continue;

    for (const lang of TARGET_LANGS) {
      if (!existingLangs.includes(lang)) {
        const targetFile = path.join(dir, `index.${lang}.md`);
        await fs.copyFile(sourceFile, targetFile);
        missingFilesToRewrite.push(targetFile);
      }
    }
  }

  const queue = {
    completed: [],
    pending: missingFilesToRewrite,
    errors: [],
  };

  await fs.writeFile(QUEUE_FILE, JSON.stringify(queue, null, 2), "utf-8");
  console.log(
    `Prepared queue with ${missingFilesToRewrite.length} missing translation files.`,
  );
}

main().catch(console.error);
