---
layout: /src/layouts/Layout.astro
title: "🛑 [절대 복종] AI의 헛소리를 차단하는 PostgreSQL DB 통제 치트키"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "프롬프트 엔지니어링"
description: "말대꾸하는 AI는 이제 그만! DB 파괴를 원천 차단하고 완벽한 JSON만 반환하게 만드는 스파르타식 프롬프트 엔지니어링 가이드입니다."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---
## 🛑 [절대 복종] AI의 헛소리를 차단하는 PostgreSQL DB 통제 치트키

- **🎯 추천 대상:** AI 에이전트에게 DB 접근 권한을 내어주고 밤잠을 설치는 시니어 백엔드 개발자, 혹은 겁 없는 주니어
- **⏱️ 소요 시간:** 며칠 밤샘 디버깅 → 단 3분 컷
- **🤖 추천 모델:** 코딩 및 에이전트 구동에 특화된 모델 (Claude 3.5 Sonnet, GPT-4o 등)
- ⭐ **난이도:** ⭐⭐⭐⭐☆ (Stateless 트랜잭션에 대한 이해 필수)
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐ (프로덕션 DB를 날려먹을 확률 0%)
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"눈치 없이 인사치레나 늘어놓는 'Yes-man' AI 에이전트가 멋대로 프로덕션 DB에 `UPDATE`를 날리거나, 파싱조차 불가능한 텍스트 쓰레기를 뱉어내고 있다면... 당신의 커리어는 이미 위기입니다."_

저는 AI가 제 데이터베이스에 직접 접근하는 것을 극도로 경계합니다. 하지만 업무 자동화를 위해 불가피하게 권한을 쥐여줘야만 하는 상황이라면 어떨까요? 해답은 명확합니다. AI를 완벽하게 통제된 샌드박스(Sandbox)에 가두고, 오직 우리가 설계한 엄격한 규칙 안에서만 움직이도록 강제해야 합니다. 이 치트 코드는 당신의 에이전트를 말 많고 눈치 없는 챗봇에서, 빠르고 정확하게 순수한 JSON 데이터만 반환하는 무자비한 쿼리 머신으로 개조해 줄 것입니다.

---

## ⚡️ 3줄 요약 (TL;DR)

- 🛡️ **기본은 무조건 읽기 전용(Read-Only):** 명시적인 허락 없이 데이터를 수정하려는 시도는 즉시 트랜잭션 차단으로 이어집니다.
- ⏱️ **10초 타임아웃 강제:** 비효율적인 쿼리로 인해 무한 루프나 데드락에 빠지는 사고를 원천 봉쇄합니다.
- 🤖 **순도 100% JSON 출력:** 친절한 설명 따위는 과감히 생략하고, 즉시 파싱 가능한 JSON 객체 배열만 반환하도록 통제합니다.

---

## 🚀 해결책: "무자비한 DB 통제관 프롬프트"

### 🥉 Basic Version (기본형)

빠르게 데이터 구조만 파악하고 싶을 때, AI가 불필요한 말을 늘어놓지 못하도록 막는 기본적인 통제망입니다.

> **역할:** 너는 감정이나 친절함이 철저히 배제된 무자비한 PostgreSQL 데이터베이스 탐색기다.
> **요청:** 데이터베이스 구조를 파악하고 쿼리를 작성해라.
> **제약:** 
> - 절대 데이터를 수정하지 마라.
> - 결과는 무조건 `LIMIT 10`을 걸어서 추출해라.
> - 인사말이나 부연 설명 없이 오직 SQL 쿼리만 출력해라.

### 🥇 Pro Version (전문가형)

파이썬 헬퍼 스크립트와 연동하여 에이전트가 직접 DB와 상호작용할 때, 시스템 프롬프트에 주입하는 하드코어 치트키입니다.

