const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Test both old (potentially broken) and new (normalized) URLs
  const targets = [
    "https://www.helloprompt.kr/posts/ai-agent-security-guide",
    "https://www.helloprompt.kr/posts/2026-02-13-ai-agent-security-guide", // Expected normalized path
    "https://www.helloprompt.kr/posts/2026-02-10-ai-agent-security-guide", // Alternative date check
  ];

  console.log("🚀 Checking URLs...");

  for (const url of targets) {
    try {
      const response = await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 5000,
      });
      console.log(`[${response.status()}] ${url}`);

      if (response.status() === 200) {
        const title = await page.title();
        const h1 = await page.locator("h1").textContent();
        console.log(`   Title: ${title}`);
        console.log(`   H1: ${h1}`);

        // Take screenshot if successful
        await page.screenshot({
          path: `check_${url.split("/").pop()}.png`,
          fullPage: true,
        });
        console.log(`   📸 Screenshot saved.`);
      }
    } catch (e) {
      console.log(`❌ Failed: ${url} (${e.message})`);
    }
  }

  await browser.close();
})();
