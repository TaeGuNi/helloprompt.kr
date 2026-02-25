import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("Extracting failed files from git staged QA...");
let files = [];
try {
  const output = execSync(
    'npx tsx scripts/qa/check.ts $(git diff --name-only --cached) | grep "❌" -B 1 | grep "📄" | awk \'{print $2}\'',
    { encoding: "utf-8" },
  );
  files = output
    .trim()
    .split("\n")
    .filter((f) => f);
} catch (e) {
  // execSync might throw if grep exits with 1
  if (e.stdout) {
    const output = e.stdout.toString();
    files = output
      .trim()
      .split("\n")
      .filter((f) => f);
  }
}

if (files.length === 0) {
  console.log("No failed files found! Exiting.");
  process.exit(0);
}

// Ensure the paths are relative to the execution context or correct
const pendingFiles = files.map((f) => path.resolve(process.cwd(), f));

const queue = {
  completed: [],
  pending: pendingFiles,
  errors: [],
};

fs.writeFileSync("rewrite-queue.json", JSON.stringify(queue, null, 2), "utf-8");
console.log(
  `✅ rewrite-queue.json initialized with ${pendingFiles.length} files.`,
);
