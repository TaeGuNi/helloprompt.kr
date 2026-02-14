import fs from "fs";
import { glob } from "glob";
import path from "path";

async function fixDate() {
  const files = await glob("src/pages/**/*.md");
  let count = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    let newContent = content;

    // 1. Check for pubDate and replace with date if date is missing
    if (content.includes("pubDate:") && !content.includes("date:")) {
      newContent = newContent.replace(
        /pubDate:\s*(.*)/,
        "date: $1\npubDate: $1",
      );
    }
    // 2. If neither date nor pubDate, add date (default to today)
    else if (!content.includes("date:") && !content.includes("pubDate:")) {
      // Try to infer date from filename: YYYY-MM-DD-...
      const filename = path.basename(file);
      const match = filename.match(/^(\d{4}-\d{2}-\d{2})/);
      const dateStr = match ? match[1] : new Date().toISOString().split("T")[0];

      newContent = newContent.replace(/^---\n/, `---\ndate: ${dateStr}\n`);
    }

    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      count++;
    }
  }
  console.log(`Fixed date in ${count} files.`);
}

fixDate();
