---
layout: /src/layouts/Layout.astro
title: "AutoGen 입문: AI 에이전트끼리 대화하게 만들기"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "AI/개발"
description: "MS가 만든 멀티 에이전트 프레임워크 AutoGen. 개발자 봇과 관리자 봇이 서로 싸우면서(?) 코드를 완성하는 과정."
tags: ["AutoGen", "멀티에이전트", "MS", "AI협업", "자동화"]
---

# (Updated) 🤖 AutoGen 입문: AI 에이전트끼리 대화하게 만들기 {#updated}

- **🎯 추천 대상:** 혼자 일하기 심심한 1인 개발자, 복잡한 업무를 여러 단계로 나눠서 처리하고 싶은 자동화 덕후
- **⏱️ 소요 시간:** 20분 (환경 설정 및 데모 실행)
- **🤖 추천 모델:** GPT-4o (에이전트 간 대화 품질 중요)

- ⭐ **난이도:** ⭐⭐⭐⭐☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐☆

> _"AI 하나로는 부족해. 코딩하는 놈, 검수하는 놈, 기획하는 놈... 팀을 꾸리고 싶어."_

마이크로소프트(MS)가 만든 **AutoGen**이 그 꿈을 이뤄드립니다. 여러 명의 AI 페르소나를 만들고 방에 가둬두면, 지들끼리 지지고 볶고 떠들면서 결과물을 만들어냅니다. **"자율 협업(Autonomous Collaboration)"**의 시작입니다.

---

## (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  **UserProxy:** 사용자(나)를 대신해 명령을 내리고 코드를 실행하는 대리인.
2.  **Assistant:** 명령을 수행하는 전문가 AI (개발자, 작가 등).
3.  **대화:** 둘이서 채팅하며 문제를 해결할 때까지 무한 루프를 돈다.

---

## (Updated) 🚀 해결책: "Multi-Agent Setup Prompt" {#updated}

### (Updated) 🥉 Basic Version (코딩 듀오) {#updated}

개발자와 관리자 2명 만들기.

> **요청:** "AutoGen으로 두 에이전트를 만드는 파이썬 코드를 짜줘.
>
> 1.  **Engineer:** 코드를 작성하는 역할.
> 2.  **UserProxy:** Engineer가 짠 코드를 로컬에서 실행하고 결과를 피드백하는 역할.
>     목표는 '1부터 100까지 소수(Prime Number)를 찾아서 파일로 저장하는 것'이야."

<br>

### (Updated) 🥇 Pro Version (가상 회사 놀이) {#updated}

기획자, 개발자, 디자이너 3인 체제.

> **역할 (Role):** 너는 AutoGen 전문가야.
>
> **시나리오 (Scenario):** '뱀 게임(Snake Game)'을 웹으로 만들고 싶어.
>
> **요청 (Task):**
> `GroupChat`을 사용해서 3명의 에이전트가 협업하는 코드를 작성해.
>
> 1.  **PM (Product Manager):** 게임의 규칙과 기획을 담당.
> 2.  **Dev (Developer):** HTML/JS 코드를 작성.
> 3.  **Critic (Reviewer):** 코드를 보고 버그가 없는지, 재미있는지 비평.
>
> **조건:** PM이 기획을 내면 -> Dev가 코드를 짜고 -> Critic이 피드백하고 -> Dev가 수정하는 루프를 만들어줘.

---

## (Updated) 💡 작성자 코멘트 (Insight) {#insight}

AutoGen의 백미는 **'코드 실행(Code Execution)'**입니다.
UserProxy 에이전트는 도커(Docker) 컨테이너 안에서 실제로 코드를 돌려보고, 에러가 나면 **"야, 에러 났어. 고쳐와"**라고 개발자 에이전트를 갈굽니다. 인간이 개입할 필요가 없습니다. (무한 동력 ⚙️)

---

## (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 토큰 비용 많이 나오나요?**
  - A: 네, 에이전트끼리 말이 많아지면 토큰이 녹습니다. `max_consecutive_auto_reply` 옵션으로 대화 횟수를 제한하세요.

- **Q: CrewAI랑은 뭐가 달라요?**
  - A: AutoGen은 '대화(Conversation)' 중심이고, CrewAI는 '프로세스(Process)' 중심입니다. 창의적인 협업은 AutoGen, 정해진 절차 수행은 CrewAI가 낫습니다.

---

## (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **GroupChat 활용:** 1:1 대화를 넘어 '단톡방'을 만들면, 에이전트끼리 순서를 정해서 말해야 합니다. 이를 제어하는 `GroupChatManager` 설정을 요청해야 엉망진창이 안 됩니다.
2.  **역할 분담 명확화:** "비평가(Critic)"를 따로 두는 게 핵심입니다. 개발자 혼자 북 치고 장구 치면 퀄리티가 안 나옵니다. 쓴소리하는 놈이 있어야 결과물이 좋아집니다.

---

## (Updated) 📊 증명: Before & After {#updated}

### (Updated) ❌ Before (혼자 코딩) {#updated}

GPT-4에게 "뱀 게임 짜줘" -> 코드 줌 -> 실행 안 됨 -> 내가 디버깅함 -> 귀찮아서 포기. 🤯

### (Updated) ✅ After (AutoGen 팀) {#autogen}

PM: "뱀 게임 기획서야."
Dev: "코드 짰어."
UserProxy: "실행해보니 10번째 줄 에러야."
Dev: "아, 미안. 수정했어."
UserProxy: "오, 잘 돌아가네. `snake.html`로 저장했어."
(나는 팝콘 먹으며 구경 🍿)

---

## (Updated) 🎯 결론 {#conclusion}

이제 혼자 일하지 마세요.
API 키 몇 개만 있으면 **나만의 드림팀**을 꾸릴 수 있습니다.

팀장님, 지시만 내리세요.
**나머지는 AutoGen 아이들이 알아서 합니다.** 🍷

## (Updated) Conclusion

Wait, there is more...
