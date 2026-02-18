---
layout: /src/layouts/Layout.astro
title: "Jira 티켓 자동 생성: 기획서만 넣으면 개발 티켓 10개가 뚝딱"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "기획서 읽고 티켓 쪼개는 게 일인 PM들을 위한 프롬프트. Epic, Story, Task 구조화 자동화."
tags: ["Jira", "지라", "PM", "기획", "애자일"]
---

# (Updated) (Updated) (Updated) 🎫 Jira 티켓 자동 생성: 기획서만 넣으면 개발 티켓 10개가 뚝딱 {#updated}

- **🎯 추천 대상:** 하루 종일 "티켓 만들어주세요" 소리 듣는 PM/PO, 백로그 정리가 귀찮은 스크럼 마스터
- **⏱️ 소요 시간:** 1분 (기획서 입력 -> CSV 변환)
- **🤖 추천 모델:** Claude 3.5 Sonnet (문서 구조화 능력 탁월)

- ⭐ **난이도:** ⭐☆☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

_"기획서 다 나왔으니까, 이제 지라(Jira)에 옮겨 적어야지... 하아..."_

기획서에 있는 내용을 복사해서 지라에 붙여넣기. 이 단순 노동을 왜 사람이 하나요? AI에게 기획서를 던져주고 **"개발자가 이해할 수 있는 단위(Task)로 쪼개줘"**라고 하세요.

---

## (Updated) (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  기획서(PRD) 텍스트를 복사한다.
2.  AI에게 **"이거 Epic, Story, Task로 쪼개서 CSV로 만들어줘"**라고 한다.
3.  Jira에서 'CSV 가져오기'를 하면 티켓 50개가 한 번에 생성된다.

---

## (Updated) (Updated) (Updated) 🚀 해결책: "Backlog Generator Prompt" {#updated}

### (Updated) (Updated) (Updated) 🥉 Basic Version (단순 리스트) {#updated}

할 일 목록 뽑기.

> **기획서:** `[기획 내용]`
> **요청:** 이 기획을 개발자가 작업할 수 있는 **상세 업무(Task)** 단위로 쪼개서 체크리스트로 만들어줘. 프론트엔드와 백엔드를 구분해서.

<br>

### (Updated) (Updated) (Updated) 🥇 Pro Version (Jira Import용 CSV 생성) {#jira-import-csv}

이게 진짜입니다. 바로 업로드 가능한 파일 만들기.

> **역할 (Role):** 너는 애자일(Agile) 전문 스크럼 마스터야.
>
> **기획서 (PRD):**
> `[쇼핑몰 장바구니 기능 기획안 전체 붙여넣기]`
>
> **요청 (Task):**
> 위 기획을 구현하기 위해 필요한 티켓들을 **Jira CSV 포맷**으로 작성해줘.
> 다음 컬럼을 반드시 포함해:
>
> - **Issue Type:** Epic, Story, Task, Sub-task 중 하나.
> - **Summary:** 티켓 제목 (명확하게).
> - **Description:** 상세 내용 (Acceptance Criteria 포함).
> - **Priority:** High, Medium, Low.
> - **Assignee:** (비워둠)
>
> **구조:**
>
> 1. '장바구니'라는 **Epic** 하위에,
> 2. '상품 담기', '수량 변경', '삭제' 같은 **Story**를 만들고,
> 3. 각 Story 밑에 FE/BE **Sub-task**를 배치해.

---

## (Updated) (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

개발자들이 가장 좋아하는 기획서는 **"AC(Acceptance Criteria, 인수 조건)가 명확한 티켓"**입니다.
AI에게 "모든 Story의 설명(Description)에 **Given-When-Then** 형식의 인수 조건을 써줘"라고 시키면, 개발자가 되묻는 일이 획기적으로 줄어듭니다.

---

## (Updated) (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 엑셀로 받을 수 있나요?**
  - A: 네, AI가 마크다운 표(Table)로 주면 그걸 엑셀에 붙여넣고 CSV로 저장하면 됩니다.

- **Q: 티켓 양이 너무 많아지면요?**
  - A: 그건 기획이 너무 큰 겁니다. AI에게 "MVP(최소 기능) 기준으로 P0(필수) 기능만 먼저 뽑아줘"라고 필터링을 시키세요.

---

## (Updated) (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **Jira CSV 포맷:** 지라가 인식하는 헤더(`Issue Type`, `Summary` 등)를 정확히 명시해야 나중에 임포트할 때 에러가 안 납니다.
2.  **계층 구조(Hierarchy):** Epic -> Story -> Task 구조를 이해하고 쪼개달라고 해야, 엉뚱하게 기능 단위가 아닌 작업 단위로만 쪼개지는 걸 막을 수 있습니다.

---

## (Updated) (Updated) (Updated) 📊 증명: Before & After {#updated}

### (Updated) (Updated) (Updated) ❌ Before (통짜 티켓) {#updated}

티켓명: "장바구니 기능 개발"
설명: "기획서 참고하세요."
(개발자: "뭘 하라는 거야? 어디서부터 해?")

### (Updated) (Updated) (Updated) ✅ After (구조화된 티켓) {#updated}

- **[Epic]** 장바구니 시스템 구축
  - **[Story]** 사용자는 상품을 장바구니에 담을 수 있다. - **[Sub-task]** (BE) 장바구니 추가 API 구현 (`POST /cart`) - **[Sub-task]** (FE) 상품 상세 페이지 '담기' 버튼 UI 및 인터랙션 구현
    (개발자: "오케이, API부터 짜야겠군." 👌)

---

## (Updated) (Updated) (Updated) 🎯 결론 {#conclusion}

기획자의 실력은 '문서 두께'가 아니라 **'개발자가 일하기 편하게 쪼개주는 능력'**입니다.
AI를 당신의 **비서 PM**으로 쓰세요.

기획서만 던지면, 백로그가 정리됩니다. 🍷

## (Updated) (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
