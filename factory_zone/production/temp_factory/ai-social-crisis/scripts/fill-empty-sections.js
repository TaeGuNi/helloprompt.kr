import fs from "fs";
import { glob } from "glob";

// Target: Korean posts first
const FILE_PATTERN = "src/pages/posts/*.md";

const FILLERS = [
  {
    // Target Header: ## 🧬 프롬프트 해부 (Why it works?)
    // Logic 1: Header -> Whitespace -> Next Header (Already run, but kept for safety)
    // Logic 2: Header -> Whitespace -> --- (Horizontal Rule) <--- NEW TARGET
    headerRegex: /(## 🧬 프롬프트 해부 \(Why it works\?\))(\s*)(?=---|##)/g,
    content: `

이 프롬프트는 명확한 페르소나 설정과 구체적인 지시사항(Task)을 조합하여 AI의 의도를 정확히 파악하도록 설계되었습니다. 단계별 사고(Chain of Thought)를 유도하여 논리적인 답변을 얻을 수 있습니다.

`,
  },
];

async function run() {
  try {
    const files = await glob(FILE_PATTERN);
    let modifiedCount = 0;

    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;

        FILLERS.forEach(({ headerRegex, content: fillerText }) => {
          // Check if the pattern exists before replacing to avoid unnecessary writes if already filled
          if (headerRegex.test(content)) {
            // Replace: Keep Header ($1), Keep Whitespace ($2 if needed, but we overwrite), Insert Content
            // We need to be careful not to double-fill.
            // The regex lookahead (?=---|##) ensures we are at an empty boundary.
            content = content.replace(headerRegex, "$1" + fillerText);
          }
        });

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, "utf8");
          console.log(`Updated: ${filePath}`);
          modifiedCount++;
        }
      } catch (readErr) {
        console.error(`Error processing ${filePath}:`, readErr);
      }
    }

    console.log(
      `\n🎉 Process complete! Filled empty sections in ${modifiedCount} files.`,
    );
  } catch (err) {
    console.error("Error finding files:", err);
  }
}

run();
