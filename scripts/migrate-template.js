import fs from "fs";
import { glob } from "glob";

async function migrate() {
  console.log("🚀 Starting migration to new POST_TEMPLATE format...");
  const files = await glob("src/pages/**/*.md");
  let count = 0;

  for (const file of files) {
    if (file.includes("POST_TEMPLATE.md")) continue;

    let content = fs.readFileSync(file, "utf-8");
    let originalContent = content;

    // 1. 메타데이터 변환 (Blockquote > -> List -)
    const lines = content.split("\n");
    const metaKeywords = ["🎯", "⏱️", "🤖"];

    const newLines = lines.map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith(">")) {
        const hasKeyword = metaKeywords.some((k) => line.includes(k));
        const hasTextKeyword =
          /추천 대상|소요 시간|추천 도구|Target Audience|Time Required|Recommended Tool/.test(
            line,
          );

        if (hasKeyword || hasTextKeyword) {
          return line.replace(/^(\s*)>\s*/, "$1- ");
        }
      }
      return line;
    });

    content = newLines.join("\n");

    // 2. Pro Version 코드 블록 제거
    content = content.replace(/^(\s*)>\s*```[a-zA-Z0-9]*\s*$/gm, "");
    content = content.replace(/^(\s*)>\s*```\s*$/gm, "");

    if (content !== originalContent) {
      console.log(`✅ Updated: ${file}`);
      fs.writeFileSync(file, content, "utf-8");
      count++;
    }
  }

  console.log(`\n✨ Migration complete. Modified ${count} files.`);
}

migrate();
