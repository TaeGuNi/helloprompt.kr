import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

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

const files = findFiles("src/content/posts");
let fixedCount = 0;

for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) continue;

  try {
    yaml.load(match[1]);
  } catch (_e: unknown) {
    let lines = match[1].split("\n");
    const newLines = [...lines];
    let changed = false;

    // Fix description and title
    for (const key of ["description:", "title:"]) {
      let inBlock = false;
      const blockLines: string[] = [];
      let startIdx = -1;
      let endIdx = -1;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith(key)) {
          inBlock = true;
          startIdx = i;
          blockLines.push(lines[i].replace(new RegExp(`^${key}\\s*`), ""));
          endIdx = i;
        } else if (inBlock) {
          // If it's indented, it's a continuation
          if (
            lines[i].startsWith("  ") ||
            lines[i].startsWith("\t") ||
            (!lines[i].includes(":") &&
              lines[i].trim() !== "" &&
              !lines[i].startsWith("-"))
          ) {
            blockLines.push(lines[i].trim());
            endIdx = i;
          } else {
            inBlock = false;
          }
        }
      }

      if (startIdx !== -1 && endIdx > startIdx) {
        let fullStr = blockLines.join(" ");
        // Strip out existing double quotes that might be surrounding the parts
        fullStr = fullStr.replace(/(^"|"$)/g, "").trim();
        // Also remove if there are internal broken quotes like `...more" über...`
        fullStr = fullStr.replace(/" /g, " ").replace(/ "/g, " ");
        // Escape remaining internal quotes safely
        fullStr = fullStr.replace(/"/g, '\\"');

        // Remove old lines and insert the new merged line
        newLines.splice(startIdx, endIdx - startIdx + 1, `${key} "${fullStr}"`);
        changed = true;
        // update `lines` to `newLines` for the next key iteration
        lines = [...newLines];
      }
    }

    if (changed) {
      const newFm = newLines.join("\n");
      try {
        yaml.load(newFm); // Test if it parses now
        const newContent = content.replace(
          /^---\n[\s\S]*?\n---/,
          `---\n${newFm}\n---`,
        );
        fs.writeFileSync(f, newContent, "utf8");
        fixedCount++;
        console.log(`Fixed successfully: ${f}`);
      } catch (_err) {
        console.log(`Still failing after fix: ${f}`);
      }
    } else {
      console.log(`Manual inspection needed: ${f}`);
    }
  }
}

console.log(`Total autofixed: ${fixedCount}`);
