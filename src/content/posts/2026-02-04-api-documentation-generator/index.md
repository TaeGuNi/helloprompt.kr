---
layout: /src/layouts/Layout.astro
title: "귀찮은 API 문서화, 코드만 주면 Swagger가 뚝딱"
author: "Zzabbis"
date: "2026-02-07T09:10:33.165Z"
updatedDate: "2026-02-07T09:10:33.165Z"
category: "코딩/개발"
description: "API 코드를 붙여넣으면 OpenAPI(Swagger) 스펙이나 마크다운 문서로 자동 변환해주는 프롬프트입니다."
tags: ["API", "문서화", "Swagger", "OpenAPI", "백엔드"]
---

# 📝 귀찮은 API 문서화, 코드만 주면 Swagger가 뚝딱

- **🎯 추천 대상:** 누구나
- **⏱️ 소요 시간:** 5분
- **🤖 추천 모델:** 모든 AI 모델

- **📊 난이도:** ⭐⭐☆☆☆
- **⚡️ 효과성:** ⭐⭐⭐⭐⭐
- **🛠️ 활용도:** ⭐⭐⭐⭐☆

_"개발 다 했으면 문서도 주셔야죠? (프론트엔드 개발자)"_
_"아... 잠시만요. (아직 한 줄도 안 씀)"_

API 개발보다 문서 작성이 더 싫은 거, 저만 그런가요?
파라미터 타입, 필수 여부, 응답 예시 하나하나 적다 보면 현타가 옵니다.
이제 컨트롤러 코드만 긁어서 붙여넣으세요. AI가 깔끔한 Swagger 스펙으로 변환해 드립니다.

---

## ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1. 코드 기반으로 정확한 파라미터/응답 명세 추출
2. OpenAPI(Swagger) YAML/JSON 포맷 자동 생성
3. 이해하기 쉬운 설명과 예시 데이터 포함

---

## 🚀 해결책: "API 문서 생성기"

### 🥉 Basic Version (기본형)

빠르게 결과만 필요할 때 사용하세요.

> **역할:** 너는 꼼꼼한 테크니컬 라이터이자 백엔드 개발자야.
> **요청:** API 코드를 붙여넣으면 OpenAPI(Swagger) 스펙이나 마크다운 문서로 자동 변환해주는 프롬프트해줘.

<br>

### 🥇 Pro Version (전문가형)

디테일한 퀄리티가 필요할 때 사용하세요.

아래 **PROMPT** 내용을 복사해서 사용하세요.

> **역할 (Role):** 너는 꼼꼼한 테크니컬 라이터이자 백엔드 개발자야.
>
> **상황 (Context):** 내가 개발한 API 코드가 있는데, 이를 프론트엔드 개발자와 공유하기 위해 문서화해야 해.
>
> **요청 (Task):**
> 아래 제공된 API 코드를 분석하여 **[원하는 포맷 선택: OpenAPI 3.0 YAML / Markdown Table]** 형식으로 문서를 작성해줘.
> 반드시 다음 내용을 포함해야 해:
>
> 1. **Endpoint & Method:** URL 경로와 HTTP 메서드
> 2. **Summary:** API가 하는 일에 대한 간략한 요약
> 3. **Request Parameters:** Body, Query, Path 파라미터 (타입, 필수 여부, 설명 포함)
> 4. **Response:** 성공(200) 및 실패(400, 500 등) 시의 응답 구조와 예시 JSON
>
> **코드:**

> [여기에 컨트롤러/라우터 코드를 붙여넣으세요]

> **제약사항 (Constraints):**
>
> - 데이터 타입(String, Integer 등)을 명확히 명시해줘.
> - 응답 예시(Example Value)는 현실적인 데이터로 채워줘.

---

## 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

이 프롬프트는 명확한 페르소나 설정과 구체적인 지시사항(Task)을 조합하여 AI의 의도를 정확히 파악하도록 설계되었습니다. 단계별 사고(Chain of Thought)를 유도하여 논리적인 답변을 얻을 수 있습니다.

---

## 📊 증명: Before & After

단순한 명령어와 최적화된 프롬프트의 차이는 명확합니다. 제공된 프롬프트를 사용했을 때 더 구체적이고 구조화된 답변을 얻을 수 있으며, 재수정(Re-prompting)에 드는 시간을 절약할 수 있습니다.

### ❌ Before (입력 코드 - Node.js Express) {#node-js-express}

```javascript
app.post("/users", (req, res) => {
  const { username, email } = req.body;
  if (!email) return res.status(400).send({ msg: "no email" });
  // DB 저장 로직...
  res.status(201).send({ id: 1, username, email });
});
```

### ✅ After (결과 - Markdown 예시) {#markdown}

### **POST /users**

사용자 회원가입 API

**Request Body**
| 필드명 | 타입 | 필수 | 설명 |
|---|---|---|---|
| `username` | String | O | 사용자 닉네임 |
| `email` | String | O | 사용자 이메일 (유니크) |

**Response (201 Created)**

```json
{
  "id": 1,
  "username": "jay_dev",
  "email": "jay@example.com"
}
```

---

## 💡 작성자 코멘트 (Insight) {#insight}

이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.

---

## 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. 결과가 마음에 들지 않아요.**
A. 구체적인 예시를 추가하거나, 상황(Context)을 더 자세히 묘사해보세요.

**Q. 다른 언어로도 가능한가요?**
A. 네, 프롬프트의 지시사항을 해당 언어로 번역하면 가능합니다.

---

## 🎯 결론 {#conclusion}

문서화는 개발의 끝이 아니라 협업의 시작입니다.
하지만 그 시작을 위해 너무 많은 에너지를 쓰진 마세요. AI에게 맡기고 여러분은 비즈니스 로직에 집중하세요! 🍷

## Conclusion

## Conclusion

## Conclusion
