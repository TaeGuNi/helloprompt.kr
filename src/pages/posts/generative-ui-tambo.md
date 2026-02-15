---
layout: ../../../layouts/PostLayout.astro
title: "Tambo SDK로 시작하는 제너레이티브 UI (Generative UI)"
date: 2024-05-20
description: "React 애플리케이션에서 AI가 생성하는 동적 인터페이스를 구현하는 방법. Tambo SDK를 활용해 제너레이티브 UI를 쉽게 구축해봅니다."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

인공지능(AI)이 텍스트와 이미지를 생성하는 것을 넘어, 이제는 **사용자 인터페이스(UI)** 자체를 실시간으로 생성하는 시대가 왔습니다. 이를 **제너레이티브 UI (Generative UI)**라고 부릅니다.

오늘은 React 환경에서 제너레이티브 UI를 가장 쉽게 구현할 수 있도록 도와주는 도구인 **Tambo SDK**에 대해 알아보고, 간단한 예제를 통해 직접 구현해보겠습니다.

## 제너레이티브 UI란 무엇인가요?

기존의 UI 개발 방식은 개발자가 모든 화면과 컴포넌트를 미리 정의하고, 데이터에 따라 조건부 렌더링을 하는 방식이었습니다. 하지만 제너레이티브 UI는 다릅니다.

- **동적 생성:** 사용자의 의도나 대화 맥락에 따라 AI가 가장 적절한 UI 컴포넌트를 즉석에서 결정하고 렌더링합니다.
- **개인화:** 사용자마다, 혹은 상황마다 전혀 다른 맞춤형 인터페이스를 제공할 수 있습니다.
- **유연성:** 미리 정의되지 않은 시나리오에도 AI의 판단에 따라 대응할 수 있습니다.

## 왜 Tambo인가요?

Tambo는 이러한 제너레이티브 UI를 복잡한 설정 없이 바로 애플리케이션에 통합할 수 있게 해주는 SDK입니다.

1.  **React 친화적:** React 컴포넌트 시스템과 완벽하게 호환됩니다.
2.  **타입 안전성:** TypeScript를 기본 지원하여 안전하게 개발할 수 있습니다.
3.  **간편한 연동:** Vercel AI SDK 등 주요 AI 라이브러리와 쉽게 연동됩니다.

## Tambo SDK로 시작하기

간단한 여행 계획 도우미 챗봇을 만든다고 상상해봅시다. 사용자가 "제주도 여행 일정 짜줘"라고 하면, 단순히 텍스트로 답하는 것이 아니라, **지도, 항공권 예약 카드, 호텔 리스트** 등 풍부한 UI를 보여주고 싶습니다.

### 1. 설치

먼저 패키지를 설치합니다.

```bash
npm install @tambo/sdk ai
```

### 2. 컴포넌트 정의

AI가 사용할 수 있는 UI 컴포넌트들을 정의합니다. 예를 들어, 추천 장소를 보여주는 카드 컴포넌트입니다.

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from "@tambo/ui";

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">
        {name}
      </Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>예약하기</Button>
    </Card>
  );
}
```

### 3. Tambo 레지스트리 설정

이제 이 컴포넌트를 AI에게 "도구(Tool)"로 알려줘야 합니다. Tambo는 이 과정을 매우 직관적으로 만들어줍니다.

```tsx
// lib/tambo.ts
import { createTambo } from "@tambo/sdk";
import { PlaceCard } from "../components/PlaceCard";
import { z } from "zod";

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: "장소에 대한 정보를 카드 형태로 보여줍니다.",
      schema: z.object({
        name: z.string().describe("장소 이름"),
        description: z.string().describe("장소 설명"),
        rating: z.number().describe("평점 (1-5)"),
      }),
    },
  },
});
```

### 4. AI 응답에서 UI 렌더링

마지막으로 챗봇 인터페이스에서 Tambo를 사용해 AI의 응답을 UI로 변환합니다.

```tsx
// app/chat/page.tsx
import { useChat } from "ai/react";
import { TamboProvider, GenerativeUI } from "@tambo/sdk/react";
import { tambo } from "@/lib/tambo";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <TamboProvider registry={tambo}>
      <div className="chat-container">
        {messages.map((m) => (
          <div key={m.id}>
            <strong>{m.role}:</strong>
            {/* 텍스트 메시지와 함께 생성된 UI가 여기에 렌더링됩니다 */}
            <GenerativeUI content={m.content} />
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>전송</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## 결론 {#conclusion}

Tambo SDK를 사용하면 복잡한 로직 없이도 AI가 여러분의 React 컴포넌트를 자유자재로 다루게 할 수 있습니다. 채팅창은 더 이상 텍스트만의 공간이 아닙니다. 이제 앱의 기능을 대화 속으로 가져오세요.

더 자세한 내용은 [Tambo 공식 문서](https://tambo.dev)를 참고하세요.

## 💡 작성자 코멘트 (Insight)

이 글은 최신 기술 동향을 반영하여 작성되었습니다. 실무에 바로 적용 가능한 핵심 내용을 담고 있으며, 추가적인 질문은 언제든 환영합니다.

## 🙋 자주 묻는 질문 (FAQ)

Q: 이 내용은 최신 정보인가요?
A: 네, 작성 시점 기준으로 가장 최신 정보를 바탕으로 분석하였습니다.

Q: 추가적인 자료는 어디서 볼 수 있나요?
A: 본문 내 포함된 링크나 관련 포스트를 참고해주시기 바랍니다.
