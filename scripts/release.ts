import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

try {
  // 1. Run standard-version
  console.log("\n📦 Running standard-version...");
  execSync("npx standard-version", { stdio: "inherit" });

  // 2. Push to develop with tags
  console.log("\n🚀 Pushing changes to origin/develop...");
  execSync("git push --follow-tags origin develop", { stdio: "inherit" });

  // 3. Get updated version
  const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));
  const version = packageJson.version;
  const title = `chore(release): v${version}`;
  const body = `🚀 Automated release PR for version v${version}\n\nThis PR merges the latest changes from develop to main for production deployment.`;

  // 4. Create PR using GitHub CLI
  console.log("\n🔀 Creating Pull Request (develop -> main)...");
  try {
    // Check if PR already exists
    const existingPr = execSync(
      "gh pr list --base main --head develop --json url --state open",
      { encoding: "utf-8" },
    );

    if (JSON.parse(existingPr).length > 0) {
      console.log(
        "⚠️  A PR from develop to main already exists. Skipping creation.",
      );
    } else {
      execSync(
        `gh pr create --base main --head develop --title "${title}" --body "${body}"`,
        { stdio: "inherit" },
      );
      console.log("✅ PR Created Successfully!");
    }
  } catch (err) {
    console.error(
      "❌ Failed to create PR via GitHub CLI. Please check your 'gh' auth status.",
    );
    console.error(err);
  }
} catch (error) {
  console.error("\n❌ Release script failed.");
  console.error(error);
  process.exit(1);
}
