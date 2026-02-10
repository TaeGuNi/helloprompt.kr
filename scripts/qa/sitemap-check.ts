import fs from "fs/promises";
import path from "path";

const DIST_DIR = "dist";
const SITE_URL = "https://helloprompt.kr";

async function checkSitemap() {
  console.log("🔍 Checking Sitemap & Robots.txt configuration...");

  try {
    // 1. Check Build Output
    await fs.access(DIST_DIR);
  } catch {
    console.error(
      '❌ Build output (dist/) not found. Please run "pnpm build" first.',
    );
    process.exit(1);
  }

  // 2. Check robots.txt
  const robotsPath = path.join(DIST_DIR, "robots.txt");
  try {
    const robotsContent = await fs.readFile(robotsPath, "utf-8");
    console.log("✅ robots.txt found.");

    if (
      robotsContent.includes(`Sitemap: ${SITE_URL}/sitemap-index.xml`) ||
      robotsContent.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)
    ) {
      console.log("✅ Sitemap declaration found in robots.txt.");
    } else {
      console.warn(
        "⚠️ Sitemap declaration MISSING in robots.txt. Google might not find it.",
      );
      console.log(`   Expected: Sitemap: ${SITE_URL}/sitemap-index.xml`);
    }
  } catch {
    console.error("❌ robots.txt not found in dist/.");
  }

  // 3. Check Sitemap Index
  const sitemapIndexPath = path.join(DIST_DIR, "sitemap-index.xml");
  const sitemapPath = path.join(DIST_DIR, "sitemap-0.xml"); // Astro sitemap split

  try {
    // Try index first
    await fs.access(sitemapIndexPath);
    console.log("✅ sitemap-index.xml found.");
  } catch {
    try {
      // Try direct sitemap
      await fs.access(sitemapPath);
      console.log("✅ sitemap-0.xml found (Single file sitemap).");
    } catch {
      console.error("❌ No sitemap XML found in dist/.");
      process.exit(1);
    }
  }

  console.log("\n✨ Sitemap check complete. Ready for GSC submission!");
}

checkSitemap().catch(console.error);
