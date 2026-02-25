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

// Accept files directly from lint-staged arguments, otherwise default to scanning the whole folder
let files = process.argv.slice(2);
if (files.length === 0) {
  const targetDir = path.resolve(process.cwd(), "src/content/posts/2026/02");
  files = findMarkdownFiles(targetDir);
}

let fixedFilesCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf-8");
  const ogContent = content;

  // Pattern to match all HTML comments globally
  const commentRegex = /<!--[\s\S]*?-->\n?/g;

  content = content.replace(commentRegex, "");

  if (content !== ogContent) {
    fs.writeFileSync(file, content, "utf-8");
    fixedFilesCount++;
    console.log(`✅ [Stripped Comment] ${path.relative(process.cwd(), file)}`);
  }
}

console.log(
  `\n🎉 Completely removed all HTML comments from ${fixedFilesCount} markdown files.`,
);
