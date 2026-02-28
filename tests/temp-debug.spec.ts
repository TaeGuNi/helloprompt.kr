import { test } from '@playwright/test';

test('debug 404 page', async ({ page }) => {
  const issues: string[] = [];
  
  page.on('pageerror', err => issues.push(`[Page Error] ${err.message}`));
  page.on('console', msg => {
    if (msg.type() === 'error') issues.push(`[Console Error] ${msg.text()}`);
    if (msg.type() === 'warning') issues.push(`[Console Warning] ${msg.text()}`);
  });

  const url = 'http://localhost:4321/ko/posts/2026/02/hardcore-uv-python-agent-cheat-code1';
  console.log("Navigating to:", url);
  
  const response = await page.goto(url, { waitUntil: 'networkidle' });
  console.log(`HTTP Status:`, response?.status());
  
  const errorTitleVisible = await page.locator('#error-title').isVisible();
  console.log(`Is 404 Title Visible: ${errorTitleVisible}`);
  
  const recSectionVisible = await page.locator('#rec-section').isVisible();
  console.log(`Is Recommended Section Visible: ${recSectionVisible}`);
  
  const cardsCount = await page.locator('.post-card').count();
  console.log(`Number of Recommended Cards Rendered: ${cardsCount}`);
  
  if (cardsCount > 0) {
    console.log(`\n--- Card Links & Titles Rendered ---`);
    const cards = await page.locator('.post-card').all();
    for (let i = 0; i < cards.length; i++) {
      const href = await cards[i].getAttribute('href');
      const title = await cards[i].locator('h3').innerText();
      console.log(`${i + 1}. [${href}] ${title}`);
    }
  }

  console.log(`\n--- Console/Page Issues Detected ---`);
  if (issues.length === 0) {
    console.log("No console errors or page exceptions detected.");
  } else {
    for (const iss of issues) {
      console.log(iss);
    }
  }
});
