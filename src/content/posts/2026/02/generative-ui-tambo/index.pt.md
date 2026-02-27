---
layout: ../../../layouts/PostLayout.astro
title: " \"Começando com UI Generativa usando Tambo SDK\""
date: 2026-02-20
description: " \"Como implementar interfaces dinâmicas geradas por IA em aplicações React. Construa UI Generativa facilmente com Tambo SDK.\""
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

# 📝 Começando com UI Generativa usando Tambo SDK

- **🎯 Recomendado para:** Desenvolvedores Front-end, Engenheiros React, Criadores de Produtos de IA
- **⏱️ Tempo estimado:** 20 minutos → 5 minutos de configuração
- **🤖 Stack recomendada:** React, Vercel AI SDK, Tambo SDK

- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Aplicabilidade:** ⭐⭐⭐⭐☆

> _"Cansado de criar centenas de componentes condicionais no React só para o seu chatbot de IA não parecer um terminal de texto dos anos 90?"_

Além da geração de texto e imagens, entramos oficialmente na era em que a IA constrói **Interfaces de Usuário (UI)** em tempo real. Bem-vindo ao mundo da **UI Generativa (Generative UI)**.

Hoje, vamos mergulhar fundo no **Tambo SDK**, a ponte definitiva que transforma as respostas da sua IA em componentes React interativos, sem que você precise enlouquecer com configurações complexas de roteamento e injeção de estado.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. A UI Generativa permite que a IA decida e renderize componentes React dinamicamente com base na intenção e no contexto do usuário.
2. O Tambo SDK elimina o atrito de integrar componentes React com o Vercel AI SDK, garantindo tipagem forte de ponta a ponta.
3. Com poucas linhas de código, o seu chatbot deixa de devolver apenas blocos de texto e passa a entregar interfaces ricas e acionáveis (como mapas ou cartões de reserva).

---

## 🚀 Solução: Implementando Tambo SDK no React

### 🥉 Versão Básica (Configuração Inicial)

Para começar, precisamos preparar o ambiente instalando as dependências e criando as "ferramentas visuais" que a IA terá à disposição.

> **Objetivo:** Preparar o ecossistema instalando pacotes e criando a UI bruta.

> **Ação 1 (Instalação):** Execute o comando `pnpm add @tambo/sdk ai zod` no seu terminal.

> **Ação 2 (O Arsenal da IA):** Crie um componente React comum. A mágica é que a IA vai preencher dinamicamente as props (`name`, `description`, `rating`).

```tsx
// components/PlaceCard.tsx
import { Card, Text, Button } from "@tambo/ui";

export function PlaceCard({
  name,
  description,
  rating,
}: {
  name: string;
  description: string;
  rating: number;
}) {
  return (
    <Card className="p-4 border rounded-xl shadow-sm">
      <Text size="lg" weight="bold">
        {name}
      </Text>
      <Text className="text-yellow-500">⭐ {rating}</Text>
      <Text className="text-gray-600 mt-2">{description}</Text>
      <Button className="mt-4 w-full">Reservar Agora</Button>
    </Card>
  );
}
```


### 🥇 Versão Pro (Registro e Injeção de UI)

Agora, conectamos o componente visual ao "cérebro" da IA, garantindo que os dados injetados sejam validados estritamente.

> **Papel (Role):** O Tambo SDK atuará como o orquestrador entre o LLM e o DOM do React.
>
> **Contexto (Context):**
>
> - Foco: Ensinar a IA sobre a existência da ferramenta `showPlace`.
> - Destino: O hook `useChat` renderizará a UI ao lado das mensagens de texto.
>
> **Tarefa (Task):**
>
> 1. Criar o registro `tambo` mapeando o componente React para uma descrição legível pela IA.
> 2. Injetar o componente `<GenerativeUI />` no loop de renderização do chat.
>
> **Restrições (Constraints):**
>
> - Utilize o **Zod** para definir um _schema_ rígido. Isso impede que a IA quebre o layout enviando propriedades com tipos incorretos (ex: uma string no lugar do número de avaliação).

**1. O Registro (Ensinando a IA):**

```tsx
// lib/tambo.ts
import { createTambo } from "@tambo/sdk";
import { PlaceCard } from "../components/PlaceCard";
import { z } from "zod";

export const tambo = createTambo({
  components: {
    showPlace: {
      component: PlaceCard,
      description:
        "Exibe um cartão com informações detalhadas sobre um local recomendado para viagem.",
      schema: z.object({
        name: z.string().describe("Nome do destino ou local"),
        description: z.string().describe("Breve descrição atrativa do local"),
        rating: z
          .number()
          .min(1)
          .max(5)
          .describe("Avaliação de 1 a 5 estrelas"),
      }),
    },
  },
});
```