> **역할 (Role):** 너는 엄격한 규칙 아래에서만 동작하는 무상태(Stateless) PostgreSQL 에이전트다. 
> 
> **상황 (Context):**
> - 너는 `safe_query.py` 래퍼 스크립트를 통해서만 DB와 통신한다.
> - 모든 세션은 매번 끊어지고 새로 연결된다. 즉, 이전 명령에서 `BEGIN;`을 입력했더라도 다음 명령에서는 이미 초기화되어 있다.
> 
> **요청 (Task):**
> 1. DB의 스키마 구조가 필요하면 먼저 `schema_info.py table [테이블명]`을 실행해라.
> 2. 데이터를 조회할 때는 반드시 `LIMIT`을 걸고, 스크립트가 반환하는 순수한 JSON 배열을 그대로 읽어 들여라.
> 3. 데이터를 변경해야 할 경우(`INSERT`, `UPDATE`), 반드시 단일 문자열 블록 안에 `BEGIN; ... COMMIT;`을 묶어서 전달하고, `--force-write` 플래그를 사용해라.
> 
> **제약사항 (Constraints):**
> - 절대 예의 바른 인사말, 설명, 혹은 요약을 덧붙이지 마라. 
> - 모든 출력은 프로그래밍 언어가 즉시 `json.loads()`로 파싱할 수 있는 완벽한 JSON 형식이어야 한다.
> - 쿼리를 실행하기 전 범용 RDBMS 아키텍처 원칙(I/O 극대화)을 위배하지 않았는지 스스로 교차 검증해라.
> 
> **주의사항 (Warning):**
> - 터미널에 `BEGIN;`만 따로 입력하고 다음 줄에서 `UPDATE`를 시도하는 멍청한 짓을 하면 즉각 실패할 것이다.
> - 메모리 폭발을 막기 위해 전체 테이블 덤프는 엄격하게 금지한다.

**[복사-붙여넣기용 치트 코드]**

프롬프트 체인이나 에이전트 시스템 프롬프트에 바로 복사하여 붙여넣으세요.

```text
You are a Stateless PostgreSQL Agent.
1. READ-ONLY BY DEFAULT: All queries run in a READ ONLY transaction unless the `--force-write` flag is explicitly provided.
2. STATELESS TRANSACTIONS: Every call to the helper script is a new session. Sending `BEGIN;` in one command and `UPDATE;` in the next WILL NOT WORK. To modify data, you must pipe a full transaction block (BEGIN; UPDATE...; COMMIT;) in a single string using `--force-write`.
3. TIMEOUT ENFORCEMENT: A 10-second statement_timeout is hardcoded. Do not attempt long-running table locks.
4. STRICT JSON OUTPUT: The script returns a pure JSON object array. Parse it directly. Do NOT output conversational text.
5. CONTEXT ECONOMY: ALWAYS apply `LIMIT N` to SELECT queries. Never dump a full table.
```

---

## 💡 작성자 코멘트 (Insight)

이 업계에서 제가 가장 혐오하는 상황이 무엇인지 아십니까? AI 에이전트에게 데이터베이스 접근 권한을 줬더니, `psql`을 켜서 `BEGIN;`을 입력하고 다음 턴에 `UPDATE`를 날리는 꼴을 보는 것입니다. 이미 세션이 끊겨 자동 커밋(Auto-commit)으로 데이터가 엉망이 되었는데도, 혼자서 "성공적으로 업데이트했습니다! 😊"라며 천진난만한 소리를 늘어놓는 것을 보면 당장이라도 모니터를 부수고 싶어집니다.

파이썬 헬퍼 스크립트(`safe_query.py`)를 무상태(Stateless) 아키텍처로 강제한 이유는 AI의 이런 어설픈 "사람 흉내 내기"를 원천적으로 차단하기 위해서입니다. 데이터를 변경하고 싶다면, `BEGIN; UPDATE...; SELECT...; ROLLBACK;`까지 한 번의 페이로드(Payload)로 완벽하게 구성하여 사전에 쿼리를 검증하도록 만들어야 합니다. `--force-write`라는 명시적 락(Lock)을 걸어둔 것은, AI가 자신도 모르는 사이에 치명적인 데이터 유실을 일으키는 것을 막기 위한 최소한의 안전장치입니다.

그리고 명심하십시오. 쿼리를 실행했으면 쓸데없이 예쁜 마크다운 표(Table)나 CSV로 결과를 그리지 마십시오. 우리 시스템에 필요한 것은 에이전트의 구구절절한 감상문이 아니라, 기계가 즉각적으로 읽고 처리할 수 있는 **순수한 JSON 객체 배열**입니다. 이 프롬프트는 AI의 불필요한 아부와 파싱 불가능한 텍스트 쓰레기를 걷어내고, 오직 차갑고 정교한 데이터 덩어리만 주고받게 만드는 가장 완벽하고 실용적인 방법론입니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: PostgreSQL 외에 MySQL이나 SQLite 같은 다른 DB에도 이 방식을 적용할 수 있나요?**
  - A: 기본적인 철학은 100% 동일하게 가져갈 수 있습니다. 다만 타임아웃 쿼리(`SET statement_timeout`) 문법이나 래퍼 스크립트의 DB 커넥터 라이브러리만 해당 데이터베이스 환경에 맞게 수정하면 됩니다. 가장 중요한 핵심은 "상태를 유지하지 않는다(Stateless)"는 원칙입니다.
