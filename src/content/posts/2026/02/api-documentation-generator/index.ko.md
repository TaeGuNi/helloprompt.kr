---
layout: /src/layouts/Layout.astro
title: " \"귀찮은 API 문서화, 코드만 주면 Swagger가 뚝딱\""
author: "Jay"
date: "2026-02-07T09:10:33.165Z"
updatedDate: "2026-02-07T09:10:33.165Z"
category: "코딩/개발"
description: " \"API 코드를 붙여넣으면 OpenAPI(Swagger) 스펙이나 마크다운 문서로 자동 변환해주는 프롬프트입니다.\""
tags: ["API", "문서화", "Swagger", "OpenAPI", "백엔드"]
---

# 📝 귀찮은 API 문서화, 코드만 주면 Swagger가 뚝딱

- **🎯 추천 대상:** 백엔드 개발자, 풀스택 개발자, API 명세서 작성이 고통스러운 모든 분
- **⏱️ 소요 시간:** 30분 → 1분 단축
- **🤖 추천 모델:** Claude 3.5 Sonnet (코드 분석 능력 탁월), GPT-4o

- ⭐ **난이도:** ⭐☆☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"개발 다 하셨으면 API 명세서 좀 빨리 주세요! (프론트엔드 개발자)"_
> _"아... 잠시만요. (아직 컨트롤러만 짜고 문서 한 줄도 안 씀)"_

API 개발보다 문서 작성이 더 싫은 거, 저만 그런가요?
파라미터 타입, 필수 여부 확인하고, 예외 처리 케이스 챙기고, 응답 JSON 예시까지 하나하나 타이핑하다 보면 깊은 현타가 찾아옵니다. 심지어 비즈니스 로직 코드가 수정될 때마다 문서도 일일이 업데이트해야 하죠.

이제 컨트롤러 코드만 그대로 긁어서 붙여넣으세요. AI가 완벽하게 구조화된 OpenAPI(Swagger) 스펙이나 프론트엔드 전달용 깔끔한 마크다운 문서로 1분 만에 변환해 드립니다. 지루한 문서 작업에서 해방되어 퇴근 시간이 30분 앞당겨지는 마법을 경험해 보세요.

---

## ⚡️ 3줄 요약 (TL;DR)

1. 백엔드 컨트롤러/라우터 코드를 복사해서 넣기만 하면 API 문서가 즉시 완성됩니다.
2. 프론트엔드 팀이 바로 적용할 수 있는 표준 OpenAPI 3.0(Swagger) YAML 포맷을 자동 생성합니다.
3. 누락되기 쉬운 예외 처리(400, 500 에러) 분기와 Request/Response JSON 예시 데이터까지 알아서 채워줍니다.

---

## 🚀 해결책: "API 문서 자동 생성기"

### 🥉 Basic Version (기본형)

빠르게 대략적인 마크다운 표 형태의 결과만 필요할 때 사용하세요.

> **역할:** 너는 꼼꼼한 시니어 테크니컬 라이터이자 백엔드 개발자야.
> **요청:** 내가 아래에 붙여넣을 API 코드를 분석해서, 프론트엔드 개발자가 보기 편한 표(Table) 형태의 API 명세서로 변환해 줘. 파라미터 타입, 필수 여부, 그리고 성공/실패 응답 JSON 예시를 반드시 포함해.


### 🥇 Pro Version (전문가형)

실제 프로젝트의 Swagger 설정에 바로 복사 및 붙여넣기 할 수 있는 완벽한 YAML 스펙이 필요할 때 사용하세요.

