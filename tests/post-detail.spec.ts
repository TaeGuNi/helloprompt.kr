import { test, expect } from "@playwright/test";

test.describe("게시글 상세 페이지 BDD 시나리오", () => {
  test("홈 화면에서는 날짜만 보이고, 상세 페이지에서는 시간까지 보여야 한다", async ({
    page,
  }) => {
    // Given: 사용자가 홈에 접속함
    await page.goto("/");

    // When: 첫 번째 포스트 카드를 찾음
    const firstPostCard = page.locator(".post-card").first();
    await expect(firstPostCard).toBeVisible();

    const homeDateText = await firstPostCard
      .locator(".post-meta span")
      .first()
      .textContent();
    console.log(`Home Date Text: ${homeDateText}`);

    // Then: 홈 화면 날짜에는 시간(오후/오전, :)이 없어야 함 (단순 날짜 포맷)
    // Note: ko-KR locale Date only format usually looks like "2026. 2. 7."
    if (homeDateText) {
      expect(homeDateText).not.toContain("오후");
      expect(homeDateText).not.toContain("오전");
      // expect(homeDateText).not.toContain(":"); // Date string might contain dots or dashes, but usually no colon unless time is present
    }

    // When: 포스트를 클릭하여 상세 페이지로 이동
    await firstPostCard.click();
    // await page.waitForLoadState("networkidle"); // Sometimes flaky, rely on locator visibility

    // Then: 상세 페이지의 메타 정보에는 시간이 포함되어야 함
    const metaDiv = page.locator("article .meta");
    await expect(metaDiv).toBeVisible();

    const metaText = await metaDiv.textContent();
    console.log(`Detail Meta Text: ${metaText}`);

    // 예: Date: 2026년 2월 7일 오후 08:30
    // 시간 패턴(HH:mm)이 포함되어 있는지 확인
    expect(metaText).toMatch(/[0-9]{1,2}:[0-9]{2}/);
  });
});
