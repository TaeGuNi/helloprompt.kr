import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000, // 60초로 증가
  expect: {
    timeout: 10 * 1000, // 단언문 타임아웃 10초
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0, // CI에서 2번 재시도
  workers: process.env.CI ? 1 : undefined, // CI에선 1워커로 안정성 확보
  webServer: {
    command: "pnpm run dev",
    url: "http://localhost:4321",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:4321",
    trace: "on-first-retry", // 실패 시 트레이스 저장
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
