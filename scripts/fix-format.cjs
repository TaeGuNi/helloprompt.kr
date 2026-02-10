const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

function fixFormat() {
  const rootDir = path.join(process.cwd(), "src/pages");
  const files = globSync(path.join(rootDir, "**/posts/*.md"));

  console.log(`🛠️ Fixing format for ${files.length} files (Strict Mode)...`);

  let modifiedCount = 0;

  for (const file of files) {
    const originalContent = fs.readFileSync(file, "utf-8");
    const lines = originalContent.split("\n");
    let newLines = [];
    let isModified = false;
    let currentHeader = "";

    const headerRegex = /^#+\s*(.+)$/;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const trimmedLine = line.trim();

      if (line.match(headerRegex)) {
        currentHeader = line.match(headerRegex)[1].toLowerCase();
        newLines.push(line);
        continue;
      }

      if (trimmedLine.startsWith(">")) {
        // [Strict] 오직 Basic/Pro 계열만 허용
        const isAllowedSection =
          currentHeader.includes("basic") ||
          currentHeader.includes("pro") ||
          currentHeader.includes("기본") ||
          currentHeader.includes("전문가");
        // 'Prompt'나 '提示' 등은 제외 (메타 정보 오염 방지)

        if (!isAllowedSection) {
          const cleanLine = line.replace(">", "").trim();
          newLines.push(cleanLine);
          isModified = true;
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }

    if (isModified) {
      fs.writeFileSync(file, newLines.join("\n"), "utf-8");
      modifiedCount++;
    }
  }

  console.log(`\n🎉 Completed! Modified ${modifiedCount} files.`);
}

fixFormat();
