import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";

const MANAGEMENT_DOC_PATH = path.join(process.cwd(), "docs/MANAGEMENT.md");
const POSTS_GLOB_PATTERN = "src/content/posts/**/*.md";
const GOAL_TARGET = 100;

async function updateManagementDoc() {
  try {
    // 1. Count Posts
    const files = await glob(POSTS_GLOB_PATTERN);
    const currentCount = files.length;
    console.log(`📊 Current Post Count: ${currentCount}`);

    // 2. Read Management Doc
    const content = await fs.readFile(MANAGEMENT_DOC_PATH, "utf-8");

    // 3. Define Status Text
    let statusText = "";
    if (currentCount >= GOAL_TARGET) {
      statusText = `(달성 완료 🎉 - 현재 ${currentCount}개)`;
    } else {
      const percentage = Math.round((currentCount / GOAL_TARGET) * 100);
      statusText = `(진행 중 🔥 - ${currentCount}/${GOAL_TARGET}개, ${percentage}%)`;
    }

    // 4. Update Content using Regex
    // Matches: 1. **콘텐츠:** ... (anything inside parenthesis or end of line)
    const regex = /(1\. \*\*콘텐츠:\*\*.*?)\(.*\)/;

    if (regex.test(content)) {
      const newContent = content.replace(regex, `$1${statusText}`);

      if (content !== newContent) {
        await fs.writeFile(MANAGEMENT_DOC_PATH, newContent, "utf-8");
        console.log(
          `✅ Updated docs/MANAGEMENT.md with count: ${currentCount}`,
        );
      } else {
        console.log("ℹ️ docs/MANAGEMENT.md is already up to date.");
      }
    } else {
      console.warn(
        "⚠️ Could not find the Content Goal line in docs/MANAGEMENT.md",
      );
    }
  } catch (error) {
    console.error("❌ Failed to update management docs:", error);
    process.exit(1);
  }
}

updateManagementDoc();
