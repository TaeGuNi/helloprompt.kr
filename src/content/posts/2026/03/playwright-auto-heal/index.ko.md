---
layout: /src/layouts/Layout.astro
title: "에러 나서 멈추는 E2E 테스트? Playwright Auto-healing 프롬프트로 1분 만에 해결하기 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: "업무 자동화"
description: "셀렉터 변경으로 깨지는 Playwright 테스트, AI로 자동 복구하는 실전 프롬프트를 공개합니다."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 에러 나서 멈추는 E2E 테스트? Playwright Auto-healing 프롬프트로 1분 만에 해결하기 🛠️
<!-- ⚠️ [CRITICAL RULE] 다국어 지원 (10개 언어 번역 필수) ⚠️
이 템플릿을 사용하여 새로운 포스트(`index.ko.md`)를 작성한 직후,
**반드시** 동일한 디렉토리에 9개의 번역 파일(`index.[lang].md`)을 추가로 생성해야 합니다.
지원 언어(9개): en, de, es, fr, it, ja, pt, ru, zh
총 10개(한국어+9개 외국어)의 파일이 한 폴더에 있어야 배포가 정상적으로 완료됩니다. -->
<!-- ⚠️ [Lint Rule] 이모지 리스트를 사용하세요. 표(Table) 사용 시 모바일에서 깨질 수 있습니다. -->
- **🎯 추천 대상:** QA 엔지니어, 프론트엔드 개발자, 테스트 자동화 담당자
- **⏱️ 소요 시간:** 2시간 → 1분 단축
- **🤖 추천 모델:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐
<!-- ⚠️ [Lint Rule] 인용구(>)는 Basic/Pro 섹션 외에는 이탤릭체(_..._)와 함께 사용해야 에러가 나지 않습니다. -->
_"어제까지 잘 돌던 E2E 테스트가 오늘 아침에 버튼 CSS 클래스 하나 바뀌었다고 전부 실패했습니다. 또 셀렉터 찾으러 가야 하나요?"_
프론트엔드 개발이나 QA 업무를 하다 보면 UI 변경으로 인해 E2E(End-to-End) 테스트가 깨지는 일은 일상입니다. 특히 Playwright나 Cypress 같은 도구를 사용할 때, DOM 구조나 클래스명이 바뀌면 테스트 코드는 여지없이 에러를 뱉어냅니다. 매번 깨진 테스트를 찾아가서 개발자 도구를 열고 새로운 셀렉터를 복사해 오는 과정은 엄청난 시간 낭비입니다. 이제 AI에게 에러 로그와 변경된 HTML 구조만 던져주고 알아서 'Auto-healing(자동 복구)' 하도록 만들어 봅시다.
---
## ⚡️ 3줄 요약 (TL;DR)
1. UI 변경으로 깨진 Playwright 셀렉터를 AI가 스스로 분석하고 복구하는 프롬프트입니다.
2. 단순히 코드를 고치는 것을 넘어, 변경에 강건한(Resilient) 셀렉터 작성 전략을 제안받을 수 있습니다.
3. 에러 로그와 최신 DOM 스냅샷만 제공하면 복구된 코드를 1분 안에 얻을 수 있습니다.
---
## 🚀 해결책: "Playwright 자가 치유(Auto-healing) 프롬프트"
<!-- ⚠️ [Lint Rule] 인용구(>)는 이곳(Prompt 섹션)에서만 프롬프트 박스로 변환됩니다. -->
### 🥉 Basic Version (기본형)
빠르게 고장 난 코드와 에러 메시지만 던져주고 수정된 코드를 받고 싶을 때 사용하세요.
> **역할:** 너는 `[시니어 QA 엔지니어]`야.
> **요청:** 제공된 Playwright 에러 로그와 새로운 HTML을 바탕으로 `[깨진 테스트 코드]`를 수정해줘.
### 🥇 Pro Version (전문가형)
단순한 수정을 넘어 유지보수가 쉬운 견고한 코드로 리팩토링하고 싶을 때 사용하세요.
> **역할 (Role):** 너는 테스트 자동화 전문 `[시니어 SDET(Software Development Engineer in Test)]`야. Playwright의 최상의 실무(Best Practices)를 완벽하게 이해하고 있어.
> 
> **상황 (Context):**
> 
> - 배경: 최근 UI 업데이트로 인해 기존 Playwright E2E 테스트가 실패하고 있어. 셀렉터(Selector)가 변경된 것이 주요 원인이야.
> - 목표: 실패한 테스트 코드를 복구하고, 향후 UI 변경에 덜 깨지는(Resilient) 강건한 셀렉터 구조로 개선하는 것.
> 
> **요청 (Task):**
> 
> 1. 아래 제공된 `[에러 로그]`와 `[변경된 HTML 구조]`를 분석하여 에러의 근본 원인을 파악해.
> 2. `[기존 테스트 코드]`를 수정하여 테스트가 다시 통과하도록 만들어줘.
> 3. 수정 시, CSS 클래스나 XPath에 의존하기보다 User-Facing 속성(텍스트, ARIA 속성, data-testid 등)을 우선적으로 사용해.
> 4. 수정한 부분에 대해 "왜 이렇게 수정했는지" 간략한 이유를 코드 주석으로 추가해줘.
> 
> **입력 데이터:**
> - 에러 로그: `[에러 로그 전체 복사/붙여넣기]`
> - 변경된 HTML 구조: `[개발자 도구에서 복사한 관련 HTML 조각]`
> - 기존 테스트 코드: `[실패한 Playwright 코드 조각]`
> 
> **제약사항 (Constraints):**
> 
> - 출력은 즉시 복사/붙여넣기 할 수 있는 전체 코드블럭 형태로 제공할 것.
> - Playwright의 내장 Locators(예: `getByRole`, `getByText`, `getByTestId`)를 최우선으로 사용할 것.
> 
> **주의사항 (Warning):**
> 
> - 만약 제공된 HTML 조각에서 적절한 요소를 찾을 수 없다면, 억지로 추측하지 말고 "HTML 정보 부족으로 정확한 셀렉터를 찾을 수 없습니다. 추가 DOM 정보를 제공해주세요"라고 답변해.
---
<!-- ✅ [Lint Rule] 필수 섹션입니다. 누락 시 CI 에러가 발생합니다. -->
## 💡 작성자 코멘트 (Insight)
이 방식은 현업에서 수십 개의 테스트가 동시에 터졌을 때 진가를 발휘합니다. 저는 과거에 셀렉터 하나 바뀌면 30개의 테스트 파일을 열어 일일이 `Ctrl + F`로 찾아서 고치곤 했습니다. 하지만 이 프롬프트를 IDE 내장 AI나 Claude에 등록해 두고, 에러가 난 로그와 브라우저의 Elements 탭 복사본만 던져주면 귀찮은 셀렉터 추출 작업을 완벽하게 아웃소싱할 수 있습니다. 
특히 핵심은 "User-Facing 속성을 사용해라"라는 제약사항입니다. AI는 기본적으로 가장 쉬운 CSS 클래스를 타겟팅하려는 경향이 있는데, 이 제약사항을 걸어두면 `getByRole('button', { name: 'Submit' })` 같은 훌륭한 코드를 짜줍니다. 여러분의 퇴근 시간을 최소 1시간 앞당겨 줄 무기입니다. 일단 써보세요!
---
<!-- ⚠️ [Lint Rule] 권장 섹션입니다. 누락 시 경고가 발생합니다. -->
## 🙋 자주 묻는 질문 (FAQ)
- **Q: HTML 구조가 너무 길면 어떻게 하나요?**
  - A: 전체 페이지를 복사할 필요 없이, 에러가 난 요소(예: 버튼이나 폼)의 부모 태그 정도까지만 복사해서 제공하면 충분합니다.
