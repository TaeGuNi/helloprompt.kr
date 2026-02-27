import type { Page } from "@playwright/test";

// [💡 Core Ref Injector (Playwright Context - Ultimate ROI & Performance)]
export const generateRefMap = () => {
  const interactableSelectors =
    'a[href], button, input, textarea, select, iframe, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"])';
  const elements = new Set<Element>();

  // 1. Recursive DOM traversal function (Shadow DOM 투과)
  const traverse = (node: Document | Element | ShadowRoot) => {
    if (!node) return;
    if (
      node.nodeType === 1 &&
      (node as Element).matches &&
      (node as Element).matches(interactableSelectors)
    )
      elements.add(node as Element);
    if ((node as Element).shadowRoot) traverse((node as Element).shadowRoot!);
    for (const child of Array.from(node.childNodes)) traverse(child as Element);
  };

  traverse(document);

  let refCounter = 0;
  const refMap = [];
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  // 🚨 토큰 다이어트 한계: 무의미한 수백개 요소 수집 차단
  const MAX_ELEMENTS = 150;

  const elArray = Array.from(elements);

  for (let i = 0; i < elArray.length; i++) {
    if (refCounter >= MAX_ELEMENTS) {
      refMap.push(
        `\n... [Warning: Max Limits Hit (${MAX_ELEMENTS}). Omitted trailing nodes. Please Scope Down your search.]`,
      );
      break;
    }
    const el = elArray[i] as HTMLElement;

    // 2. 가시성 1차 초고속 필터링 (Layout Thrashing 방지)
    const style = window.getComputedStyle(el);
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.opacity === "0"
    )
      continue;

    // 3. 2차 정밀 스크린 판별
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || rect.x < -9999) continue;

    // [힌트 1] 스크롤 밖 (Off-Screen) 판단
    const isOffScreen =
      rect.y > viewportHeight || rect.x > viewportWidth ? "[OffScreen] " : "";

    // [힌트 2] 요소가 다른 모달/오버레이에 가려져 있는지 (Obscured) Z-Index 장애물 판별
    let isObscured = "";
    if (!isOffScreen) {
      const centerX = rect.x + rect.width / 2;
      const centerY = rect.y + rect.height / 2;
      const topEl = document.elementFromPoint(centerX, centerY);
      if (topEl && topEl !== el && !el.contains(topEl)) {
        isObscured = "[Obscured] ";
      }
    }

    // 4. 고유 Ref ID 부여
    const refId = `@e${refCounter++}`;
    el.setAttribute("data-agent-ref", refId);

    const tagName = el.tagName.toLowerCase();

    // 5. iFrame(Cross-Origin) 인지 힌트
    if (tagName === "iframe") {
      const src = el.getAttribute("src") || "unknown";
      refMap.push(
        `[${refId}] ${isOffScreen}${isObscured}iframe[src="${src}"] "External Frame (Requires Context Switch)"`,
      );
      continue;
    }

    // 6. 노이즈 없는 라벨(Label) 및 [힌트 3] 아이콘 버튼 텍스트 추론
    const rawLabel =
      el.textContent ||
      el.getAttribute("aria-label") ||
      el.getAttribute("placeholder") ||
      el.getAttribute("name") ||
      "";
    let label = rawLabel.replace(/\s+/g, " ").trim();

    if (!label) {
      const clue = el.id || el.className || "IconOnly";
      label = `[NoText: ${clue.substring(0, 15)}]`;
    } else if (label.length > 50) {
      label = `${label.substring(0, 47)}...`;
    }

    // 7. 타입 속성 부착 시그니처 조립
    const typeAttr = el.hasAttribute("type")
      ? `[type="${el.getAttribute("type")}"]`
      : "";

    refMap.push(
      `[${refId}] ${tagName}${typeAttr} ${isOffScreen}${isObscured}"${label}"`,
    );
  }

  return refMap.join("\n");
};

export const refAction = (page: Page) => {
  return {
    click: async (refId: string) => {
      try {
        await page
          .locator(`[data-agent-ref="${refId}"]`)
          .click({ timeout: 5000 });
      } catch (_e) {
        console.warn(
          `[AgentHelper] Click failed for ${refId}. Regenerating RefMap & Retrying...`,
        );
        // Retry logic encapsulaton as requested by protocol
        await page.evaluate(generateRefMap);
        await page
          .locator(`[data-agent-ref="${refId}"]`)
          .click({ timeout: 5000 });
      }
    },
    fill: async (refId: string, text: string) => {
      try {
        await page
          .locator(`[data-agent-ref="${refId}"]`)
          .fill(text, { timeout: 5000 });
      } catch (_e) {
        console.warn(
          `[AgentHelper] Fill failed for ${refId}. Regenerating RefMap & Retrying...`,
        );
        await page.evaluate(generateRefMap);
        await page
          .locator(`[data-agent-ref="${refId}"]`)
          .fill(text, { timeout: 5000 });
      }
    },
    focus: async (refId: string) => {
      try {
        await page
          .locator(`[data-agent-ref="${refId}"]`)
          .focus({ timeout: 5000 });
      } catch (_e) {
        console.warn(
          `[AgentHelper] Focus failed for ${refId}. Regenerating RefMap & Retrying...`,
        );
        await page.evaluate(generateRefMap);
        await page
          .locator(`[data-agent-ref="${refId}"]`)
          .focus({ timeout: 5000 });
      }
    },
  };
};
