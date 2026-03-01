import { describe, expect, it } from "vitest";
import { formatDate } from "./dateUtils";

describe("dateUtils", () => {
  const TEST_ISO_DATE = "2026-02-07T04:30:00.000Z"; // UTC 04:30

  it("formats correctly for Korean (KST)", () => {
    // KST = UTC + 9 = 13:30
    const result = formatDate(TEST_ISO_DATE, "ko");
    expect(result).toContain("2026");
    expect(result).toContain("2월 7일");
    // 시간 포맷은 환경(Node vs Browser)에 따라 약간 다를 수 있으므로 핵심 숫자 포함 여부 확인
    expect(result).toMatch(/1:30|13:30/);
  });

  it("formats correctly for English (New York EST/EDT)", () => {
    // EST = UTC - 5 (Feb is winter) = Feb 6, 23:30
    const result = formatDate(TEST_ISO_DATE, "en");
    expect(result).toContain("February 6");
    expect(result).toContain("11:30");
    expect(result).toContain("PM");
  });

  it("formats correctly for German (CET)", () => {
    // CET = UTC + 1 = 05:30
    const result = formatDate(TEST_ISO_DATE, "de");
    expect(result).toContain("7. Februar 2026");
    expect(result).toMatch(/05:30|5:30/);
  });

  it("handles invalid date gracefully", () => {
    const result = formatDate("invalid-date-string", "en");
    expect(result).toBe("invalid-date-string");
  });

  it("handles empty date string", () => {
    const result = formatDate("", "en");
    expect(result).toBe("");
  });

  it("falls back to UTC for unknown language", () => {
    // Unknown lang 'xx' -> should use UTC
    const result = formatDate(TEST_ISO_DATE, "xx");
    expect(result).toBeTruthy();
    expect(result).toContain("2026");
  });

  it("returns date only when options.dateOnly is true", () => {
    // KST 2026-02-07 13:30 -> 2026. 2. 7. (or similar format without time)
    const result = formatDate(TEST_ISO_DATE, "ko", { dateOnly: true });
    expect(result).not.toContain("오후");
    expect(result).not.toContain(":");
    expect(result).toContain("2026");
    expect(result).toContain("2월 7일");
  });

  // ==========================================
  // 💣 Chaos Monkey Test Suite (Disaster Scenarios)
  // ==========================================
  describe("[Chaos Monkey] formatDate 파괴 방어 시뮬레이션", () => {
    it("완전히 규격을 벗어난 외계 언어 코드 주입 시 크래시 없이 UTC나 원본 스트링 등으로 방어해야 한다", () => {
      // 기존 폰트/레이아웃 크래시를 막기 위해 에러를 throw해선 안 됨.
      const chaosLangs = [
        "👽",
        "not-a-lang",
        "DROP TABLE users",
        "undefined",
        "null",
      ];

      for (const lang of chaosLangs) {
        expect(() => formatDate(TEST_ISO_DATE, lang)).not.toThrow();
        const res = formatDate(TEST_ISO_DATE, lang);
        // Fallback으로 UTC 시간대 혹은 어떻게든 문자열이 튀어나와야 함
        expect(typeof res).toBe("string");
      }
    });

    it("JS Date 객체가 감당하기 힘든 극단적인 Epoch 값이나 Infinity 주입 시 크래시를 유발하지 않아야 한다", () => {
      const extremeDates = [
        "100000-01-01T00:00:00.000Z", // Too far in future
        "-100000-01-01T00:00:00.000Z", // Too far in past
        "NaN",
        "Infinity",
      ];

      for (const d of extremeDates) {
        // 에러를 던지지 않고 Invalid Date 처리(원본 리턴)로 우아하게 실패해야 함
        expect(() => formatDate(d, "ko")).not.toThrow();
        expect(formatDate(d, "ko")).toBe(d);
      }
    });
  });
});
