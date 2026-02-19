import { describe, it, expect } from "vitest";
import { determineCurrentLang } from "./i18nUtils";

describe("i18nUtils", () => {
  describe("determineCurrentLang", () => {
    it("should return frontmatter lang if provided", () => {
      expect(determineCurrentLang("/any/path", "ja")).toBe("ja");
    });

    it("should detect language from URL path (en)", () => {
      expect(determineCurrentLang("/en/posts/test")).toBe("en");
    });

    it("should detect language from URL path (jp)", () => {
      expect(determineCurrentLang("/ja/tags/ai")).toBe("ja");
    });

    it("should default to 'ko' if path starts with non-lang segment (e.g. posts)", () => {
      expect(determineCurrentLang("/posts/korean-post")).toBe("ko");
    });

    it("should default to 'ko' for root path", () => {
      expect(determineCurrentLang("/")).toBe("ko");
    });

    it("should return 'ko' if URL lang is invalid", () => {
      expect(determineCurrentLang("/xyz/posts/test")).toBe("ko");
    });
  });
});
