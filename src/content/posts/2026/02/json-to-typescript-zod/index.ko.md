---
layout: /src/layouts/Layout.astro
title: "JSON만 던지면 TypeScript 타입 정의가 짠! (feat. Zod)"
author: "Zzabbis"
date: "2026-02-07T09:10:33.144Z"
updatedDate: "2026-02-07T09:10:33.144Z"
category: "코딩/개발"
description: "복잡한 JSON 데이터를 TypeScript 인터페이스와 런타임 검증을 위한 Zod 스키마로 단숨에 자동 변환하는 프롬프트입니다."
tags: ["TypeScript", "Zod", "JSON", "타입정의", "생산성"]
---

# 📝 JSON만 던지면 TypeScript 타입 정의가 짠! (feat. Zod)

- **🎯 추천 대상:** 프론트엔드 개발자, Node.js 백엔드 개발자, 타입스크립트 입문자
- **⏱️ 소요 시간:** 10분 → 10초 단축
- **🤖 추천 모델:** Claude 3.5 Sonnet, GPT-4o (코드 작성에 특화된 모델)

- ⭐ **난이도:** ⭐☆☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"수십 개의 필드가 중첩된 API 응답 JSON, 아직도 한땀 한땀 `interface` 치고 계신가요?"_

`interface User { ... }` 복붙하고 오타 찾느라 눈 빠지는 경험, 개발자라면 누구나 한 번쯤 있을 겁니다. 특히 객체 안에 배열, 배열 안에 또 다른 객체가 있는 중첩 구조(Nested)나 간헐적으로 들어오는 옵셔널(`null`, `undefined`) 값은 런타임 에러의 주범이죠.

이제 백엔드 API 명세서에서 JSON 응답 데이터만 복사해 오세요. 완벽한 TypeScript 타입(Type) 정의는 물론, 실시간 런타임 데이터 유효성 검증을 책임지는 **Zod 스키마(Schema)**까지 AI가 한 번에 찍어냅니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. **복붙 한 번으로 끝:** 날것의 JSON 데이터를 TypeScript Interface 및 Type으로 즉시 변환합니다.
2. **런타임 안정성 확보:** 정적 타입을 넘어, 실제 데이터 검증을 위한 Zod 스키마를 함께 생성합니다.
3. **디테일한 예외 처리:** 중첩된 객체 분리, `null` 값의 옵셔널(`?`) 처리, JSDoc 주석까지 자동으로 달아줍니다.

---

## 🚀 해결책: "TypeScript & Zod 타입 제너레이터"

### 🥉 Basic Version (기본형)

복잡한 조건 없이 빠르게 타입만 뽑아내고 싶을 때 사용하세요.

> **역할:** 너는 TypeScript와 Zod 스키마 설계에 정통한 시니어 프론트엔드 개발자야.
> **요청:** 아래 제공하는 JSON 데이터를 분석해서 TypeScript 타입 정의와 Zod 스키마 코드로 변환해줘.

<br>

### 🥇 Pro Version (전문가형)

실무에 즉시 투입 가능한 수준의 정교한 타입과 주석, 런타임 예외 처리가 필요할 때 사용하세요.

> **역할 (Role):** 너는 TypeScript 생태계와 데이터 검증(Validation)에 통달한 수석 아키텍트야.
>
> **상황 (Context):**
>
> - 배경: 외부 API로부터 복잡한 JSON 응답 데이터를 받았어.
> - 목표: 이 데이터를 내 TypeScript 프로젝트에서 타입 세이프(Type-safe)하게 사용하고, 런타임 에러를 방지하기 위해 Zod를 이용한 검증 로직을 추가하려고 해.
>
> **요청 (Task):**
>
> 1. 아래 JSON 데이터를 분석하여 **Zod 스키마(Schema)**를 먼저 작성해줘. (변수명은 PascalCase + Schema 접미사 사용, 예: `UserSchema`)
> 2. Zod의 `z.infer`를 활용하여 스키마로부터 **TypeScript Type**을 추론하는 코드를 작성해줘.
> 3. 각 필드의 역할을 유추하여 친절한 **JSDoc 주석**을 달아줘.
>
> **분석할 JSON 데이터:**
>
> ```json
> [여기에 변환할 JSON 데이터를 붙여넣으세요]
> ```
>
> **제약사항 (Constraints):**
>
> - 모든 필드는 기본적으로 필수(required) 값으로 처리해.
> - 단, 데이터에 `null`이 포함되어 있거나 값이 비어있는 경우에만 옵셔널(`z.optional().nullable()`) 및 타입스크립트 선택적 프로퍼티(`?`)로 처리해.
> - 배열 내부의 객체나 깊이가 2 Depth 이상인 중첩 객체는 반드시 독립적인 Zod 스키마와 타입으로 분리해서 정의해. (가독성 향상)
>
> **출력 형식 (Format):**
>
> - 설명은 최소화하고, 즉시 복사해서 사용할 수 있는 완성된 TypeScript 코드 블럭 하나만 출력해.

