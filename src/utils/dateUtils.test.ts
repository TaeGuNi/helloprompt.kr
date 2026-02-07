import { describe, it, expect } from "vitest";
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
});
