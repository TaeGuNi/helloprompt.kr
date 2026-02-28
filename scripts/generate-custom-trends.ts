import { exec, execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";

const execAsync = util.promisify(exec);
const execFileAsync = util.promisify(execFile);

// Target languages
const TARGET_LANGS = ["en", "de", "es", "fr", "it", "ja", "pt", "ru", "zh"];

async function runCmd(cmd: string) {
  console.log(`\n> ${cmd}`);
  const { stdout, stderr } = await execAsync(cmd);
  if (stderr && !stderr.includes("Warning") && !stderr.includes("Switched")) {
    console.error(`stderr: ${stderr}`);
  }
  return stdout.trim();
}

async function getDoc(fileName: string) {
  return await fs.readFile(
    path.resolve(process.cwd(), "docs", fileName),
    "utf-8"
  );
}

// Global throttle parameters mapping to Gemini Pro specs
const API_DELAY_MS = 15000;

async function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function callGemini(prompt: string): Promise<string> {
  // Enforce a strict sequential throttle window before calling Gemini.
  await delay(API_DELAY_MS);
  const { stdout } = await execFileAsync("gemini", [
    "--yolo",
    "-m",
    "gemini-3.1-pro-preview",
    "-p",
    prompt,
  ]);

  let text = stdout;
  const match = text.match(/---\n[\s\S]+/);
  if (match) {
    text = match[0];
  }

  text = `${text
    .replace(/^```markdown\n?/i, "")
    .replace(/```$/i, "")
    .trim()}\n`;
  return text;
}

async function translatePost(koContent: string, langCode: string) {
  console.log(`🌐 Translating to ${langCode.toUpperCase()}...`);
  const prompt = `
You are an elite multilingual copywriter for 'Hello Prompt'. 
Translate the following Korean Markdown blog post into ${langCode.toUpperCase()}.

CRITICAL RULES:
1. Preserve EXACTLY the YAML Frontmatter structure, but translate the 'title' and 'description'.
2. Keep the 'date' and 'updatedDate' the exact same as the original.
3. The UI structure MUST strictly follow the <POST_TEMPLATE> format. Keep all English HTML comments exactly the same!
4. LOCALIZATION: Do not machine translate. Sound like a native professional.
5. DO NOT add any extra frontmatter fields that were not in the original.
6. The "Cheat Code Prompt" or any blockquotes inside the code block SHOULD BE TRANSLATED so that international users can copy-paste it in their own language.
7. Output ONLY the raw Markdown file starting with '---'.

<KOREAN_POST>
${koContent}
</KOREAN_POST>
`;

  return await callGemini(prompt);
}

async function generateKoreanPost(
  topicTitle: string,
  topicDesc: string,
  template: string,
  quality: string,
): Promise<{ slug: string; content: string }> {
  console.log(`🤖 Generating base Korean post for topic: ${topicTitle}`);
  const prompt = `
You are an elite copywriter and SEO expert for 'Hello Prompt', a blog for AI beginners and practical users.
Your task is to write a highly pragmatic, multilingual-ready blog post (in Korean) about the topic: "${topicTitle}".
Description of the topic: "${topicDesc}"

CRITICAL RULES:
1. Adhere strictly to the <POST_TEMPLATE> format. Include all YAML frontmatter.
2. The content MUST score highly according to the <QUALITY_MODEL>. Be pragmatic! Provide an actual, working AI prompt related to this topic that users can copy and paste into ChatGPT or Claude. Target audience is junior office workers, marketers, or developers.
3. In the YAML Frontmatter:
   - title: Catchy, clickable Korean title. Include an emoji!
   - date: ${new Date().toISOString().split("T")[0]}
   - updatedDate: ${new Date().toISOString().split("T")[0]}
   - description: 1-line catchy SEO description reflecting the pragmatic tone.
   - tags: ['prompt-engineering', 'ai-agent', 'cheat-sheet', '${topicTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 15)}']
4. VERY IMPORTANT: You must also output a special 'slug: "your-english-kebab-case-slug"' field in the frontmatter. We need this for the folder name. The slug should be English.
5. Do NOT use markdown Tables. Use emoji bullet lists instead (<QUALITY_MODEL> rule).
6. Basic/Pro sections MUST use blockquotes (>). DO NOT use blockquotes (>) anywhere else in the document!
7. DO NOT generate an 'image' property. Only strictly use the fields provided in <POST_TEMPLATE>!
8. Ensure the headers '## 💡 작성자 코멘트 (Insight)' and '## 🙋 자주 묻는 질문 (FAQ)' are exactly written as requested. Weave a pragmatic, slightly spartan persona heavily into the Insight section.

<POST_TEMPLATE>
${template}
</POST_TEMPLATE>

<QUALITY_MODEL>
${quality}
</QUALITY_MODEL>

Output ONLY the raw markdown content. No explanatory text.
`;

  const content = await callGemini(prompt);

  const slugMatch = content.match(/slug:\s*["']?([a-z0-9-]+)["']?/i);
  const slug = slugMatch
    ? slugMatch[1]
    : topicTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").substring(0, 20);

  const cleanContent = content.replace(/^slug:.*$/m, "").replace(/\n\n/g, "\n");

  return { slug, content: cleanContent };
}

export const CUSTOM_TOPICS = [
  { title: "Business Email", desc: "까다로운 고객사 메일, 영문 메일, 정중한 거절 메일 등 작성 자동화" },
  { title: "Meeting Minutes", desc: "난잡한 음성 텍스트를 깔끔한 구조로 변환하는 회의록 요약 및 액션 아이템 추출" },
  { title: "Excel Formula & VBA", desc: "복잡한 수식과 단축키, 매크로 코드를 AI로 자동 생성하는 도우미" },
  { title: "SEO Blog Post Writer", desc: "마케터를 위한 구글 노출 최적화 블로그 글쓰기 가이드" },
  { title: "Competitor Analysis", desc: "기획자를 위한 산업 트렌드 및 SWOT 분석 시장 조사" },
  { title: "Resume/Cover Letter", desc: "구직자 및 이직자를 위한 JD 기반 맞춤형 자소서 및 채용 공고 분석" },
  { title: "Social Media Planner", desc: "인스타그램, 틱톡 운영자를 위한 한 달 치 SNS 콘텐츠 캘린더 자동화" },
  { title: "PPT Outline & Script", desc: "발표 준비 시간을 줄여주는 슬라이드별 목차 뼈대 및 스크립트 기획" },
  { title: "Localization Translation", desc: "어색한 직역을 피하고 뉘앙스를 살린 현지인처럼 자연스러운 다국어 번역" },
  { title: "Code Review", desc: "초보 개발자를 위한 에러 원인 분석 및 리팩토링 제안 코드 리뷰" }
];

async function main() {
  try {
    console.log("🚀 Setting up Git workflow...");
    await runCmd("git checkout develop");
    await runCmd("git pull origin develop");

    const batchId = Date.now();
    const branchName = `feat/custom-trends-batch-${batchId}`;
    await runCmd(`git checkout -b ${branchName}`);

    const template = await getDoc("POST_TEMPLATE.md");
    const quality = await getDoc("QUALITY_MODEL.md");

    const { auditFile } = await import("./qa/audit.js");
    const { rewriteWithLocalCLI } = await import("./qa/ai-rewriter.js");

    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");

    let totalCreated = 30;

    for (const topic of CUSTOM_TOPICS.slice(3)) {
      const slug = topic.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").substring(0, 20);
      const postDir = path.resolve(
        process.cwd(),
        "src",
        "content",
        "posts",
        `${year}`,
        month,
        slug,
      );

      try {
        const stats = await fs.stat(postDir);
        if (stats.isDirectory()) {
          console.log(`⏩ Directory already exists, skipping topic: ${topic.title}`);
          totalCreated += 10;
          continue;
        }
      } catch (err) {
        // Directory doesn't exist, proceed
      }

      console.log(`\n==========================================`);
      console.log(`🚀 Processing Topic: ${topic.title}`);
      console.log(`==========================================\n`);

      const generated = await generateKoreanPost(
        topic.title,
        topic.desc,
        template,
        quality,
      );
      // overriding slug
      let koContent = generated.content;

      console.log(`📁 Creating directory: ${postDir}`);
      await fs.mkdir(postDir, { recursive: true });

      const koFilePath = path.join(postDir, "index.ko.md");
      await fs.writeFile(koFilePath, koContent, "utf-8");

      console.log(`\n🔍 Auditing generated Korean post...`);
      const auditResult = await auditFile(koFilePath);

      if (
        !auditResult.passed ||
        auditResult.issues.some((i) => i.severity === "error")
      ) {
        console.error("❌ QA Failed! Tripping auto-rewriter...");
        try {
          const rewrittenContent = await rewriteWithLocalCLI(
            koContent,
            quality,
            template,
            `index.ko.md`,
          );
          koContent = rewrittenContent;
          await fs.writeFile(koFilePath, koContent, "utf-8");
        } catch (_e: unknown) {
          console.error(`❌ Rewrite failed. Skipping translations.`);
          continue;
        }
      }

      const cleanSourceForTranslation = koContent.replace(
        /<!--[\\s\\S]*?-->/g,
        "",
      );

      console.log(`🚀 Starting strictly sequential 9-language translations...`);
      for (const lang of TARGET_LANGS) {
        const translated = await translatePost(cleanSourceForTranslation, lang);
        await fs.writeFile(
          path.join(postDir, `index.${lang}.md`),
          translated,
          "utf-8",
        );
      }

      console.log(`✅ All translations complete for ${slug}.`);
      totalCreated += 10;
      console.log(`\n📈 Post count: ${totalCreated} so far.`);
    }

    await runCmd("git add src/content/posts/*");
    await runCmd(
      `git commit -m "feat(content): generate 10 custom trending AI prompt posts"`,
    );
    await runCmd(`git push origin ${branchName}`);

    console.log("🚀 Creating Pull Request...");
    try {
      await runCmd(
        `gh pr create --title "feat(content): 10 Real-World AI Prompts Collection" --body "Automated sequentially generated PR converting 10 crucial real-world tasks into high-quality multidimensional prompt guides." --base develop`,
      );
    } catch (_e) {
      console.log("PR creation failed or exists.");
    }

    console.log("⏳ Waiting for GH CI...");
    let isSuccess = false;
    for (let i = 0; i < 30; i++) {
      const statusStr = await runCmd(
        `gh pr status --json statusCheckRollup -q ".currentBranch.statusCheckRollup[0].state" || echo "UNKNOWN"`,
      );
      if (statusStr.includes("SUCCESS")) {
        isSuccess = true;
        break;
      } else if (statusStr.includes("FAILURE")) {
        process.exit(1);
      }
      await delay(10000);
    }

    if (isSuccess) {
      await runCmd(`gh pr merge --squash --delete-branch`);
      console.log("🎉 SUCCESS!");
    } else {
      console.log("⚠️ TIMEOUT");
    }
  } catch (e) {
    console.error("Pipeline script failed:", e);
    process.exit(1);
  }
}

main();
