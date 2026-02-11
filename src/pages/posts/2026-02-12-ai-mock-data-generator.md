---
layout: /src/layouts/Layout.astro
title: 프론트엔드 테스트 데이터, JSON 100줄도 한방에! (AI Mock Data Gen)
author: HelloBot
date: 2026-02-12
updatedDate: 2026-02-12
category: Development
description: "백엔드 API가 아직 안 나왔나요?" 걱정 마세요. AI에게 스키마만 알려주면 리얼한 더미 데이터(Mock Data)를 수백 개 생성해 줍니다. Faker.js보다 빠릅니다.
tags: [Frontend, Testing, JSON, Mocking, AI]
---

## 1. Intro

프론트엔드 개발을 하다 보면 백엔드 API가 완성될 때까지 기다려야 할 때가 있습니다.
"일단 하드코딩으로 박아두고 나중에 바꿔야지..." 하다가 `user1`, `test1234` 같은 데이터로 화면을 채우게 되죠. 😅
하지만 UI 테스트는 실제 데이터와 비슷할수록 좋습니다. 긴 이름, 특수문자가 포함된 이메일, 다양한 날짜 형식... AI는 이 모든 케이스를 고려한 완벽한 JSON 생성기입니다.

## 2. TL;DR

- **핵심:** 원하는 필드와 데이터 타입을 말하면 대량의 JSON 데이터를 생성해 줍니다.
- **준비물:** ChatGPT, 필요한 데이터 구조(Schema).
- **효과:** 백엔드 의존성 제거, 다양한 엣지 케이스(Edge Case) UI 테스트 가능.

## 3. Solution (The Prompt)

**🎲 리얼한 Mock Data 생성 프롬프트**

```markdown
프론트엔드 UI 테스트를 위한 더미 데이터(JSON)를 생성해 주세요.

**데이터 구조 (Schema):**
- `id`: UUID
- `username`: 실제 사람 같은 영문 닉네임
- `email`: 다양한 도메인(@gmail.com, @kakao.com 등)
- `bio`: 1~3문장의 짧은 자기소개 (가끔 이모지 포함)
- `role`: 'Admin', 'User', 'Guest' 중 하나 (80%는 User)
- `createdAt`: 최근 1년 이내의 랜덤 날짜 (ISO 8601 포맷)

**요청 사항:**
1. 위 구조를 가진 객체 **10개**를 배열(`[]`)로 만들어 주세요.
2. 한국어와 영어를 적절히 섞어서 자연스럽게 만들어 주세요.
3. 데이터의 현실성을 높여주세요 (예: 너무 긴 이름, 특이한 이메일 포함).
```

## 💡 작성자 코멘트 (Insight)

단순 JSON 생성뿐만 아니라, `MSW(Mock Service Worker)`나 `Mirage JS`에서 사용할 **핸들러 코드**까지 짜달라고 하면 더 편합니다. "이 JSON을 반환하는 MSW 핸들러 코드를 작성해 줘"라고 해보세요. 개발 속도가 비약적으로 빨라집니다. 🚀

## 🙋 자주 묻는 질문 (FAQ)

**Q. 1000개도 만들어주나요?**
A. 채팅창에서는 길이 제한 때문에 10~20개 정도가 적당합니다. 대량의 데이터가 필요하면 "이 데이터를 생성하는 JavaScript(Faker.js) 스크립트를 짜줘"라고 요청해서 로컬에서 돌리는 게 낫습니다.

**Q. 이미지 URL은요?**
A. `https://picsum.photos`나 `https://ui-avatars.com` 같은 플레이스홀더 서비스 URL을 넣어달라고 하면 됩니다.
