import fs from "fs";
import { glob } from "glob";
import path from "path";

const INSIGHT_HEADER = "## 💡 작성자 코멘트 (Insight)";
const INSIGHT_CONTENT = `\n\n${INSIGHT_HEADER}\n\n이 글은 최신 기술 동향을 반영하여 작성되었습니다. 실무에 바로 적용 가능한 핵심 내용을 담고 있으며, 추가적인 질문은 언제든 환영합니다.\n\n`;

const FAQ_HEADER = "## 🙋 자주 묻는 질문 (FAQ)";
const FAQ_CONTENT = `\n\n${FAQ_HEADER}\n\nQ: 이 내용은 최신 정보인가요?\nA: 네, 작성 시점 기준으로 가장 최신 정보를 바탕으로 분석하였습니다.\n\nQ: 추가적인 자료는 어디서 볼 수 있나요?\nA: 본문 내 포함된 링크나 관련 포스트를 참고해주시기 바랍니다.\n\n`;

async function fixInsight() {
  const files = await glob("src/pages/**/*.md");
  let insightCount = 0;
  let faqCount = 0;

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

    if (
      isKorean &&
      !file.includes("about.md") &&
      !file.includes("contact.md")
    ) {
      let content = fs.readFileSync(file, "utf-8");
      let changed = false;

      if (!content.includes(INSIGHT_HEADER)) {
        content += INSIGHT_CONTENT;
        changed = true;
        insightCount++;
      }

      if (!content.includes(FAQ_HEADER)) {
        content += FAQ_CONTENT;
        changed = true;
        faqCount++;
      }

      if (changed) {
        fs.writeFileSync(file, content);
      }
    }
  }
  console.log(`Added Insight to ${insightCount} files.`);
  console.log(`Added FAQ to ${faqCount} files.`);
}

fixInsight();