- **Q: Playwright 말고 Cypress나 Selenium에서도 쓸 수 있나요?**
  - A: 네, 프롬프트에서 'Playwright'라는 단어를 사용하시는 도구 이름으로 바꾸기만 하면 똑같이 훌륭하게 작동합니다.
- **Q: `data-testid`가 없는 프로젝트에서도 잘 동작할까요?**
  - A: 네, AI가 `getByRole`이나 `getByText` 같은 접근성 기반의 대안을 똑똑하게 찾아냅니다.
---
## 🧬 프롬프트 해부 (Why it works?)
1. **SDET 페르소나 부여:** 일반 개발자가 아닌 테스트 전문 엔지니어의 시각을 갖게 하여, 단순히 돌아가는 코드가 아니라 Playwright Best Practice에 맞는 코드를 생성하도록 유도했습니다.
2. **User-Facing Locators 강제:** 테스트의 불안정성(Flakiness)을 근본적으로 줄이는 Playwright의 핵심 철학을 프롬프트 레벨에서 강제하여 퀄리티를 높였습니다.
3. **환각 방지 안전장치:** 정보가 부족할 때 무의미한 코드를 생성하여 디버깅을 더 꼬이게 만드는 현상을 막기 위해, "모르면 모른다고 해"라는 명시적인 제약을 걸었습니다.
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
테스트 코드는 프로덕트 코드를 지키는 방패지만, 그 방패를 손질하는 데 너무 많은 시간을 빼앗겨서는 안 됩니다. AI를 활용한 Auto-healing 프롬프트로 유지보수 지옥에서 벗어나세요. 
이제 테스트 고치는 시간은 AI에게 맡기고, 여러분은 커피 한 잔의 여유를 즐기며 칼퇴하세요! 🍷
