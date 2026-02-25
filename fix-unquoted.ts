import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function findFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat?.isDirectory()) {
      results = results.concat(findFiles(filePath));
    } else if (filePath.endsWith(".md")) {
      results.push(filePath);
    }
  }
  return results;
}

const postsDir = path.join(__dirname, "src", "content", "posts");
const files = findFiles(postsDir);
let count = 0;

for (const f of files) {
  let content = fs.readFileSync(f, "utf8");
  let changed = false;

  // Fix unquoted descriptions
  content = content.replace(
    /^description:\s*([^"'\n].*)$/gm,
    (_match, desc) => {
      changed = true;
      const safeDesc = desc.replace(/"/g, '\\"');
      return `description: "${safeDesc}"`;
    },
  );

  // Fix unquoted titles
  content = content.replace(/^title:\s*([^"'\n].*)$/gm, (_match, title) => {
    changed = true;
    const safeTitle = title.replace(/"/g, '\\"');
    return `title: "${safeTitle}"`;
  });

  if (changed) {
    fs.writeFileSync(f, content, "utf8");
    count++;
    console.log(`Fixed quotes in: ${f}`);
  }
}
console.log(`Fixed unquoted titles/descriptions in ${count} files`);
