import fs from "fs";
import { glob } from "glob";

const FILE_PATTERN = "src/pages/posts/*.md";

async function check() {
  const files = await glob(FILE_PATTERN);
  let emptyPromptAnatomy = 0;
  let emptyBeforeAfter = 0;

  console.log("🔍 Checking for empty sections...");

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");

    // Pattern 1: Header -> whitespace -> ---
    // Pattern 2: Header -> whitespace -> Next Header (Already handled mostly, but checking again)

    // Check '프롬프트 해부'
    if (/## 🧬 프롬프트 해부 \(Why it works\?\)\s*---/.test(content)) {
      emptyPromptAnatomy++;
      if (emptyPromptAnatomy <= 3) console.log(`[Empty Anatomy] ${filePath}`);
    }

    // Check '증명: Before & After'
    if (/## 📊 증명: Before & After\s*---/.test(content)) {
      emptyBeforeAfter++;
      if (emptyBeforeAfter <= 3) console.log(`[Empty BeforeAfter] ${filePath}`);
    }
  }

  console.log(`
📊 Result:`);
  console.log(`- Empty 'Prompt Anatomy' sections: ${emptyPromptAnatomy}`);
  console.log(`- Empty 'Before & After' sections: ${emptyBeforeAfter}`);
}

check();
