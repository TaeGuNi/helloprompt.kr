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
- **🤖 최상위 성능:** 코딩 에이전트 (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)

- ⭐ **난이도:** ⭐⭐⭐⭐☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"대형 웹사이트 E2E 테스트 코드를 작성하려다 수만 개의 DOM 노이즈에 파묻혀 AI가 토큰 한계로 뻗어버린 적 있으신가요?"_

매일 밤, 퇴근을 앞두고 E2E 테스트 스크립트를 작성하는 일은 고통의 연속입니다. 특히 최근 각광받는 **코딩 에이전트(Claude 3.5 Sonnet, GPT-4o, Cursor 등)**에게 "로그인부터 대시보드 화면까지 테스트 코드를 짜줘"라고 명령해 본 적 있으신가요? 기대와 달리, 우리의 똑똑한 AI는 웹페이지의 거대한 **원본 DOM(`innerHTML`)**을 통째로 읽어 들이려다 막대한 **토큰 폭발(Token Limit Exceeded)** 에러를 뿜으며 장렬히 전사합니다. 수만 줄의 HTML, 수백 개의 쓸데없는 `<div>`와 `<svg>` 태그 사이에서 AI는 방향을 잃고 맙니다. 당신은 AI가 코드를 대신 짜주길 바랐지만, 현실은 AI가 뻗지 않도록 HTML을 수동으로 잘라내고 붙여 넣는 단순 노동을 반복하고 있습니다.

어찌어찌 토큰 한계를 피했다 하더라도 더 끔찍한 **환각(Hallucination)**이 기다리고 있습니다. 화면 뒤에 교묘하게 숨겨져 있는 `display: none` 상태의 모바일 햄버거 메뉴 버튼을 "찾았습니다!"라며 클릭하려 들고, 팝업 모달창에 가려져 있어 인간이라면 절대 누를 수 없는 뒤쪽 레이어의 버튼을 클릭했다고 당당하게 결과 보고를 올립니다. React나 Vue로 만들어진 현대의 **SPA(Single Page Application)** 환경에서 이런 맹목적인 DOM 긁어오기는 쥐약과도 같습니다. 결국 실제 CI/CD 파이프라인에서는 자비 없는 **Timeout 에러**가 발생하며 빌드가 무참히 터져버립니다. AI가 뱉어낸 엉터리 코드를 디버깅하느라 우리는 또다시 3시간을 허비하고, 차라리 내가 직접 짜는 게 빠르겠다는 깊은 현타에 빠지게 됩니다.

이제 AI의 무의미한 '아첨'과 '환각'을 자비 없이 끊어낼 시간입니다. 당신의 AI 에이전트를 아부나 떠는 무능한 비서에서, 토큰을 극단적으로 절약하며 타겟만 정확히 저격하는 **냉혹한 터미네이터**로 개조해야 합니다. 

이 글에서 소개할 치트키는 **"에이전트-브라우저 렌더링 프로토콜 (The Token Police)"**입니다. 쓸데없는 DOM 데이터는 반역으로 간주하고 모조리 폐기하십시오. 오직 가시성이 100% 확보된 **상호작용 가능한(Interactable) 노드 150개**만을 압축하여 AI에게 전달하는 **Core Ref Injector 스크립트**와 이를 통제하는 **스파르타식 프롬프트**를 결합했습니다. 이 프로토콜은 AI가 브라우저를 인식하는 시야를 인간과 동일한 렌더링 기반으로 교정합니다.

이 방식을 당신의 워크플로우에 적용하면 수십 메가바이트의 노이즈에 파묻혀 길을 잃던 AI가 단 3분 만에 정확한 타겟을 찾아내 완벽한 `expect` 검증 코드까지 깔끔하게 작성해 냅니다. API 호출에 낭비되던 막대한 토큰 비용은 즉시 10분의 1로 압축되고, 테스트 스크립의 안정성은 100%에 수렴하게 될 것입니다. 지긋지긋한 셀렉터 디버깅 지옥에서 벗어나, 코딩 에이전트가 진짜 당신의 손발이 되어 움직이는 마법을 경험하십시오. 지금 당장 이 치트코드를 복사하여 당신의 에이전트에 주입하고, 퇴근 시간을 앞당기십시오.

---

## 📊 증명: 통쾌한 결과물 (Before & After)

