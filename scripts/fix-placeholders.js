import fs from "fs";
import { glob } from "glob";

// Target directory: src/pages/posts/ (Korean posts)
const FILE_PATTERN = "src/pages/posts/*.md";

const REPLACEMENTS = [
  {
    // Old: 이 프롬프트는 [핵심 포인트]에 중점을 두었습니다.
    // New: 이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
    regex: /이 프롬프트는 \[핵심 포인트\]에 중점을 두었습니다\./g,
    replacement:
      "이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.",
  },
  {
    // Old: 결과가 만족스럽지 않다면 [변수]를 조정해보세요.
    // New: 결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.
    regex: /결과가 만족스럽지 않다면 \[변수\]를 조정해보세요\./g,
    replacement:
      "결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.",
  },
];

// glob returns a Promise in newer versions or can be used with a callback if imported differently.
// Using async/await pattern for clarity with the installed version.
async function run() {
  try {
    const files = await glob(FILE_PATTERN);
    let modifiedCount = 0;

    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;

        REPLACEMENTS.forEach(({ regex, replacement }) => {
          content = content.replace(regex, replacement);
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

    console.log(`\n🎉 Process complete! Modified ${modifiedCount} files.`);
  } catch (err) {
    console.error("Error finding files:", err);
  }
}

run();
