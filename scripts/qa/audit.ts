import fs from "fs/promises";
import path from "path";

export interface AuditIssue {
  code: string;
  message: string;
  severity: "warning" | "error";
}

export interface AuditResult {
  path: string;
  passed: boolean;
  issues: AuditIssue[];
}

const CHECKS = {
  HAS_TABLE_STYLE: /\|\s*난이도\s*\|\s*효과성\s*\|\s*활용도\s*\|/,
  HAS_INSIGHT: /##\s*💡\s*작성자\s*코멘트/,
  HAS_FAQ: /##\s*🙋\s*자주\s*묻는\s*질문/,
  KOREAN_TEXT: /[가-힣]+/,
  HAS_DATE: /^date:\s*["']?(\d{4}-\d{2}-\d{2}(?:T.*)?)/m,
};

export async function auditFile(filePath: string): Promise<AuditResult> {
  const issues: AuditIssue[] = [];
  const fullPath = path.resolve(filePath);

  try {
    const content = await fs.readFile(fullPath, "utf-8");
    const isKorean =
      !filePath.includes("/en/") &&
      !filePath.includes("/ja/") &&
      !filePath.includes("/zh/") &&
      !filePath
        .split("/")
        .some((part) => ["es", "fr", "de", "it", "pt", "ru"].includes(part));

    // 1. Structure Check (Table vs List)
    if (CHECKS.HAS_TABLE_STYLE.test(content)) {
      issues.push({
        code: "STYLE_TABLE",
        message:
          "Detected old table style. Use bullet list with emojis (📊, ⚡️, 🛠️) for mobile readability.",
        severity: "error",
      });
    }

    // 2. Frontmatter Check (Date)
    if (!CHECKS.HAS_DATE.test(content)) {
      issues.push({
        code: "MISSING_DATE",
        message: 'Missing "date" field in frontmatter. Required for build.',
        severity: "error",
      });
    }

    // 3. Section Check (Korean Source Only)
    // Exclude static pages (about, contact, terms, privacy) from Insight/FAQ checks
    const isStaticPage = [
      "about.md",
      "contact.md",
      "terms.md",
      "privacy.md",
    ].some((f) => filePath.endsWith(f));

    if (isKorean && !isStaticPage) {
      if (!CHECKS.HAS_INSIGHT.test(content)) {
        issues.push({
          code: "MISSING_INSIGHT",
          message:
            'Missing "💡 작성자 코멘트 (Insight)" section. Required for AdSense quality.',
          severity: "error",
        });
      }
      if (!CHECKS.HAS_FAQ.test(content)) {
        issues.push({
          code: "MISSING_FAQ",
          message:
            'Missing "🙋 자주 묻는 질문 (FAQ)" section. Required for user utility.',
          severity: "warning",
        });
      }
    }

    // 4. Localization Check (Non-Korean)
    if (!isKorean) {
      // Heuristic: If more than 5 distinct Korean words are found, it's likely a bad translation.
      const koMatches =
        content.match(new RegExp(CHECKS.KOREAN_TEXT, "g")) || [];
      if (koMatches.length > 5) {
        issues.push({
          code: "LOC_KOREAN_REMAINS",
          message: `Detected ${koMatches.length} Korean text fragments. Translation might be incomplete.`,
          severity: "error",
        });
      }
    }

    return {
      path: filePath,
      passed: !issues.some((i) => i.severity === "error"),
      issues,
    };
  } catch (error) {
    return {
      path: filePath,
      passed: false,
      issues: [
        {
          code: "READ_ERROR",
          message: `Failed to read file: ${error.message}`,
          severity: "error",
        },
      ],
    };
  }
}
