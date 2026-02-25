import fs from "fs";
import path from "path";

function findMarkdownFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  for (const item of fs.readdirSync(dir)) {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      findMarkdownFiles(itemPath, fileList);
    } else if (item.endsWith(".md")) {
      fileList.push(itemPath);
    }
  }
  return fileList;
}

const files = findMarkdownFiles(
  path.resolve(process.cwd(), "src/content/posts"),
);

let fixedFilesCount = 0;

for (const file of files) {
  const isStaticPage = [
    "about.md",
    "contact.md",
    "terms.md",
    "privacy.md",
  ].some((f) => file.endsWith(f));

  if (isStaticPage) continue;

  const content = fs.readFileSync(file, "utf-8");
  const lines = content.split("\n");
  let currentHeader = "";
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    const headerMatch = trimmedLine.match(/^#+\s*(.+)$/);

    if (headerMatch) {
      currentHeader = headerMatch[1].toLowerCase();
      continue;
    }

    if (trimmedLine.startsWith(">")) {
      if (trimmedLine.match(/^>\s*[_*]/)) {
        continue;
      }

      const isAllowedSection =
        currentHeader.includes("basic") ||
        currentHeader.includes("pro") ||
        currentHeader.includes("기본") ||
        currentHeader.includes("전문가") ||
        currentHeader.includes("prompt") ||
        currentHeader.includes("프롬프트") ||
        currentHeader.includes("request") ||
        currentHeader.includes("role") ||
        currentHeader.includes("指令") ||
        currentHeader.includes("提示") ||
        currentHeader.includes("プロンプト");

      if (!isAllowedSection && !isStaticPage) {
        // Fix the line: Remove the leading ">" and optional space
        // e.g. "> Some text" -> "Some text"
        lines[i] = line.replace(/^\s*>\s?/, "");
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(file, lines.join("\n"), "utf-8");
    fixedFilesCount++;
    console.log(`✅ [Fixed Blockquote] ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\n🎉 Fixed blockquote misuse in ${fixedFilesCount} files.`);
