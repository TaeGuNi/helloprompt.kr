---
layout: /src/layouts/Layout.astro
title: "복잡한 SQL 쿼리, 말로 하면 코드로 짜줍니다"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "데이터"
description: "JOIN, GROUP BY, Window Function... 헷갈리는 SQL 문법, 이제 검색하지 마세요."
tags: ["SQL", "데이터분석", "쿼리"]
---

# 📝 복잡한 SQL 쿼리, 말로 하면 코드로 짜줍니다

- **🎯 추천 대상:** 데이터 분석가, 마케터, 개발자
- **⏱️ 소요 시간:** 30분 → 1분 단축
- **🤖 추천 모델:** ChatGPT (GPT-4), Claude 3 (데이터 이해도 우수)

- ⭐ **난이도:** ⭐☆☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"JOIN, GROUP BY, Window Function... 헷갈리는 SQL 문법, 이제 검색하지 마세요."_

데이터 추출이 필요한데 SQL 문법이 기억나지 않아 고생한 적 있나요? 이 프롬프트는 자연어로 요청하면 정확한 SQL 쿼리를 생성해주고, 쿼리의 작동 $리까지 설명해줍니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. 자연어 문장 → 실행 가능한 SQL 코드로 변환
2. 복잡한 JOIN, 서브쿼리, 윈도우 함수 자동 생성
3. 쿼리 성능 최적화 제안 및 설명

---

## 🚀 해결책: "SQL Wizard"

### 🥉 Basic Version (기본형)

간단한 SELECT 문이 필요할 때 사용하세요.

> **역할:** 너는 데이터베이스 전문가야.
> **요청:** `[테이블 이름]` 테이블에서 `[조건]`에 맞는 데이터를 뽑아주는 SQL을 짜줘.

<br>

### 🥇 Pro Version (전문가형)

복잡한 데이터 추출이나 최적화된 쿼리가 필요할 때 사용하세요.

> **역할 (Role):** 너는 10년 차 데이터 엔지니어(Data Engineer)야.
>
> **상황 (Context):**
>
> - 데이터베이스 종류: `[MySQL / PostgreSQL / Oracle / BigQuery]`
> - 테이블 스키마:
>   - `[테이블1]`: `[컬럼1, 컬럼2...]`
>   - `[테이블2]`: `[컬럼A, 컬럼B...]`
> - 관계(Relation): `[테이블1.컬럼1]` = `[테이블2.컬럼A]`
>
> **요청 (Task):**
>
> 1. `[$하는 데이터]`를 추출하는 효율적인 SQL 쿼리를 작성해줘.
> 2. 쿼리의 각 부분(JOIN, WHERE 등)에 대한 설명을 주석으로 달아줘.
> 3. (선택) 성능을 높일 수 있는 인덱스(Index) 전략을 제안해줘.
>
> **제약사항 (Constraints):**
>
> - 가독성을 위해 예약어는 대문자로 표기해.
> - 가능한 서브쿼리보다는 JOIN을 사용해줘.
>
> **주의사항 (Warning):**
>
> - 존재하지 않는 컬럼을 사용하지 마.

---

## 💡 작성자 코멘트 (Insight)

생성된 쿼리는 실행 전 반드시 `EXPLAIN` (실행 계획) 단계를 거치는 것이 좋습니다. AI가 짠 쿼리가 항상 최적의 성능을 보장하는 것은 아니므로, 데이터 양이 많을 때는 주의해서 실행하세요.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: 테이블 스키마를 일일이 다 적어야 하나요?**
  - A: 핵심적인 컬럼명과 타입만 적어주면 충분합니다. `SHOW CREATE TABLE` 결과를 복사해서 붙여넣으면 가장 정확합니다.

- **Q: 특정 함수(예: 날짜 변환)를 쓰고 싶은데?**
  - A: 요청사항에 "날짜는 YYYY-MM-DD 형식으로 변환해줘"라고 추가하면 됩니다.

---

## 🧬 프롬프트 해부 (Why it works?)

1.  **Schema Context:** 테이블 구조(Schema)를 제공하여 AI가 실제 실행 가능한 쿼리를 짜도록 유도했습니다.
2.  **Explicit DB Dialect:** "MySQL", "PostgreSQL" 등 특정 DB를 지정하여 문법 오류를 줄였습니다.

---

## 📊 증명: Before & After

### ❌ Before (입력 질문)

```text
users 테이블이랑 orders 테이블 합쳐서, 2024년에 가입한 유저 중에 주문 금액이 10만$ 이상인 사람 이름이랑 총 주문금액 보여줘.
```

### ✅ After (결과 SQL)

```sql
SELECT 
    u.name, 
    SUM(o.amount) AS total_amount
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE 
    u.created_at >= '2024-01-01' 
    AND u.created_at < '2025-01-01'
GROUP BY u.id, u.name
HAVING SUM(o.amount) >= 100000;
```

---

## 🎯 결론

데이터가 필요할 땐, 코딩하지 말고 질문하세요! 🍷
