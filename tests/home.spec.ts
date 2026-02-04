import { test, expect } from "@playwright/test";

test.describe("메인 페이지 BDD 시나리오", () => {
  test("사용자는 사이트에 접속하여 대문 제목을 볼 수 있어야 한다", async ({
    page,
  }) => {
    // Given: 사용자가 홈에 접속함
    await page.goto("http://localhost:4321");

    // When: 페이지가 로드됨
    // Then: "HELLO PROMPT" 타이틀이 보여야 함
    const title = page.locator("h1.ai-title");
    await expect(title).toBeVisible();
    await expect(title).toHaveText("HELLO PROMPT");
  });

  test("사용자는 검색창을 통해 글을 찾을 수 있어야 한다", async ({ page }) => {
    // Given: 홈 화면
    await page.goto("http://localhost:4321");

    // Then: 검색창이 존재해야 함
    const searchInput = page.locator("#search-input");
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveAttribute(
      "placeholder",
      "SEARCH INTELLIGENCE...",
    );
  });
});
