---
layout: /src/layouts/Layout.astro
title: "귀찮은 API 문서화, 코드만 주면 Swagger가 뚝딱"
author: "Jay"
date: "2026-02-07T09:10:33.165Z"
updatedDate: "2026-02-07T09:10:33.165Z"
category: "코딩/개발"
description: "컨트롤러 코드를 붙여넣기만 하면 완벽한 구조의 OpenAPI(Swagger) 규격과 마크다운 명세서로 1분 만에 자동 변환해 주는 실무용 프롬프트입니다."
tags: ["API", "문서화", "Swagger", "OpenAPI", "백엔드"]
---

## 📝 귀찮은 API 문서화, 코드만 주면 Swagger가 뚝딱

- **🎯 추천 대상:** 백엔드 개발자, 풀스택 개발자, API 명세서 작성이 고통스러운 모든 분
- **⏱️ 소요 시간:** 30분 → 1분 단축
- **🤖 추천 모델:** Claude 3.5 Sonnet (코드 분석 능력 탁월), GPT-4o

- ⭐ **난이도:** ⭐☆☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"개발 다 하셨으면 API 명세서 좀 빨리 주세요! (프론트엔드 개발자)"_
> _"아... 잠시만요. (아직 컨트롤러만 짜고 문서 한 줄도 안 씀)"_

API 비즈니스 로직을 짜는 것보다 문서 작성이 더 끔찍하게 느껴지는 것, 과연 저만의 이야기일까요?
수많은 파라미터 타입과 필수 여부를 일일이 대조하고, 복잡하게 얽힌 예외 처리 케이스를 빠짐없이 챙기며, 응답 JSON 예시 데이터까지 한 땀 한 땀 타이핑하다 보면 어느새 깊은 '현타'가 밀려옵니다. 설상가상으로 기획이 변경되어 로직 코드를 수정할 때마다 명세서까지 수동으로 업데이트해야 하는 늪에 빠지게 되죠.

하지만 이제 <b>컨트롤러 코드만 그대로 긁어서 복사해 보세요.</b> 단 1분의 시간만 투자하면, AI가 당신의 코드를 분석하여 프론트엔드 팀이 즉각 활용할 수 있는 완벽하게 구조화된 **OpenAPI(Swagger) 스펙**이나 깔끔한 **마크다운(Markdown)** 명세서로 변환해 드립니다. 영혼을 갉아먹는 지루하고 반복적인 문서 작업에서 완전히 해방되어, 당신의 소중한 퇴근 시간을 30분 이상 앞당기는 자동화의 마법을 직접 경험해 보시기 바랍니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. 백엔드 컨트롤러 및 라우터 코드를 복사해 붙여넣는 즉시, 실무에 투입 가능한 API 명세서가 완성됩니다.
2. 프론트엔드 팀과의 원활한 협업을 보장하는 표준 **OpenAPI 3.0(Swagger) YAML 포맷**을 완벽하게 자동 생성합니다.
3. 개발자가 놓치기 쉬운 엣지 케이스(400, 500 예외 처리)와 복잡한 Request/Response JSON 예시 데이터까지 AI가 스스로 추론하여 빈틈없이 채워줍니다.

---

## 🚀 해결책: "API 문서 자동 생성기"

### 🥉 Basic Version (기본형)

빠르게 대략적인 마크다운 표 형태의 명세서가 필요할 때 가볍게 사용하세요.

> **역할:** 너는 꼼꼼한 시니어 테크니컬 라이터이자 백엔드 개발자야.
> **요청:** 내가 아래에 붙여넣을 API 코드를 분석해서, 프론트엔드 개발자가 보기 편한 표(Table) 형태의 API 명세서로 변환해 줘. 파라미터 타입, 필수 여부, 그리고 성공/실패 응답 JSON 예시를 반드시 포함해.

### 🥇 Pro Version (전문가형)

실제 프로젝트의 Swagger 설정에 즉시 복사 및 붙여넣기 할 수 있는 엄격하고 완벽한 YAML 스펙이 필요할 때 사용하세요.

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

이 프롬프트는 단순하게 마크다운 표를 그려주는 수준을 넘어선, 실무진을 위한 강력한 자동화 무기입니다. 특히 **`분기문을 분석하여 성공 및 실패 응답 시나리오를 모두 찾아내`**라는 정밀한 지시사항이 전체 프롬프트의 퀄리티를 좌우하는 핵심입니다.

