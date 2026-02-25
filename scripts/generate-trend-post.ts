import { exec, execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";

const execAsync = util.promisify(exec);
const execFileAsync = util.promisify(execFile);

const TARGET_LANGS = ["en", "de", "es", "fr", "it", "ja", "pt", "ru", "zh"];

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
  const { stdout } = await execFileAsync("gemini", [
    "--yolo",
    "-m",
    "gemini-3.1-pro-preview", // Updated to correct available model
    "-p",
    prompt,
  ]);

  let text = stdout;
  // Try to extract from the first YAML marker
  const match = text.match(/---\n[\s\S]+/);
  if (match) {
    text = match[0];
  }

  // Final cleanup of any potential markdown wrapper
  text = `${text
    .replace(/^```markdown\n?/i, "")
    .replace(/```$/i, "")
    .trim()}\n`;
  return text;
}

async function generateKoreanPost(
  trend: string,
  template: string,
  quality: string,
): Promise<{ slug: string; content: string }> {
  console.log(`🤖 Generating base Korean post for: ${trend}`);
  const prompt = `
You are an elite copywriter and SEO expert for 'Hello Prompt', a blog for AI beginners.
Your task is to write a highly pragmatic, multilingual-ready blog post (in Korean) about the trending keyword: "${trend}".

CRITICAL RULES:
1. Adhere strictly to the <POST_TEMPLATE> format. Include all YAML frontmatter.
2. The content MUST score highly according to the <QUALITY_MODEL>. Be pragmatic! Provide an actual, working AI prompt related to this trend.
3. In the YAML Frontmatter:
   - title: Catchy, clickable Korean title.
   - date: ${new Date().toISOString().split("T")[0]}
   - updatedDate: ${new Date().toISOString().split("T")[0]}
   - description: 1-line catchy SEO description.
   - tags: Array of tags including the English trend keyword.
4. VERY IMPORTANT: You must also output a special 'slug: "your-english-kebab-case-slug"' field in the frontmatter. We need this for the folder name.
5. Do NOT use markdown Tables. Use emoji bullet lists instead (<QUALITY_MODEL> rule).
6. Basic/Pro sections MUST use blockquotes (>). DO NOT use blockquotes (>) anywhere else in the document!
8. DO NOT generate an 'image' property. Only strictly use the fields provided in <POST_TEMPLATE>!
9. Ensure the headers '## 💡 작성자 코멘트 (Insight)' and '## 🙋 자주 묻는 질문 (FAQ)' are exactly written as requested.

<POST_TEMPLATE>
${template}
</POST_TEMPLATE>

<QUALITY_MODEL>
${quality}
</QUALITY_MODEL>

Output ONLY the raw markdown content. No explanatory text.
`;

  const content = await callGemini(prompt);

  // Extract slug from frontmatter
  const slugMatch = content.match(/slug:\s*["']?([a-z0-9-]+)["']?/i);
  const slug = slugMatch
    ? slugMatch[1]
    : trend.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  // Remove the artificial slug field from the YAML structure since it's not actually in POST_TEMPLATE
  const cleanContent = content.replace(/^slug:.*$/m, "").replace(/\n\n/g, "\n");

  return { slug, content: cleanContent };
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
5. DO NOT add any extra frontmatter fields that were not in the original (e.g. do NOT add an 'image' property).
6. Output ONLY the raw Markdown file starting with '---'.

<KOREAN_POST>
${koContent}
</KOREAN_POST>
`;

  return await callGemini(prompt);
}

async function main() {
  try {
    // 1. Git Prep
    console.log("🚀 Setting up Git workflow...");
    await runCmd("git checkout develop");
    await runCmd("git pull origin develop");

    let trends = await fetchGoogleTrends();
    if (trends.length === 0) throw new Error("No trends found!");

    // Process top 5 trends Request
    trends = trends.slice(0, 5);
    console.log(`📈 Selected Trends: ${trends.join(", ")}`);

    // Create unique branch
    const branchName = `feat/trends-batch-${Date.now()}`;
    await runCmd(`git checkout -b ${branchName}`);

    // 2. Load Docs
    const template = await getDoc("POST_TEMPLATE.md");
    const quality = await getDoc("QUALITY_MODEL.md");

    // We will dynamically import audit to avoid top-level issues if ts-node acts up
    const { auditFile } = await import("./qa/audit.js");
    const { rewriteWithLocalCLI } = await import("./qa/ai-rewriter.js");

    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");

    for (const targetTrend of trends) {
      console.log(`\n==========================================`);
      console.log(`🚀 Processing Trend: ${targetTrend}`);
      console.log(`==========================================\n`);

      // 3. Generate Content
      const generated = await generateKoreanPost(
        targetTrend,
        template,
        quality,
      );

      const slug = generated.slug;
      let koContent = generated.content;

      const postDir = path.resolve(
        process.cwd(),
        "src",
        "content",
        "posts",
        `${year}`,
        month,
        slug,
      );

      console.log(`📁 Creating directory: ${postDir}`);
      await fs.mkdir(postDir, { recursive: true });

      const koFilePath = path.join(postDir, "index.ko.md");

      // Write internal ko version
      await fs.writeFile(koFilePath, koContent, "utf-8");

      // 3.5. Execute QA Audit
      console.log(`\n🔍 Auditing generated Korean post...`);
      const auditResult = await auditFile(koFilePath);

      if (
        !auditResult.passed ||
        auditResult.issues.some((i) => i.severity === "error")
      ) {
        console.error("❌ QA Failed! The post did not pass the quality model.");
        auditResult.issues.forEach((issue) => {
          console.error(`   - [${issue.code}] ${issue.message}`);
        });

        console.log(`\n🤖 Triggering auto-rewriter...`);
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

          console.log(`✅ Rewrite successful. Saving rewritten content...`);
          koContent = rewrittenContent;
          await fs.writeFile(koFilePath, koContent, "utf-8");
        } catch (e: unknown) {
          console.error(
            `❌ Rewrite failed: ${e instanceof Error ? e.message : String(e)}. Skipping translations for this post.`,
          );
          continue; // Skip translating this failed post
        }
      } else {
        console.log(`✅ QA Passed! No rewriting needed.`);
      }

      // Remove HTML comments from source before translating
      const cleanSourceForTranslation = koContent.replace(
        /<!--[\s\S]*?-->/g,
        "",
      );

      // 4. Translate concurrently
      const translatePromises = TARGET_LANGS.map(async (lang) => {
        const translated = await translatePost(cleanSourceForTranslation, lang);
        await fs.writeFile(
          path.join(postDir, `index.${lang}.md`),
          translated,
          "utf-8",
        );
      });

      await Promise.all(translatePromises);
      console.log(`✅ Translations complete for ${slug}`);
    }

    // 5. Commit and PR (Batch)
    const prTitleMsg =
      trends.length === 1 ? trends[0] : `Batch of ${trends.length} Trends`;

    await runCmd(
      "git add src/content/posts/* scripts/generate-trend-post.ts scripts/qa/ai-rewriter.ts",
    );
    await runCmd(
      `git commit -m "feat(content): add new trend posts for ${prTitleMsg}"`,
    );
    await runCmd(`git push origin ${branchName}`);

    console.log("🚀 Creating Pull Request...");
    await runCmd(
      `gh pr create --title "feat(content): Trend Posts - ${prTitleMsg}" --body "Automated PR generating new trending posts for: ${trends.join(", ")}." --base develop`,
    );

    console.log("⏳ Waiting for GH checks to pass before merging... (Polling)");

    // Poll checks
    let isSuccess = false;
    for (let i = 0; i < 30; i++) {
      // wait up to 5 minutes (10s intervals)
      const statusStr = await runCmd(
        `gh pr status --json statusCheckRollup -q ".currentBranch.statusCheckRollup[0].state" || echo "UNKNOWN"`,
      );
      console.log(`Status Check: ${statusStr}`);

      if (statusStr.includes("SUCCESS")) {
        isSuccess = true;
        break;
      } else if (statusStr.includes("FAILURE")) {
        console.error("❌ CI Checks Failed! PR cannot be merged.");
        process.exit(1);
      }
      await new Promise((r) => setTimeout(r, 10000));
    }

    if (isSuccess) {
      console.log("✅ CI Passed! Merging PR...");
      await runCmd(`gh pr merge --squash --delete-branch`);
      console.log("🎉 All Done!");
    } else {
      console.log(
        "⚠️ CI Checks timed out or state unknown. Please merge manually.",
      );
    }
  } catch (e) {
    console.error("Deployment script failed:", e);
    process.exit(1);
  }
}

main();
