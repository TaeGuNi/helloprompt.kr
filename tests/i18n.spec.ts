import { test, expect } from "@playwright/test";

test.describe("다국어 기능 테스트", () => {
  test("언어 변경 버튼을 누르면 해당 언어 URL로 이동해야 한다", async ({
    page,
  }) => {
    // Given: 메인 페이지 접속
    await page.goto("/");

    // When: 언어 드롭다운 열기
    await page.click(".lang-btn");

    // Then: 드롭다운이 보여야 함
    const dropdown = page.locator(".lang-dropdown");
    await expect(dropdown).toBeVisible();

    // When: "English" 클릭 (실제 이동은 하지 않고 href 속성이나 동작 확인)
    // 네비게이션 테스트는 실제 이동을 기다려야 함
    await page.click('a[data-lang="en"]');

    // Then: URL이 /en/을 포함해야 함 (또는 404라도 URL은 바뀌어야 함)
    await expect(page).toHaveURL(/\/en\//);
  });
});
