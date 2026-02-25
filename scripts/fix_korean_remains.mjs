import fs from "fs";
import path from "path";

function findMarkdownFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      findMarkdownFiles(itemPath, fileList);
    } else if (item.endsWith(".md")) {
      fileList.push(itemPath);
    }
  }
  return fileList;
}

const targetDir = path.resolve(process.cwd(), "src/content/posts");
const files = findMarkdownFiles(targetDir);

let count = 0;

for (const file of files) {
  // audit.ts와 동일한 로직으로 한국어 원본인지 판별
  const isKorean =
    file.endsWith(".ko.md") ||
    (file.endsWith(".md") &&
      !file.match(/\.[a-z]{2,3}(?:-[a-zA-Z]{2})?\.md$/i));

  // 한국어 원본이면 스킵 (번역본 파일만 치환 대상)
  if (isKorean) continue;

  let content = fs.readFileSync(file, "utf-8");
  const originalContent = content;

  // 번역본에 남아있는 한국어 섹션 헤더를 영어로 교체
  content = content.replace(
    /##\s*💡\s*작성자\s*코멘트\s*\(Insight\)/g,
    "## 💡 Insight",
  );
  content = content.replace(
    /##\s*🙋\s*자주\s*묻는\s*질문\s*\(FAQ\)/g,
    "## 🙋 FAQ",
  );
  content = content.replace(
    /##\s*🧬\s*프롬프트\s*해부\s*\(Why it works\?\)/g,
    "## 🧬 Why it works?",
  );
  content = content.replace(
    /##\s*📊\s*증명:\s*Before\s*&\s*After/g,
    "## 📊 Before & After",
  );
  content = content.replace(/##\s*🎯\s*결론/g, "## 🎯 Conclusion");

  // 괄호 없는 형태(혹시 모를 예외 처리)
  content = content.replace(/##\s*💡\s*작성자\s*코멘트/g, "## 💡 Insight");
  content = content.replace(/##\s*🙋\s*자주\s*묻는\s*질문/g, "## 🙋 FAQ");
  content = content.replace(
    /##\s*🧬\s*프롬프트\s*해부/g,
    "## 🧬 Why it works?",
  );
  content = content.replace(/##\s*📊\s*증명:/g, "## 📊 Before & After");

  if (content !== originalContent) {
    fs.writeFileSync(file, content, "utf-8");
    const relativePath = path.relative(targetDir, file);
    console.log(`✅ [Fixed Headers] ${relativePath}`);
    count++;
  }
}

console.log(
  `\n🎉 Processed ${count} translated files and replaced leftover Korean headers.`,
);
