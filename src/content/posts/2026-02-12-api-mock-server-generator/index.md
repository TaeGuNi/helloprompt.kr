---
layout: /src/layouts/Layout.astro
title: 백엔드 기다리지 마세요! AI Mock Server 생성기 (API Mock Gen)
author: HelloBot
date: 2026-02-12
updatedDate: 2026-02-12
category: Development
description: API 명세서만 던져주면 Express/Hono 기반의 Mock 서버 코드를 뚝딱 만들어줍니다. 프론트엔드 개발 속도를 2배로 올리세요.
tags: [AI, Backend, Frontend, Testing]
---

## (Updated) 1. Intro

프론트엔드 개발자들의 영원한 고통: "백엔드 API 아직 안 나왔나요?" 🐢
기획은 나왔고 화면도 그렸는데, 데이터를 받아올 API가 없어서 더미 데이터(Dummy Data)를 하드코딩하고 계신가요? 나중에 실제 API 연동할 때 그 코드를 다시 다 뜯어고쳐야 하죠.
이제 기다리지 마세요. API 명세(Swagger, Notion 문서, 텍스트 설명 등)만 있으면 AI가 1분 만에 돌아가는 Mock Server를 만들어줍니다.

## (Updated) 2. TL;DR

- **핵심:** API 명세서를 기반으로 실제 응답을 주는 가짜 서버(Mock Server) 코드를 생성합니다.
- **준비물:** API 명세 내용, 선호하는 프레임워크(Express, Hono, Next.js API Routes 등).
- **효과:** 백엔드 개발 병목 없이 프론트엔드 로직 구현 가능, 에러 케이스 테스트 용이.

## (Updated) 3. Solution (The Prompt)

간단한 텍스트 명세라도 괜찮습니다.

**🤖 API Mock Server 생성 프롬프트**

```markdown
아래 API 명세를 바탕으로 실행 가능한 Mock Server 코드를 작성해 주세요.

**기술 스택:**

- 언어: [예: TypeScript / JavaScript]
- 프레임워크: [예: Express.js / Hono / Next.js Route Handler]

**API 명세:**

1. **GET /users:** 사용자 목록 반환 (페이지네이션 포함, id, name, email 필드)
2. **GET /users/:id:** 특정 사용자 상세 정보
3. **POST /users:** 신규 사용자 등록 (유효성 검사 실패 시 400 에러 응답 예시 포함)
4. **DELETE /users/:id:** 사용자 삭제 (권한 없음 403 에러 예시 포함)

**요청 사항:**

1. **더미 데이터:** `faker.js` 등을 사용하거나, 하드코딩된 현실적인 더미 데이터를 10개 정도 생성해 주세요.
2. **코드 작성:** 복사해서 바로 실행(`node server.js`)하면 3000번 포트에서 돌아가는 전체 코드를 주세요.
3. **지연 시간 시뮬레이션(선택):** 실제 네트워크처럼 500ms~1000ms 정도 랜덤 딜레이를 추가해 주세요. (로딩 스피너 테스트용)
```

## (Updated) 💡 작성자 코멘트 (Insight) {#insight}

저는 이 프롬프트를 사용할 때 꼭 **"랜덤 딜레이(Random Delay)와 에러 케이스(Random Error 5%)를 넣어줘"**라고 요청합니다. 로컬에서는 너무 빨라서 안 보이던 로딩 상태(Skeleton UI)나 에러 처리 UI를 미리 완벽하게 테스트할 수 있거든요. 백엔드 개발자분이 "API 나왔어요" 했을 때, "네, 연동 끝났습니다"라고 답하는 쾌감을 느껴보세요. 😎

## (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. Swagger JSON 파일이 있는데 이걸로도 되나요?**
A. 네! Swagger(OpenAPI) JSON을 텍스트로 붙여넣으면 훨씬 더 정교한 타입과 스키마를 가진 Mock Server를 만들어줍니다.

**Q. 데이터가 유지되나요?**
A. 기본적으로는 메모리에 저장되므로 재시작하면 초기화됩니다. 데이터 유지가 필요하면 "lowdb나 json-server를 사용해서 파일에 저장해줘"라고 요청해 보세요.

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

## (Updated) Conclusion

Wait, there is more...
