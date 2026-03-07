---
layout: ../../../layouts/PostLayout.astro
title: "Começando com UI Generativa usando o Tambo SDK"
date: 2026-02-20
description: "Descubra como implementar interfaces dinâmicas geradas por IA em aplicações React. Construa UIs Generativas de forma intuitiva usando o Tambo SDK."
author: "Hello Prompt Team"
image: "/images/posts/generative-ui-tambo.png"
tags: ["Generative UI", "React", "AI", "Tambo SDK", "Frontend"]
---

## 📝 Começando com UI Generativa usando o Tambo SDK

- **🎯 Recomendado para:** Desenvolvedores Front-end, Engenheiros React, Criadores de Produtos de IA
- **⏱️ Tempo estimado:** 20 minutos → 5 minutos de configuração
- **🤖 Stack recomendada:** React, Vercel AI SDK, Tambo SDK

- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Aplicabilidade:** ⭐⭐⭐⭐☆

> _"Cansado de criar centenas de componentes condicionais no React só para o seu chatbot de IA não parecer um terminal de texto dos anos 90?"_

Para além da geração de textos e imagens, entramos oficialmente na era em que a inteligência artificial constrói **Interfaces de Usuário (UI)** em tempo real. Bem-vindo ao universo da **UI Generativa (Generative UI)**.

Hoje, vamos explorar a fundo o **Tambo SDK**, a ponte definitiva que transforma as respostas da sua IA em componentes React interativos, eliminando a necessidade de quebrar a cabeça com configurações complexas de roteamento e injeção de estado.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. A UI Generativa permite que a IA tome decisões e renderize componentes React dinamicamente, baseando-se na intenção e no contexto do usuário.
2. O Tambo SDK elimina qualquer atrito na integração de componentes React com o Vercel AI SDK, assegurando uma tipagem forte de ponta a ponta.
3. Com apenas algumas linhas de código, seu chatbot deixa de cuspir blocos de texto monótonos e passa a entregar interfaces ricas e acionáveis (como mapas interativos ou cartões de reserva).

---

## 🚀 Solução: Implementando o Tambo SDK no React

### 🥉 Versão Básica (Configuração Inicial)

Para começar, precisamos preparar o ambiente instalando as dependências necessárias e criando as "ferramentas visuais" que a IA terá à sua disposição.

> **Objetivo:** Preparar o ecossistema instalando os pacotes e construindo a UI base.

> **Ação 1 (Instalação):** Execute o comando `pnpm add @tambo/sdk ai zod` no seu terminal.

> **Ação 2 (O Arsenal da IA):** Crie um componente React convencional. A verdadeira mágica acontece quando a IA preenche dinamicamente as propriedades (`name`, `description`, `rating`).

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

Agora, chegou a hora de conectar o componente visual ao "cérebro" da IA, garantindo que todos os dados injetados passem por uma validação rigorosa.

> **Papel (Role):** O Tambo SDK atuará como o orquestrador entre o LLM e o DOM do React.
>
> **Contexto (Context):**
>
> - Foco: Ensinar a IA sobre a existência da ferramenta `showPlace`.
> - Destino: O hook `useChat` irá renderizar a UI lado a lado com as mensagens de texto.
>
> **Tarefa (Task):**
>
> 1. Criar o registro `tambo`, mapeando o componente React para uma descrição que a IA consiga interpretar.
> 2. Injetar o componente `<GenerativeUI />` diretamente no loop de renderização do chat.
>
> **Restrições (Constraints):**
>
> - Utilize o **Zod** para definir um _schema_ extremamente rígido. Isso impede que a IA quebre o seu layout enviando propriedades com tipagens incorretas (por exemplo, uma string no lugar de um número de avaliação).

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

A verdadeira força da UI Generativa não se resume a deixar a tela "bonita"; seu maior trunfo está em **reduzir drasticamente o atrito cognitivo do usuário**.

Quando um cliente pede para reservar um hotel ou comprar uma passagem aérea, ele não quer ler um parágrafo interminável de texto informando que "O hotel X custa Y". Ele espera ver um cartão visual atraente, com uma foto e um botão nativo de "Reservar Agora". O Tambo SDK é verdadeiramente revolucionário porque permite que desenvolvedores front-end continuem construindo dentro do paradigma declarativo do React — que já dominam e adoram — enquanto delegam toda a complexa orquestração condicional de renderização para a IA.

_Dica de Ouro de Arquitetura:_ Comece pequeno. Não tente converter toda a sua aplicação para UI Generativa do dia para a noite. Identifique os maiores gargalos de interação no seu chatbot atual e substitua as respostas em texto plano por um único componente acionável. A percepção de valor e a melhoria na experiência do usuário final serão imediatas.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: Posso usar o Tambo SDK com o App Router do Next.js?**
  - A: Com certeza! O Tambo foi meticulosamente projetado para brilhar em ambientes modernos como o Next.js App Router. Ele se integra nativamente com React Server Components (RSC) e Server Actions, ideal para quando você precisa buscar dados no backend antes de renderizar o componente.

- **Q: Isso funciona exclusivamente com a API da OpenAI?**
  - A: Não. Como o Tambo atua na camada de apresentação e trabalha em conjunto com o Vercel AI SDK, ele é totalmente agnóstico em relação ao provedor de IA. Você pode utilizar Claude (Anthropic), Gemini (Google) ou qualquer LLM open-source, desde que o modelo ofereça um suporte robusto a _Function Calling_ / _Tool Calls_.

- **Q: Renderizar componentes dinamicamente não afeta negativamente o tempo de resposta (latência)?**
  - A: A latência é decorrente, quase que exclusivamente, do tempo que o LLM leva para gerar o objeto JSON da chamada da ferramenta. O Tambo em si é incrivelmente leve e renderiza o componente no front-end instantaneamente assim que o payload é recebido pelo navegador. Para mascarar a latência do modelo, a melhor prática é utilizar componentes de "Loading" (Skeletons) atrelados ao estado `isLoading` do hook `useChat`.

---

## 🧬 Dissecando o Código (Why it works?)

1.  **Segurança de Tipos Impenetrável:** Ao definirmos o `schema` utilizando o Zod no registro, garantimos que a IA jamais repassará dados corrompidos para a nossa interface. O framework atua como um verdadeiro escudo protetor entre as potenciais alucinações do LLM e o seu código em produção.
2.  **Separação Clara de Responsabilidades:** Enquanto o Vercel AI SDK assume o trabalho pesado de comunicação via stream com o provedor de IA, o Tambo foca 100% na injeção do componente correto no DOM no exato milissegundo em que o LLM decide que o usuário deve interagir com uma interface visual, em vez de apenas ler um bloco de texto.

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

A tradicional janela de chat deixou de ser apenas um canal de ida e volta para caracteres de texto. Com ferramentas inovadoras como o Tambo SDK, você consegue extrair as funcionalidades centrais da sua aplicação e incorporá-las diretamente no fluxo natural de uma conversa, criando experiências de usuário fluidas e incrivelmente personalizadas.

Chega de renderizar texto cru e sem vida. É hora de gerar interfaces vivas e interativas. Agora vá codar e aproveite um bom café! ☕
