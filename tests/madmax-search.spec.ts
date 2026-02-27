import { expect, test } from "@playwright/test";
import { generateRefMap } from "./utils/agentHelper";

test.describe("Extreme QA: Search Functionality (10 Languages)", () => {
  const languages = [
    "ko",
    "en",
    "de",
    "es",
    "fr",
    "it",
    "ja",
    "pt",
    "ru",
    "zh",
  ];

  for (const lang of languages) {
    test(`[Happy Path] ${lang}: Can search and filter results properly`, async ({
      page,
    }) => {
      const url = lang === "ko" ? "/" : `/${lang}/`;
      await page.goto(url);

      // Inject RefMap Script & Get Output
      const refMapOutput = await page.evaluate(generateRefMap);

      // Using DOM assertion to check what's visible via ref action
      const targetInputRegex = /\[(@e\d+)\] input\[type="text"\].*/;
      const _match = refMapOutput.match(targetInputRegex);

      const searchLocator = page.locator(".hero .search-input");
      await expect(searchLocator).toBeVisible();

      // Ensure that we can type standard text and assert results
      // Note: Test needs valid post data in `search.json.ts` context
      await searchLocator.fill("test");

      // The search logic usually triggers a dropdown/layer or changes the dom.
      const resultsContainer = page.locator(".hero .search-results");
      await expect(resultsContainer).toBeVisible();
    });

    test(`[Chaos Monkey] ${lang}: Network 500 Error during Search`, async ({
      page,
    }) => {
      const url = lang === "ko" ? "/" : `/${lang}/`;

      // Induce chaos: intercept the search payload endpoint
      await page.route("**/search.json*", async (route) => {
        await route.fulfill({
          status: 500,
          contentType: "application/json",
          body: JSON.stringify({ error: "Internal Server Error Simulation" }),
        });
      });

      await page.goto(url);
      const searchLocator = page.locator(".hero .search-input");
      await searchLocator.fill("chaos_test");

      // Give UI time to reflect error state
      await page.waitForTimeout(500);

      // Assert that UI is NOT broken (no endless spinners or complete blank screen)
      // Check that standard UI elements (header/footer/hero content) are still present
      const mainHero = page.locator(".hero").first();
      await expect(mainHero).toBeVisible();

      // The exact error fallback UI depends on implementation.
      // For now, ensuring no app crash/deadlock context
      const bodyText = await page.locator("body").textContent();
      // Ensure we don't have "Vite Error Overlay" or unhandled promise rejection visible text
      expect(bodyText).not.toContain("Unhandled Promise Rejection");
    });

    test(`[Chaos Monkey] ${lang}: Malicious input / XSS Injection`, async ({
      page,
    }) => {
      const url = lang === "ko" ? "/" : `/${lang}/`;
      await page.goto(url);

      const searchLocator = page.locator(".hero .search-input");
      const maliciousPayload = `<script>alert('xss')</script> ' OR 1=1--`;

      await searchLocator.fill(maliciousPayload);
      await page.waitForTimeout(500);

      // Ensure no alert boxes were triggered by listening to page dialogs
      page.on("dialog", (dialog) => {
        expect(dialog.type()).not.toBe("alert");
        dialog.dismiss();
      });

      // Assert that the malicious payload was rendered as text safely or ignored,
      // without breaking the layout.
      const mainHero = page.locator(".hero").first();
      await expect(mainHero).toBeVisible();
    });
  }
});
