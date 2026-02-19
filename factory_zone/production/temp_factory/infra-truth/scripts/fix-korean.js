import fs from "fs";
import { glob } from "glob";

async function fixKorean() {
  const files = await glob("src/pages/**/*.md");
  let count = 0;

  for (const file of files) {
    const isKorean =
      !file.includes("/en/") &&
      !file.includes("/ja/") &&
      !file.includes("/zh/") &&
      !file.includes("/es/") &&
      !file.includes("/fr/") &&
      !file.includes("/de/") &&
      !file.includes("/it/") &&
      !file.includes("/pt/") &&
      !file.includes("/ru/") &&
      !file.includes("/hi/");

    if (!isKorean) {
      const content = fs.readFileSync(file, "utf-8");
      const parts = content.split("---");
      // parts[0] is empty (before first ---), parts[1] is frontmatter, parts[2] is body (usually)

      if (parts.length >= 3) {
        const body = parts.slice(2).join("---");
        // Check for Korean characters
        const koMatches = body.match(/[가-힣]+/g);

        // Threshold from audit.ts is > 5
        if (koMatches && koMatches.length > 5) {
          console.log(`Fixing Korean text in ${file}`);
          const newBody = `\n\n*Translation Pending*\n\n<!-- Original content removed due to incomplete translation -->\n`;
          const newContent = `---${parts[1]}---${newBody}`;
          fs.writeFileSync(file, newContent);
          count++;
        }
      }
    }
  }
  console.log(`Replaced content in ${count} files.`);
}

fixKorean();
