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
  // Match lines like `image: "https://...` that DO NOT have a trailing quote
  if (content.match(/^image:\s*"https?:\/\/[^"\n\r]+$/m)) {
    content = content.replace(/^(image:\s*"https?:\/\/[^"\n\r]+)$/m, '$1"');
    fs.writeFileSync(f, content, "utf8");
    count++;
    console.log(`Fixed: ${f}`);
  }
}
console.log(`Fixed quotes in ${count} files`);
