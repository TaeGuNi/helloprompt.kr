---
layout: ../../../layouts/PostLayout.astro
title: "Tambo SDKで始めるジェネレーティブUI (Generative UI)"
date: 2024-05-20
description: "ReactアプリケーションでAIが生成する動的インターフェースを実装する方法。Tambo SDKを活用してジェネレーティブUIを簡単に構築してみます。"
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

人工知能（AI）がテキストや画像を生成するだけでなく、今や**ユーザーインターフェース（UI）**そのものをリアルタイムで生成する時代が到来しました。これを**ジェネレーティブUI (Generative UI)**と呼びます。

今回は、React環境でジェネレーティブUIを最も簡単に実装できるツールである**Tambo SDK**について学び、簡単な例を通して実際に実装してみます。

## ジェネレーティブUIとは何ですか？

従来のUI開発手法は、開発者がすべての画面とコンポーネントを事前に定義し、データに基づいて条件付きレンダリングを行うものでした。しかし、ジェネレーティブUIは異なります。

*   **動的生成:** ユーザーの意図や会話の文脈に応じて、AIが最も適切なUIコンポーネントを即座に決定し、レンダリングします。
*   **パーソナライズ:** ユーザーごとに、あるいは状況ごとに全く異なるカスタマイズされたインターフェースを提供できます。
*   **柔軟性:** 事前に定義されていないシナリオにも、AIの判断に基づいて対応できます。

## なぜTamboなのか？

Tamboは、このようなジェネレーティブUIを複雑な設定なしでアプリケーションに統合できるSDKです。

1.  **Reactフレンドリー:** Reactコンポーネントシステムと完全に互換性があります。
2.  **型安全性:** TypeScriptを標準サポートしており、安全に開発できます。
3.  **簡単な連携:** Vercel AI SDKなどの主要なAIライブラリと簡単に連携できます。

## Tambo SDKで始める

簡単な旅行計画アシスタントチャットボットを作ると想像してみてください。ユーザーが「済州島の旅行プランを立てて」と言ったとき、単にテキストで答えるのではなく、**地図、航空券予約カード、ホテルリスト**など、リッチなUIを表示したいとします。

### 1. インストール

まずパッケージをインストールします。

```bash
npm install @tambo/sdk ai
```

### 2. コンポーネントの定義

AIが使用できるUIコンポーネントを定義します。例えば、おすすめの場所を表示するカードコンポーネントです。

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from '@tambo/ui';

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">{name}</Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>予約する</Button>
    </Card>
  );
}
```

### 3. Tamboレジストリの設定

次に、このコンポーネントを「ツール(Tool)」としてAIに教える必要があります。Tamboはこのプロセスを非常に直感的にしてくれます。

```tsx
// lib/tambo.ts
import { createTambo } from '@tambo/sdk';
import { PlaceCard } from '../components/PlaceCard';
import { z } from 'zod';

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: '場所に関する情報をカード形式で表示します。',
      schema: z.object({
        name: z.string().describe('場所の名前'),
        description: z.string().describe('場所の説明'),
        rating: z.number().describe('評価 (1-5)'),
      }),
    },
  },
});
```

### 4. AIレスポンスからのUIレンダリング

最後に、チャットボットインターフェースでTamboを使用して、AIの応答をUIに変換します。

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
            {/* テキストメッセージと共に生成されたUIがここにレンダリングされます */}
            <GenerativeUI content={m.content} />
          </div>
        ))}
        
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>送信</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## 結論

Tambo SDKを使用すると、複雑なロジックなしでAIにReactコンポーネントを自由に扱わせることができます。チャットウィンドウはもはやテキストだけの空間ではありません。今すぐアプリの機能を会話の中に持ち込みましょう。

詳細は[Tambo公式ドキュメント](https://tambo.dev)を参照してください。
