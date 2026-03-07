---
layout: /src/layouts/Layout.astro
title: "에러 나서 멈추는 E2E 테스트? Playwright Auto-healing 프롬프트로 1분 만에 해결하기 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: "업무 자동화"
description: "UI 변경 때마다 깨지는 Playwright E2E 테스트, AI를 활용해 단 1분 만에 자동 복구(Auto-healing)하는 실전 프롬프트를 공개합니다."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
image: "/images/hooks/playwright-auto-heal.jpg"
---

## 📝 에러 나서 멈추는 E2E 테스트? Playwright Auto-healing 프롬프트로 1분 만에 해결하기 🛠️

- **🎯 추천 대상:** QA 엔지니어, 프론트엔드 개발자, 테스트 자동화 담당자
- **⏱️ 소요 시간:** 2시간 → 1분 단축
- **🤖 추천 모델:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"어제 퇴근 전까지만 해도 완벽했던 E2E 테스트가, 오늘 아침 버튼 클래스명 하나 바뀌었다고 줄줄이 터졌습니다. 설마 오늘도 개발자 도구 켜고 셀렉터 찾느라 오전 시간을 다 날리실 건가요?"_

![에러 나서 멈추는 E2E 테스트? Playwright Auto-healing 프롬프트로 1분 만에 해결하기 🛠️](/images/hooks/playwright-auto-heal.jpg)

프론트엔드 개발 및 QA 자동화 실무에서 UI 변경으로 인한 E2E(End-to-End) 테스트 실패는 피할 수 없는 숙명과도 같습니다. Playwright나 Cypress 같은 프레임워크 환경에서는 DOM 구조나 CSS 클래스명이 아주 미세하게만 변경되어도 CI/CD 파이프라인 전체가 붉은 에러를 내뿜으며 멈춰버립니다. 테스트가 깨질 때마다 브라우저 개발자 도구를 열고 복잡한 DOM 트리 속에서 새로운 셀렉터를 발굴해 코드를 땜질하는 과정은 엄청난 스트레스이자 리소스 낭비입니다.

하지만 이제 더 이상 의미 없는 반복 작업에 시간을 쏟지 마십시오. AI에게 실패한 에러 로그와 새롭게 변경된 HTML 스냅샷만 전달하면 됩니다. AI가 스스로 변경된 맥락을 분석하고 테스트 코드를 완벽하게 복구해 내는 혁신적인 '자가 치유(Auto-healing)' 프롬프트를 공개합니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. UI 업데이트로 망가진 Playwright 셀렉터를 AI가 스스로 분석하고 복구하는 실전 프롬프트입니다.
2. 단순한 코드 땜질을 넘어, 향후 마크업 변경에도 흔들림 없는 강건한(Resilient) 셀렉터 작성 전략을 적용합니다.
3. 복잡한 디버깅 없이 에러 로그와 최신 DOM 스냅샷만 입력하면 1분 만에 리팩토링된 테스트 코드를 얻을 수 있습니다.

---

## 🚀 해결책: "Playwright 자가 치유(Auto-healing) 프롬프트"

### 🥉 Basic Version (기본형)

복잡한 설정 없이, 깨진 코드와 에러 메시지만 던져 넣고 즉각적인 해결책을 얻고 싶을 때 활용하세요.

> **Role:** 너는 `[Senior QA Engineer]`야.
> **Task:** 제공된 Playwright 에러 로그와 새로운 HTML을 바탕으로 `[Broken Test Code]`를 수정해 줘.

### 🥇 Pro Version (전문가형)

단순한 에러 수정을 넘어, 장기적인 유지보수 관점에서 견고하고 안정적인 코드로 완벽하게 리팩토링하고자 할 때 필수적인 버전입니다.