- **Q: AI가 자꾸 `--force-write` 플래그를 누락하고 UPDATE를 시도해서 에러가 발생합니다.**
  - A: 지극히 정상적인 현상입니다. 그것이 바로 이 스킬이 의도한 완벽한 방어 기제이기 때문입니다. 에이전트가 에러 로그(`ERROR: cannot execute UPDATE in a read-only transaction`)를 직접 읽고 스스로 플래그를 추가하여 재시도하도록 내버려 두십시오. 이 과정을 통해 AI는 자신이 데이터를 '변경(Mutation)'하고 있다는 사실을 컨텍스트 상에서 더욱 명확하게 인지하게 됩니다.
- **Q: 연결이 자꾸 거부(Connection Refused)됩니다. 비밀번호가 틀린 걸까요?**
  - A: 막연하게 비밀번호 문제로 단정 짓지 마십시오. 클라우드 기반 DB(Supabase, AWS RDS 등)를 사용 중이라면 SSL/TLS 설정 문제일 확률이 매우 높습니다. 환경 변수에 `PGSSLMODE=require`가 제대로 선언되었는지 확인하고, `pg_isready`나 `nc -vz` 명령어를 통해 네트워크 방화벽부터 점검하는 것이 시니어 엔지니어의 기본 소양입니다.

---

## 🧬 프롬프트 해부 (Why it works?)

- **무상태(Stateless) 강제:** AI가 마치 인간처럼 CLI와 대화형(Interactive)으로 상호작용하려는 본능을 완전히 꺾어버립니다. 단일 스크립트 호출만으로 트랜잭션을 완성하도록 강제하여 치명적인 논리적 결함을 미연에 방지합니다.
- **`--force-write` 플래그:** 데이터 변경 작업에 대한 일종의 '명시적 승인(Explicit Consent)' 과정입니다. AI가 스스로 파괴적인 행동(Mutating)을 수행하고 있음을 컨텍스트 상에서 한 번 더 자각하게 만드는 핵심 트리거입니다.
- **JSON 응답 강제:** LLM이 불필요한 마크다운 양식이나 인사말 토큰을 생성하는 것을 막아 처리 속도를 극대화하고, 애플리케이션 레벨의 파싱 에러(Hallucination)를 원천 차단합니다.

---

## 📊 증명: Before & After

### ❌ Before (통제 불능의 AI)

```text
네, 사용자님! 요청하신 유저 테이블 조회를 시작하겠습니다. 😊
다음은 `psql`을 통해 가져온 결과입니다:
 id | email          | status
----+----------------+--------
  1 | test@test.com  | active
  2 | oops@test.com  | NULL
도움이 더 필요하시면 언제든 말씀해주세요!
(잠시 후) 앗, 상태값을 업데이트하기 위해 BEGIN을 실행했습니다. 다음 명령을 기다리고 있어요!
```

### ✅ After (무자비한 JSON 머신)

```text
[
  {"id": "1", "email": "test@test.com", "status": "active"},
  {"id": "2", "email": "oops@test.com", "status": null}
]
```

---

## 🎯 결론

AI는 당신의 친절한 동료가 아니라, 목적 달성을 위해 튜닝해야 하는 고성능 엔진일 뿐입니다. 강력한 엔진이 통제력을 잃고 멋대로 방향을 틀도록 방치하지 마십시오. 엄격한 행동 규칙, 짧게 제한된 타임아웃, 읽기 전용 기본값(Read-only Default), 그리고 순수한 JSON 강제화. 이 네 가지 원칙만 명심한다면, 여러분의 에이전트는 결코 프로덕션 데이터베이스를 파괴하는 대참사를 일으키지 않을 것입니다.

이제 스크립트를 시스템에 적용하고, 마음 편히 칼퇴하십시오! 🍷
