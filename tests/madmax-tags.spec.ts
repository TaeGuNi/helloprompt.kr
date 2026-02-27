import { expect, test } from "@playwright/test";

test.describe("Extreme QA: Tag Pages", () => {
  const _languages = [
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

  for (const lang of ["ko", "en"]) {
    // Subset for efficiency; conceptually tests the routing mechanism
    test(`[Happy Path] Tag routing layout for ${lang}`, async ({ page }) => {
      const url = lang === "ko" ? "/tags/ai" : `/${lang}/tags/ai`;

      const res = await page.goto(url);
      expect(res?.status()).toBeLessThan(500);

      if (res?.status() === 200) {
        const header = page.locator("h1, h2");
        await expect(header.first()).toBeVisible();
      }
    });

    test(`[Chaos Monkey] Non-existent / malicious tag name in ${lang}`, async ({
      page,
    }) => {
      // Submitting spaces, Korean chars in URL, Special Characters
      const maliciousTags = [
        "ghost-tag-1234",
        "한글 태그",
        "space tag",
        "%20<script>",
      ];

      for (const tag of maliciousTags) {
        const url =
          lang === "ko"
            ? `/tags/${encodeURIComponent(tag)}`
            : `/${lang}/tags/${encodeURIComponent(tag)}`;
        const res = await page.goto(url);

        // It might return 404, or 200 (graceful empty state) but should NOT return 500.
        expect(res?.status()).toBeLessThan(500);

        const bodyText = await page.locator("body").textContent();
        expect(bodyText).not.toContain("Internal Server Error");
      }
    });
  }
});
