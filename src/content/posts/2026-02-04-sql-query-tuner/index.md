---
layout: /src/layouts/Layout.astro
title: "느려터진 SQL 쿼리, 3초 만에 튜닝하는 비법"
author: "Zzabbis"
date: "2026-02-07T09:10:33.179Z"
updatedDate: "2026-02-07T09:10:33.179Z"
category: "코딩/개발"
description: "복잡하고 비효율적인 SQL 쿼리를 분석하여 성능을 최적화하고 인덱스를 추천해주는 프롬프트입니다."
tags: ["SQL", "DB튜닝", "쿼리최적화", "데이터베이스"]
---

# (Updated) (Updated) 📝 느려터진 SQL 쿼리, 3초 만에 튜닝하는 비법

- **🎯 추천 대상:** 누구나
- **⏱️ 소요 시간:** 5분
- **🤖 추천 모델:** 모든 AI 모델

- **📊 난이도:** ⭐⭐☆☆☆
- **⚡️ 효과성:** ⭐⭐⭐⭐⭐
- **🛠️ 활용도:** ⭐⭐⭐⭐☆

_"데이터가 조금만 쌓여도 조회하는 데 5초가 걸려요..."_

처음엔 빨랐던 쿼리가 데이터가 늘어나면서 거북이가 됩니다.
실행 계획(Explain Plan)을 봐도 까만 건 글씨요 하얀 건 배경이라 막막하셨나요?
AI에게 쿼리를 보여주면 비효율적인 부분을 찾아내고, 마법 같은 인덱스 추천까지 해줍니다.

---

## (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1. 비효율적인 조인(Join)과 서브쿼리 개선
2. 필요한 인덱스(Index) 추천
3. 가독성 좋은 모던 SQL 문법으로 재작성

---

## (Updated) (Updated) 🚀 해결책: "SQL 쿼리 튜너"

### (Updated) (Updated) 🥉 Basic Version (기본형)

빠르게 결과만 필요할 때 사용하세요.

> **역할:** 너는 20년 경력의 수석 DBA(Database Administrator)이자 SQL 튜닝 전문가야.
> **요청:** 복잡하고 비효율적인 SQL 쿼리를 분석하여 성능을 최적화하고 인덱스를 추천해주는 프롬프트해줘.

<br>

### (Updated) (Updated) 🥇 Pro Version (전문가형)

디테일한 퀄리티가 필요할 때 사용하세요.

아래 **PROMPT** 내용을 복사해서 사용하세요.

> **역할 (Role):** 너는 20년 경력의 수석 DBA(Database Administrator)이자 SQL 튜닝 전문가야.
>
> **상황 (Context):** 내 애플리케이션에서 사용하는 SQL 쿼리가 데이터 양이 많아지면서 성능 저하를 일으키고 있어.
>
> **요청 (Task):**
> 아래 제공된 SQL 쿼리를 분석해서 다음 작업을 수행해줘:
>
> 1. **문제점 진단:** 현재 쿼리에서 성능 저하를 유발할 수 있는 부분(Full Table Scan 등)을 지적해줘.
> 2. **쿼리 최적화:** 동일한 결과를 반환하지만 더 효율적으로 동작하는 쿼리로 다시 작성해줘.
> 3. **인덱스 추천:** 쿼리 성능을 극대화하기 위해 어떤 컬럼에 인덱스를 걸어야 할지 `CREATE INDEX` 구문으로 제안해줘.
>
> **사용 중인 DB:** `[MySQL / PostgreSQL / Oracle / MS-SQL]`
>
> **대상 쿼리:**

> [여기에 느린 쿼리를 붙여넣으세요]

> **제약사항 (Constraints):**
>
> - 기존 쿼리의 결과 데이터셋은 절대 변경되면 안 돼.
> - 왜 빨라졌는지 실행 원리를 간단히 설명해줘.

---

## (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

이 프롬프트는 명확한 페르소나 설정과 구체적인 지시사항(Task)을 조합하여 AI의 의도를 정확히 파악하도록 설계되었습니다. 단계별 사고(Chain of Thought)를 유도하여 논리적인 답변을 얻을 수 있습니다.

---

## (Updated) (Updated) 📊 증명: Before & After

단순한 명령어와 최적화된 프롬프트의 차이는 명확합니다. 제공된 프롬프트를 사용했을 때 더 구체적이고 구조화된 답변을 얻을 수 있으며, 재수정(Re-prompting)에 드는 시간을 절약할 수 있습니다.

### (Updated) (Updated) ❌ Before (입력 쿼리)

```sql
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE price > 10000);
```

_문제점: 서브쿼리가 매 행마다 실행될 수 있음(Dependent Subquery)._

### (Updated) (Updated) ✅ After (결과)

**최적화된 쿼리 (JOIN 사용):**

```sql
SELECT DISTINCT u.*
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.price > 10000;
```

**추천 인덱스:**

```sql
CREATE INDEX idx_orders_price_userid ON orders(price, user_id);
```

_설명: 서브쿼리를 JOIN으로 변경하여 최적화하고, `price`로 필터링 후 `user_id`로 조인하도록 복합 인덱스를 생성했습니다._

---

## (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.

---

## (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. 결과가 마음에 들지 않아요.**
A. 구체적인 예시를 추가하거나, 상황(Context)을 더 자세히 묘사해보세요.

**Q. 다른 언어로도 가능한가요?**
A. 네, 프롬프트의 지시사항을 해당 언어로 번역하면 가능합니다.

---

## (Updated) (Updated) 🎯 결론 {#conclusion}

"튜닝은 예술이다"라는 말이 있지만, 이제는 AI의 도움을 받을 수 있는 '과학'입니다.
느린 쿼리 때문에 고통받지 말고, AI DBA에게 무료 컨설팅을 받아보세요! 🍷

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