실제 현업에서 백엔드 개발자들이 명세서를 작성할 때 가장 빈번하게 누락하고, 반대로 프론트엔드 개발자들을 가장 고통스럽게 만드는 원인이 바로 <b>'에러 응답(Error Response) 명세'의 부재</b>입니다. 클라이언트 측에서는 400 Bad Request 에러 발생 시 서버가 정확히 어떤 JSON 포맷으로 에러 메시지를 반환하는지 알아야만 견고하고 올바른 예외 처리를 구현할 수 있기 때문입니다.

해당 프롬프트를 적용하면, 얽혀있는 코드 스파게티 속에서도 `if (!email) res.status(400)`와 같은 방어 로직을 AI가 스스로 식별하고 추출하여 빈틈없이 문서화해 줍니다. Node.js(Express, NestJS)는 물론 Spring Boot, Django, FastAPI 등 <b>언어와 프레임워크 생태계를 전혀 가리지 않고 완벽하게 작동</b>합니다. 따라서 신규 기능 개발뿐만 아니라, 문서가 유실된 레거시 시스템의 구조를 파악하고 <b>문서를 역산(Reverse Engineering)</b>해야 하는 까다로운 상황에서도 그 진가를 폭발적으로 발휘합니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: DTO나 Request 객체 검증 코드가 다른 파일로 분리되어 있는데 어떡하나요?**
  - A: 컨트롤러 코드와 해당 DTO/Entity 클래스 코드를 한 번에 같이 복사해서 `[API 코드]` 영역에 붙여넣으시면 됩니다. AI가 두 코드의 문맥을 완벽하게 연관 지어 하나의 통합된 스키마(Schema)를 구성해 냅니다.

- **Q: 사내 보안 규정 때문에 회사 코드를 그대로 챗봇에 넣기 껄끄럽습니다.**
  - A: 테이블명, 핵심 비즈니스 로직, 사내 민감 키워드(솔루션 명 등)는 변수명을 `test_table`, `user_data` 등으로 가볍게 마스킹한 후 프롬프트를 실행하시길 권장합니다. 라우팅 구조와 파라미터 타입 정보만 남아있다면 문서화에는 전혀 지장이 없습니다.

- **Q: YAML 스펙 말고, 노션(Notion)에 바로 공유할 수 있는 마크다운 표 형태로만 받고 싶습니다.**
  - A: Pro 버전 프롬프트의 Task 4번 항목을 "최종적으로 노션이나 깃허브 위키에 바로 붙여넣을 수 있는 깔끔한 마크다운 표 형식으로 출력해 줘."로 수정하여 요청하시면 요구사항에 딱 맞는 완벽한 표 형태로 답변을 반환합니다.

---

## 🧬 프롬프트 해부 (Why it works?)

1.  **Role 부여:** AI에게 '10년 차 시니어 테크니컬 라이터'라는 확고한 전문가적 정체성을 부여하여, 단순히 코드를 읽고 요약하는 1차원적 행위를 넘어 '문서의 가독성과 표준 스펙(OpenAPI)의 엄격한 준수'에 집중하도록 유도했습니다.
2.  **Context & Task의 세분화:** 코드를 무작정 문서로 바꾸라고 포괄적으로 지시하지 않고, 라우팅 추출 → 예외 처리 분석 → YAML 생성이라는 단계적 논리(Chain of Thought)를 강제하여 결과물의 디테일 누락을 원천적으로 차단했습니다.
3.  **Constraints (제약사항):** 치명적인 환각(Hallucination) 현상을 막기 위해 코드에 없는 엔드포인트를 절대 지어내지 말라는 엄격한 규칙을 적용하고, 실무에서 쓰일 법한 현실적인 예시 데이터를 요구하여 문서의 실용성과 신뢰도를 극대화했습니다.

---

## 📊 증명: Before & After

단순히 "문서 만들어줘"라는 빈약한 명령어와 정교하게 최적화된 프롬프트의 결과물 차이는 극명합니다. 특히 예외 처리와 예시 데이터 부분에서 그 품질의 격차를 확실하게 체감할 수 있습니다.

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

API 문서화는 백엔드 개발의 지루한 끝이 아니라, 프론트엔드 팀과의 매끄러운 협업을 이끌어내는 필수적이고 위대한 시작입니다. 하지만 그 완벽한 시작을 위해 여러분의 한정되고 귀중한 개발 에너지를 과도하게 낭비할 필요는 전혀 없습니다.

단순 반복적이고 지독한 꼼꼼함이 요구되는 스펙 정리는 이제 완벽하게 AI의 손에 맡기세요. 여러분은 핵심 비즈니스 로직 설계와 더 단단한 시스템 아키텍처를 고민하는 데 온전히 시간을 투자하시기 바랍니다. 이제 문서 작업의 스트레스는 날려버리고 가벼운 마음으로 칼퇴하세요! 🍷