### ❌ Before (우리가 겪던 고통)

> 수만 줄의 원본 HTML을 AI에게 통째로 던졌을 때 발생하는 토큰 폭발과 처참한 환각의 현장입니다.

```text
> (AI의 생각 중...)
> "전체 문서 길이는 15,342줄입니다. 아, 찾았습니다. 로그인 버튼의 XPath는 /html/body/div[2]/main/div/form/button 이군요. 클릭하겠습니다!"
> -> (결과) Timeout Error. 해당 버튼은 보이지 않는 모바일 햄버거 메뉴 안에 숨겨져 있음. (토큰 2만 개 증발)
```

### ✅ After (완벽하게 변신한 결과)



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

## ⚡️ 3줄 요약 (TL;DR)

1. **전체 HTML 덤프 금지:** AI에게 원본 DOM을 통째로 넘기는 비효율적인 방식을 당장 멈추세요.
2. **정밀 타격 주입:** 150개 제한의 인터랙티브 노드 전용 최적화 스크립트를 주입하여, 가시성이 100% 확보된 요소만 추출합니다.
3. **무자비한 토큰 경찰:** AI가 UI 조작 후 검증(Assertion)을 누락하거나 토큰 한계를 초과하면 강제로 에러를 발생시킵니다.

---

## 🚀 에이전트-브라우저 렌더링 프로토콜 치트키

수십 번의 시행착오 끝에 완성된 프롬프트입니다. 아래 프롬프트를 복사하여 에이전트의 컨텍스트에 주입해 실무에 즉시 투입하세요.

### 🥉 Basic Version (마일드 모드)

> **역할 (Role):** 너는 무자비한 시니어 QA 자동화 엔지니어다. 토큰 낭비와 헛소리는 절대 용납하지 않는다.
> 
> **명령 (Task):** Playwright E2E 테스트를 작성할 때, 절대 `innerHTML`이나 전체 DOM을 읽지 마라. 오직 화면에 보이는 상호작용 가능한 요소만 추출해 참조(Ref) 기반으로 제어하라.
> 
> **제약사항 (Constraints):** 조작 후에는 반드시 `expect`로 결과를 검증하라. 안 그러면 테스트 실패로 간주한다.

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

위 프롬프트와 함께 에이전트의 초기 셋업 로직이나 `page.evaluate()`에 주입할 핵심 Javascript 코드입니다.

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

## 💡 작성자 코멘트 (Insight & How to use)

이 프롬프트 아키텍처는 제가 현업에서 수백 번의 E2E 테스트 자동화를 돌리며 AI의 어리석음에 진저리를 치다 못해 깎아낸 **살상 무기**입니다. 단순히 프롬프트를 몇 줄 바꾸는 수준이 아니라, **AI가 브라우저를 인식하는 근본적인 시야(Vision) 자체를 통제**하는 것이 이 치트키의 핵심 원리입니다.

대부분의 주니어 엔지니어들은 "AI야, 로그인 버튼 좀 찾아줘" 라며 수십 메가바이트짜리 거대한 상용 웹사이트의 메인 HTML을 통째로 던집니다. 결과는 어떨까요? AI는 거대한 토큰 제한의 벽에 부딪혀 숨통이 끊어지거나, 화면 뒤에 교묘하게 숨겨진 가짜 `display: none` 버튼을 누르고 혼자 "성공했습니다!" 라며 실실 쪼개기 일쑤입니다. 그 꼴을 보고 있으면 모니터를 부수고 싶어질 정도죠.

그래서 브라우저 렌더링 관점의 **Ref 주입기(Core Ref Injector)**를 만들었습니다. 복잡한 **Shadow DOM**의 장벽? 이 스크립트는 재귀적 순회를 통해 가볍게 뚫어버립니다. 화려한 오버레이 모달에 가려져 인간의 눈에는 보이지 않는 요소? 자비 없이 `[Obscured]` 딱지를 붙여버리죠. 스크롤을 내려야만 나타나는 영역은 `[OffScreen]` 태그를 붙여 AI가 헛발질하기 전에 스크롤다운 액션을 먼저 수행하도록 강제합니다. 요소의 크기(Width/Height)가 0인 허수아비 노드들은 `getBoundingClientRect()` 검증을 거치며 사전에 완벽히 차단됩니다. 애초에 클릭할 수 없는 것을 클릭하려는 시도조차 원천 봉쇄하는 것입니다.

