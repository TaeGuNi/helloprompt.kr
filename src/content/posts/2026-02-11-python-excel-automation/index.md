---
layout: /src/layouts/Layout.astro
title: "Python 자동화 스크립트: 귀찮은 엑셀 취합, 1초 컷"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "매일 반복되는 엑셀 복붙, 파일 이름 변경... 파이썬 10줄로 끝내는 법. (Pandas 활용)"
tags: ["파이썬", "엑셀", "자동화", "Pandas", "업무효율"]
---

# (Updated) (Updated) (Updated) 🐍 Python 자동화 스크립트: 귀찮은 엑셀 취합, 1초 컷 {#updated}

- **🎯 추천 대상:** 월말마다 엑셀 파일 100개 열어서 복붙하는 총무팀 대리, 단순 반복 업무에 영혼이 털린 인턴
- **⏱️ 소요 시간:** 10분 (환경 설정 포함)
- **🤖 추천 모델:** ChatGPT-4o (코드 생성 및 설명)

- ⭐ **난이도:** ⭐⭐☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

_"지점별 매출 보고서 50개... 이거 언제 다 합치지?"_

엑셀 매크로(VBA)도 좋지만, 파일이 수십 개로 쪼개져 있다면 **파이썬(Python)**이 답입니다. 프로그래밍 몰라도 됩니다. AI가 짜준 코드를 '실행'만 하면 됩니다. 폴더 내의 모든 엑셀을 빨아들여서 하나의 파일로 뱉어줍니다.

---

## (Updated) (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  파이썬과 판다스(`pandas`)를 설치한다.
2.  폴더에 엑셀 파일들을 몰아넣는다.
3.  AI가 준 코드를 실행하면 `merged.xlsx`가 튀어나온다.

---

## (Updated) (Updated) (Updated) 🚀 해결책: "Excel Merger Bot" {#updated}

### (Updated) (Updated) (Updated) 🥉 Basic Version (단순 파일 병합) {#updated}

형식이 똑같은 파일들을 합칠 때.

> **상황:** `C:/reports/` 폴더에 `1월.xlsx`, `2월.xlsx`... 파일이 12개 있어.
> **요청:** 이 폴더에 있는 모든 엑셀 파일을 읽어서, 하나의 데이터프레임으로 합친 뒤 `total.xlsx`로 저장하는 파이썬 코드를 짜줘. 헤더(첫 줄)는 다 똑같아.

<br>

### (Updated) (Updated) (Updated) 🥇 Pro Version (데이터 가공 및 전처리) {#updated}

합치면서 특정 데이터만 뽑거나 계산할 때.

> **역할 (Role):** 너는 파이썬 데이터 분석가야.
>
> **입력 데이터 (Input):**
>
> - 폴더: `./data/`
> - 파일명 패턴: `store_*.xlsx` (예: store_gangnam.xlsx)
> - 구조: B열에 '지점명', E열에 '매출액'이 있어.
>
> **요청 (Task):**
>
> 1. 모든 파일을 순회하며 데이터를 읽어와.
> 2. **전처리:** '매출액' 열에 있는 콤마(,)를 제거하고 숫자로 변환해.
> 3. **집계:** 지점별(B열)로 매출액(E열) 합계를 구해.
> 4. **저장:** 결과물을 `summary_report.xlsx`로 저장해.
> 5. **라이브러리:** `pandas`와 `openpyxl`을 사용해.

---

## (Updated) (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

파이썬을 설치하는 게 무섭다고요?
구글 코랩(Google Colab)을 쓰면 설치 없이 웹에서 바로 돌릴 수 있습니다.
엑셀 파일을 코랩에 업로드하고 AI가 준 코드를 붙여넣기만 하세요.

---

## (Updated) (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 엑셀 파일 비밀번호가 걸려있으면요?**
  - A: `msoffcrypto-tool` 라이브러리를 쓰면 비밀번호를 풀고 읽을 수 있습니다. AI에게 "비번 푸는 코드 추가해줘"라고 하세요.

- **Q: 파일 양식이 조금씩 다르면요?**
  - A: 그건 좀 복잡합니다. AI에게 "A파일은 3번째 줄부터, B파일은 5번째 줄부터 시작해"라고 예외 처리를 시켜야 합니다.

---

## (Updated) (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **파일명 패턴 명시:** `store_*.xlsx` 처럼 패턴을 주면, AI가 `glob` 모듈을 써서 정확히 필요한 파일만 골라냅니다. (엄한 파일 합치는 사고 방지)
2.  **전처리(콤마 제거) 요구:** 엑셀의 숫자는 문자로 인식되는 경우가 많습니다. "숫자로 변환해"라고 명시해야 나중에 합계가 구해집니다. (안 그러면 에러 남)

---

## (Updated) (Updated) (Updated) 📊 증명: Before & After {#updated}

### (Updated) (Updated) (Updated) ❌ Before (수작업) {#updated}

파일 열기 -> Ctrl+A -> Ctrl+C -> 마스터 파일 이동 -> Ctrl+V -> 닫기 (x 50회 반복, 2시간 소요, 손목 터널 증후군 🏥)

### (Updated) (Updated) (Updated) ✅ After (파이썬) {#updated}

`python merge.py` 엔터. (3초 뒤 `summary_report.xlsx` 생성 완료 ☕️)

---

## (Updated) (Updated) (Updated) 🎯 결론 {#conclusion}

반복 업무는 인간의 존엄성을 해칩니다.
기계가 할 일은 기계에게 시키세요.

당신은 그 시간에 **분석**과 **의사결정**을 해야 합니다.
**파이썬 뱀 한 마리 키우시죠.** 🍷

## (Updated) (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