---

## 💡 작성자 코멘트 (Insight)

이 프롬프트는 단순한 '타입 생성기'가 아닙니다. 현업에서 가장 골치 아픈 문제 중 하나인 **'API 명세서와 실제 응답 데이터의 불일치'**를 해결하는 든든한 방어막입니다.

특히 2 Depth 이상 들어가는 중첩 객체들을 각각의 `interface`로 분리하라고 지시한 부분이 핵심입니다. 이렇게 분리해두면 컴포넌트의 Props로 하위 객체만 따로 넘겨줘야 할 때 타입 재사용성이 극대화됩니다. 만약 백엔드에서 내려주는 필드명이 `snake_case`라서 프론트엔드의 `camelCase` 규칙과 맞지 않는다면, 프롬프트의 **제약사항**에 *"모든 키 값을 camelCase로 변환하는 Zod의 `.transform()` 로직을 추가해줘"*라는 한 줄만 덧붙여보세요. 퇴근 시간이 30분은 더 앞당겨질 겁니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: Zod 대신 Yup이나 Joi 스키마로도 만들 수 있나요?**
  - A: 네, 완벽하게 가능합니다. 프롬프트 내의 'Zod 스키마'라는 단어를 'Yup 스키마'나 'Joi 스키마'로만 변경해서 실행해 보세요. AI가 해당 라이브러리의 문법에 맞춰 코드를 다시 짜줍니다.

- **Q: JSON 데이터 용량이 너무 큰데, 다 넣어도 되나요?**
  - A: 텍스트 토큰 제한(일반적으로 수만~수십만 자) 내라면 문제없습니다. 다만, 배열 내부에 동일한 구조의 객체가 수백 개 반복된다면, 대표적인 객체 1~2개만 남기고 나머지는 지운 뒤 프롬프트를 돌리는 것이 AI의 추론 속도와 정확도를 높이는 꿀팁입니다.

- **Q: 생성된 JSDoc 주석이 실제 비즈니스 로직과 다르면 어떡하죠?**
  - A: AI는 JSON의 '키 이름(Key)'을 보고 역할을 유추합니다. `empNo` 같은 축약어라면 주석이 부정확할 수 있습니다. 프롬프트를 던질 때 JSON 데이터 아래에 `* empNo는 사원 번호입니다.`라고 짧은 힌트를 추가해주면 훨씬 정확한 문서화가 가능합니다.

---

## 🧬 프롬프트 해부 (Why it works?)

1. **Top-down 설계 유도:** 타입스크립트 `interface`를 먼저 만들고 Zod 스키마를 만드는 것이 아니라, **Zod 스키마를 먼저 만들고 `z.infer`로 타입을 뽑아내도록(Task 1, 2)** 순서를 강제했습니다. 이는 코드 중복(Single Source of Truth)을 막는 프론트엔드 진영의 핵심 베스트 프랙티스입니다.
2. **명시적인 예외 처리 기준:** 현업에서 가장 에러가 많이 터지는 `null`과 `undefined` 처리에 대해 명확한 제약 조건(Constraints)을 부여하여 방어적인 코드를 작성하게 만들었습니다.

---

## 📊 증명: Before & After

### ❌ Before (입력 JSON)

```json
{
  "id": 1,
  "name": "Jay",
  "contact": {
    "email": "jay@test.com",
    "phone": null
  },
  "tags": ["developer", "admin"]
}
```

### ✅ After (결과)

```typescript
import { z } from "zod";

/**
 * 사용자 연락처 정보 스키마
 */
export const ContactSchema = z.object({
  /** 이메일 주소 */
  email: z.string().email(),
  /** 전화번호 (미입력 가능) */
  phone: z.string().nullable().optional(),
});

/**
 * 시스템 사용자 정보 스키마
 */
export const UserSchema = z.object({
  /** 사용자 고유 식별자 */
  id: z.number(),
  /** 사용자 이름 */
  name: z.string(),
  /** 연락처 정보 객체 */
  contact: ContactSchema,
  /** 사용자에게 부여된 태그 목록 */
  tags: z.array(z.string()),
});

// Zod 스키마를 통한 TypeScript 타입 추론 (Single Source of Truth)
export type Contact = z.infer<typeof ContactSchema>;
export type User = z.infer<typeof UserSchema>;
```

---

## 🎯 결론

타입 정의는 애플리케이션의 튼튼한 뼈대를 만드는 필수 작업이지만, 그 뼈대를 깎는 과정이 고통스러워서는 안 됩니다.
이제 복붙 한 번으로 런타임 에러의 공포에서 벗어나 안전한 타이핑 라이프를 즐기세요! 🍷
