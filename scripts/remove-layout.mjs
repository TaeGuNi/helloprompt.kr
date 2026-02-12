import fs from "fs";
import { glob } from "glob";

async function removeLayoutField() {
  const files = await glob("src/content/posts/**/*.md", { absolute: true });
  console.log(`Found ${files.length} markdown files.`);

  let modifiedCount = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");
    const newLines = [];
    let inFrontmatter = false;
    let hasLayout = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (i === 0 && line.trim() === "---") {
        inFrontmatter = true;
        newLines.push(line);
        continue;
      }
      if (inFrontmatter && line.trim() === "---") {
        inFrontmatter = false;
        newLines.push(line);
        continue;
      }

      if (inFrontmatter) {
        if (line.trim().startsWith("layout:")) {
          hasLayout = true;
          continue; // Skip this line
        }
      }
      newLines.push(line);
    }

    if (hasLayout) {
      fs.writeFileSync(file, newLines.join("\n"));
      modifiedCount++;
    }
  }

  console.log(`Removed 'layout' field from ${modifiedCount} files.`);
}

removeLayoutField();
