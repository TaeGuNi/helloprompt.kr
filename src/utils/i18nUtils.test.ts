import { describe, expect, it } from "vitest";
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

    // ==========================================
    // 💣 Chaos Monkey Test Suite (Disaster Scenarios)
    // ==========================================
    describe("[Chaos] determineCurrentLang 파괴 방어 시나리오", () => {
      it("경로에 XSS나 디렉토리 트래버설 같은 악성 페이로드가 들어와도 안전하게 ko로 롤백해야 한다", () => {
        const maliciousPaths = [
          "/<script>alert('xss')</script>/posts",
          "/../../../etc/passwd/posts",
          "//\\//\\//",
          "/' OR 1=1--/posts",
          "\x00\x01\x02",
        ];

        for (const p of maliciousPaths) {
          // 크래시 없이 무조건 기본 로케일(ko)로 폴백되어야 치명적 라우팅 버그를 막음
          expect(determineCurrentLang(p)).toBe("ko");
        }
      });

      it("frontmatterLang 파라미터에 숫자가 들어오거나 null/undefined 등 엉뚱한 타입이 주입되어도 안전하게 방어해야 한다", () => {
        // uiStrings 객체에 혼란을 주지 않고 안전하게 처리되는지 (아마 string이 아닌 값이 넘어가면 undefined처럼 동작하여 fallback을 탐)
        expect(
          determineCurrentLang("/ja/posts", null as unknown as string),
        ).toBe("ja");

        // 런타임에 이런 일이 발생할 경우, fallback 로직을 타서 'ko' 나 URL 기반 언어가 나와야 함(JS의 타입 강제 변환에 따라 결과가 다를 수 있지만 crash만 나지 않으면 pass)
        expect(() =>
          determineCurrentLang("/ja/posts", 12345 as unknown as string),
        ).not.toThrow();
        expect(() =>
          determineCurrentLang("/ja/posts", {} as unknown as string),
        ).not.toThrow();
      });
    });
  });
});
