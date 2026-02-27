import { expect, test } from "@playwright/test";

test.describe("Extreme QA: Exceptions and 404 Pages", () => {
  test("[Chaos Monkey] 404 page retains language context and layout does not crash", async ({
    page,
  }) => {
    // 1. Check Japanese layout 404 context
    const jaRes = await page.goto("/ja/invalid-ghost-path-1234");
    expect(jaRes?.status()).toBe(404);

    // 2. Assert Japanese language is kept in html tag (Astro i18n routing validation)
    const htmlLang = await page.locator("html").getAttribute("lang");
    console.log("HTML lang is:", htmlLang);
    console.log(
      "First 500 chars of body:",
      (await page.locator("body").textContent())?.substring(0, 500),
    );
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
    const returnBtn = page.locator("#error-btn");
    await expect(returnBtn).toBeVisible();

    // 4. Ensure no reference errors or undefined variables rendered
    const bodyText = await page.locator("body").textContent();
    expect(bodyText).not.toContain("Cannot read properties of undefined");
  });

  test("[Chaos Monkey] Rapid Locale Switcher Race Condition Spiking", async ({
    page,
  }) => {
    await page.goto("/");

    const langBtn = page.locator(".lang-btn");
    if (await langBtn.isVisible()) {
      await langBtn.click();
      const langs = ["en", "ja", "fr", "ko", "es"];

      // Click them rapidly without waiting for full navigation to finish to simulate race conditions
      for (const l of langs) {
        await langBtn.hover();
        await page
          .locator(`a[data-lang="${l}"]`)
          .evaluate((node: HTMLElement) => node.click());
        await page.waitForTimeout(50);
      }

      await page.waitForTimeout(1000);

      // Ensure the page didn't crash entirely
      const mainContent = page.locator(".hero").first();
      await expect(mainContent).toBeVisible();
    }
  });

  test("[Chaos Monkey] Layout Thrashing & Responsive Edge Cases", async ({
    page,
  }) => {
    // Ultra narrow phone
    await page.setViewportSize({ width: 250, height: 800 });
    await page.goto("/");

    // Ensure no horizontal scrollbar (body width matches viewport)
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);

    expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 5); // Allow minor margin of error

    // Ultra wide monitor
    await page.setViewportSize({ width: 4000, height: 1000 });
    await page.goto("/");

    const container = page.locator(".hero").first();
    await expect(container).toBeVisible();
  });

  test("[Happy Path] Homepage layout renders correctly without syntax errors", async ({
    page,
  }) => {
    // Navigate to homepage of a specific language to ensure the layout parses
    await page.goto("/ko");
    // Ensure the hero section is visible
    await expect(page.locator(".hero:not(.search-container)")).toBeVisible();
    // Ensure the post grid is not hidden by unclosed style tags
    const postCards = page.locator(".post-card");
    await expect(postCards.first()).toBeVisible();
    // Ensure there's a reasonable amount of posts rendered
    expect(await postCards.count()).toBeGreaterThan(0);

    // Check English
    await page.goto("/en");
    await expect(page.locator(".hero:not(.search-container)")).toBeVisible();
    await expect(page.locator(".post-card").first()).toBeVisible();
  });

  test("[Chaos Monkey] Non-existent post URL elegantly falls back to 404 page", async ({
    page,
  }) => {
    // Navigate to a non-existent post (testing [...slug].astro Astro.rewrite logic)
    const res = await page.goto(
      "/ko/posts/hardcore-uv-python-agent-cheat-code1",
    );
    expect(res?.status()).toBe(404);

    // Ensure 404 UI rendered correctly
    await expect(page.locator("#error-btn")).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
  });

  test("[Chaos Monkey] JavaScript and CSS loading failure (Graceful Degradation)", async ({
    page,
  }) => {
    // Intercept and abort all JS and CSS requests to simulate extreme offline/network issues
    await page.route("**/*.{js,css}", (route) => route.abort());

    // Navigate to homepage
    const res = await page.goto("/ko");
    expect(res?.status()).toBe(200);

    // Ensure core content is still visible and the framework rendered SSR correctly
    await expect(page.locator(".hero:not(.search-container)")).toBeVisible();
    const postCards = page.locator(".post-card");
    await expect(postCards.first()).toBeVisible();
  });

  test("[Chaos Monkey] LocalStorage State Pollution Resistance", async ({
    page,
  }) => {
    // Navigate to get a valid origin
    await page.goto("/ko");

    // Inject malicious local storage values that might break state parsers
    await page.evaluate(() => {
      localStorage.setItem("theme", "invalid-theme-value!@#<script>");
      localStorage.setItem("language", "undefined-null-[object Object]");
      localStorage.setItem("searchHistory", "not-a-json-object");
    });

    // Reload page with polluted state
    await page.reload();

    // Ensure the app didn't crash from parsing corrupted state
    await expect(page.locator(".hero:not(.search-container)")).toBeVisible();
  });
});
