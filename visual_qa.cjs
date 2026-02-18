const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

(async () => {
  console.log("🚀 Starting Visual QA Scan...");

  // 1. Setup
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const outputDir = "qa_snapshots";
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  // 2. Get Targets (Simulation: scanning local build or live site)
  // For now, let's target the live site to see the "current state"
  const baseUrl = "https://www.helloprompt.kr/posts";

  // Need to get the list of slugs. Let's read from local files.
  const postsDir = "src/content/posts";
  const slugs = fs.readdirSync(postsDir).filter((f) => !f.startsWith(".")); // Simple filter

  console.log(`🎯 Found ${slugs.length} posts to scan.`);

  // 3. Scan Loop
  const report = [];

  for (const [index, slug] of slugs.entries()) {
    const url = `${baseUrl}/${slug}`;
    const screenshotPath = path.join(outputDir, `${slug}.png`);

    try {
      console.log(`[${index + 1}/${slugs.length}] Visiting: ${url}`);
      await page.goto(url, { waitUntil: "networkidle", timeout: 10000 });

      // Analyze Structure (DOM Check)
      const h2Count = await page.locator("article h2").count();
      const h3Count = await page.locator("article h3").count();
      const blockquoteCount = await page.locator("article blockquote").count();
      const hasCodeBlock = (await page.locator("article pre").count()) > 0;

      // Heuristic: Is it "jagged"?
      // Standard structure should have at least 3 H2s (Hook, Solution, Insight)
      let status = "PASS";
      let issues = [];

      if (h2Count < 3) {
        status = "WARN";
        issues.push("Weak Structure (H2 < 3)");
      }
      if (blockquoteCount === 0 && hasCodeBlock) {
        // If there's code but no prompt box (blockquote), usually bad style
        // But code blocks are okay. Let's check for "Prompt Box" specifically.
      }

      // Snapshot
      await page.screenshot({ path: screenshotPath, fullPage: true });

      report.push({
        slug,
        url,
        status,
        structure: { h2: h2Count, h3: h3Count, quotes: blockquoteCount },
        issues,
        screenshot: screenshotPath,
      });
    } catch (e) {
      console.error(`❌ Failed: ${slug} - ${e.message}`);
      report.push({ slug, status: "ERROR", error: e.message });
    }
  }

  await browser.close();

  // 4. Save Report
  fs.writeFileSync("qa_report.json", JSON.stringify(report, null, 2));
  console.log("✅ Visual QA Complete. Report saved to qa_report.json");
})();
