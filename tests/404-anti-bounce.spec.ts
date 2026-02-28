import { expect, test } from "@playwright/test";

test.describe("404 Anti-Bounce UI & Recommendation Panel", () => {
  test("renders 404 page with 4 recommended articles (Korean fallback)", async ({
    page,
  }) => {
    // Navigate to a non-existent URL
    const response = await page.goto("/ko/not-found-page-1234");

    // Ensure it's a 404 status
    expect(response?.status()).toBe(404);

    // Verify main 404 title exists
    await expect(page.locator("h1#error-title")).toBeVisible();
    await expect(page.locator("h1#error-title")).toHaveText("404");

    // Verify the recommendation panel is visible
    const recSection = page.locator("#rec-section");
    await expect(recSection).toBeVisible();

    // Verify the recommendation title is translated (or fallback to RECOMMENDED INTELLIGENCE)
    const recTitle = page.locator("#rec-title");
    await expect(recTitle).toBeVisible();

    // Crucially: verify that there are exactly 4 recommendation cards
    // Wait for JS to render the cards (as they are injected via innerHTML on DOMContentLoaded)
    await page.waitForSelector("#rec-grid .post-card", { state: "attached" });
    const cards = page.locator("#rec-grid .post-card");
    await expect(cards).toHaveCount(4);

    // Verify the links in the cards are valid format (starts with /posts/ or /lang/posts/)
    const firstCardHref = await cards.nth(0).getAttribute("href");
    expect(firstCardHref).toMatch(/^\/([a-z]{2}\/)?posts\//);
  });
});
