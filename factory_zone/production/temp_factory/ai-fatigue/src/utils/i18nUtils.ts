import { uiStrings } from "./ui-translation";

/**
 * URL 경로와 Frontmatter 정보를 기반으로 현재 언어를 결정합니다.
 * @param pathname URL 경로 (예: '/en/posts/abc', '/posts/abc')
 * @param frontmatterLang Frontmatter에 명시된 언어 (선택적)
 * @returns 결정된 언어 코드 ('ko', 'en', 'ja' 등)
 */
export function determineCurrentLang(
  pathname: string,
  frontmatterLang?: string,
): string {
  // 1. Frontmatter에 언어가 명시되어 있으면 최우선 적용
  if (frontmatterLang) {
    return frontmatterLang;
  }

  // 2. URL 경로에서 언어 코드 추출
  // 예: "/en/posts/..." -> ["", "en", "posts", ...]
  const pathSegments = pathname.split("/").filter(Boolean);
  const potentialLang = pathSegments[0];

  // 3. 추출된 코드가 유효한 언어 코드인지 확인 (uiStrings 키 기준)
  if (potentialLang && uiStrings[potentialLang]) {
    return potentialLang;
  }

  // 4. 기본값: 한국어
  return "ko";
}
