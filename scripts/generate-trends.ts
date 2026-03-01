import { exec, execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";

const execAsync = util.promisify(exec);
const execFileAsync = util.promisify(execFile);

// Target languages
const TARGET_LANGS = ["en", "de", "es", "fr", "it", "ja", "pt", "ru", "zh"];
const API_DELAY_MS = 15000;

async function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runCmd(cmd: string) {
  console.log(`\n> ${cmd}`);
  const { stdout, stderr } = await execAsync(cmd);
  if (stderr && !stderr.includes("Warning") && !stderr.includes("Switched")) {
    console.error(`stderr: ${stderr}`);
  }
  return stdout.trim();
}

async function fetchGoogleTrends(): Promise<string[]> {
  console.log("Fetching Google Trends (US)...");
  const res = await fetch("https://trends.google.com/trending/rss?geo=US");
  const xml = await res.text();
  const matches = [
    ...xml.matchAll(/<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<\/item>/g),
  ];
  return matches.map((m) => m[1].replace(/<!\[CDATA\[(.*?)\]\]>/, "$1"));
}

async function getDoc(fileName: string) {
  return await fs.readFile(
    path.resolve(process.cwd(), "docs", fileName),
    "utf-8",
  );
}

async function callGemini(prompt: string): Promise<string> {
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
  const descPrompt = topicDesc
    ? `\nDescription of the topic: "${topicDesc}"`
    : "";

  const prompt = `
You are an elite copywriter and SEO expert for 'Hello Prompt', a blog for AI beginners and practical users.
Your task is to write a highly pragmatic, multilingual-ready blog post (in Korean) about the topic: "${topicTitle}".${descPrompt}

CRITICAL RULES:
1. Adhere strictly to the <POST_TEMPLATE> format. Include all YAML frontmatter.
2. The content MUST score highly according to the <QUALITY_MODEL>. Be pragmatic! Provide an actual, working AI prompt related to this topic that users can copy and paste into ChatGPT or Claude. Target audience is junior office workers, marketers, or developers.
3. In the YAML Frontmatter:
   - title: Catchy, clickable Korean title. Include an emoji!
   - date: ${new Date().toISOString().split("T")[0]}
   - updatedDate: ${new Date().toISOString().split("T")[0]}
   - description: 1-line catchy SEO description reflecting the pragmatic tone.
   - tags: ['prompt-engineering', 'ai-agent', '${topicTitle
     .toLowerCase()
     .replace(/[^a-z0-9]+/g, "-")
     .slice(0, 15)}']
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
    : topicTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .substring(0, 20);

  const cleanContent = content.replace(/^slug:.*$/m, "").replace(/\n\n/g, "\n");

  return { slug, content: cleanContent };
}

async function main() {
  try {
    const { values } = util.parseArgs({
      options: {
        keyword: { type: "string" },
        count: { type: "string", default: "10" },
      },
    });

    const maxCount = Number.parseInt(values.count || "10", 10);
    let topicsToProcess: { title: string; desc: string }[] = [];

    if (values.keyword) {
      // Split by comma if multiple keywords are provided
      const keywords = values.keyword
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
      topicsToProcess = keywords.map((k) => ({ title: k, desc: "" }));
      console.log(
        `🎯 Custom Keywords Detected: ${topicsToProcess.map((t) => t.title).join(", ")}`,
      );
    } else {
      console.log("🌐 No keyword provided. Auto-discovering Google Trends...");
      let trends = await fetchGoogleTrends();
      if (trends.length === 0) throw new Error("No trends found!");
      trends = trends.slice(0, maxCount);
      topicsToProcess = trends.map((t) => ({ title: t, desc: "" }));
      console.log(
        `📈 Selected Auto Trends: ${topicsToProcess.map((t) => t.title).join(", ")}`,
      );
    }

    const currentBranch = await runCmd("git branch --show-current");
    if (currentBranch !== "develop") {
      console.error(
        "❌ CRITICAL ERROR: You must be on the 'develop' branch to run this script. Please checkout develop and try again.",
      );
      process.exit(1);
    }
    console.log("🚀 Syncing 'develop' branch...");
    await runCmd("git pull origin develop");

    const template = await getDoc("POST_TEMPLATE.md");
    const quality = await getDoc("QUALITY_MODEL.md");

    // We now just run `pnpm qa` as a shell command for the final check rather than importing fragmented modules.
    const { rewriteWithLocalCLI } = await import("./qa-rewriter.js").catch(
      () => ({ rewriteWithLocalCLI: null }),
    );

    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");

    let totalCreated = 0;

    for (const topic of topicsToProcess) {
      const slug = topic.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .substring(0, 20);
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
          console.log(
            `⏩ Directory already exists, skipping topic: ${topic.title}`,
          );
          totalCreated += 10;
          continue;
        }
      } catch (_err) {
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

      let koContent = generated.content;

      console.log(`📁 Creating directory: ${postDir}`);
      await fs.mkdir(postDir, { recursive: true });

      const koFilePath = path.join(postDir, "index.ko.md");
      await fs.writeFile(koFilePath, koContent, "utf-8");

      console.log(`\n🔍 Auditing generated Korean post...`);
      // We will run the new QA script specifically on this file
      let auditPassed = true;
      try {
        await runCmd(`npx tsx scripts/qa.ts ${koFilePath}`);
      } catch (e) {
        auditPassed = false;
      }

      if (!auditPassed && rewriteWithLocalCLI) {
        console.error("❌ QA Failed! Tripping auto-rewriter...");
        try {
          const rewrittenContent = await rewriteWithLocalCLI(
            koContent,
            quality,
            template,
            `index.ko.md`,
          );

          if (
            rewrittenContent.length < 50 ||
            !rewrittenContent.startsWith("---")
          ) {
            throw new Error(
              "AI returned malformed markdown structure during rewrite.",
            );
          }

          koContent = rewrittenContent;
          await fs.writeFile(koFilePath, koContent, "utf-8");
        } catch (e: unknown) {
          console.error(
            `❌ Rewrite failed: ${e instanceof Error ? e.message : String(e)}. Skipping translations.`,
          );
          continue;
        }
      }

      const cleanSourceForTranslation = koContent.replace(
        /<!--[\s\S]*?-->/g,
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

    if (totalCreated === 0) {
      console.log("No new posts were generated. Exiting.");
      process.exit(0);
    }

    console.log("🧹 Running Formatting (Biome)...");
    await runCmd("pnpm biome check --write --unsafe . || true");
    console.log("✅ Cleanup complete. Running final Full System QA check...");
    await runCmd("pnpm qa"); // This now runs the comprehensive Phase 1 & Phase 2 pipeline.

    const batchId = Date.now();
    const commitMsg = values.keyword
      ? `feat(content): generate post for ${values.keyword}`
      : `feat(content): batch of auto-trends ${batchId}`;

    await runCmd("git add src/content/posts/*");
    await runCmd(`git commit -m "${commitMsg}"`);
    await runCmd(`git push origin develop`);

    console.log("🚀 Creating Pull Request...");
    try {
      await runCmd(
        `gh pr create --title "${commitMsg}" --body "Automated PR converting trend keywords into multidimensional prompt guides." --base main --head develop`,
      );
    } catch (_e) {
      console.log("PR creation failed or exists.");
    }

    console.log("⏳ Waiting for GH CI to complete...");
    let isSuccess = false;
    for (let i = 0; i < 30; i++) {
      const statusStr = await runCmd(
        `gh pr status --json statusCheckRollup -q ".currentBranch.statusCheckRollup[0].state" || echo "UNKNOWN"`,
      );
      if (statusStr.includes("SUCCESS")) {
        isSuccess = true;
        break;
      } else if (statusStr.includes("FAILURE")) {
        console.error("❌ CI Checks Failed! PR cannot be merged.");
        process.exit(1);
      }
      await delay(15000);
    }

    if (isSuccess) {
      console.log("✅ CI Passed! Merging PR onto main...");
      await runCmd(`gh pr merge --squash --delete-branch=false`);

      console.log("♻️ Syncing develop branch with merged main...");
      await runCmd("git checkout develop");
      await runCmd("git pull origin main --rebase");
      await runCmd("git push origin develop");

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
