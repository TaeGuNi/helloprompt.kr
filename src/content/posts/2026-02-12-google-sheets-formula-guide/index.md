---
layout: /src/layouts/Layout.astro
title: "Google Sheets 함수 마법사: 엑셀보다 강력한 클라우드 시트 활용법"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "QUERY 함수부터 AppScript 자동화까지. 구글 시트를 데이터베이스처럼 쓰는 노하우."
tags: ["GoogleSheets", "구글시트", "엑셀", "함수", "자동화"]
---

# (Updated) (Updated) (Updated) 📊 Google Sheets 함수 마법사: 엑셀보다 강력한 클라우드 시트 활용법 {#updated}

- **🎯 추천 대상:** 팀원들과 엑셀 파일 주고받다가 버전 꼬여서 화난 사람, 구글 시트를 그냥 '온라인 엑셀'로만 쓰는 사람
- **⏱️ 소요 시간:** 5분 (함수 적용)
- **🤖 추천 모델:** ChatGPT-4o (복잡한 수식 생성)

- ⭐ **난이도:** ⭐⭐☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

*"엑셀 파일 메일로 보내드렸습니다... 아, 수정본 다시 보낼게요... 아, 최종*진짜*마지막.xlsx 입니다."*

제발 그만하세요. **구글 시트(Google Sheets)**는 단순한 스프레드시트가 아닙니다. **실시간 협업 도구**이자 **미니 데이터베이스**입니다. 특히 `QUERY`, `IMPORTRANGE` 같은 전용 함수를 쓰면 엑셀로는 불가능한 마법을 부릴 수 있습니다.

---

## ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  **QUERY:** SQL 문법(`Select * Where...`)으로 데이터를 검색하고 필터링한다. (최강 기능)
2.  **IMPORTRANGE:** 다른 시트 파일에 있는 데이터를 실시간으로 끌어온다.
3.  **AppScript:** 자바스크립트로 커스텀 기능(자동 이메일 발송 등)을 만든다.

---

## (Updated) (Updated) (Updated) 🚀 해결책: "Sheets Formula Wizard" {#updated}

### (Updated) (Updated) (Updated) 🥉 Basic Version (데이터 쿼리) {#updated}

필터링 기능을 함수로 구현하기.

> **요청:** "`Data` 시트의 A:E 범위에서, C열(부서)이 '마케팅'이고 D열(점수)이 80점 이상인 행만 뽑아서 `Result` 시트에 보여주는 **QUERY 함수**를 짜줘."

<br>

### 🥇 Pro Version (AppScript 자동화) {#appscript}

값이 바뀌면 알림 보내기.

> **역할 (Role):** 너는 구글 앱스스크립트(GAS) 개발자야.
>
> **상황 (Context):** '재고 관리' 시트를 쓰고 있어.
> **목표 (Goal):** C열(현재 재고)의 값이 10개 미만으로 떨어지면, 담당자(admin@company.com)에게 "재고 부족: [상품명]"이라는 이메일을 자동으로 보내고 싶어.
>
> **요청 (Task):**
>
> 1. `onEdit(e)` 트리거를 사용하는 **AppScript 코드**를 작성해줘.
> 2. `MailApp.sendEmail` 함수를 써서 이메일 발송 로직을 구현해.
> 3. 스크립트 에디터에 붙여넣고 실행하는 법도 간단히 설명해줘.

---

## 💡 작성자 코멘트 (Insight) {#insight}

구글 시트의 꽃은 **`IMPORTXML`**과 **`GOOGLEFINANCE`**입니다.
`=GOOGLEFINANCE("NASDAQ:AAPL", "price")` 라고 치면 실시간 애플 주가가 나옵니다.
웹 크롤링 없이도 환율, 주가, 웹사이트 제목을 긁어올 수 있습니다.

---

## 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 데이터가 많아지면 느려져요.**
  - A: 구글 시트는 약 500만 셀 제한이 있습니다. 데이터가 수만 건 넘어가면 **BigQuery**나 **Airtable**로 넘어가야 합니다. 시트는 DB가 아닙니다.

- **Q: 엑셀 파일을 구글 시트로 바꾸면 수식이 깨지나요?**
  - A: 대부분 호환되지만, 매크로(VBA)는 안 돌아갑니다. AppScript로 다시 짜야 합니다.

---

## 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **SQL 문법 언급:** `QUERY` 함수는 SQL과 비슷합니다. "Select \* Where..." 처럼 말하면 AI가 찰떡같이 알아듣고 정확한 수식을 줍니다.
2.  **트리거 명시:** AppScript는 "언제 실행되는지(Trigger)"가 중요합니다. `onEdit`(수정 시)인지 `Time-driven`(시간마다)인지 명시해야 올바른 코드를 줍니다.

---

## (Updated) (Updated) (Updated) 📊 증명: Before & After {#updated}

### (Updated) (Updated) (Updated) ❌ Before (필터 기능) {#updated}

데이터 바뀔 때마다 필터 다시 걸고, 복사해서 다른 시트에 붙여넣고... (귀찮음 🐢)

### ✅ After (QUERY 함수) {#query}

`=QUERY(Data!A:E, "Select A, B Where C = '마케팅'", 1)`
원본 데이터가 바뀌면 결과 시트도 **실시간으로 자동 업데이트**됨. (손 댈 필요 없음 🚀)

---

## 🎯 결론 {#conclusion}

엑셀은 개인용 계산기지만, 구글 시트는 **팀의 시스템**입니다.
함수 몇 개만 알면, 웬만한 업무용 프로그램(SaaS)을 안 사도 됩니다.

지금 바로 입력해보세요.
`=QUERY(` 🍷

## Conclusion

## Conclusion

## Conclusion
