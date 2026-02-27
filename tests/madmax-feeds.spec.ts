import { expect, test } from "@playwright/test";

test.describe("Extreme QA: Sitemap, RSS, Atom Feeds", () => {
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

  test("[Happy Path] All 10 languages generate valid rss and atom XMLs", async ({
    request,
  }) => {
    for (const lang of languages) {
      // Always use explicit language routing for feeds according to [lang]/rss.xml.ts
      const feedPrefix = `/${lang}`;

      const rssUrl = `${feedPrefix}/rss.xml`;
      const rssRes = await request.get(rssUrl);
      expect(rssRes.status()).toBe(200);
      expect(rssRes.headers()["content-type"]).toMatch(
        /application\/(rss\+)?xml/,
      );

      const atomUrl = `${feedPrefix}/atom.xml`;
      const atomRes = await request.get(atomUrl);
      expect(atomRes.status()).toBe(200);
      expect(atomRes.headers()["content-type"]).toMatch(
        /application\/(atom\+)?xml/,
      );
    }
  });

  test("[Chaos Monkey] Invalid language mapping returns 404 cleanly", async ({
    request,
  }) => {
    // Attempting to access an unsupported language code 'zz'
    const invalidRssRes = await request.get("/zz/rss.xml");
    expect(invalidRssRes.status()).toBe(404);

    // Check it doesn't return a 500 error and explode
    const invalidAtomRes = await request.get("/zz/atom.xml");
    expect(invalidAtomRes.status()).toBe(404);
  });
});
