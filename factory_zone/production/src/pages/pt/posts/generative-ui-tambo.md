---
layout: ../../../layouts/PostLayout.astro
title: "Começando com UI Generativa usando Tambo SDK"
date: 2024-05-20
description: "Como implementar interfaces dinâmicas geradas por IA em aplicações React. Construa UI Generativa facilmente com Tambo SDK."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

Além da geração de texto e imagens por IA, entramos agora na era em que a IA gera **Interfaces de Usuário (UI)** em tempo real. Isso é chamado de **UI Generativa (Generative UI)**.

Hoje, vamos explorar o **Tambo SDK**, uma ferramenta que ajuda a implementar UI Generativa da maneira mais fácil em um ambiente React, e construir um exemplo simples.

## O que é UI Generativa?

O desenvolvimento tradicional de UI envolvia desenvolvedores definindo todas as telas e componentes antecipadamente e usando renderização condicional baseada em dados. A UI Generativa é diferente.

*   **Geração Dinâmica:** A IA decide e renderiza os componentes de UI mais apropriados na hora, com base na intenção do usuário ou no contexto da conversa.
*   **Personalização:** Pode fornecer interfaces personalizadas completamente diferentes para cada usuário ou situação.
*   **Flexibilidade:** Pode lidar com cenários não definidos com base no julgamento da IA.

## Por que Tambo?

Tambo é um SDK que permite integrar essa UI Generativa em sua aplicação imediatamente sem configurações complexas.

1.  **Amigável ao React:** Perfeitamente compatível com o sistema de componentes do React.
2.  **Segurança de Tipos:** Suporte nativo ao TypeScript para desenvolvimento seguro.
3.  **Fácil Integração:** Integra-se facilmente com as principais bibliotecas de IA, como o Vercel AI SDK.

## Começando com Tambo SDK

Imagine construir um chatbot assistente de planejamento de viagens simples. Quando um usuário diz "Planeje uma viagem para a Ilha de Jeju", em vez de apenas responder com texto, você quer mostrar uma UI rica como **mapas, cartões de reserva de voo e listas de hotéis**.

### 1. Instalação

Primeiro, instale o pacote.

```bash
npm install @tambo/sdk ai
```

### 2. Definir Componentes

Defina os componentes de UI que a IA pode usar. Por exemplo, um componente de cartão para mostrar lugares recomendados.

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from '@tambo/ui';

export function PlaceCard({ name, description, rating }) {
  return (
    <Card>
      <Text size="lg" weight="bold">{name}</Text>
      <Text>⭐ {rating}</Text>
      <Text>{description}</Text>
      <Button>Reservar</Button>
    </Card>
  );
}
```

### 3. Configurar o Registro Tambo

Agora você precisa informar a IA sobre este componente como uma "Ferramenta". O Tambo torna esse processo muito intuitivo.

```tsx
// lib/tambo.ts
import { createTambo } from '@tambo/sdk';
import { PlaceCard } from '../components/PlaceCard';
import { z } from 'zod';

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description: 'Mostra informações sobre um lugar em formato de cartão.',
      schema: z.object({
        name: z.string().describe('Nome do lugar'),
        description: z.string().describe('Descrição do lugar'),
        rating: z.number().describe('Avaliação (1-5)'),
      }),
    },
  },
});
```

### 4. Renderizando UI a partir da Resposta da IA

Finalmente, use o Tambo na interface do seu chatbot para converter a resposta da IA em UI.

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
            {/* A UI gerada é renderizada aqui junto com as mensagens de texto */}
            <GenerativeUI content={m.content} />
          </div>
        ))}
        
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button>Enviar</button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

## Conclusão

Com o Tambo SDK, você pode deixar a IA manipular livremente seus componentes React sem lógica complexa. A janela de chat não é mais apenas um espaço para texto. Traga as funcionalidades do seu aplicativo para a conversa agora.

Para mais detalhes, confira a [Documentação Oficial do Tambo](https://tambo.dev).
