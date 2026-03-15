import { describe, expect, it } from "vitest";
import { mdPathToUrls } from "../scripts/submit-indexnow";

describe("mdPathToUrls", () => {
  it("converts Korean original to all 10 language URLs", () => {
    const urls = mdPathToUrls(
      "src/content/posts/2026/03/ai-beginners-guide/index.ko.md",
    );
    expect(urls).toHaveLength(10);
    expect(urls).toContain(
      "https://helloprompt.kr/ko/posts/2026/03/ai-beginners-guide",
    );
    expect(urls).toContain(
      "https://helloprompt.kr/en/posts/2026/03/ai-beginners-guide",
    );
    expect(urls).toContain(
      "https://helloprompt.kr/ja/posts/2026/03/ai-beginners-guide",
    );
    expect(urls).toContain(
      "https://helloprompt.kr/zh/posts/2026/03/ai-beginners-guide",
    );
  });

  it("converts specific translation to single language URL", () => {
    const urls = mdPathToUrls(
      "src/content/posts/2026/02/ai-fatigue/index.en.md",
    );
    expect(urls).toEqual([
      "https://helloprompt.kr/en/posts/2026/02/ai-fatigue",
    ]);
  });

  it("converts Japanese translation correctly", () => {
    const urls = mdPathToUrls(
      "src/content/posts/2026/03/book-notes-ai-prompt/index.ja.md",
    );
    expect(urls).toEqual([
      "https://helloprompt.kr/ja/posts/2026/03/book-notes-ai-prompt",
    ]);
  });

  it("returns empty array for non-post paths", () => {
    expect(mdPathToUrls("src/pages/index.astro")).toEqual([]);
    expect(mdPathToUrls("scripts/submit-indexnow.ts")).toEqual([]);
    expect(mdPathToUrls("README.md")).toEqual([]);
  });

  it("returns empty array for malformed post paths", () => {
    expect(mdPathToUrls("src/content/posts/index.ko.md")).toEqual([]);
    expect(mdPathToUrls("src/content/posts/2026/slug/index.ko.md")).toEqual([]);
  });
});
