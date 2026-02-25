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
  const isKorean =
    file.endsWith(".ko.md") ||
    (file.endsWith(".md") &&
      !file.match(/\.[a-z]{2,3}(?:-[a-zA-Z]{2})?\.md$/i));

  // Only target translations
  if (isKorean) continue;

  let content = fs.readFileSync(file, "utf-8");
  const ogContent = content;

  // Pattern to match markdown/HTML comments, specifically targeting the ones with Korean
  // e.g. <!-- ⚠️ [CRITICAL RULE] 다국어 지원 ... -->
  const commentRegex = /<!--[\s\S]*?-->/g;

  content = content.replace(commentRegex, "");

  if (content !== ogContent) {
    fs.writeFileSync(file, content, "utf-8");
    fixedFilesCount++;
    console.log(
      `✅ [Removed Korean Comment] ${path.relative(process.cwd(), file)}`,
    );
  }
}

console.log(
  `\n🎉 Stripped lingering Korean comments from ${fixedFilesCount} translated files.`,
);
