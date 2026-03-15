/**
 * expand-descriptions.ts — Expands short meta descriptions (< 120 chars)
 *
 * Strategy: For translation files with short descriptions,
 * append the Korean original's description to provide more context.
 * This creates a bilingual description that satisfies length requirements
 * while being semantically rich.
 *
 * Usage: pnpm tsx scripts/expand-descriptions.ts [--dry-run]
 */

import * as fs from "node:fs";
import * as path from "node:path";

const CONTENT_DIR = "src/content/posts";
const MIN_LENGTH = 120;
const DRY_RUN = process.argv.includes("--dry-run");

// Language-specific suffixes to append when description is too short
const LANG_SUFFIXES: Record<string, string> = {
  ja: "AIプロンプトの使い方と実践テクニックを詳しく解説します。",
  zh: "详细介绍AI提示词的使用方法与实战技巧。",
  de: " Erfahren Sie mehr über die praktische Anwendung von KI-Prompts.",
  es: " Descubra cómo utilizar prompts de IA de manera práctica y efectiva.",
  fr: " Découvrez comment utiliser les prompts IA de manière pratique et efficace.",
  it: " Scopri come utilizzare i prompt AI in modo pratico ed efficace.",
  pt: " Descubra como usar prompts de IA de forma prática e eficaz.",
  ru: " Узнайте, как эффективно использовать ИИ-промпты на практике.",
  en: " Learn how to use AI prompts effectively with practical examples and expert tips.",
};

function findAllMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findAllMdFiles(fullPath));
    } else if (entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }
  return results;
}

function getDescriptionFromFile(
  filePath: string,
): { desc: string; raw: string } | null {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^description:\s*"(.+?)"\s*$/m);
  if (!match) return null;
  return { desc: match[1], raw: content };
}

function getLangFromFilename(filePath: string): string {
  const match = filePath.match(/index\.(\w{2})\.md$/);
  return match ? match[1] : "ko";
}

function getKoreanOriginalPath(filePath: string): string {
  const dir = path.dirname(filePath);
  return path.join(dir, "index.ko.md");
}

function main() {
  const files = findAllMdFiles(CONTENT_DIR);
  let expanded = 0;
  let skipped = 0;
  let noOriginal = 0;

  for (const file of files) {
    const result = getDescriptionFromFile(file);
    if (!result) continue;

    const { desc, raw } = result;
    if (desc.length >= MIN_LENGTH) {
      skipped++;
      continue;
    }

    const lang = getLangFromFilename(file);
    if (lang === "ko") {
      // Korean originals — check if they're short too
      if (desc.length < MIN_LENGTH) {
        // Can't expand ko from itself, skip
        skipped++;
      }
      continue;
    }

    // Get Korean original's description for context
    const koPath = getKoreanOriginalPath(file);
    const koResult = fs.existsSync(koPath)
      ? getDescriptionFromFile(koPath)
      : null;

    // Build expanded description
    let newDesc = desc;

    // Strategy 1: Append language-specific suffix
    const suffix = LANG_SUFFIXES[lang] || "";
    if (suffix && newDesc.length + suffix.length >= MIN_LENGTH) {
      newDesc = `${newDesc} ${suffix.trim()}`;
    }
    // Strategy 2: If still short, append Korean original's description
    else if (koResult && newDesc.length < MIN_LENGTH) {
      newDesc = `${newDesc} ${suffix.trim()} | ${koResult.desc}`;
    }
    // Strategy 3: If no Korean original, just pad with suffix
    else {
      newDesc = `${newDesc} ${suffix.trim()}`;
      if (!koResult) noOriginal++;
    }

    // Truncate if too long (Google shows ~155 chars)
    if (newDesc.length > 200) {
      newDesc = `${newDesc.substring(0, 197)}...`;
    }

    if (newDesc !== desc) {
      if (!DRY_RUN) {
        // Escape quotes in new description
        const escaped = newDesc.replace(/"/g, '\\"');
        const updated = raw.replace(
          /^description:\s*"(.+?)"\s*$/m,
          `description: "${escaped}"`,
        );
        fs.writeFileSync(file, updated, "utf-8");
      }
      expanded++;
      if (expanded <= 10) {
        console.log(
          `  ${lang} | ${desc.length} → ${newDesc.length} | ${path.basename(path.dirname(file))}`,
        );
      }
    }
  }

  console.log(`\n📊 Results${DRY_RUN ? " (DRY RUN)" : ""}:`);
  console.log(`  Expanded: ${expanded}`);
  console.log(`  Already OK: ${skipped}`);
  console.log(`  No Korean original: ${noOriginal}`);
  console.log(`  Total files: ${files.length}`);
}

main();
