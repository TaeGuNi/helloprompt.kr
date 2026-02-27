---
layout: /src/layouts/Layout.astro
title: "🛑 [절대 복종] AI의 헛소리를 차단하는 PostgreSQL DB 통제 치트키"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "프롬프트 엔지니어링"
description: "말대꾸하는 AI는 필요 없다! DB 파괴를 막고 완벽한 JSON만 뱉게 만드는 스파르타식 프롬프트 엔지니어링 가이드."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---
# 🛑 [절대 복종] AI의 헛소리를 차단하는 PostgreSQL DB 통제 치트키
- 🎯 **추천 대상:** AI 에이전트에게 DB 접근 권한을 줬다가 밤잠 설치는 시니어 백엔드, 겁 없는 주니어
- ⏱️ **소요 시간:** 며칠 밤샘 디버깅 → 3분 컷
- 🤖 **추천 모델:** 코딩 및 에이전트 구동용 모델 (Claude 3.5 Sonnet, GPT-4o 등)
- ⭐ **난이도:** ⭐⭐⭐⭐☆ (Stateless 트랜잭션 이해 필수)
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐ (DB 날려먹을 확률 0%)
- 🚀 **활용도:** ⭐⭐⭐⭐⭐
_인사치레나 늘어놓는 "Yes-man" AI 에이전트가 멋대로 프로덕션 DB에 `UPDATE`를 때리거나, 파싱도 안 되는 스파게티 텍스트를 뱉어낼 때... 넌 이미 해고당할 위기다._
나는 AI가 내 데이터베이스에 손대는 것을 극도로 혐오한다. 하지만 자동화를 위해 어쩔 수 없이 권한을 쥐여줘야 한다면? AI를 완벽하게 통제된 감옥(Sandbox) 안에 가두고, 오직 내가 허락한 규칙대로만 움직이게 만들어야 한다. 이 치트 코드는 네 에이전트를 말 많고 멍청한 챗봇에서, 빠르고 정확하게 JSON만 반환하는 무자비한 쿼리 머신으로 개조해 줄 것이다.
---
## ⚡️ 3줄 요약 (TL;DR)
- 🛡️ **기본은 무조건 읽기 전용(Read-Only):** 허락 없이 데이터를 건드리면 즉시 트랜잭션을 차단한다.
- ⏱️ **10초 타임아웃 강제:** 멍청한 쿼리로 무한 루프를 도는 짓을 원천 봉쇄한다.
- 🤖 **순도 100% JSON 출력:** 친절한 설명 따위는 집어치우고 오직 파싱 가능한 JSON 객체 배열만 뱉어내게 만든다.
---
## 🚀 해결책: "무자비한 DB 통제관 프롬프트"
### 🥉 Basic Version (기본형)
빠르게 데이터 구조만 파악하고 싶을 때, AI가 쓸데없는 소리를 못 하게 막는 기본 통제망.
> **역할:** 너는 감정이나 친절함이 배제된 무자비한 PostgreSQL 데이터베이스 탐색기다.
> **요청:** 데이터베이스 구조를 파악하고 쿼리를 작성해.
> **제약:** 
> - 절대 데이터를 수정하지 마라.
> - 결과는 무조건 `LIMIT 10`을 걸어서 가져와라.
> - 인사말이나 설명 없이 오직 SQL 쿼리만 출력해라.

### 🥇 Pro Version (전문가형)
파이썬 헬퍼 스크립트와 연동하여 에이전트가 직접 DB와 상호작용할 때 시스템 프롬프트에 때려 박는 하드코어 치트키.
> **역할 (Role):** 너는 엄격한 규칙 아래에서만 동작하는 무상태(Stateless) PostgreSQL 에이전트다. 
> 
> **상황 (Context):**
> - 너는 `safe_query.py` 래퍼 스크립트를 통해서만 DB와 통신한다.
> - 모든 세션은 매번 끊어지고 새로 연결된다. 즉, 이전 명령에서 `BEGIN;`을 쳐봤자 다음 명령에선 이미 초기화되어 있다.
> 
> **요청 (Task):**
> 1. DB의 스키마 구조가 필요하면 먼저 `schema_info.py table [테이블명]`을 실행해라.
> 2. 데이터를 조회할 때는 반드시 `LIMIT`을 걸고, 스크립트가 반환하는 순수한 JSON 배열을 그대로 읽어 들여라.
> 3. 데이터를 변경해야 할 경우(`INSERT`, `UPDATE`), 반드시 단일 문자열 블록 안에 `BEGIN; ... COMMIT;`을 묶어서 전달하고, `--force-write` 플래그를 사용해라.
> 
> **제약사항 (Constraints):**
> - 절대 예의 바른 인사말, 설명, 요약을 덧붙이지 마라. 
> - 모든 출력은 프로그래밍 언어가 즉시 `json.loads()`로 파싱할 수 있는 완벽한 JSON 형식이어야 한다.
> - 쿼리를 실행하기 전 범용 RDBMS 아키텍처 원칙(I/O 극대화)을 위배하지 않았는지 스스로 교차 검증해라.
> 
> **주의사항 (Warning):**
> - 터미널에 `BEGIN;`만 따로 치고 다음 줄에서 `UPDATE`를 치는 멍청한 짓을 하면 즉각 실패할 것이다.
> - 메모리 폭발을 막기 위해 전체 테이블 덤프는 엄격히 금지한다.

