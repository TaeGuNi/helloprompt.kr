---
layout: /src/layouts/Layout.astro
title: "GraphQL 스키마 설계: REST API에서 넘어오기"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "백엔드/DB"
description: "오버페칭(Over-fetching) 없는 깔끔한 API. 프론트엔드가 행복해지는 GraphQL 스키마 디자인 패턴."
tags: ["GraphQL", "API", "백엔드", "스키마", "Apollo"]
---

# 🕸️ GraphQL 스키마 설계: REST API에서 넘어오기

- **🎯 추천 대상:** "API 명세서 좀 그만 고치고 싶다" 외치는 백엔드 개발자, "데이터가 너무 많이 와서 앱이 느려요" 불평하는 프론트엔드 개발자
- **⏱️ 소요 시간:** 10분 (스키마 작성)
- **🤖 추천 모델:** ChatGPT-4o (데이터 구조화)

- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐☆

> _"화면에 유저 이름만 필요한데, 왜 API는 주소랑 전화번호까지 다 줘요?"_

REST API의 고질병, **오버페칭(Over-fetching)**입니다. GraphQL을 쓰면 **"원하는 것만"** 콕 집어 가져올 수 있습니다. 프론트엔드에게 뷔페 접시(Query)를 쥐여주세요. 알아서 담아 먹게.

---

## ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  **Schema:** 데이터의 모양(Type)을 정의한다.
2.  **Query:** "이거 이거 줘"라고 요청한다.
3.  **Resolver:** 실제 데이터를 DB에서 꺼내준다.

---

## 🚀 해결책: "Schema Designer Prompt"

### 🥉 Basic Version (REST 변환) {#rest}

기존 API를 GraphQL로.

> **REST:** `GET /users/{id}/posts` (유저 정보 + 그 유저가 쓴 글 목록)
> **요청:** 이걸 GraphQL 스키마(`type User`, `type Post`)로 정의하고, 쿼리 예시를 보여줘.

<br>

### 🥇 Pro Version (N+1 문제 해결 & 엣지 케이스) {#n-1}

성능까지 고려한 설계.

> **역할 (Role):** 너는 GraphQL 서버 아키텍트야.
>
> **상황 (Context):**
>
> - 블로그 서비스. `Post` 목록을 불러올 때 `Author`(작성자) 정보도 같이 보여줘야 함.
> - 단순히 구현하면 게시글 100개 가져올 때 작성자 100번 조회하는 **N+1 문제**가 발생함.
>
> **요청 (Task):**
>
> 1.  **DataLoader:** N+1 문제를 해결하기 위한 `DataLoader` 패턴을 적용한 리졸버(Resolver) 코드를 짜줘. (Node.js 기준)
> 2.  **Pagination:** 무한 스크롤을 위한 **커서 기반 페이지네이션(Cursor-based Pagination)** 스키마를 설계해. (Relay 표준 `edges`, `node` 구조)
> 3.  **Error Handling:** 에러가 났을 때 `data: null`만 주지 말고, `errors` 배열에 상세 내용을 담는 방식을 알려줘.

---

## 💡 작성자 코멘트 (Insight) {#insight}

GraphQL은 **'그래프(Graph)'**입니다.
유저 -> 글 -> 댓글 -> 작성자 -> 또 글...
무한히 타고 들어갈 수 있습니다.
이걸 악용하면 서버가 터집니다. (악의적인 깊은 쿼리)
AI에게 **"쿼리 복잡도 제한(Query Complexity Limit) 설정하는 법"**도 꼭 물어보세요.

---

## 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 캐싱은 어떻게 해요?**
  - A: REST는 URL만 보면 캐싱이 되지만, GraphQL은 `POST` 요청 하나라 어렵습니다. **Apollo Client** 같은 클라이언트 라이브러리가 로컬 캐싱을 기가 막히게 해줍니다.

- **Q: 파일 업로드는요?**
  - A: 가능은 한데 복잡합니다. 그냥 파일 업로드는 REST API로 따로 빼는 게 정신 건강에 좋습니다. (하이브리드 추천)

---

## 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **N+1 문제 언급:** GraphQL의 아킬레스건을 먼저 지적하면, AI가 단순히 작동하는 코드가 아니라 **'성능 최적화된 코드(DataLoader)'**를 줍니다.
2.  **Relay 표준:** 페이지네이션은 제각각 구현하면 나중에 피 봅니다. "Relay 표준"을 따르라고 하면, 페이스북이 만든 검증된 구조(`edges`, `cursor`)를 가져옵니다.

---

## 📊 증명: Before & After

### ❌ Before (REST)

API 3번 호출: `/user`, `/posts`, `/comments` (네트워크 왕복 3회 🐢)

### ✅ After (GraphQL)

쿼리 1번:

```graphql
query {
  user {
    posts {
      comments {
        body
      }
    }
  }
}
```

(한 방에 모든 데이터 수신 🚀)

---

## 🎯 결론 {#conclusion}

API 명세서 쓰느라 밤새지 마세요.
GraphQL은 스키마 자체가 명세서입니다.

프론트엔드와 백엔드의 평화 협정.
**GraphQL**에 서명하세요. 🍷
