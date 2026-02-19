import fs from "fs";
import path from "path";
import { glob } from "glob";

async function run() {
  const files = await glob("src/pages/{en,ja,zh,ru,pt,it,fr,es,de}/posts/*.md");
  let fixedCount = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");

    // Check if file contains Korean characters in the body (after frontmatter)
    const parts = content.split("---");
    if (parts.length < 3) continue; // Invalid frontmatter structure

    const frontmatter = parts[1];
    const body = parts.slice(2).join("---");

    if (/[가-힣]/.test(body)) {
      // Create new content with preserved frontmatter
      const newContent = `---${frontmatter}---

# 🚧 Translation in Progress

This article is currently being translated. Please check back later.
`;
      fs.writeFileSync(file, newContent, "utf-8");
      console.log(`✅ Fixed: ${path.relative(process.cwd(), file)}`);
      fixedCount++;
    }
  }

  console.log(`
🎉 Fixed ${fixedCount} files with failed translations.`);
}

run();
