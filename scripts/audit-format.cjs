const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

function auditFormat() {
  const rootDir = path.join(process.cwd(), "src/pages");
  // 모든 언어의 posts 디렉토리 내 md 파일 검색
  const files = globSync(path.join(rootDir, "**/posts/*.md"));

  console.log(
    `🔍 Auditing ${files.length} files (All Languages) for blockquote misuse...`,
  );

  let violationCount = 0;
  let filesWithViolations = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");

    let currentHeader = "";
    let fileViolations = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // 헤더 추적
      if (line.startsWith("#")) {
        currentHeader = line.replace(/^#+\s*/, "").toLowerCase();
        continue;
      }

      // 인용구(blockquote) 발견
      if (line.startsWith(">")) {
        // 허용 키워드 (다국어 대응 필요하지만, 일단 주요 키워드로 필터링)
        // 번역 파일들은 헤더도 번역되어 있을 수 있음.
        // 하지만 템플릿 구조상 'Basic', 'Pro'는 영어로 유지되는 경우가 많음.
        // 만약 번역되었다면 감지 못할 수 있으니 로그를 보고 판단.
        const isAllowedSection =
          currentHeader.includes("basic") ||
          currentHeader.includes("pro") ||
          currentHeader.includes("prompt") ||
          currentHeader.includes("기본") ||
          currentHeader.includes("전문가") ||
          currentHeader.includes("프롬프트") ||
          currentHeader.includes("request") || // 영어 헤더 대응
          currentHeader.includes("role"); // 영어 헤더 대응

        if (!isAllowedSection) {
          fileViolations.push({
            line: i + 1,
            section: currentHeader || "(Introduction)",
            content: line.substring(0, 40) + "...",
          });
        }
      }
    }

    if (fileViolations.length > 0) {
      violationCount += fileViolations.length;
      filesWithViolations.push({
        file: path.relative(process.cwd(), file), // 경로를 짧게 표시
        violations: fileViolations,
      });
    }
  }

  console.log(`\n📊 Audit Result:`);
  console.log(`- Total Files: ${files.length}`);
  console.log(`- Files with Issues: ${filesWithViolations.length}`);
  console.log(`- Total Misused Blockquotes: ${violationCount}`);

  if (filesWithViolations.length > 0) {
    console.log(`\n📋 Top 10 Violators:`);
    filesWithViolations.slice(0, 10).forEach((f) => {
      console.log(`\n📄 ${f.file}:`);
      f.violations.slice(0, 2).forEach((v) => {
        console.log(`  L${v.line} [${v.section}]: ${v.content}`);
      });
      if (f.violations.length > 2)
        console.log(`  ... (+${f.violations.length - 2})`);
    });

    if (filesWithViolations.length > 10) {
      console.log(`\n... and ${filesWithViolations.length - 10} more files.`);
    }
  } else {
    console.log("\n✅ All files are clean!");
  }
}

auditFormat();