> **역할 (Role):** 너는 10년 차 시니어 테크니컬 라이터이자 꼼꼼한 백엔드 개발자야.
>
> **상황 (Context):**
>
> - 배경: 방금 신규 기능에 대한 API 컨트롤러 및 라우터 개발을 마쳤어. 이 코드를 기반으로 프론트엔드 개발자와 클라이언트에게 제공할 공식 API 명세서를 작성해야 해.
> - 목표: 제공된 코드를 분석하여 누락된 정보 없이 완벽한 규격의 **OpenAPI 3.0 YAML** 포맷 문서를 생성하는 것.
>
> **요청 (Task):**
>
> 1. 아래 제공된 `[API 코드]`를 철저히 분석해 줘.
> 2. 코드에 명시된 라우팅 경로, HTTP 메서드, Request Body/Query/Path 파라미터를 추출해.
> 3. 코드의 분기문(if/else, try/catch)을 집중적으로 분석하여 성공(200, 201) 및 실패(400, 401, 404, 500 등) 응답 시나리오를 빠짐없이 찾아내.
> 4. 최종적으로 OpenAPI 3.0 스펙에 맞는 완전한 YAML 코드를 마크다운 코드블럭으로 출력해 줘.
>
> **제약사항 (Constraints):**
>
> - 데이터 타입(String, Integer, Boolean 등)과 필수(Required) 여부를 정확히 명시해.
> - `example` 필드를 반드시 포함하고, 더미 데이터는 실무에서 쓰일 법한 현실적인 값(예: "test@gmail.com", "홍길동")으로 채워 줘.
> - 내가 제공한 코드에 없는 엔드포인트를 임의로 지어내지 마. (할루시네이션 절대 금지)
>
> **[API 코드]:**
> (여기에 라우터, 컨트롤러 코드를 그대로 붙여넣으세요)

---

## 💡 작성자 코멘트 (Insight)

이 프롬프트는 단순한 마크다운 표 생성 이상의 강력한 가치를 지닙니다. 특히 **`분기문을 분석하여 성공 및 실패 응답 시나리오를 모두 찾아내`**라는 지시사항이 이 프롬프트의 핵심입니다.

실무에서 백엔드 개발자들이 문서화할 때 가장 많이 놓치고, 프론트엔드 개발자들이 가장 고통받는 부분이 바로 '에러 응답(Error Response) 명세'의 부재입니다. 프론트엔드는 400 에러일 때 어떤 포맷으로 에러 메시지가 오는지 정확히 알아야 올바른 예외 처리를 구현할 수 있습니다.

이 프롬프트를 사용하면 코드 속에 숨어있는 `if (!email) res.status(400)` 같은 방어 로직을 AI가 알아서 캐치하여 문서화해 줍니다. Node.js(Express/NestJS), Spring Boot, Django, FastAPI 등 언어와 프레임워크를 가리지 않고 완벽하게 작동하므로, 실무에서 레거시 코드를 파악하고 문서를 역산(Reverse Engineering)해야 할 때도 엄청난 위력을 발휘합니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: DTO나 Request 객체 검증 코드가 다른 파일로 분리되어 있는데 어떡하나요?**
  - A: 컨트롤러 코드와 해당 DTO/Entity 클래스 코드를 한 번에 같이 복사해서 `[API 코드]` 영역에 붙여넣으시면 됩니다. AI가 두 코드를 연관 지어 완벽한 스키마(Schema)를 구성해 냅니다.

- **Q: 사내 보안 규정 때문에 회사 코드를 그대로 챗봇에 넣기 껄끄럽습니다.**
  - A: 테이블명, 핵심 비즈니스 로직, 사내 민감 키워드(솔루션 명 등)는 변수명을 `test_table`, `user_data` 등으로 가볍게 마스킹한 후 프롬프트를 실행하세요. 라우팅 구조와 파라미터 타입 정보만 남아있다면 문서화에는 전혀 지장이 없습니다.

- **Q: YAML 스펙 말고, 노션(Notion)에 바로 공유할 수 있는 마크다운 표 형태로만 받고 싶습니다.**
  - A: Pro 버전 프롬프트의 Task 4번 항목을 "최종적으로 노션이나 깃허브 위키에 바로 붙여넣을 수 있는 깔끔한 마크다운 표 형식으로 출력해 줘."로 수정하여 요청하시면 완벽한 표 형태로 답변을 줍니다.

