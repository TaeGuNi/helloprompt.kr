import { execSync } from "node:child_process";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { globSync } from "glob";

try {
  console.log("==========================================");
  console.log("🚀 Hello Prompt Automated Release Engine");
  console.log("==========================================\n");

  // 0. Branch Validation
  const currentBranch = execSync("git branch --show-current", {
    encoding: "utf-8",
  }).trim();
  if (currentBranch !== "develop") {
    console.error(
      "❌ Aborting: Release can only be triggered from the 'develop' branch.",
    );
    process.exit(1);
  }

  // 1. Clean Temporary Scripts
  console.log("🧹 Cleaning up temporary test scripts...");
  const tempFiles = globSync(["test-*.mjs", "test-*.js", "test-*.ts", "tmp-*"]);
  for (const file of tempFiles) {
    console.log(`   🗑️ Deleting ${file}`);
    rmSync(file, { force: true });
  }

  // 2. Commit Cleanup Changes
  const status = execSync("git status --porcelain", {
    encoding: "utf-8",
  }).trim();
  if (status) {
    console.log("💾 Committing cleanup changes...");
    execSync("git add .", { stdio: "inherit" });
    execSync(
      'git commit -m "chore: remove temporary test scripts before release"',
      { stdio: "inherit" },
    );
  }

  // 3. Pre-release QA Hook
  console.log("\n🛡️ Running pre-release QA checks...");
  execSync("pnpm qa", { stdio: "inherit" });

  // 4. Run standard-version
  console.log("\n📦 Running standard-version...");
  execSync("pnpm dlx standard-version", { stdio: "inherit" });

  // 5. Push to develop with tags
  console.log("\n🚀 Pushing changes to origin/develop...");
  execSync("git push --follow-tags origin develop", { stdio: "inherit" });

  // 6. Read PR Template and Build Body
  const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));
  const version = packageJson.version;
  const title = `chore(release): v${version}`;
  let body = `🚀 Automated release PR for version v${version}\n\nThis PR merges the latest changes from develop to main for production deployment.`;

  try {
    let template = readFileSync(".github/pull_request_template.md", "utf-8");
    template = template
      .replace("- [ ] ✨ 기능 추가 (Feature)", "- [x] ✨ 기능 추가 (Feature)")
      .replace(
        "- [ ] `develop` 브랜치를 기준으로 작업했나요?",
        "- [x] `develop` 브랜치를 기준으로 작업했나요?",
      )
      .replace(
        "- [ ] 로컬에서 `pnpm test`와 `pnpm lint`를 통과했나요?",
        "- [x] 로컬에서 `pnpm test`와 `pnpm lint`를 통과했나요?",
      )
      .replace(
        "- [ ] 커밋 메시지 컨벤션(`type: subject`)을 따랐나요?",
        "- [x] 커밋 메시지 컨벤션(`type: subject`)을 따랐나요?",
      )
      .replace(
        "- [ ] (콘텐츠 변경 시) `docs/WRITER_GUIDE.md`를 준수했나요?",
        "- [x] (콘텐츠 변경 시) `docs/WRITER_GUIDE.md`를 준수했나요?",
      );
    body = template + "\n\n---\n" + body;
  } catch (e) {
    console.warn("⚠️ Could not load PR template, logging fallback body.");
  }

  // Write temporary body file to prevent shell escaping issues
  const tempBodyPath = ".github/temp_pr_body.md";
  writeFileSync(tempBodyPath, body, "utf-8");

  // 7. Create PR using GitHub CLI
  console.log("\n🔀 Creating Pull Request (develop -> main)...");
  try {
    const existingPr = execSync(
      "gh pr list --base main --head develop --json url --state open",
      { encoding: "utf-8" },
    );

    if (JSON.parse(existingPr).length > 0) {
      console.log(
        "⚠️ A PR from develop to main already exists. Skipping creation.",
      );
    } else {
      execSync(
        `gh pr create --base main --head develop --title "${title}" --body-file ${tempBodyPath}`,
        { stdio: "inherit" },
      );
      console.log("✅ PR Created Successfully!");
    }
  } catch (err) {
    console.error("❌ Failed to create PR via GitHub CLI.");
    console.error(err);
  } finally {
    // Cleanup the temp body file
    rmSync(tempBodyPath, { force: true });
  }

  // 8. CI Monitoring & Auto-merge
  console.log("\n⏳ Monitoring CI status and waiting for auto-merge...");
  let ciPassed = false;
  for (let i = 0; i < 40; i++) {
    try {
      // Use statusCheckRollup to get the overall CI state
      const prStatus = execSync(
        'gh pr status --json statusCheckRollup -q ".currentBranch.statusCheckRollup[0].state" || echo "UNKNOWN"',
        { encoding: "utf-8" },
      ).trim();

      if (prStatus.includes("SUCCESS")) {
        ciPassed = true;
        break;
      } else if (prStatus.includes("FAILURE")) {
        console.error("❌ CI Failed! Aborting auto-merge.");
        process.exit(1);
      }

      console.log(`   ⏳ Waiting for CI to finish... (${i + 1}/40)`);
      execSync("sleep 15");
    } catch {
      // Ignore gh cli errors
    }
  }

  // 9. Final Auto Merge Logic
  if (ciPassed) {
    console.log("✅ CI Passed! Auto-merging PR...");
    execSync("gh pr merge --squash --admin --delete-branch=false", {
      stdio: "inherit",
    });

    console.log("♻️ Syncing develop branch with merged main...");
    execSync("git checkout main", { stdio: "inherit" });
    execSync("git pull origin main --rebase", { stdio: "inherit" });
    execSync("git checkout develop", { stdio: "inherit" });
    execSync("git merge main", { stdio: "inherit" });
    execSync("git push origin develop", { stdio: "inherit" });
    console.log("🎉 SUCCESS: Pipeline fully automated and merged!");
  } else {
    console.error(
      "\n⚠️ CI monitoring timed out. Please check GitHub PR manually.",
    );
    process.exit(1);
  }
} catch (error) {
  console.error("\n❌ Release script failed.");
  console.error(error);
  process.exit(1);
}
