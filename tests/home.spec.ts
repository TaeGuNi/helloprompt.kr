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

  // ==========================================
  // 💣 Chaos Monkey Test Suite (Disaster Scenarios)
  // ==========================================

  test("[Chaos] 이미지가 모두 404를 반환해도 글 카드는 깨지지 않고 렌더링 되어야 한다", async ({
    page,
  }) => {
    // Given: 모든 이미지 요청이 실패(404)하도록 네트워크 가로채기
    await page.route("**/*.{png,jpg,jpeg,svg,gif,webp}", async (route) => {
      await route.fulfill({
        status: 404,
        contentType: "text/plain",
        body: "Not Found",
      });
    });

    // When: 홈 화면 접속
    await page.goto("http://localhost:4321/ko/");
    await page.waitForSelector(".post-card", { timeout: 10000 });

    // Then: 글 카드는 비정상적인 UI 레이아웃 로딩(예: 컨테이너 붕괴) 없이 최소한 텍스트 정보를 유지해야 함
    const cards = page.locator(".post-card");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    // 첫 번째 카드의 제목과 설명이 정상적으로 존재하는지 검증 (레이아웃 파괴 방지)
    const firstCardTitle = cards.nth(0).locator("h2");
    await expect(firstCardTitle).toBeVisible();
    const titleText = await firstCardTitle.textContent();
    expect(titleText?.trim().length).toBeGreaterThan(0);
  });

  test("[Chaos] 페이지네이션 이동 시 네트워크 지연(Timeout)이 발생해도 UI가 데드락에 빠지지 않아야 한다", async ({
    page,
  }) => {
    // Given: 페이지네이션 2페이지로 이동하는 모든 요청에 대해 극단적인 지연(3초) 발생
    await page.route("**/ko/2", async (route) => {
      // 강제 딜레이 투입
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await route.continue();
    });

    await page.goto("http://localhost:4321/ko/");

    const nextBtn = page
      .locator(".pagination .nav-btn")
      .filter({ hasText: "NEXT" });
    if (await nextBtn.isVisible()) {
      // When: 클릭 후 딜레이 대기 중
      await nextBtn.click();

      // Then: 데드락이나 크래시 창 텍스트(Unhandled Promise 등) 가 없는지 검증
      const bodyText = await page.locator("body").textContent();
      expect(bodyText).not.toContain("Unhandled Promise Rejection");
      expect(bodyText).not.toContain("Vite Error Overlay");

      // And: 최종적으로 2페이지에 도달하여 데이터가 나오는지 검증
      await page.waitForURL("**/ko/2", { timeout: 10000 });
      const cards = page.locator(".post-card");
      expect(await cards.count()).toBeGreaterThan(0);
    }
  });
});
