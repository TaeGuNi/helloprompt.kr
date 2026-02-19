---
layout: /src/layouts/Layout.astro
title: "유튜브 영상 3초 요약기: 1시간짜리 영상을 텍스트로 읽는 법"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "생산성 도구"
description: "긴 영상 볼 시간 없는 당신을 위해. 자막(Transcript)을 추출해서 AI에게 3줄 요약을 시키는 워크플로우."
tags: ["유튜브", "요약", "ChatGPT", "생산성", "공부"]
---

# (Updated) (Updated) (Updated) 📺 유튜브 영상 3초 요약기: 1시간짜리 영상을 텍스트로 읽는 법 {#summary}

- **🎯 추천 대상:** 2배속으로 봐도 시간이 모자란 현대인, 정보 습득이 목적인데 썸네일 낚시 당하기 싫은 사람
- **⏱️ 소요 시간:** 10초
- **🤖 추천 모델:** ChatGPT-4o (긴 텍스트 처리 능력)

- ⭐ **난이도:** ⭐☆☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

_"이 영상... 핵심만 알고 싶은데 20분 동안 떠드네."_

영상은 정보 밀도가 낮습니다. 텍스트로 읽으면 3분이면 될 걸 영상으로는 20분을 봐야 하죠. 이제 **스크립트(자막)**만 쏙 뽑아서 AI에게 던지세요. 영상의 엑기스만 글로 읽을 수 있습니다.

---

## (Updated) (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  유튜브 영상 더보기란 -> **'스크립트 표시(Show Transcript)'** 클릭.
2.  스크립트를 전체 복사한다. (타임스탬프 포함돼도 상관없음)
3.  AI에게 **"이거 요약해줘"**라고 붙여넣는다.

---

## (Updated) (Updated) (Updated) 🚀 해결책: "Video Summarizer Prompt"

### (Updated) (Updated) (Updated) 🥉 Basic Version (핵심 요약)

내용 파악만 빠르게 하고 싶을 때.

> **요청:** "아래 텍스트는 유튜브 영상 자막이야. 이 영상의 핵심 주제와 결론을 3줄로 요약해줘."

<br>

### (Updated) (Updated) (Updated) 🥇 Pro Version (타임스탬프 학습 노트)

강의나 정보성 영상을 공부할 때.

> **역할 (Role):** 너는 노트 필기의 달인이야.
>
> **입력 (Transcript):** `[자막 전체 붙여넣기]`
>
> **요청 (Task):**
>
> 1. **핵심 키워드:** 이 영상에서 가장 중요한 단어 3개를 뽑아줘.
> 2. **챕터별 요약:** 내용이 전환되는 지점을 찾아서, `[00:00] 주제` 형식으로 타임스탬프와 함께 내용을 정리해줘.
> 3. **액션 아이템:** 시청자가 당장 따라 해야 할 행동이 있다면 명시해줘.
>
> **출력 형식 (Format):** 마크다운 리스트.

---

## (Updated) (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

PC에서는 **'YouTube Summary with ChatGPT'** 같은 크롬 확장 프로그램을 쓰면 복사/붙여넣기 과정조차 필요 없습니다. 버튼 하나 누르면 옆에 요약이 뜹니다. 하지만 모바일에서는 이 프롬프트 방식이 유일한 구원입니다.

---

## (Updated) (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 자막이 없는 영상은요?**
  - A: 요즘 유튜브는 자동 자막 생성 기능이 좋아져서 대부분 있습니다. 정 없다면... 그건 AI도 어쩔 수 없습니다. (Whisper를 써야죠!)

- **Q: 너무 긴 영상은 짤리지 않나요?**
  - A: GPT-4o는 컨텍스트 윈도우가 커서 1시간 분량도 거뜬합니다. 만약 짤리면 반씩 나눠서 넣으세요.

---

## (Updated) (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **타임스탬프 요청:** 단순히 요약만 하면 나중에 "이 내용이 영상 어디에 있었지?" 하고 찾기 힘듭니다. 타임스탬프를 같이 달라고 하면, 해당 부분만 다시 돌려볼 수 있어 학습 효율이 극대화됩니다.
2.  **액션 아이템:** 정보성 영상의 목적은 '행동'입니다. "그래서 뭐 하라고?"를 명확히 뽑아냄으로써 영상의 가치를 내 것으로 만듭니다.

---

## (Updated) (Updated) (Updated) 📊 증명: Before & After

### (Updated) (Updated) (Updated) ❌ Before (20분 시청)

(딴짓하다가 놓쳐서 되감기... 광고 보고... 결국 다 보고 나니 "별거 없네" 🤬)

### (Updated) (Updated) (Updated) ✅ After (10초 요약)

**AI:** "이 영상은 `옵시디언` 설치법을 다룹니다.

- **[02:15]** 테마 설정 방법
- **[05:30]** 필수 플러그인 3선 추천"
  (필요한 [05:30] 부분만 클릭해서 시청 -> 1분 만에 해결 🚀)

---

## (Updated) (Updated) (Updated) 🎯 결론 {#conclusion}

시간은 금입니다. 유튜브 알고리즘에 시간을 뺏기지 마세요.
정보의 주도권을 되찾아오세요.

**"요약해 줘."** 이 한마디가 당신의 시간을 지켜줍니다. 🍷

## (Updated) (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
