---
layout: ../../../layouts/PostLayout.astro
title: "Начало работы с Генеративным UI с помощью Tambo SDK"
date: 2024-05-20
description: "Как реализовать динамические интерфейсы, генерируемые ИИ, в приложениях React. Легко создавайте Генеративный UI с Tambo SDK."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

Помимо генерации текста и изображений с помощью ИИ, мы вступили в эпоху, когда ИИ генерирует **Пользовательские Интерфейсы (UI)** в реальном времени. Это называется **Генеративный UI (Generative UI)**.

Сегодня мы рассмотрим **Tambo SDK**, инструмент, который помогает наиболее просто реализовать Генеративный UI в среде React, и создадим простой пример.

## Что такое Генеративный UI?

Традиционная разработка UI подразумевала, что разработчики заранее определяют все экраны и компоненты и используют условный рендеринг на основе данных. Генеративный UI отличается.

*   **Динамическая генерация:** ИИ решает и рендерит наиболее подходящие компоненты UI на лету, основываясь на намерениях пользователя или контексте разговора.
*   **Персонализация:** Он может предоставлять совершенно разные настраиваемые интерфейсы для каждого пользователя или ситуации.
*   **Гибкость:** Он может обрабатывать неопределенные сценарии, основываясь на суждениях ИИ.

## Почему Tambo?

Tambo — это SDK, который позволяет интегрировать этот Генеративный UI в ваше приложение немедленно без сложной настройки.

1.  **Дружественность к React:** Полностью совместим с системой компонентов React.
2.  **Безопасность типов:** Встроенная поддержка TypeScript для безопасной разработки.
3.  **Простая интеграция:** Легко интегрируется с основными библиотеками ИИ, такими как Vercel AI SDK.

## Начало работы с Tambo SDK

Представьте, что вы создаете простого чат-бота для планирования путешествий. Когда пользователь говорит «Спланируй поездку на остров Чеджу», вместо того чтобы просто отвечать текстом, вы хотите показать богатый UI, такой как **карты, карточки бронирования авиабилетов и списки отелей**.

### 1. Установка

Сначала установите пакет.

```bash
npm install @tambo/sdk ai
```

### 2. Определение компонентов

Определите компоненты UI, которые может использовать ИИ. Например, компонент карточки для отображения рекомендуемых мест.

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from '@tambo/ui';

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">{name}</Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>Забронировать</Button>
    </Card>
  );
}
```

### 3. Настройка реестра Tambo

Теперь вам нужно сообщить ИИ об этом компоненте как об «Инструменте». Tambo делает этот процесс очень интуитивным.

```tsx
// lib/tambo.ts
import { createTambo } from '@tambo/sdk';
import { PlaceCard } from '../components/PlaceCard';
import { z } from 'zod';

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: 'Отображает информацию о месте в формате карточки.',
      schema: z.object({
        name: z.string().describe('Название места'),
        description: z.string().describe('Описание места'),
        rating: z.number().describe('Рейтинг (1-5)'),
      }),
    },
  },
});
```

### 4. Рендеринг UI из ответа ИИ

Наконец, используйте Tambo в интерфейсе вашего чат-бота, чтобы преобразовать ответ ИИ в UI.

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
            {/* Сгенерированный UI рендерится здесь вместе с текстовыми сообщениями */}
            <GenerativeUI content={m.content} />
          </div>
        ))}
        
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>Отправить</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## Заключение

С Tambo SDK вы можете позволить ИИ свободно управлять вашими компонентами React без сложной логики. Окно чата больше не просто пространство для текста. Привнесите функции вашего приложения в разговор прямо сейчас.

Для получения более подробной информации ознакомьтесь с [Официальной документацией Tambo](https://tambo.dev).
