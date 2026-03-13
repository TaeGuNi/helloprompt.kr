/**
 * format-before-after.ts
 *
 * Before/After 섹션 포맷 표준화 스크립트
 * - Before 섹션(`### ❌ Before` ~ `### ✅ After`) 내 산문 라인을 `> ` 인용구로 변환
 * - 이미 포맷팅된 라인(>, ```, #, !, 빈 줄)은 건드리지 않음
 * - 수정 사항을 원본 파일에 직접 반영
 *
 * Usage: pnpm tsx scripts/format-before-after.ts [optional-dir-paths...]
 */

import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";

async function formatBeforeAfter(filePath: string): Promise<boolean> {
  const content = await fs.readFile(filePath, "utf-8");
  const lines = content.split("\n");
  let modified = false;
  let inBeforeSection = false;
  let headerJustSeen = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Detect Before section start
    if (/^### ❌ Before/.test(trimmed)) {
      inBeforeSection = true;
      headerJustSeen = true;
      continue;
    }

    // Detect After section start (ends Before section)
    if (/^### ✅ After/.test(trimmed)) {
      inBeforeSection = false;
      continue;
    }

    // Also stop at any other H2/H3 heading or horizontal rule
    if (
      inBeforeSection &&
      (/^#{2,3}\s/.test(trimmed) || /^---\s*$/.test(trimmed))
    ) {
      inBeforeSection = false;
      continue;
    }

    if (!inBeforeSection) continue;

    // Skip blank lines immediately after header
    if (headerJustSeen && trimmed === "") {
      continue;
    }
    headerJustSeen = false;

    // Skip lines that are already formatted
    if (
      trimmed === "" || // blank line
      trimmed.startsWith(">") || // already blockquote
      trimmed.startsWith("```") || // code fence
      trimmed.startsWith("#") || // heading
      trimmed.startsWith("![") || // image
      trimmed.startsWith("<!--") // HTML comment
    ) {
      continue;
    }

    // Wrap plain prose line in blockquote
    lines[i] = `> ${line}`;
    modified = true;
  }

  if (modified) {
    await fs.writeFile(filePath, lines.join("\n"), "utf-8");
  }

  return modified;
}

async function main() {
  const args = process.argv.slice(2);

  let files: string[];
  if (args.length > 0) {
    // Process specific directories
    const patterns = args.map((dir) => path.join(dir, "index.ko.md"));
    files = [];
    for (const pattern of patterns) {
      const resolved = await glob(pattern);
      files.push(...resolved);
    }
  } else {
    // Process all Korean posts
    files = await glob("src/content/posts/**/index.ko.md");
  }

  console.log(`\n📐 Before/After Section Formatter`);
  console.log(`==================================`);
  console.log(`📄 Found ${files.length} Korean posts to process.\n`);

  let modifiedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    try {
      const wasModified = await formatBeforeAfter(file);
      if (wasModified) {
        modifiedCount++;
        console.log(`  ✏️  ${file}`);
      }
    } catch (err) {
      errorCount++;
      console.error(`  ❌ Error processing ${file}:`, err);
    }
  }

  console.log(
    `\n📊 Complete: ${modifiedCount} modified, ${files.length - modifiedCount - errorCount} already clean, ${errorCount} errors.`,
  );
}

main().catch(console.error);
