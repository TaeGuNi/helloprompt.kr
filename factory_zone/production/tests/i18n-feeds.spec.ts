import { test, expect } from "@playwright/test";

test.describe("i18n and Feeds", () => {
  test("Korean Homepage has correct Footer links", async ({ page }) => {
    await page.goto("/");

    // Footer RSS link check
    const rssLink = page.locator('footer a[href="/rss.xml"]');
    await expect(rssLink).toBeVisible();

    // Footer Atom link check
    const atomLink = page.locator('footer a[href="/atom.xml"]');
    await expect(atomLink).toBeVisible();
  });

  test("English Homepage has localized Footer links", async ({ page }) => {
    await page.goto("/en/");

    // Footer RSS link should point to /en/rss.xml
    const rssLink = page.locator('footer a[href="/en/rss.xml"]');
    await expect(rssLink).toBeVisible();

    // Check if the link actually works (Status 200)
    const response = await page.request.get("/en/rss.xml");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("xml");
  });

  test("Japanese Homepage has localized Footer links", async ({ page }) => {
    await page.goto("/ja/");
    const rssLink = page.locator('footer a[href="/ja/rss.xml"]');
    await expect(rssLink).toBeVisible();
  });

  test("RSS Feed content is valid", async ({ page }) => {
    const response = await page.request.get("/rss.xml");
    const text = await response.text();

    // Check for standard RSS tags
    expect(text).toContain('<rss version="2.0"');
    expect(text).toContain("<channel>");
    expect(text).toContain("<title>Hello Prompt");
  });
});