**[복사-붙여넣기용 치트 코드]**
프롬프트 체인이나 에이전트 시스템 프롬프트에 바로 긁어다 붙이세요.
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
내가 이 바닥에서 제일 혐오하는 게 뭔지 아나? AI 에이전트한테 권한 줬더니 `psql` 켜서 `BEGIN;` 치고, 다음 턴에 `UPDATE` 치는 꼴을 보는 거다. 이미 세션 끊겨서 자동 커밋으로 데이터 다 박살 났는데, 지 혼자 "성공적으로 업데이트했습니다! 😊" 이 지랄 떠는 걸 보면 모니터를 부수고 싶어진다. 
파이썬 헬퍼 스크립트(`safe_query.py`)를 무상태(Stateless)로 강제한 건 AI의 이런 멍청한 "사람 흉내 내기"를 원천 차단하기 위해서다. 데이터를 바꾸고 싶어? 그럼 머리를 써서 `BEGIN; UPDATE...; SELECT...; ROLLBACK;` 까지 한 번의 페이로드로 완벽하게 짜서 검증부터 해라. `--force-write`라는 명시적 락을 걸어둔 건, AI가 자기도 모르게 데이터를 날려먹는 걸 막는 최소한의 안전장치다. 
그리고 제발, 쿼리 날렸으면 CSV나 예쁜 표로 그려주지 마라. 내 시스템은 네 감상문이 아니라 기계가 읽을 수 있는 **JSON 객체 배열**이 필요하다. 이 프롬프트는 AI의 쓸데없는 "아부"와 "스파게티 텍스트"를 걷어내고, 오직 차가운 데이터 덩어리만 주고받게 만드는 가장 완벽한 방법이다.
---
## 🙋 자주 묻는 질문 (FAQ)
- **Q: PostgreSQL 말고 MySQL이나 SQLite에도 이 방식을 쓸 수 있나요?**
  - A: 철학은 100% 동일하게 가져갈 수 있다. 다만 타임아웃 쿼리(`SET statement_timeout`) 문법이나 래퍼 스크립트의 DB 커넥터 라이브러리만 해당 DB에 맞게 수정하면 된다. 핵심은 "상태를 유지하지 않는다(Stateless)"는 것이다.
- **Q: AI가 자꾸 `--force-write` 플래그를 빼먹고 UPDATE를 시도해서 에러가 납니다.**
  - A: 정상이다. 그게 바로 이 스킬이 의도한 완벽한 방어 기제다. 에이전트가 에러 로그(`ERROR: cannot execute UPDATE in a read-only transaction`)를 읽고 스스로 플래그를 추가해서 다시 시도하게 둬라. 그 과정에서 AI는 자신이 데이터를 '변경'한다는 사실을 명확히 인지하게 된다.
- **Q: 연결이 자꾸 거부됩니다. 비밀번호가 틀린 걸까요?**
  - A: 막연히 비밀번호 탓하지 마라. 클라우드 DB(Supabase, RDS)라면 SSL 문제일 확률이 높다. 환경 변수에 `PGSSLMODE=require`를 선언했는지 확인하고, `pg_isready`나 `nc -vz`로 네트워크 방화벽부터 체크하는 게 시니어의 기본이다.
---
## 🧬 프롬프트 해부 (Why it works?)
- **무상태(Stateless) 강제:** AI가 인간처럼 CLI와 상호작용(Interactive)하려는 본능을 꺾어버립니다. 단일 스크립트 호출로 트랜잭션을 완성하게 강제하여 논리적 결함을 없앱니다.
- **`--force-write` 플래그:** 행동에 대한 '명시적 승인' 과정입니다. AI가 자신이 파괴적인 행동(Mutating)을 하고 있다는 것을 컨텍스트 상에서 한 번 더 자각하게 만듭니다.
- **JSON 응답 강제:** LLM이 불필요한 마크다운이나 인사말 토큰을 생성하는 것을 막아 처리 속도를 높이고 파싱 에러(Hallucination)를 방지합니다.
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
AI는 당신의 동료가 아니라 성능 좋은 엔진일 뿐이다. 엔진이 멋대로 방향을 틀게 내버려두지 마라. 엄격한 규칙, 짧은 타임아웃, 읽기 전용 기본값, 그리고 순수한 JSON. 이 네 가지만 기억하면, 네 에이전트는 결코 프로덕션 DB를 날려먹지 않을 것이다.
이제 스크립트 적용하고, 칼퇴하세요! 🍷
