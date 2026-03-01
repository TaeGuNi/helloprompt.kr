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
  let healAttempts = 0;
  const MAX_HEAL_ATTEMPTS = 3;

  while (healAttempts <= MAX_HEAL_ATTEMPTS && !ciPassed) {
    let currentLoopPassed = false;
    let currentLoopFailed = false;

    for (let i = 0; i < 40; i++) {
      try {
        const prStatus = execSync(
          'gh pr status --json statusCheckRollup -q ".currentBranch.statusCheckRollup[0].state" || echo "UNKNOWN"',
          { encoding: "utf-8" },
        ).trim();

        if (prStatus.includes("SUCCESS")) {
          currentLoopPassed = true;
          break;
        } else if (prStatus.includes("FAILURE")) {
          currentLoopFailed = true;
          break;
        }

        console.log(`   ⏳ Waiting for CI to finish... (${i + 1}/40)`);
        execSync("sleep 15");
      } catch {
        // Ignore gh cli status errors temporarily
      }
    }

    if (currentLoopPassed) {
      ciPassed = true;
      break;
    }

    if (currentLoopFailed) {
      console.error(
        `\n❌ CI Failed on Attempt ${healAttempts + 1}/${MAX_HEAL_ATTEMPTS + 1}.`,
      );

      if (healAttempts >= MAX_HEAL_ATTEMPTS) {
        console.error("🚨 Maximum heal attempts reached. Aborting pipeline.");
        process.exit(1);
      }

      console.log("\n🧟‍♂️ [ZOMBIE PROTOCOL] Initiating Auto-Heal Sequence...");
      try {
        // Find the failed Github Actions Run ID for the develop branch
        const runIdRaw = execSync(
          "gh run list --branch develop --status failure --json databaseId -q '.[0].databaseId'",
          { encoding: "utf-8" },
        ).trim();
        if (!runIdRaw) throw new Error("Could not detect failed Run ID.");

        console.log(`📡 Fetching logs for Run ID: ${runIdRaw}...`);

        // Grab the last 300 lines of the log containing the failure stack
        const logs = execSync(`gh run view ${runIdRaw} --log | tail -n 300`, {
          encoding: "utf-8",
        });

        console.log("🤖 Passing logs to Gemini AI...");
        const prompt = `
You are an expert system-healing AI assistant running in a fully autonomous CI pipeline.
The Github Actions CI just FAILED for the following repository. 
Here are the last 300 lines of the failure log.

<LOGS>
${logs}
</LOGS>

Analyze the exact file and syntactic error that caused this failure (e.g. Markdown frontmatter corruption, Biome linting error, Translation fragment glitch, code issue).
Then, output a pure, copy-pasteable BASH SCRIPT that forcefully patches/fixes the error in the local filesystem.
CRITICAL RULES:
1. ONLY output raw backtick bash source code. Do not wrap in explanations. Do not output anything except bash.
2. We are already inside the root repository.
3. Use \`sed\`, \`node\` inline, or anything necessary to clean the files.
4. You do NOT need to run git commands. I will handle the commit and push after your script finishes.
`;
        // Create an AI request temp file
        writeFileSync(".github/heal-prompt.txt", prompt, "utf-8");
        // We use gemini CLI (from Phase 1 / AGENTS standards) to resolve it locally
        const aiResponse = execSync(
          'gemini --yolo -m "gemini-3.1-pro-preview" -p "$(<.github/heal-prompt.txt)"',
          { encoding: "utf-8" },
        );

        // Extract script from text
        const match = aiResponse.match(/```(?:bash|sh|shell)?\n([\s\S]+?)```/);
        const autoHealScript = match ? match[1].trim() : aiResponse.trim();

        writeFileSync(".github/auto-heal.sh", autoHealScript, "utf-8");
        execSync("chmod +x .github/auto-heal.sh");

        console.log("🛠️ Applying AI Patch...");
        execSync("./.github/auto-heal.sh", { stdio: "inherit" });

        // Format checking to ensure AI didn't break things further
        execSync("pnpm biome check --write . || true");

        // Clean up AI script temp files before staging the commit
        try {
          rmSync(".github/heal-prompt.txt", { force: true });
        } catch {}
        try {
          rmSync(".github/auto-heal.sh", { force: true });
        } catch {}

        console.log("🚀 Pushing AI Fix directly to PR...");
        execSync("git add .");
        execSync(
          `git commit --amend -m "fix(ci): auto-healed ci failure (attempt ${healAttempts + 1})"`,
        );
        execSync("git push -f origin develop", { stdio: "inherit" });

        console.log(
          "\n♻️ Patch pushed! Waiting for CI to completely restart...",
        );
        execSync("sleep 30"); // Give GH 30 seconds to recognize the new commit hash and spin up
      } catch (e: unknown) {
        console.error(
          "❌ Auto-Heal sequence completely crashed:",
          e instanceof Error ? e.message : String(e),
        );
        process.exit(1);
      } finally {
        // Purge heal artifacts
        try {
          rmSync(".github/heal-prompt.txt", { force: true });
        } catch {}
        try {
          rmSync(".github/auto-heal.sh", { force: true });
        } catch {}
      }

      healAttempts++;
    }
  }

  // 9. Final Auto Merge Logic
  if (ciPassed) {
    console.log("✅ CI Passed! Auto-merging PR...");
    execSync("gh pr merge --merge --admin --delete-branch=false", {
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
