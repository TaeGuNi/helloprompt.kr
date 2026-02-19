import { glob } from "glob";
import fs from "node:fs/promises";

async function fixBlockquotes() {
  // Use glob to find all markdown post files
  const files = await glob("src/pages/**/posts/*.md");
  let count = 0;

  for (const file of files) {
    const content = await fs.readFile(file, "utf-8");
    const lines = content.split("\n");
    let modified = false;

    const newLines = lines.map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith(">")) {
        // Check for specific keywords to convert from blockquote to list
        if (
          trimmed.includes("추천 대상") ||
          trimmed.includes("Target") ||
          trimmed.includes("소요 시간") ||
          trimmed.includes("Time") ||
          trimmed.includes("추천 모델") ||
          trimmed.includes("Model") ||
          trimmed.includes("난이도") ||
          trimmed.includes("Difficulty") ||
          trimmed.includes("효과성") ||
          trimmed.includes("Effectiveness") ||
          trimmed.includes("활용도") ||
          trimmed.includes("Utility")
        ) {
          modified = true;
          // Replace '> ' or '>' with '- '
          return line.replace(/^>\s*/, "- ");
        }
      }
      return line;
    });

    if (modified) {
      await fs.writeFile(file, newLines.join("\n"), "utf-8");
      console.log(`✅ Fixed: ${file}`);
      count++;
    }
  }

  console.log(`\n🎉 Completed! Fixed ${count} files.`);
}

fixBlockquotes().catch(console.error);