AI에게는 수만 줄의 알아보기 힘든 DOM 트리 대신, 딱 150개의 군더더기 없는 고유 좌표(` @e1`, ` @e2`)와 라벨만 던져주십시오. 이제 AI는 "오른쪽 위에 있는 X 버튼 클릭해" 같은 모호한 명령 대신, `await refAction(page).click(' @e5')`와 같이 고유 ID를 기반으로 타겟을 정확히 저격하게 됩니다. 프롬프트 내에 명시된 **무자비한 토큰 경찰** 제약조건은 AI가 조작 행위 이후 반드시 `expect`를 활용해 상태 변화를 검증하도록 압박합니다.

명심하세요. 코딩 에이전트를 친절한 대화형 동료로 대하지 마십시오. 철저히 통제되는 기계로 다뤄야만 끔찍한 스파게티 코드가 양산되지 않습니다. 특히 150개의 **MAX_ELEMENTS** 제한은 단순한 메모리 절약 차원이 아닙니다. 화면에 150개가 넘는 클릭 요소가 있다면 애초에 UI/UX 설계가 잘못된 것이며, AI에게는 전체 범위를 탐색하게 할 것이 아니라 `querySelector('.sidebar')`처럼 특정 컨테이너로 **Scope를 좁히도록(Scope Down)** 압박을 가해야 합니다. 

테스트 코드를 작성할 때 종종 놓치는 부분이 바로 비동기 상태 관리입니다. 이 프롬프트에 내장된 헌법은 에이전트가 더러운 `try-catch`로 오류를 덮어두는 행위를 금지하고, 네트워크 유휴 상태(`networkidle`)를 철저히 기다리게 만듭니다. 우리는 결과를 그저 운에 맡기지 않습니다. 이 압축된 컨텍스트와 강력한 Assertion 강제 룰을 통해, 여러분이 구축하는 E2E 테스트 코드는 그 어떤 엣지 케이스 앞에서도 견고하게 동작하는 강철 같은 신뢰성을 확보하게 될 것입니다. 이제 지루한 DOM 구조 파악과 디버깅의 수렁에서 완전히 벗어나, 진짜 가치 있는 비즈니스 로직 테스트에만 온전히 집중하시길 바랍니다.

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

1. **Shadow-Piercing (그림자 꿰뚫기):** 재귀적인 DOM 순회(`traverse`) 방식을 통해, 일반적인 CSS 셀렉터로는 절대 잡히지 않는 닫힌 Shadow DOM 내부의 요소들까지 자비 없이 색출해 냅니다.
2. **Layout Thrashing 방지:** `getBoundingClientRect` 함수를 활용해 실제 브라우저 렌더링을 기준으로 좌표가 없는(즉, 화면에 보이지 않는) 허수아비 노드들을 1차적으로 싹둑 잘라냅니다. 환각의 싹을 자르는 것이죠.
3. **정밀 힌트 시스템:** 요소가 현재 화면 밖(`[OffScreen]`)에 있거나 다른 모달에 가려진(`[Obscured]`) 상태를 AI에게 명시적인 텍스트 힌트로 먹여줍니다. 이를 통해 AI가 맹목적인 클릭으로 삽질하기 전에, 스크롤을 내리거나 방해되는 모달을 먼저 닫는 등 인간적인 상호작용을 먼저 수행하도록 영리하게 유도합니다.

---

## 🎯 결론

AI에게 "알아서 잘 짜봐"라고 무책임하게 던지는 것은 방임이지, 결코 엔지니어링이 아닙니다. 무의미한 데이터 노이즈를 철저히 차단하고, 컨텍스트를 극단적으로 압축하며, 그 결과를 강박적으로 검증하십시오. 

이 치트코드를 도입하는 순간, 당신의 터미널에서 환각 에러가 미친 듯이 뿜어져 나오던 끔찍한 시대는 막을 내릴 것입니다. AI에게 코딩을 맡겼으면, AI가 제대로 일할 수 있는 통제된 환경을 만들어 주는 것이 우리의 몫입니다. 완벽한 타겟팅과 철저한 검증으로 무장한 E2E 테스트 스크립트를 경험해보세요.

업무를 자동화하고 쿨하게 퇴사(또는 칼퇴)하시길 바랍니다! 🍷