---

## 🧬 프롬프트 해부 (Why it works?)

1.  **Role 부여:** AI에게 '10년 차 시니어 테크니컬 라이터'라는 정체성을 부여하여, 단순히 코드를 읽고 요약하는 것을 넘어 '문서의 가독성과 표준 스펙(OpenAPI)의 엄격한 준수'에 집중하도록 유도했습니다.
2.  **Context & Task의 세분화:** 코드를 무작정 문서로 바꾸라고 지시하지 않고, 라우팅 추출 → 예외 처리 분석 → YAML 생성이라는 단계적 논리(Chain of Thought)를 강제하여 결과물의 디테일 누락을 방지했습니다.
3.  **Constraints (제약사항):** 환각(Hallucination) 현상을 막기 위해 코드에 없는 엔드포인트를 지어내지 말라는 엄격한 규칙을 적용하고, 현실적인 예시 데이터를 요구하여 문서의 실용성과 신뢰도를 극대화했습니다.

---

## 📊 증명: Before & After

단순히 "문서 만들어줘"라는 명령어와 최적화된 프롬프트의 차이는 명확합니다. 특히 예외 처리와 예시 데이터 부분에서 품질 차이가 극명하게 갈립니다.

### ❌ Before (입력 코드 - Node.js Express 예시)

```javascript
app.post("/api/v1/users", (req, res) => {
  const { username, email, age } = req.body;
  if (!email || !username) {
    return res.status(400).json({
      error: "BAD_REQUEST",
      message: "Username and Email are required",
    });
  }
  if (age && typeof age !== "number") {
    return res
      .status(400)
      .json({ error: "INVALID_TYPE", message: "Age must be a number" });
  }
  // DB 저장 로직 (생략)
  res.status(201).json({
    id: 1042,
    username,
    email,
    age: age || null,
    createdAt: new Date().toISOString(),
  });
});
```

### ✅ After (결과 - OpenAPI YAML 자동 생성)

```yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /api/v1/users:
    post:
      summary: 신규 사용자 생성 API
      description: 새로운 사용자를 시스템에 등록합니다.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - username
                - email
              properties:
                username:
                  type: string
                  example: "jay_dev"
                  description: "사용자 닉네임"
                email:
                  type: string
                  example: "jay.dev@example.com"
                  description: "사용자 이메일 주소"
                age:
                  type: integer
                  example: 28
                  description: "사용자 나이 (선택)"
      responses:
        "201":
          description: 사용자 생성 성공
          content:
            application/json:
              example:
                id: 1042
                username: "jay_dev"
                email: "jay.dev@example.com"
                age: 28
                createdAt: "2026-02-07T10:00:00.000Z"
        "400":
          description: 잘못된 요청 (필수 파라미터 누락 또는 타입 오류)
          content:
            application/json:
              examples:
                MissingFields:
                  summary: 필수 필드 누락
                  value:
                    error: "BAD_REQUEST"
                    message: "Username and Email are required"
                InvalidType:
                  summary: 잘못된 데이터 타입
                  value:
                    error: "INVALID_TYPE"
                    message: "Age must be a number"
```

---

## 🎯 결론

API 문서화는 개발의 끝이 아니라 프론트엔드 팀과의 원활한 협업을 위한 필수적인 시작입니다.
하지만 그 시작을 위해 여러분의 귀중한 개발 에너지를 과도하게 낭비하지 마세요.

단순 반복적이고 꼼꼼함이 요구되는 스펙 정리는 이제 완벽하게 AI에게 맡기세요. 여러분은 핵심 비즈니스 로직 설계와 아키텍처 고민에 더 많은 시간을 투자하시기 바랍니다. 이제 스트레스받지 말고 칼퇴하세요! 🍷
