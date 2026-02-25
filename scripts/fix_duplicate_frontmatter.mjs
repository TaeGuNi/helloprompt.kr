import fs from "node:fs";
import path from "node:path";

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
let count = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf-8");
  const og = content;

  // 찾을 패턴: "-{2,} 줄바꿈 언아웃: 레이아웃... 줄바꿈 -{2,}"
  // 혹은 단순히 "layout: /src/layouts/Layout.astro" 부터 시작해서 "---" 까지 찾아서 지우기.
  // 첫 번째 정상적인 frontmatter가 아니라 두 번째 나오는 것들을 처리.

  // 꼼수: 파일 전체에서 처음 나타나는 frontmatter를 분리 후, 나머지 본문에서 layout 문자열과 관련된 블록을 싹 다 날린다.

  const parts = content.split(/^---$/m);
  if (parts.length > 3) {
    // parts[0] is empty, parts[1] is frontmatter, parts[2...] is body containing duplicates
    let newBody = parts.slice(2).join("---");

    // 본문 내에 있는 `----` 나 `layout:` 덩어리들을 지우기.
    // 보통 1. **The Memory---- 와 같이 앞 문장에 붙어있기도 함.
    newBody = newBody.replace(
      /-*?\n?layout: \/src\/layouts\/Layout\.astro[\s\S]*?tags:.*?\]\n-*?\n?/g,
      "\n\n",
    );

    const newContent = `${parts[0]}---\n${parts[1]}\n---\n${newBody.trim()}\n`;

    if (newContent !== og) {
      fs.writeFileSync(file, newContent, "utf-8");
      console.log(`✅ [Fixed Duplicate] ${path.relative(process.cwd(), file)}`);
      count++;
    }
  } else {
    // 혹시라도 --- 로 쪼개지지 않고 텍스트 안에 뭍힌 경우 (예: 문장 끝에 ----layout: ...)
    const _inlineMatch = content.match(
      /-*?\n?layout: \/src\/layouts\/Layout\.astro[\s\S]*?tags:.*?\n-*?\n?/g,
    );
    // 근데 이건 첫번째 frontmatter도 날려버릴 수 있음.
    // 첫번째 등장 인덱스 찾아서 제외.
    const firstLayout = content.indexOf("layout: /src/layouts/Layout.astro");
    if (firstLayout > -1) {
      const afterFirst = content.substring(firstLayout + 35);
      if (afterFirst.includes("layout: /src/layouts/Layout.astro")) {
        const fixedAfter = afterFirst.replace(
          /-*?\n?layout: \/src\/layouts\/Layout\.astro[\s\S]*?tags:.*?\n-*?\n?/g,
          "\n\n",
        );
        content = content.substring(0, firstLayout + 35) + fixedAfter;
        if (content !== og) {
          fs.writeFileSync(file, content, "utf-8");
          console.log(
            `✅ [Fixed Inline Duplicate] ${path.relative(process.cwd(), file)}`,
          );
          count++;
        }
      }
    }
  }
}

console.log(`\n🎉 Removed duplicates in ${count} files.`);
