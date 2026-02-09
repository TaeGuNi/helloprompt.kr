import { glob } from "glob";
import { auditFile } from "./audit.js";
import path from "path";

async function runQa() {
  const args = process.argv.slice(2);
  let files: string[] = [];

  // If args provided (e.g., from lint-staged), use them. Otherwise scan all.
  if (args.length > 0) {
    files = args;
  } else {
    console.log("🔍 Scanning all markdown posts...");
    files = await glob("src/pages/**/*.md", { ignore: "src/pages/privacy.md" });
  }

  console.log(`Checking ${files.length} files...`);

  let errorCount = 0;
  let warningCount = 0;

  for (const file of files) {
    const result = await auditFile(file);
    if (!result.passed || result.issues.length > 0) {
      if (result.issues.length > 0) {
        console.log(`\n📄 ${path.relative(process.cwd(), file)}`);
        result.issues.forEach((issue) => {
          const icon = issue.severity === "error" ? "❌" : "⚠️";
          console.log(`   ${icon} [${issue.code}] ${issue.message}`);
          if (issue.severity === "error") errorCount++;
          else warningCount++;
        });
      }
    }
  }

  console.log("\n--------------------------------------------------");
  if (errorCount > 0) {
    console.error(
      `🚫 QA Failed: ${errorCount} Errors, ${warningCount} Warnings.`,
    );
    process.exit(1);
  } else {
    console.log(`✅ QA Passed! (${files.length} files checked)`);
    if (warningCount > 0) console.log(`   (with ${warningCount} warnings)`);
    process.exit(0);
  }
}

runQa().catch((e) => {
  console.error(e);
  process.exit(1);
});