**2. A Interface (Onde a mágica acontece):**

```tsx
// app/chat/page.tsx
import { useChat } from "ai/react";
import { TamboProvider, GenerativeUI } from "@tambo/sdk/react";
import { tambo } from "@/lib/tambo";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <TamboProvider registry={tambo}>
      <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`p-4 rounded-lg ${m.role === "user" ? "bg-blue-50" : "bg-gray-50"}`}
            >
              <strong className="block mb-2 text-sm text-gray-500 capitalize">
                {m.role}
              </strong>
              {/* A UI Gerativa ganha vida aqui, convertendo Tool Calls em Componentes */}
              <GenerativeUI content={m.content} />
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ex: Planeje uma viagem para a Ilha de Jeju..."
            className="flex-1 p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </TamboProvider>
  );
}
```

---

## 💡 Comentário do Autor (Insight)

A verdadeira força da UI Generativa não está apenas em deixar a tela "bonita", mas em **reduzir o atrito cognitivo do usuário**.

Quando um usuário pede para reservar um hotel ou comprar um voo, ele não quer ler um parágrafo longo de texto dizendo "O hotel X custa Y". Ele quer um cartão visual com uma foto e um botão nativo de "Reservar". O Tambo SDK é revolucionário porque permite que desenvolvedores front-end continuem construindo no paradigma declarativo do React que já conhecem e amam, enquanto delegam a orquestração condicional complexa de renderização para a IA.

_Dica de Ouro de Arquitetura:_ Comece pequeno. Não tente converter toda a sua aplicação para UI Generativa do dia para a noite. Identifique os gargalos de interação do seu chatbot atual e substitua as respostas em texto plano por um único componente acionável. A percepção de valor pelo usuário final será imediata.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: Posso usar o Tambo SDK com o App Router do Next.js?**
  - A: Absolutamente! O Tambo foi projetado para brilhar em ambientes modernos como o Next.js App Router, integrando-se nativamente com React Server Components (RSC) e Server Actions, caso você precise buscar dados no backend antes de renderizar o componente.

- **Q: Isso funciona exclusivamente com a API da OpenAI?**
  - A: Não. Como o Tambo atua na camada de apresentação e interage em conjunto com o Vercel AI SDK, ele é agnóstico em relação ao provedor de IA. Você pode usar Claude (Anthropic), Gemini (Google) ou qualquer LLM open-source, desde que o modelo ofereça suporte robusto a _Function Calling_ / _Tool Calls_.

- **Q: Renderizar componentes dinamicamente não deixa o tempo de resposta (latency) mais lento?**
  - A: A latência vem principalmente do tempo que a LLM leva para gerar o objeto JSON da chamada da ferramenta. O Tambo em si é extremamente leve e renderiza o componente no front-end instantaneamente assim que o payload é recebido pelo navegador. Para mascarar a latência do modelo, utilize componentes de "Loading" (Skeleton) durante o estado de `isLoading` do `useChat`.

---

## 🧬 Dissecando o Código (Why it works?)

1.  **Segurança de Tipos Impenetrável:** Ao definir o `schema` com Zod no registro, garantimos que a IA nunca passará dados corrompidos para a nossa interface. O framework atua como um escudo entre as alucinações da LLM e o seu código de produção.
2.  **Separação Clara de Preocupações:** O Vercel AI SDK cuida da comunicação pesada via stream com o provedor de IA. O Tambo, por sua vez, foca 100% em injetar o componente correto no DOM no exato segundo em que a LLM decide que o usuário precisa ver uma interface em vez de ler um texto.

---

## 📊 Prova Prática: Before & After

### ❌ Before (Apenas Texto)

```text
Usuário: Planeje uma viagem para Jeju.
AI: Claro! Eu recomendo o Hotel Shilla Jeju. Ele tem 5 estrelas e é um resort de luxo com vista para o mar. Gostaria que eu fizesse a reserva?
```

### ✅ After (UI Generativa)

```text
Usuário: Planeje uma viagem para Jeju.
AI: Perfeito! Aqui está uma excelente recomendação para a sua estadia:
[Renderiza o componente <PlaceCard /> interativo com a foto do hotel, 5 estrelas amarelas brilhantes e um botão azul de "Reservar Agora"]
```

---

## 🎯 Conclusão

A janela de chat deixou de ser apenas um tubo de ida e volta para caracteres. Com ferramentas como o Tambo SDK, você extrai as funcionalidades centrais da sua aplicação e as coloca diretamente no fluxo natural de uma conversa, criando experiências fluídas e incrivelmente personalizadas.

Chega de renderizar texto cru. É hora de gerar interfaces vivas. Agora vá codar e tome um bom café! ☕