> **Role:** 너는 테스트 자동화 전문 `[Senior SDET]`야. Playwright의 베스트 프랙티스(Best Practices)를 완벽하게 이해하고 있어.
> 
> **Context:**
> 
> - 배경: 최근 UI 업데이트로 인해 기존 Playwright E2E 테스트가 실패하고 있어. 셀렉터(Selector) 변경이 주요 원인이야.
> - 목표: 실패한 테스트 코드를 복구하고, 향후 UI 변경에 덜 깨지는(Resilient) 강건한 셀렉터 구조로 개선하는 것.
> 
> **Task:**
> 
> 1. 아래 제공된 `[Error Log]`와 `[Changed HTML Structure]`를 분석하여 에러의 근본 원인을 파악해.
> 2. `[Existing Test Code]`를 수정하여 테스트가 다시 통과하도록 만들어 줘.
> 3. 수정 시, CSS 클래스나 XPath에 의존하기보다 User-Facing 속성(텍스트, ARIA 속성, data-testid 등)을 우선적으로 사용해.
> 4. 수정한 부분에 대해 "왜 이렇게 수정했는지" 간략한 이유를 코드 주석으로 추가해 줘.
> 
> **Input Data:**
> - 에러 로그: `[Paste Entire Error Log Here]`
> - 변경된 HTML 구조: `[Paste Relevant HTML Snippet Here]`
> - 기존 테스트 코드: `[Paste Broken Playwright Code Here]`
> 
> **Constraints:**
> 
> - 출력은 즉시 복사/붙여넣기 할 수 있는 전체 코드블럭 형태로 제공할 것.
> - Playwright의 내장 Locators(예: `getByRole`, `getByText`, `getByTestId`)를 최우선으로 사용할 것.
> 
> **Warning:**
> 
> - 만약 제공된 HTML 조각에서 적절한 요소를 찾을 수 없다면, 억지로 추측하지 말고 "HTML 정보 부족으로 정확한 셀렉터를 찾을 수 없습니다. 추가 DOM 정보를 제공해 주세요"라고 답변해.

---

## 💡 작성자 코멘트 (Insight)

현업에서 수십 개의 테스트 스위트가 동시다발적으로 터지는 아찔한 상황일수록 이 프롬프트의 진가는 빛을 발합니다. 과거에는 공통 버튼의 셀렉터 하나가 변경되면 연관된 수많은 테스트 파일을 일일이 열어 수동으로 교체하는 막노동을 감내해야 했습니다. 하지만 이제는 이 프롬프트를 IDE 내장 AI(GitHub Copilot, Cursor 등)나 Claude의 커스텀 인스트럭션에 등록해 두고 사용합니다. 터져버린 에러 로그와 브라우저 Elements 탭의 HTML 조각만 복사해서 던져주면, 가장 피곤하고 귀찮은 '셀렉터 추출 및 교체' 작업을 AI에게 완벽하게 위임할 수 있습니다.

여기서 가장 주목해야 할 핵심은 바로 **"User-Facing(사용자 대면) 속성을 우선 사용하라"**는 강력한 제약 조건(Constraints)입니다. AI는 통상적으로 가장 파싱하기 쉬운 CSS 클래스나 구조적 XPath를 타겟팅하려는 경향이 있습니다. 하지만 이 제약 조건을 명시적으로 걸어두면, AI는 `getByRole('button', { name: 'Submit' })`과 같이 Playwright 철학에 부합하는 접근성 기반의 견고한 코드를 작성해 냅니다. 이 작은 디테일 하나가 끊임없이 부서지는 E2E 테스트의 굴레를 끊어내고, 여러분의 업무 시간을 획기적으로 단축해 줄 강력한 무기가 될 것입니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: 에러가 난 페이지의 HTML DOM 구조가 너무 방대해서 복사하기 부담스럽습니다. 어떻게 하나요?**
  - A: 페이지 전체 소스 코드를 제공할 필요는 없습니다. 에러가 발생한 타겟 요소(예: 클릭해야 할 버튼이나 입력 폼)를 기준으로, 해당 요소를 감싸고 있는 직계 부모 태그 영역 정도만 발췌하여 제공해도 AI가 맥락을 파악하기에 충분합니다.

