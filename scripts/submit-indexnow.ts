import { execSync } from "node:child_process";

// ─── Constants ───────────────────────────────────────────────────────────────

const SITE = "https://helloprompt.kr";
const INDEXNOW_KEY = "effa76f9626d1994c2835cb8fc876ed1";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";
const LANGUAGES = ["ko", "en", "de", "es", "fr", "it", "ja", "pt", "ru", "zh"];

const DRY_RUN = process.argv.includes("--dry-run");

// ─── Core Functions ──────────────────────────────────────────────────────────

/**
 * Converts a Markdown content path to its corresponding site URLs.
 * One .md file can map to multiple URLs (one per language or just its own language).
 *
 * Strategy:
 *  - If the changed file is a Korean original (index.ko.md), submit ALL 10 language URLs
 *    because the content has fundamentally changed and translations will follow.
 *  - If the changed file is a specific translation (index.en.md), submit only that language URL.
 *
 * @example
 *  "src/content/posts/2026/03/slug/index.ko.md"
 *    → ["https://helloprompt.kr/ko/posts/2026/03/slug",
 *       "https://helloprompt.kr/en/posts/2026/03/slug", ...]
 *
 *  "src/content/posts/2026/03/slug/index.en.md"
 *    → ["https://helloprompt.kr/en/posts/2026/03/slug"]
 */
export function mdPathToUrls(filePath: string): string[] {
  // Match: src/content/posts/YYYY/MM/slug/index.LANG.md
  const match = filePath.match(
    /src\/content\/posts\/(\d{4})\/(\d{2})\/([^/]+)\/index\.([a-z]{2})\.md$/,
  );
  if (!match) return [];

  const [, year, month, slug, lang] = match;
  const basePath = `/posts/${year}/${month}/${slug}`;

  // Korean original → submit all languages
  if (lang === "ko") {
    return LANGUAGES.map((l) => `${SITE}/${l}${basePath}`);
  }

  // Specific translation → submit only that language
  return [`${SITE}/${lang}${basePath}`];
}

/**
 * Extracts changed .md file paths from the latest Git commit(s).
 * Uses `git diff` against the previous tag or HEAD~1 as fallback.
 */
function getChangedMdFiles(): string[] {
  let diffRef: string;

  try {
    // Try to diff against the latest tag (release scenario)
    const latestTag = execSync("git describe --tags --abbrev=0 HEAD~1", {
      encoding: "utf-8",
    }).trim();
    diffRef = latestTag;
  } catch {
    // Fallback: diff against parent commit
    diffRef = "HEAD~1";
  }

  const raw = execSync(`git diff --name-only ${diffRef} HEAD`, {
    encoding: "utf-8",
  }).trim();

  if (!raw) return [];

  return raw
    .split("\n")
    .filter((f) => f.startsWith("src/content/posts/") && f.endsWith(".md"));
}

/**
 * Submits a list of URLs to the IndexNow API.
 * Batch limit: 10,000 URLs per request (IndexNow spec).
 */
async function submitToIndexNow(urls: string[]): Promise<void> {
  if (urls.length === 0) {
    console.log("📭 No URLs to submit. Skipping IndexNow.");
    return;
  }

  const payload = {
    host: "helloprompt.kr",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  if (DRY_RUN) {
    console.log("🧪 [DRY RUN] Would submit the following payload:");
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  console.log(`📡 Submitting ${urls.length} URL(s) to IndexNow...`);

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  // IndexNow returns 200 (OK) or 202 (Accepted) on success
  if (response.ok || response.status === 202) {
    console.log(
      `✅ IndexNow accepted: ${response.status} ${response.statusText}`,
    );
  } else {
    const text = await response.text();
    console.error(
      `❌ IndexNow rejected: ${response.status} ${response.statusText}`,
    );
    console.error(`   Response: ${text}`);
    // Non-fatal: don't crash the release pipeline over IndexNow failures
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📡 IndexNow URL Submission");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  const changedFiles = getChangedMdFiles();
  console.log(`📄 Changed .md files: ${changedFiles.length}`);

  const urls = [...new Set(changedFiles.flatMap(mdPathToUrls))];
  console.log(`🔗 Unique URLs to submit: ${urls.length}`);

  if (urls.length > 0) {
    for (const url of urls) {
      console.log(`   → ${url}`);
    }
  }

  console.log("");
  await submitToIndexNow(urls);

  console.log("\n✅ IndexNow submission complete.");
}

main().catch((err) => {
  console.error("❌ IndexNow submission failed:", err);
  // Exit 0 intentionally: IndexNow failure should NOT block the release pipeline
  process.exit(0);
});
