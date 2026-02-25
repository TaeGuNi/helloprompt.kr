import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

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

const files = findFiles("src/content/posts");
const failed: string[] = [];
for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (match) {
    try {
      yaml.load(match[1]);
    } catch (_e: unknown) {
      failed.push(f);
      console.log(`Failed: ${f}`);
    }
  }
}
console.log(`Total failed YAML files: ${failed.length}`);

// For each failed file, let's try a naive line joining if line starts with space or text but no colon
for (const f of failed) {
  const content = fs.readFileSync(f, "utf8");
  const output = content.replace(/^---\n([\s\S]*?)\n---/, (_match, fm) => {
    // replace newlines followed by characters that don't have colon before them
    // Actually, a simpler naive fix for this specific AI generation bug:
    // If a line doesn't have a colon, and the previous line has `description: "`, join them.
    const lines = fm.split("\n");
    for (let i = 1; i < lines.length; i++) {
      if (
        !lines[i].includes(":") &&
        lines[i].trim().length > 0 &&
        !lines[i].startsWith("-")
      ) {
        // join with previous
        lines[i - 1] = `${lines[i - 1].replace(/"$/, "")} ${lines[i].trim()}"`;
        lines[i] = ""; // remove
      }
    }
    return `---\n${lines.filter((l: string) => l !== "").join("\n")}\n---`;
  });

  // verify if it fixed it
  const matchAfter = output.match(/^---\n([\s\S]*?)\n---/);
  try {
    if (matchAfter) yaml.load(matchAfter[1]);
    fs.writeFileSync(f, output, "utf8");
    console.log(`Autofixed: ${f}`);
  } catch (_e) {
    console.log(`Could not autofix: ${f}`);
  }
}
