import { expect, test } from "@playwright/test";

test("homepage has title and hero section", async ({ page }) => {
  // Navigate to the Korean homepage (since root redirects there based on language)
  await page.goto("/ko/");

  // Expect a title "to contain" a substring. The layout probably sets something like "HOME | Hello Prompt"
  await expect(page).toHaveTitle(/Hello Prompt/i);

  // Check if the hero title "HELLO PROMPT" is visible
  const heroTitle = page.locator("h1.ai-title");
  await expect(heroTitle).toHaveText("HELLO PROMPT");

  // Check if the slogan is visible
  const slogan = page.locator("p.subtitle");
  await expect(slogan).toBeVisible();
  await expect(slogan).toContainText(
    "AI가 낯선 당신을 위한 가장 친절한 가이드",
  );
});

test("homepage root redirects to language specific page", async ({ page }) => {
  await page.goto("/");
  // Wait for the redirect to happen, checking if URL contains a language code like /ko/
  await expect(page).toHaveURL(/\/(ko|en|ja|zh|es|fr|de|pt|ru|it)\//);
});
