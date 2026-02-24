import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function findFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      results = results.concat(findFiles(filePath));
    } else if (filePath.endsWith(".md")) {
      results.push(filePath);
    }
  }
  return results;
}

const files = findFiles(path.join(__dirname, "src/content/posts"));
let count = 0;

for (const f of files) {
  let content = fs.readFileSync(f, "utf8");
  const regex = /^([a-zA-Z0-9_]+:\s*"https?:\/\/[^"\n\r]+)$/gm;
  if (content.match(regex)) {
    content = content.replace(regex, '$1"');
    fs.writeFileSync(f, content, "utf8");
    count++;
    console.log(`Fixed missing quote on URL in: ${f}`);
  }
}
console.log(`Fixed missing quotes on URLs in ${count} files`);
