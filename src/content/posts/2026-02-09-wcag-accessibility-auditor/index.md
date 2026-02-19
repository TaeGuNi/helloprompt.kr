---
layout: /src/layouts/Layout.astro
title: "WCAG 2.2 웹 접근성 감사(Audit) 봇"
author: "Zzabbis"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "프론트엔드"
description: "내가 짠 코드가 모두를 위한 코드인가요? 접근성 표준(WCAG)을 준수하는지 점검해줍니다."
tags: ["Accessibility", "HTML", "WCAG"]
---

- **🎯 추천 대상:** 공공기관 프로젝트 개발자, 포트폴리오 퀄리티를 높이고 싶은 취준생, 프론트엔드 개발자
- **⏱️ 소요 시간:** 체크리스트 확인 2시간 → 5분
- **🤖 추천 모델:** GPT-4o (Vision 기능 활용 시 더 좋음), Claude 3.5 Sonnet

- **📊 난이도:** ⭐☆☆☆☆
- **⚡️ 효과성:** ⭐⭐⭐⭐⭐
- **🛠️ 활용도:** ⭐⭐⭐☆☆

_"접근성은 '배려'가 아니라 '기본'입니다."_

웹 접근성(Web Accessibility)은 장애인뿐만 아니라 고령자, 일시적 장애를 가진 모든 사용자를 위한 것입니다. 하지만 WCAG(Web Content Accessibility Guidelines) 규정은 너무 방대하고 복잡하죠. 이 프롬프트는 당신의 HTML/React 코드를 스캔하여 접근성 위반 사항을 찾아내고 수정해줍니다.

---

## (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1. **시멘틱 태그(Semantic Tag)** 사용 여부를 검사합니다.
2. 이미지 `alt` 속성, 폼 라벨(Label), 키보드 포커스 이동을 체크합니다.
3. **WCAG 2.2 기준**에 맞춰 구체적인 개선 코드를 제안합니다.

---

## (Updated) 🚀 해결책: "A11y(Accessibility) 오디터" {#accessibility}

### (Updated) 🥉 Basic Version (기본형)

특정 컴포넌트의 접근성이 의심될 때.

> **역할:** 너는 웹 접근성 전문가야.
> **요청:** 아래 HTML 코드에서 접근성 문제가 있는지 확인하고 수정해줘.
> **코드:** `[코드 붙여넣기]`

<br>

### (Updated) 🥇 Pro Version (전문가형)

전체 페이지나 복잡한 인터랙션이 있는 UI를 검수할 때.

> **역할 (Role):** 너는 WCAG 2.2 인증 심사원이자 시니어 프론트엔드 개발자야.
>
> **상황 (Context):** 나는 `[UI 설명]` 컴포넌트를 만들었어. 스크린 리더 사용자나 키보드만 사용하는 사용자도 불편함 없이 쓸 수 있어야 해.
>
> **요청 (Task):**
>
> 1. **위반 사항 진단:** WCAG 2.2 기준(A, AA 레벨)에서 위반되는 사항을 찾으세요. (예: 명도 대비, 대체 텍스트, ARIA 속성 오남용 등)
> 2. **개선 코드:** 시멘틱 태그를 활용하여 코드를 리팩토링하세요. `div` 남발을 자제하세요.
> 3. **ARIA 가이드:** 필요한 경우 `aria-label`, `role` 등을 적절히 추가하되, 불필요한 ARIA는 제거하세요 (First Rule of ARIA).
> 4. **테스트 방법:** 개발자가 스스로 이 접근성을 테스트해볼 수 있는 간단한 방법(탭 키 이동 등)을 알려주세요.
>
> **제약사항 (Constraints):**
>
> - 스크린 리더가 읽을 텍스트(sr-only)가 필요한 경우를 반드시 체크하세요.

---

## (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **규정 기반:** 모호한 "좋게 고쳐줘"가 아니라 "WCAG 2.2"라는 명확한 기준을 제시합니다.
2.  **First Rule of ARIA:** "가장 좋은 ARIA는 ARIA를 쓰지 않는 것(시멘틱 태그 사용)"이라는 원칙을 상기시킵니다.
3.  **실질적 테스트:** 개발자가 직접 키보드로 눌러보며 체감할 수 있게 유도합니다.

---

## (Updated) 📊 증명: Before & After

단순한 명령어와 최적화된 프롬프트의 차이는 명확합니다. 제공된 프롬프트를 사용했을 때 더 구체적이고 구조화된 답변을 얻을 수 있으며, 재수정(Re-prompting)에 드는 시간을 절약할 수 있습니다.

### (Updated) ❌ Before (입력)

```html
<div class="button" onclick="submit()">전송</div>
<img src="icon.png" />
```

### (Updated) ✅ After (결과)

```html
<!-- 키보드 포커스 가능, 스크린 리더가 '버튼'으로 인식 -->
<button type="button" onClick="{submit}">전송</button>

<!-- 의미 없는 장식용 이미지는 빈 alt 값 제공 -->
<img src="icon.png" alt="" />
```

---

## (Updated) 💡 작성자 코멘트 (Insight) {#insight}

이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.

---

## (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. 결과가 마음에 들지 않아요.**
A. 구체적인 예시를 추가하거나, 상황(Context)을 더 자세히 묘사해보세요.

**Q. 다른 언어로도 가능한가요?**
A. 네, 프롬프트의 지시사항을 해당 언어로 번역하면 가능합니다.

---

## (Updated) 🎯 결론 {#conclusion}

좋은 개발자는 코드를 잘 짜는 사람이 아니라, 사용자를 생각하는 사람입니다.

이제 칼퇴하세요! 🍷

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

Wait, there is more...
