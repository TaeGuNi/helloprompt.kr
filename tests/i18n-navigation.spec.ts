import { test, expect } from "@playwright/test";

test.describe("i18n Navigation Persistence", () => {
  // Increase timeout for slow dev server
  test.setTimeout(60000);

  test("should persist language when navigating from English Post to Home via Logo", async ({
    page,
  }) => {
    console.log("Navigating to English post...");
    // Using the file we definitely fixed
    const response = await page.goto(
      "/en/posts/interview-reverse-question-generator",
    );
    console.log(`Response status: ${response?.status()}`);

    if (response?.status() !== 200) {
      console.log("Failed to load page. Content:");
      console.log(await page.content());
    }

    // 2. Verify we are on the post page
    await expect(page).toHaveURL(
      /.*\/en\/posts\/interview-reverse-question-generator/,
    );
    console.log("On post page. Clicking logo...");

    // 3. Click the Logo ("HELLO PROMPT")
    await page.click("text=HELLO PROMPT");

    // 4. Assert URL is English Home (/en/)
    // If it was buggy, it would go to /
    await expect(page).toHaveURL(/\/en\/$/);
    console.log("Successfully navigated to English Home.");
  });

  test("should navigate to Korean Home from Korean Post via Logo", async ({
    page,
  }) => {
    // 1. Visit a Korean post
    await page.goto("/posts/interview-reverse-question-generator");

    // 2. Click the Logo
    await page.click("text=HELLO PROMPT");

    // 3. Assert URL is Korean Home (/)
    await expect(page).toHaveURL(/\/$/);
  });
});
