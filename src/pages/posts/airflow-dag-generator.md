---
layout: /src/layouts/Layout.astro
title: "데이터 파이프라인(ETL): Airflow DAG 작성 자동화"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "백엔드/DB"
description: "복잡한 데이터 처리 흐름, 코딩하느라 시간 쓰지 마세요. Airflow DAG 코드를 1분 만에 짜는 법."
tags: ["Airflow", "ETL", "데이터엔지니어링", "파이썬", "자동화"]
---

# 🌪️ 데이터 파이프라인(ETL): Airflow DAG 작성 자동화

> **🎯 추천 대상:** 매일 새벽에 크론탭(Crontab) 터질까 봐 잠 못 자는 데이터 엔지니어, 스파게티처럼 꼬인 배치 작업을 정리하고 싶은 개발자
> **⏱️ 소요 시간:** 10분 (DAG 작성)
> **🤖 추천 모델:** ChatGPT-4o (파이썬 코드 생성)

- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"A 작업 끝나면 B 실행하고, 실패하면 C 실행해. 아, 주말엔 쉬고."_

이걸 쉘 스크립트로 짜면 지옥이 열립니다. **Apache Airflow**는 복잡한 작업 흐름(Workflow)을 코드로 관리하게 해줍니다. 하지만 DAG(Directed Acyclic Graph) 짜는 게 좀 귀찮죠. AI에게 **"순서도(Flowchart)"**만 말해주면 코드가 나옵니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1.  **Extract:** 데이터를 어디서 가져올지(DB, API) 말한다.
2.  **Transform:** 어떻게 가공할지(필터링, 계산) 말한다.
3.  **Load:** 어디에 저장할지(S3, BigQuery) 말한다.

---

## 🚀 해결책: "DAG Generator Prompt"

### 🥉 Basic Version (간단한 스케줄링)

매일 아침 데이터 백업하기.

> **요청:** "매일 아침 6시(KST)에 MySQL DB를 덤프 떠서 S3 버킷에 업로드하는 **Airflow DAG**를 짜줘. `BashOperator`를 사용해서."

<br>

### 🥇 Pro Version (복잡한 의존성 관리)

실패 시 알림 및 분기 처리.

> **역할 (Role):** 너는 시니어 데이터 엔지니어야.
>
> **파이프라인 (Pipeline):**
>
> 1.  **Task A:** 외부 API에서 환율 정보를 가져온다. (`PythonOperator`)
> 2.  **Task B:** (A 성공 시) 가져온 데이터를 정제해서 CSV로 만든다.
> 3.  **Task C:** (B 성공 시) Redshift 웨어하우스에 적재한다.
> 4.  **Task D:** (A, B, C 중 하나라도 실패 시) 슬랙(Slack)으로 에러 알림을 보낸다. (`on_failure_callback`)
>
> **조건:**
>
> - **재시도(Retry):** 실패 시 5분 간격으로 3번 재시도.
> - **병렬 처리:** Task B는 CPU를 많이 쓰니까 `KubernetesPodOperator`로 돌리고 싶어.

---

## 💡 작성자 코멘트 (Insight)

Airflow의 핵심은 **'멱등성(Idempotency)'**입니다.
어제 돌린 걸 오늘 다시 돌려도 결과가 똑같아야 합니다.
AI에게 "이 DAG가 멱등성을 보장하도록 날짜 파라미터(`execution_date`)를 활용해서 짜줘"라고 하면 고수 소리 듣습니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: Airflow 설치가 어려워요.**
  - A: 로컬에서는 `docker-compose`로 띄우는 게 정신 건강에 좋습니다. AI에게 "Airflow docker-compose.yaml 파일 줘"라고 하세요.

- **Q: 실시간 데이터도 되나요?**
  - A: Airflow는 배치(Batch) 전용입니다. 실시간은 **Kafka**나 **Flink**를 써야 합니다. 용도를 구분하세요.

---

## 🧬 프롬프트 해부 (Why it works?)

1.  **의존성(Dependency) 명시:** "A 끝나면 B, 실패하면 D"라는 흐름을 명확히 주면, AI가 `A >> B >> C`, `[A, B, C] >> D` 같은 연산자 로직을 정확히 구현합니다.
2.  **Operator 지정:** `BashOperator`, `PythonOperator` 등 구체적인 오퍼레이터를 지정하면, 내 환경에 맞는 최적의 코드가 나옵니다.

---

## 📊 증명: Before & After

### ❌ Before (Crontab)

`0 6 * * * backup.sh` (에러 나면? 로그는? 재시도는? 아무도 모름 🙈)

### ✅ After (Airflow)

초록색 불이 쫘르륵 들어오는 UI. 실패하면 빨간 불 뜨고 슬랙 알림 옴. "아, API가 잠깐 죽었었구나. 재시도 버튼 클릭." (편안 😌)

---

## 🎯 결론

데이터는 흐물흐물합니다. 파이프가 없으면 다 샙니다.
튼튼한 파이프라인을 구축하세요.

당신의 데이터가 **자산**이 되어 흐를 것입니다. 🍷
