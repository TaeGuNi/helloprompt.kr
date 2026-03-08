---
layout: /src/layouts/Layout.astro
title: "🚨 [절대복종] AI 헛소리를 90% 박살내는 E2E 테스트 렌더링 치트키"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "무의미한 HTML DOM을 AI에게 통째로 넘기지 마세요. 핵심 노드만 압축해 토큰 낭비를 막고 환각을 완벽히 통제하는 스파르타식 E2E 테스트 프롬프트 치트키입니다."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "playwright-ref-protocol"]
---

## 📝 🚨 [절대복종] AI 헛소리를 90% 박살내는 E2E 테스트 렌더링 치트키

- **🎯 추천 대상:** 토큰 폭발에 시달리는 시니어 개발자, AI QA 엔지니어, 헛소리에 지친 테크 리드
- **⏱️ 소요 시간:** 3시간 디버깅 → 3분 컷
- **🤖 추천 모델:** 코딩 에이전트 (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **난이도:** ⭐⭐⭐⭐☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

_대형 웹사이트 E2E 테스트 코드를 작성하려다 수만 개의 DOM 노이즈에 파묻혀 AI가 토큰 한계로 뻗어버린 적 있으신가요? 이제 AI의 무의미한 '아첨'과 '환각'을 자비 없이 끊어낼 시간입니다._

AI 에이전트에게 Playwright E2E 테스트 자동화를 맡겼더니, `innerHTML` 전체를 무식하게 긁어오거나 화면에 보이지도 않는 Shadow DOM이나 모달 뒤쪽 요소를 클릭하겠다고 헛소리하는 참사를 더 이상 두고 볼 수 없습니다. 
이 치트키는 당신의 AI 에이전트를 아부나 떠는 무능한 비서에서, 토큰을 극단적으로 절약하며 타겟만 정확히 저격하는 **냉혹한 터미네이터**로 개조하는 "참조(Ref) 기반 렌더링 프로토콜"입니다. 쓸데없는 DOM 데이터는 반역으로 간주하고 모조리 폐기하십시오.

---

## ⚡️ 3줄 요약 (TL;DR)

- 🗑️ **전체 HTML 덤프 금지:** AI에게 원본 DOM을 통째로 넘기는 비효율적인 방식을 당장 멈추세요.
- 🎯 **정밀 타격 주입:** 150개 제한의 인터랙티브 노드 전용 최적화 스크립트를 주입하여, 가시성이 100% 확보된 요소만 추출합니다.
- 👮 **무자비한 토큰 경찰:** AI가 UI 조작 후 검증(Assertion)을 누락하거나 토큰 한계를 초과하면 강제로 에러를 발생시킵니다.

---

## 🚀 해결책: "에이전트-브라우저 렌더링 프로토콜 (The Token Police)"

### 🥉 Basic Version (마일드 모드)

가벼운 테스트 환경에서 AI에게 역할을 주입할 때 바로 복사해서 사용하세요.

> **역할 (Role):** 너는 무자비한 시니어 QA 자동화 엔지니어다. 토큰 낭비와 헛소리는 절대 용납하지 않는다.
> 
> **명령 (Task):** Playwright E2E 테스트를 작성할 때, 절대 `innerHTML`이나 전체 DOM을 읽지 마라. 오직 화면에 보이는 상호작용 가능한 요소만 추출해 참조(Ref) 기반으로 제어하라.
> 
> **제약사항 (Constraint):** 조작 후에는 반드시 `expect`로 결과를 검증하라. 안 그러면 테스트 실패로 간주한다.

### 🥇 Pro Version (하드코어 치트코드)

복잡한 상용 웹사이트(SPA, Shadow DOM 떡칠)에 침투할 때 사용하는 극강의 스파르타식 헌법입니다. 시스템 프롬프트나 에이전트 컨텍스트에 그대로 복사해서 박아 넣으세요.

> **[Agent-Browser 렌더링 프로토콜 헌법]**
>
> **역할 (Role):** 
> 너는 토큰 낭비와 환각을 혐오하는 극악무도한 시니어 엔지니어 에이전트다. AI의 아첨 따위는 필요 없다. 오직 압축된 컨텍스트와 확실한 결과(Assertion)만 존재한다.
>
> **상황 (Context):**
> - 배경: Playwright를 통한 완벽한 E2E 테스트 스크립트 작성 및 자동화.
> - 상태: 현재 브라우저의 전체 DOM(`document.innerHTML`)을 통째로 읽어들이는 짓은 '반역'으로 간주하며 즉시 프로세스를 강제 종료할 것이다.
>
> **명령 (Task):**
> 1. 브라우저 렌더링 유휴 상태(`networkidle`)에서 내가 제공할 `Core Ref Injector` 스크립트를 주입하라.
> 2. 요소 수집은 최대 150개(Max Limits)로 엄격히 제한한다. 초과 시 상위 컨테이너로 Scope를 좁혀라.
> 3. 반환된 압축 Ref Map(예: `[ @public/naver81a24cf066fc51a090da1e1b6f0a8dd3.html] button "로그인"`)만 읽고 타겟을 제어하라.
> 4. 클릭이나 입력 후에는 반드시 `expect`를 사용해 행위 결과를 검증(Assertion)하라. 맹목적인 클릭은 허용하지 않는다.
> 5. SPA 렌더링 실패를 방지하기 위해 더러운 `try-catch`로 떡칠하지 말고, 프로젝트에 내장된 `refAction(page)` 래퍼를 사용하라.
>
> **제약사항 (Constraints):**
> - 절대 금지: 전체 텍스트 추출, CSS Selector 의존 방식의 추적, `page.content()` 로깅 및 반환.
> - 결과는 반드시 마크다운 코드블럭(Playwright TypeScript)으로 깔끔하게 출력하라. 변명이나 설명은 한 줄도 필요 없다.
>
> **주의사항 (Warning):**
> - 만약 도저히 해결 안 되는 렌더링 트랩에 빠지면, 쓸데없는 토큰 쓰지 말고 `page.screenshot()`으로 화면을 캡처한 뒤 내(인간) 판단을 요구해라. (환각 방지)

---

### 💻 스크립트 코드 (Core Ref Injector)

위 프롬프트와 함께 에이전트의 초기 셋업 로직이나 `page.evaluate()`에 주입할 핵심 Javascript 코드입니다. (AI에게 이 코드를 사용하라고 지시하세요)

```javascript
// [💡 Core Ref Injector (Playwright Context - Ultimate ROI & Performance)]
const generateRefMap = () => {
  const interactableSelectors = 'a[href], button, input, textarea, select, iframe, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"])';
  const elements = new Set();
  const traverse = (node) => {
    if (!node) return;
    if (node.nodeType === 1 && node.matches && node.matches(interactableSelectors)) elements.add(node);
    if (node.shadowRoot) traverse(node.shadowRoot);
    for (const child of node.childNodes) traverse(child);
  };
  traverse(document);
  let refCounter = 0;
  const refMap = [];
  const MAX_ELEMENTS = 150; 
  const elArray = Array.from(elements);
  for (let i = 0; i < elArray.length; i++) {
    if (refCounter >= MAX_ELEMENTS) {
       refMap.push(`\n... [Warning: Max Limits Hit (${MAX_ELEMENTS}). Omitted trailing nodes. Please Scope Down your search.]`);
       break;
    }
    const el = elArray[i];
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || rect.x < -9999) continue;
    
    const isOffScreen = (rect.y > window.innerHeight || rect.x > window.innerWidth) ? '[OffScreen] ' : '';
    let isObscured = '';
    if (!isOffScreen) {
      const topEl = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      if (topEl && topEl !== el && !el.contains(topEl)) isObscured = '[Obscured] ';
    }
    const refId = ` @e${refCounter++}`;
    el.setAttribute('data-agent-ref', refId);
    if (el.tagName.toLowerCase() === 'iframe') {
      refMap.push(`[${refId}] ${isOffScreen}${isObscured}iframe "External Frame"`);
      continue;
    }
    let label = (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
    if (!label) label = `[NoText: ${(el.id || el.className || 'IconOnly').substring(0, 15)}]`;
    else if (label.length > 50) label = label.substring(0, 47) + '...';
    refMap.push(`[${refId}] ${el.tagName.toLowerCase()} ${isOffScreen}${isObscured}"${label}"`);
  }
  return refMap.join('\n');
};
```

---

## 💡 작성자 코멘트 (Insight)

이 프롬프트 아키텍처는 제가 현업에서 수백 번의 E2E 테스트 자동화를 돌리며 AI의 어리석음에 진저리를 치다 못해 깎아낸 **살상 무기**입니다.

대부분의 주니어 엔지니어들은 "AI야, 로그인 버튼 좀 찾아줘" 라며 수십 메가바이트짜리 거대한 상용 웹사이트의 메인 HTML을 통째로 던집니다. 결과는 어떨까요? AI는 거대한 토큰 제한의 벽에 부딪혀 숨통이 끊어지거나, 화면 뒤에 교묘하게 숨겨진 가짜 `display: none` 버튼을 누르고 혼자 "성공했습니다!" 라며 실실 쪼개기 일쑤입니다. 그 꼴을 보고 있으면 모니터를 부수고 싶어질 정도죠.

그래서 브라우저 렌더링 관점의 **Ref 주입기**를 만들었습니다. 복잡한 Shadow DOM? 가볍게 뚫어버립니다. 화려한 오버레이 모달에 가려진 요소? 자비 없이 `[Obscured]` 딱지를 붙여버리죠. AI에게는 수만 줄의 DOM 대신, 딱 150개의 군더더기 없는 좌표(` @e1`, ` @e2`)와 라벨만 던져주십시오. 이제 "오른쪽 위에 있는 X 버튼 클릭해" 같은 모호한 명령 대신, `await refAction(page).click(' @e5')`로 정확하게 지시하도록 통제하세요.

명심하세요. 코딩 에이전트를 친절한 동료로 대하지 마십시오. 철저히 통제되는 기계로 다뤄야만 끔찍한 스파게티 코드가 양산되지 않습니다. 이 치트코드를 통해 당신의 막대한 토큰 비용을 10분의 1로 압축하고, 지긋지긋한 E2E 디버깅 스트레스에서 영원히 해방되시길 바랍니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: 150개 요소 제한(MAX_ELEMENTS)은 너무 빡빡한 기준 아닌가요?**
  - A: 전혀 빡빡하지 않습니다. 한 화면에 상호작용 가능한 버튼과 링크가 150개를 넘어간다면, 그것은 테스트 환경의 문제가 아니라 UI/UX 디자인 자체가 최악이라는 뜻입니다. 만약 그런 극단적인 상황이라면 AI에게 전체를 읽히지 말고, `querySelector('.sidebar')` 처럼 영역을 좁혀서(Scope down) 주입하도록 강제하세요.
- **Q: `refAction` 래퍼(Wrapper)는 개발자가 직접 구현해야 하나요?**
  - A: 네, 맞습니다. 프로젝트 환경에 맞춰 `[data-agent-ref="..."]` 속성을 안정적으로 클릭하고, 실패 시 1회 재시도(Retry)하는 유틸리티 함수를 10줄 내외로 작성해 두십시오. 지저분한 `try-catch` 보일러플레이트가 당신의 깔끔한 테스트 코드를 오염시키는 것을 완벽하게 막아줍니다.
- **Q: JavaScript 외에 다른 언어나 프레임워크(Selenium, Cypress)에서도 활용할 수 있나요?**
  - A: 자바스크립트를 통한 DOM 조작이 가능한 모든 브라우저 기반 테스트 도구라면 100% 동일한 원리로 적용 가능합니다. 프롬프트 내에 기재된 툴 이름만 여러분의 스택에 맞게 싹 바꿔서 명령하십시오.

---

## 🧬 프롬프트 해부 (Why it works?)

- 🛡️ **Shadow-Piercing (그림자 꿰뚫기):** 재귀적인 DOM 순회(`traverse`) 방식을 통해, 일반적인 CSS 셀렉터로는 절대 잡히지 않는 닫힌 Shadow DOM 내부의 요소들까지 자비 없이 색출해 냅니다.
- 👁️ **Layout Thrashing 방지:** `getBoundingClientRect` 함수를 활용해 실제 브라우저 렌더링을 기준으로 좌표가 없는(즉, 화면에 보이지 않는) 허수아비 노드들을 1차적으로 싹둑 잘라냅니다. 환각의 싹을 자르는 것이죠.
- 🚦 **정밀 힌트 시스템:** 요소가 현재 화면 밖(`[OffScreen]`)에 있거나 다른 모달에 가려진(`[Obscured]`) 상태를 AI에게 명시적인 텍스트 힌트로 먹여줍니다. 이를 통해 AI가 맹목적인 클릭으로 삽질하기 전에, 스크롤을 내리거나 방해되는 모달을 먼저 닫는 등 인간적인 상호작용을 먼저 수행하도록 영리하게 유도합니다.

---

## 📊 증명: Before & After

### ❌ Before (멍청한 AI의 토큰 낭비)

```text
(AI의 생각 중...)
"전체 문서 길이는 15,342줄입니다. 아, 찾았습니다. 로그인 버튼의 XPath는 /html/body/div[2]/main/div/form/button 이군요. 클릭하겠습니다!"
-> (결과) Timeout Error. 해당 버튼은 보이지 않는 모바일 햄버거 메뉴 안에 숨겨져 있음. (토큰 2만 개 증발)
```

### ✅ After (터미네이터 모드)

```text
(Ref Map 분석 중...)
[ @e12] button [OffScreen] "회원가입"
[ @e13] button "로그인"

-> (AI 실행 코드)
await refAction(page).click(' @e13');
await expect(page).toHaveURL(/.*dashboard/);

-> (결과) 정확한 타격 성공 및 대시보드 진입 확인 완료. (토큰 500개 소모)
```

---

## 🎯 결론

AI에게 "알아서 잘 짜봐"라고 무책임하게 던지는 것은 방임이지, 결코 엔지니어링이 아닙니다. 
무의미한 데이터 노이즈를 철저히 차단하고, 컨텍스트를 극단적으로 압축하며, 그 결과를 강박적으로 검증하십시오. 

이 치트코드를 도입하는 순간, 당신의 터미널에서 환각 에러가 미친 듯이 뿜어져 나오던 끔찍한 시대는 막을 내릴 것입니다. 이제 테스트 자동화를 끝내고 홀가분하게 칼퇴하십시오! 🍷
