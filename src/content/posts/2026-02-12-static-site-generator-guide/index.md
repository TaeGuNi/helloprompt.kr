---
layout: /src/layouts/Layout.astro
title: "정적 사이트 생성기(SSG): Astro vs Next.js vs Gatsby"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "개발/코딩"
description: "블로그, 포트폴리오를 만들 건데 서버비 내기 싫다면? 2026년 정적 사이트 승자는 누구인가."
tags: ["SSG", "Astro", "Next.js", "블로그", "프론트엔드"]
---

# (Updated) (Updated) (Updated) 🚀 정적 사이트 생성기(SSG): Astro vs Next.js vs Gatsby {#ssg}

- **🎯 추천 대상:** "서버비 0원으로 블로그 운영하고 싶어요" 묻는 학생, React로 포트폴리오 만들려는 취준생
- **⏱️ 소요 시간:** 5분 (기술 스택 결정)
- **🤖 추천 모델:** Perplexity (최신 벤치마크 검색)

- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐☆

_"블로그 하나 만드는데 React 전체를 다 로딩해야 해?"_

무겁습니다. 단순한 정보 전달 사이트에 무거운 JS를 쏟아붓는 건 낭비입니다. **Astro(아스트로)**가 뜬 이유입니다. "JS는 걷어내고 HTML만 보낸다." 이 철학이 웹을 다시 가볍게 만들고 있습니다.

---

## (Updated) (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  **Next.js:** 웹앱(Web App) 만들 거면 이거 써라. (기능 많음, 무거움)
2.  **Astro:** 콘텐츠(블로그) 만들 거면 이거 써라. (가볍고 빠름, JS 0kB)
3.  **Gatsby:** ...보내주자. (너무 복잡해짐)

---

## (Updated) (Updated) (Updated) 🚀 해결책: "SSG Picker Prompt" {#updated}

### (Updated) (Updated) (Updated) 🥉 Basic Version (블로그 구축) {#updated}

빠르게 시작하기.

> **요청:** "Astro로 개발 블로그를 만들고 싶어. 마크다운(Markdown) 파일을 읽어서 게시글로 렌더링하는 기본 프로젝트 구조와 `[slug].astro` 코드 예시를 줘."

<br>

### (Updated) (Updated) (Updated) 🥇 Pro Version (하이브리드 아키텍처) {#updated}

동적인 기능이 필요할 때.

> **역할 (Role):** 너는 프론트엔드 성능 최적화 전문가야.
>
> **상황 (Context):**
>
> - 메인 페이지는 SEO가 중요한 정적 콘텐츠(SSG).
> - 댓글 기능과 '좋아요' 버튼은 동적인 상호작용(CSR)이 필요함.
>
> **요청 (Task):**
>
> 1.  **Astro Islands:** Astro의 **아일랜드 아키텍처(Islands Architecture)**를 사용해서, 정적 페이지 안에 React 컴포넌트(댓글창)만 부분적으로 로딩하는 코드를 짜줘. (`client:load` 지시어 활용)
> 2.  **성능 비교:** Next.js로 짰을 때와 비교해서 초기 로딩 속도(TTI)와 자바스크립트 번들 사이즈가 얼마나 줄어들지 예상해줘.

---

## (Updated) (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

이 블로그(`helloprompt.kr`)도 **Astro**로 만들어졌습니다.
왜냐고요? 글 읽는 데 리액트가 필요 없으니까요.
하지만 필요하면 언제든 리액트 컴포넌트를 가져다 쓸 수 있습니다.
**"가벼움과 강력함의 공존"**. 이게 Astro의 매력입니다.

---

## (Updated) (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 배포는 어디에 해요?**
  - A: **Vercel**이나 **Netlify**를 쓰면 무료입니다. 깃허브에 푸시만 하면 알아서 빌드해서 배포해 줍니다. (서버비 0원)

- **Q: 워드프레스보다 좋은가요?**
  - A: 커스터마이징(내 맘대로 고치기)을 좋아하면 SSG가 좋고, 글만 쓰고 싶으면 워드프레스가 편합니다. 개발자라면 SSG죠.

---

## (Updated) (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **아일랜드 아키텍처:** Astro의 핵심 기술인 "부분적 수화(Partial Hydration)"를 언급하면, AI가 단순히 HTML을 뿌리는 걸 넘어 **"필요한 곳에만 JS를 쓰는"** 고급 패턴을 알려줍니다.
2.  **비교 우위:** Next.js와 비교를 요청하면, 각 프레임워크가 추구하는 철학(앱 vs 콘텐츠)의 차이를 명확히 이해할 수 있습니다.

---

## (Updated) (Updated) (Updated) 📊 증명: Before & After {#updated}

### (Updated) (Updated) (Updated) ❌ Before (Next.js 블로그) {#next-js}

Lighthouse 점수: 70점. (JS 번들 500KB 로딩하느라 모바일에서 버벅거림 🐢)

### (Updated) (Updated) (Updated) ✅ After (Astro 블로그) {#astro}

Lighthouse 점수: **100점**. (JS 번들 0KB. HTML만 옴. 클릭하자마자 뜸 🚀)

---

## (Updated) (Updated) (Updated) 🎯 결론 {#conclusion}

웹은 다시 **문서(Document)**로 돌아가고 있습니다.
복잡한 앱이 아니라면, 무거운 갑옷(React)을 벗으세요.

가벼운 몸으로 날아오르세요.
**To the Moon (with Astro).** 🍷

## (Updated) (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
