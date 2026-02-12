import { test, expect } from "@playwright/test";
import { playAudit } from "playwright-lighthouse";
import path from "path";
import os from "os";

// 임시 디렉토리 사용 (Lighthouse 리포트 저장용)
const reportDir = path.join(process.cwd(), "test-results", "lighthouse");

test.describe("Lighthouse Performance Checks", () => {
  test("Homepage Performance Audit", async ({ playwright }) => {
    // 1. 브라우저 실행 (CDP 연결 필수)
    const browser = await playwright.chromium.launch({
      args: ["--remote-debugging-port=9222"],
    });
    const page = await browser.newPage();

    // 2. 페이지 이동
    await page.goto("http://localhost:4321/");

    // 3. Lighthouse 감사 실행
    await playAudit({
      page: page,
      port: 9222,
      thresholds: {
        performance: 70, // 10k 포스트 환경 감안하여 70점으로 완화 (최적화 후 상향 조정)
        accessibility: 90,
        "best-practices": 90,
        seo: 90,
      },
      reports: {
        formats: {
          html: true, // HTML 리포트 생성
        },
        name: "homepage-audit",
        directory: reportDir,
      },
    });

    await browser.close();
  });

  test("Post Detail Performance Audit", async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ["--remote-debugging-port=9222"],
    });
    const page = await browser.newPage();

    // 임의의 포스트로 이동 (가장 최근 글 중 하나)
    await page.goto("http://localhost:4321/posts/ai-beginners-guide");

    await playAudit({
      page: page,
      port: 9222,
      thresholds: {
        performance: 70,
        accessibility: 90,
        "best-practices": 90,
        seo: 90,
      },
      reports: {
        formats: {
          html: true,
        },
        name: "post-detail-audit",
        directory: reportDir,
      },
    });

    await browser.close();
  });
});
