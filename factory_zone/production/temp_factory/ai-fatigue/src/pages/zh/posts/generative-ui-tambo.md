---
layout: ../../../layouts/PostLayout.astro
title: "使用 Tambo SDK 开启生成式 UI (Generative UI)"
date: 2024-05-20
description: "如何在 React 应用程序中实现由 AI 生成的动态界面。使用 Tambo SDK 轻松构建生成式 UI。"
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

除了 AI 生成文本和图像之外，现在我们已经进入了 AI 实时生成**用户界面 (UI)** 的时代。这被称为**生成式 UI (Generative UI)**。

今天，我们将了解 **Tambo SDK**，这是一个帮助你在 React 环境中最轻松地实现生成式 UI 的工具，并通过一个简单的示例来亲手构建它。

## 什么是生成式 UI？

传统的 UI 开发方式是开发者预先定义所有屏幕和组件，并根据数据进行条件渲染。但生成式 UI 有所不同。

*   **动态生成：** 根据用户的意图或对话上下文，AI 即时决定并渲染最合适的 UI 组件。
*   **个性化：** 可以为每个用户或每种情况提供完全不同的定制界面。
*   **灵活性：** 即使是未预先定义的场景，也可以根据 AI 的判断进行处理。

## 为什么选择 Tambo？

Tambo 是一个 SDK，让你可以无需复杂配置即可将这种生成式 UI 集成到你的应用程序中。

1.  **React 友好：** 与 React 组件系统完美兼容。
2.  **类型安全：** 原生支持 TypeScript，开发更安全。
3.  **易于集成：** 轻松与 Vercel AI SDK 等主要 AI 库集成。

## 开始使用 Tambo SDK

想象一下构建一个简单的旅行计划助手聊天机器人。当用户说“帮我安排济州岛旅行日程”时，你不仅想用文本回答，还想展示**地图、机票预订卡、酒店列表**等丰富的 UI。

### 1. 安装

首先安装包。

```bash
npm install @tambo/sdk ai
```

### 2. 定义组件

定义 AI 可以使用的 UI 组件。例如，一个显示推荐地点的卡片组件。

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from '@tambo/ui';

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">{name}</Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>预订</Button>
    </Card>
  );
}
```

### 3. 配置 Tambo 注册表

现在你需要将此组件作为“工具 (Tool)”告知 AI。Tambo 让这个过程非常直观。

```tsx
// lib/tambo.ts
import { createTambo } from '@tambo/sdk';
import { PlaceCard } from '../components/PlaceCard';
import { z } from 'zod';

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: '以卡片形式显示有关地点的信息。',
      schema: z.object({
        name: z.string().describe('地点名称'),
        description: z.string().describe('地点描述'),
        rating: z.number().describe('评分 (1-5)'),
      }),
    },
  },
});
```

### 4. 从 AI 响应中渲染 UI

最后，在聊天机器人界面中使用 Tambo 将 AI 的响应转换为 UI。

```tsx
// app/chat/page.tsx
import { useChat } from 'ai/react';
import { TamboProvider, GenerativeUI } from '@tambo/sdk/react';
import { tambo } from '@/lib/tambo';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <TamboProvider registry={tambo}>
      <div className="chat-container">
        {messages.map((m) => (
          <div key={m.id}>
            <strong>{m.role}:</strong>
            {/* 生成的 UI 将与文本消息一起在此处渲染 */}
            <GenerativeUI content={m.content} />
          </div>
        ))}
        
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>发送</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## 结论

使用 Tambo SDK，你可以让 AI 自由地操作你的 React 组件，而无需复杂的逻辑。聊天窗口不再仅仅是文本的空间。现在就把你的应用功能带入对话中吧。

更多详情请参考 [Tambo 官方文档](https://tambo.dev)。
