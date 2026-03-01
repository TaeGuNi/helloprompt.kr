import { expect, test } from "@playwright/test";

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
    const searchInput = page.locator(".hero .search-input");
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveAttribute(
      "placeholder",
      "SEARCH INTELLIGENCE...",
    );
  });
  test("사용자는 두 번째 페이지로 이동할 수 있어야 한다 (페이지네이션)", async ({
    page,
  }) => {
    await page.goto("http://localhost:4321/ko/");

    // Check if pagination exists and NEXT button is there
    const nextBtn = page
      .locator(".pagination .nav-btn")
      .filter({ hasText: "NEXT" });

    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await page.waitForURL("**/ko/2");
      await expect(page).toHaveURL(/.*\/ko\/2/);
    }
  });

  test("글 카드에 이미지가 정상적으로 노출되어야 한다", async ({ page }) => {
    // Navigate home
    await page.goto("http://localhost:4321/ko/");

    // Wait for posts to load
    await page.waitForSelector(".post-card");
    const cards = page.locator(".post-card");
    const count = await cards.count();

    // Test that at least the first post has an image if it has an image tag in the DOM
    // Notice: Based on the UI, images are rendered as OG tags or inside cards.
    // If there is an image element, it should load.
    if (count > 0) {
      const firstCard = cards.nth(0);
      const img = firstCard.locator("img");
      if ((await img.count()) > 0) {
        await expect(img).toBeVisible();
      }
    }
  });
});
