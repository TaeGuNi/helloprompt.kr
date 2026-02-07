import { test, expect } from "@playwright/test";

test.describe("SEO & OG Image", () => {
  test("Homepage has JSON-LD Structured Data", async ({ page }) => {
    await page.goto("/");

    // JSON-LD 스크립트 존재 확인
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toHaveCount(1);

    // 내용 검증
    const content = await jsonLd.textContent();
    const data = JSON.parse(content || "{}");

    expect(data["@type"]).toBe("WebSite");
    expect(data.name).toBe("Hello Prompt");
  });

  test("Post page has Article JSON-LD", async ({ page }) => {
    // 실제 존재하는 포스트로 변경 (엑셀 매크로 생성기)
    await page.goto("/posts/excel-macro-generator");

    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toHaveCount(1);

    const content = await jsonLd.textContent();
    const data = JSON.parse(content || "{}");

    expect(data["@type"]).toBe("Article");
    expect(data.headline).toBeTruthy();
    expect(data.author).toBeDefined();
  });

  test("Post page has Dynamic OG Image meta tag", async ({ page }) => {
    await page.goto("/posts/excel-macro-generator");

    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveCount(1);

    const url = await ogImage.getAttribute("content");
    expect(url).toContain("/api/og?title=");
  });

  // Skip this test in local environment because @vercel/og requires Vercel Edge Runtime
  test.skip("OG Image API returns valid image", async ({ page }) => {
    // API 직접 호출
    const response = await page.request.get("/api/og?title=Test%20Title");

    expect(response.status()).toBe(200);
    // Vercel OG는 보통 image/png 또는 image/svg+xml 등을 반환
    expect(response.headers()["content-type"]).toMatch(/image\//);
  });
});
