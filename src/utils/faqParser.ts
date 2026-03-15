/**
 * FAQ Parser — Extracts Q&A pairs from markdown content for FAQPage JSON-LD.
 *
 * Parses the standard post FAQ format:
 * ```
 * ## 🙋 자주 묻는 질문 (FAQ)
 * - **Q: Question text?**
 *   - A: Answer text.
 * ```
 */

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Extracts FAQ Q&A pairs from raw markdown string.
 * Returns an empty array if no FAQ section or no valid Q&A pairs are found.
 */
export function parseFaqFromMarkdown(rawMarkdown: string): FaqItem[] {
  // 1. Find the FAQ section (any heading containing "FAQ")
  const faqSectionRegex = /^##\s+.*FAQ.*$/m;
  const faqMatch = faqSectionRegex.exec(rawMarkdown);
  if (!faqMatch) return [];

  // 2. Extract content between FAQ heading and next heading (## or ---)
  const faqStart = faqMatch.index + faqMatch[0].length;
  const rest = rawMarkdown.slice(faqStart);
  const nextSectionMatch = rest.match(/^(?:##\s|---)/m);
  const faqContent = nextSectionMatch
    ? rest.slice(0, nextSectionMatch.index)
    : rest;

  // 3. Parse Q&A pairs
  const items: FaqItem[] = [];
  const qRegex = /- \*\*Q:\s*(.+?)\*\*/g;
  const lines = faqContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const qMatch = qRegex.exec(lines[i]);
    if (!qMatch) {
      qRegex.lastIndex = 0;
      continue;
    }
    qRegex.lastIndex = 0;

    const question = qMatch[1].trim();

    // Look for answer in subsequent lines
    let answer = "";
    for (let j = i + 1; j < lines.length; j++) {
      const aMatch = lines[j].match(/^\s+- A:\s*(.+)/);
      if (aMatch) {
        answer = aMatch[1].trim();
        // Collect multi-line answers (continuation lines with same indentation)
        for (let k = j + 1; k < lines.length; k++) {
          const contMatch = lines[k].match(/^\s{4,}(.+)/);
          if (contMatch && !lines[k].match(/- \*\*Q:/)) {
            answer += ` ${contMatch[1].trim()}`;
          } else {
            break;
          }
        }
        break;
      }
      // Stop if we hit another Q or empty section
      if (lines[j].match(/- \*\*Q:/) || lines[j].match(/^##\s/)) break;
    }

    // Strip markdown formatting from answer for clean JSON-LD
    const cleanAnswer = answer
      .replace(/\*\*(.+?)\*\*/g, "$1") // bold
      .replace(/\*(.+?)\*/g, "$1") // italic
      .replace(/`(.+?)`/g, "$1") // code
      .replace(/\[(.+?)\]\(.+?\)/g, "$1") // links
      .replace(/<[^>]+>/g, ""); // HTML tags

    if (question && cleanAnswer) {
      items.push({ question, answer: cleanAnswer });
    }
  }

  return items;
}
