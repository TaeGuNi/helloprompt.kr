const { chromium } = require("playwright");

(async () => {
  console.log("🚀 Starting Smoke Test...");
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Test Targets (Key Pages)
  const urls = [
    "https://www.helloprompt.kr/",
    "https://www.helloprompt.kr/posts/2026-02-15-ai-coding-agent-survival", // Recent
    "https://www.helloprompt.kr/posts/2026-02-12-ai-commute-optimizer", // Legacy Migrated
    "https://www.helloprompt.kr/posts/2026-02-14-gemini-3-pro-prompting", // Previously broken
  ];

  for (const url of urls) {
    try {
      const response = await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 5000,
      });
      if (response.status() === 200) {
        console.log(`✅ [200] ${url}`);
        // Check content
        const title = await page.title();
        console.log(`   Title: ${title}`);
      } else {
        console.error(`❌ [${response.status()}] ${url}`);
      }
    } catch (e) {
      console.error(`❌ Failed to load ${url}: ${e.message}`);
    }
  }

  await browser.close();
  console.log("🏁 Smoke Test Complete.");
})();
