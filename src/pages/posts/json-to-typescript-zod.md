---
layout: /src/layouts/Layout.astro
title: "JSON만 던지면 TypeScript 타입 정의가 짠! (feat. Zod)"
author: "Zzabbis"
date: "2026-02-07T09:10:33.144Z"
updatedDate: "2026-02-07T09:10:33.144Z"
category: "코딩/개발"
description: "복잡한 JSON 데이터를 TypeScript 인터페이스나 Zod 스키마로 자동 변환해주는 프롬프트입니다."
tags: ["TypeScript", "Zod", "JSON", "타입정의", "생산성"]
---

# 📝 JSON만 던지면 TypeScript 타입 정의가 짠! (feat. Zod)

- **🎯 추천 대상:** 누구나
- **⏱️ 소요 시간:** 5분
- **🤖 추천 모델:** 모든 AI 모델

- **📊 난이도:** ⭐⭐☆☆☆
- **⚡️ 효과성:** ⭐⭐⭐⭐⭐
- **🛠️ 활용도:** ⭐⭐⭐⭐☆

_"백엔드 API 응답이 이렇게 복잡한데, 이걸 언제 다 인터페이스로 만들지?"_

`interface User { ... }` 일일이 치고 계신가요?
중첩된 객체, 배열, 옵셔널 값... 실수하기 딱 좋습니다.
API 응답 JSON만 복사해 넣으세요. 완벽한 TypeScript 타입 정의는 물론, 런타임 검증을 위한 Zod 스키마까지 만들어드립니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. JSON 데이터를 TypeScript Interface/Type으로 변환
2. 런타임 유효성 검사를 위한 Zod/Yup 스키마 생성
3. 중첩된 구조(Nested Object)도 완벽 처리

---

## 🚀 해결책: "타입 마스터"

### 🥉 Basic Version (기본형)

빠르게 결과만 필요할 때 사용하세요.

> **역할:** 너는 TypeScript 생태계에 통달한 수석 개발자야.
> **요청:** 복잡한 JSON 데이터를 TypeScript 인터페이스나 Zod 스키마로 자동 변환해주는 프롬프트해줘.

<br>

### 🥇 Pro Version (전문가형)

디테일한 퀄리티가 필요할 때 사용하세요.

아래 **PROMPT** 내용을 복사해서 사용하세요.

> **역할 (Role):** 너는 TypeScript 생태계에 통달한 수석 개발자야.
>
> **상황 (Context):** 외부 API로부터 JSON 데이터를 받았는데, 이를 내 프로젝트에서 안전하게 사용하기 위해 타입 정의가 필요해.
>
> **요청 (Task):**
>
> 1. 아래 JSON 데이터를 기반으로 **TypeScript Interface**를 작성해줘. (이름은 파스칼 케이스로)
> 2. 런타임 검증을 위해 **Zod 스키마(Schema)**도 함께 작성해줘.
> 3. Zod 스키마로부터 타입을 추론(`z.infer`)하는 코드도 포함해줘.
>
> **JSON 데이터:**
>
> ```text
> [여기에 JSON 데이터를 붙여넣으세요]
> ```
>
> **제약사항 (Constraints):**
>
> - 모든 필드는 기본적으로 필수(required)로 가정하되, `null`이 포함된 경우에만 옵셔널(`?`)로 처리해.
> - 배열 안에 있는 객체도 별도의 인터페이스로 분리해서 정의해줘.
> - JSDoc 주석을 달아서 각 필드가 무엇인지(추론해서) 설명해줘.

---

## 🧬 프롬프트 해부 (Why it works?)

이 프롬프트는 명확한 페르소나 설정과 구체적인 지시사항(Task)을 조합하여 AI의 의도를 정확히 파악하도록 설계되었습니다. 단계별 사고(Chain of Thought)를 유도하여 논리적인 답변을 얻을 수 있습니다.

---

## 📊 증명: Before & After

단순한 명령어와 최적화된 프롬프트의 차이는 명확합니다. 제공된 프롬프트를 사용했을 때 더 구체적이고 구조화된 답변을 얻을 수 있으며, 재수정(Re-prompting)에 드는 시간을 절약할 수 있습니다.

### ❌ Before (입력 JSON)

```text
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

// 1. Zod Schema Definition
export const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().nullable().optional(), // null 처리
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  contact: ContactSchema,
  tags: z.array(z.string()),
});

// 2. TypeScript Type Inference
/** 사용자 정보 인터페이스 */
export type User = z.infer<typeof UserSchema>;
export type Contact = z.infer<typeof ContactSchema>;
```

---

## 💡 작성자 코멘트 (Insight)

이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.

---

## 🙋 자주 묻는 질문 (FAQ)

**Q. 결과가 마음에 들지 않아요.**
A. 구체적인 예시를 추가하거나, 상황(Context)을 더 자세히 묘사해보세요.

**Q. 다른 언어로도 가능한가요?**
A. 네, 프롬프트의 지시사항을 해당 언어로 번역하면 가능합니다.

---

## 🎯 결론

타입 정의는 안전장치지만, 그걸 만드는 과정이 고통스러워선 안 됩니다.
복붙 한 번으로 안전하고 튼튼한 타입 시스템을 구축하세요! 🍷