- **Q: 저희 팀은 Playwright 대신 Cypress(또는 Selenium)를 메인으로 사용 중입니다. 이 프롬프트를 그대로 써도 될까요?**
  - A: 물론입니다. 프롬프트 내에 명시된 'Playwright'라는 프레임워크 명칭을 현재 팀에서 사용하는 자동화 도구 이름으로 치환하기만 하면, 해당 도구의 베스트 프랙티스(Best Practice)에 맞춘 코드를 훌륭하게 반환해 줍니다.

- **Q: `data-testid` 속성 부여 규칙이 정립되지 않은 오래된 레거시 프로젝트 환경에서도 유효하게 동작할까요?**
  - A: 네, 완벽하게 동작합니다. 명시적인 `data-testid`가 없더라도, AI는 프롬프트의 지시에 따라 `getByRole`이나 `getByText`와 같이 실제 사용자가 화면에서 인지하는(User-Facing) 텍스트 및 접근성 기반의 스마트한 대안 셀렉터를 영리하게 찾아내 적용합니다.

---

## 🧬 프롬프트 해부 (Why it works?)

1. **[Senior SDET] 페르소나의 강력함:** AI에게 일반적인 웹 개발자가 아닌 '테스트 자동화 전문 엔지니어'라는 명확한 역할을 부여했습니다. 이를 통해 단순히 에러만 회피하는 땜질식 코드가 아니라, Playwright의 철학과 베스트 프랙티스에 완벽하게 부합하는 수준 높은 코드를 생성하도록 방향을 통제합니다.
2. **User-Facing Locators의 명시적 강제:** E2E 테스트의 가장 큰 골칫거리인 불안정성(Flakiness)을 근본적으로 해결하기 위해, Playwright의 핵심 권장 사항을 프롬프트 제약 조건으로 묶어두었습니다. 이로 인해 결과물의 신뢰성과 품질이 비약적으로 상승합니다.
3. **환각(Hallucination)을 차단하는 세이프티 가드:** 제공된 DOM 정보가 불충분할 경우, AI가 어떻게든 답을 내놓기 위해 존재하지 않는 셀렉터를 지어내는 것을 원천 차단했습니다. "정보가 부족하면 억지로 추측하지 말고 모른다고 선언하라"는 엄격한 규칙을 세팅하여 디버깅 지옥을 예방합니다.

---

## 📊 증명: Before & After

### ❌ Before (입력)

```text
에러 로그:
Error: locator.click: Target closed
=========================== logs ===========================
waiting for locator('.btn-primary.submit-btn')
============================================================

변경된 HTML 구조:
<div class="actions">
  <button class="button--blue" aria-label="Submit Order">Order Now</button>
</div>

기존 테스트 코드:
await page.locator('.btn-primary.submit-btn').click();
```

### ✅ After (결과)

```typescript
// 변경 이유: CSS 클래스('.btn-primary.submit-btn')가 변경되어 테스트가 실패했습니다.
// 개선 사항: 변경되기 쉬운 CSS 클래스 대신, 접근성 속성(ARIA label)과 Role을 사용하여 UI 변경에 강건하게 만들었습니다.
await page.getByRole('button', { name: 'Submit Order' }).click();
```

---

## 🎯 결론

자동화된 테스트 코드는 프로덕트를 지키는 가장 든든하고 견고한 방패입니다. 하지만 그 방패를 수리하는 데 엔지니어의 소중한 업무 시간을 과도하게 빼앗겨서는 안 됩니다. 오늘 소개해 드린 AI 기반의 Auto-healing 프롬프트를 무기 삼아, 변경될 때마다 깨지는 E2E 테스트 유지보수 지옥에서 탈출하시기 바랍니다.

이제 빨갛게 물든 에러 로그를 보며 스트레스받지 마시고, 지루하고 반복적인 복구 작업은 AI 파트너에게 전면 위임하십시오. 그리고 아껴낸 시간만큼 더 가치 있는 일에 집중하며 칼퇴의 기쁨을 누리시길 바랍니다! 🍷
