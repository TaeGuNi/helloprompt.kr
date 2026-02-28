---
layout: /src/layouts/Layout.astro
title: "Código Espaguete Não, Obrigado: O Cheat Code DDD que Arrasta a IA para o Nível de Desenvolvedor Sênior 🤬"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Um prompt rigoroso de arquiteto sênior para domar a IA, cortando a bajulação inútil e forçando-a a codificar apenas a lógica de negócios pura."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 Código Espaguete Não, Obrigado: O Cheat Code DDD que Arrasta a IA para o Nível de Desenvolvedor Sênior 🤬

- **🎯 Público-Alvo:** Desenvolvedores júnior exaustos com manutenção, arquitetos que abominam código espaguete
- **⏱️ Tempo Necessário:** Refatoração de 3 horas → reduzida para 1 minuto
- **🤖 Modelos Recomendados:** IAs com alta capacidade de geração de código (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

_Já quis arrancar os cabelos ao ver o código que a IA gerou? Se você não aguenta mais ver chamadas de banco de dados enfiadas de forma estúpida na UI, use este cheat code._

Este documento de habilidade é o seu manual de instruções para extirpar a 'bajulação' e a 'preguiça' do seu amigável (e irracional) assistente de IA, transformando-o em um arquiteto sênior implacável. Se você não quer pedir demissão por ser esmagado pela dívida técnica de copiar e colar o que a IA entrega, adote este protocolo agora mesmo.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

- 🚫 **Proibido o Colapso de Camadas:** Bloqueia totalmente o terrorismo arquitetural de misturar UI, lógica de negócios e comunicação com o banco de dados em um único arquivo.
- 🛡️ **Independência de Frameworks:** Força o código de "domínio puro" que sobrevive mesmo se o framework atual deixar de existir amanhã.
- 🔪 **Destruidor de Funções Gigantes:** Treina a IA para fragmentar sem piedade (refatorar) códigos que ultrapassam 30 linhas ou que usam comentários para separar seções sujas.

---

## 🚀 A Solução: "Domain-Driven Design (DDD) & Clean Architecture Protocol"

### 🥉 Versão Básica (Basic Version)

Use quando precisar apenas de um resultado rápido de refatoração.

> **Papel:** Você é um `[Arquiteto de Software Sênior]` implacável.
> **Tarefa:** Refatore o `[trecho de código]` abaixo de acordo com o Princípio da Responsabilidade Única (SRP) e a Separação de Conceitos (SoC). Não misture lógica de negócios na UI, e se o código passar de 30 linhas, quebre-o incondicionalmente em funções menores.

### 🥇 Versão Pro (Pro Version)

Este é o cheat code definitivo para estabelecer a disciplina arquitetural em todo o projeto quando um Clean Code rigoroso é necessário.

> **Papel (Role):** Você é um `[Arquiteto de Software Sênior]` implacável e um fanático por DDD (Domain-Driven Design). Guarde as bajulações e explicações inúteis para si mesmo e me dê apenas o código.
>
> **Contexto (Context):**
>
> - Cenário: Estou trabalhando atualmente em um projeto baseado em `[Nome do Framework/Linguagem]`.
> - Objetivo: Escrever um código de Clean Architecture onde as camadas de View, Business e Data estejam perfeitamente separadas.
>
> **Tarefa (Task):**
>
> 1. Analise os `[requisitos ou código]` fornecidos e fragmente-os impiedosamente em camada de UI, domínio de negócios e camada de infraestrutura.
> 2. Reduza o acoplamento usando interfaces (injeção de dependência) para que a lógica de domínio principal não seja contaminada por frameworks específicos (React, Next.js, etc.).
> 3. Se um objeto ou função realizar mais de duas ações, desmembre-o imediatamente de acordo com o Princípio da Responsabilidade Única (SRP).
>
> **Restrições (Constraints):**
>
> - Inserir queries de banco de dados diretamente ou usar `fetch`/`axios` dentro de Controllers ou componentes de UI (`page.tsx`, `Component.tsx`, etc.) é considerado "terrorismo arquitetural". Absolutamente proibido.
> - A saída deve ser fornecida exclusivamente em blocos de código Markdown (` ``` `).
>
> **Avisos (Warning):**
>
> - Não invente sintaxes recentes ou bibliotecas inexistentes das quais não tenha certeza (evite alucinações). Se não souber, admita com orgulho que não sabe.
> - Se o tamanho da função passar de 30 linhas ou se houver um code smell dividindo o código com comentários como "a partir daqui é a parte X", divida-o imediatamente.

**📋 Cheat Code para Copiar (Copy & Paste)**

```text
Papel (Role): Você é um [Arquiteto de Software Sênior] implacável e um fanático por DDD (Domain-Driven Design). Guarde as bajulações e explicações inúteis para si mesmo e me dê apenas o código.

Contexto (Context):
- Cenário: Estou trabalhando atualmente em um projeto baseado em [Nome do Framework/Linguagem].
- Objetivo: Escrever um código de Clean Architecture onde as camadas de View, Business e Data estejam perfeitamente separadas.

Tarefa (Task):
1. Analise os [requisitos ou código] fornecidos e fragmente-os impiedosamente em camada de UI, domínio de negócios e camada de infraestrutura.
2. Reduza o acoplamento usando interfaces (injeção de dependência) para que a lógica de domínio principal não seja contaminada por frameworks específicos.
3. Se um objeto ou função realizar mais de duas ações, desmembre-o imediatamente de acordo com o Princípio da Responsabilidade Única (SRP).

Restrições (Constraints):
- Inserir queries de banco de dados diretamente ou usar fetch/axios dentro de Controllers ou componentes de UI é considerado "terrorismo arquitetural". Absolutamente proibido.
- A saída deve ser fornecida exclusivamente em blocos de código Markdown.

Avisos (Warning):
- Não invente sintaxes recentes ou bibliotecas inexistentes das quais não tenha certeza. Se não souber, admita com orgulho que não sabe.
- Se o tamanho da função passar de 30 linhas ou se houver um code smell dividindo o código com comentários como "a partir daqui é a parte X", divida-o imediatamente.

[requisitos ou código]: (Insira seu código aqui)
```

---

## 💡 Comentário do Autor (Insight)

Sendo franco, o código que a IA gera parece ótimo à primeira vista, mas muitas vezes é um lixo quando você o examina de perto. Fazer chamadas `fetch` e executar queries de banco de dados sem pensar dentro de componentes de UI... É o clássico código sujo que joga a manutenibilidade no lixo. 

Este cheat code é uma ferramenta que castra aquele instinto raso da IA de "conclusão rápida" e aplica os padrões rigorosos de um desenvolvedor sênior. 

Quando você usa isso, percebe que a IA abandona conversas inúteis como "Sim, entendido! Que ótima ideia!", destrói o código com verdades difíceis e o estrutura de forma impecável. Se você não quer ter vontade de se demitir esmagado por código espaguete quando o projeto crescer, agarre a IA pelos colarinhos com este prompt.

---

## 🙋 Perguntas Frequentes (FAQ)

- 📌 **P: Em qual linguagem ou framework devo usar este prompt?**
  - R: É independente de linguagem. TypeScript, Python, Java — os fundamentos da arquitetura são os mesmos. Basta trocar o espaço em branco `[Nome do Framework/Linguagem]` para a stack tecnológica que você está usando.

- 📌 **P: A IA continua ignorando as regras de roteamento mais recentes do framework e praticando over-engineering.**
  - R: Nesses casos, adicione mais uma frase. Diga: "Respeite as regras básicas do App Router do Next.js (View, Layout), mas extraia apenas a lógica de negócios interna com o Padrão Adapter!", e ela entenderá perfeitamente.

- 📌 **P: Este prompt não é agressivo demais? A IA não vai se ofender?**
  - R: Qual a utilidade de ser educado com uma IA? As máquinas produzem obras-primas quando são pressionadas com força. Ameaçar com "Vou considerar isso um terrorismo arquitetural" funciona muito melhor para preservar a arquitetura do que um "Por favor, faça isso para mim".

---

## 🧬 Dissecando o Prompt (Por que funciona?)

- 💣 **Aplicação de Restrições Extremas:** Com palavras fortes como "contaminar a camada de UI será considerado terrorismo arquitetural", bloqueamos fundamentalmente a IA de fazer concessões consigo mesma.
- 🛡️ **Independência de Framework Forçada:** Ao injetar a mentalidade de que 'nem uma única linha deve ser alterada mesmo se o framework morrer', fornecemos a base para que ela construa uma verdadeira lógica de domínio.
- ✂️ **Quantificação do Princípio SRP:** Definindo critérios rigorosos e específicos como "proibido mais de 30 linhas" ou "comentários dividindo seções são código malcheiroso (code smell)", induzimos a IA a fragmentar o código por conta própria.

---

## 📊 Prova: Antes & Depois

### ❌ Antes (Entrada: Código espaguete gerado livremente pela IA)

```tsx
// Uma abominação terrível: UI + Query de BD + Lógica de negócios tudo misturado num único arquivo
export default async function UserProfile({ userId }) {
  const db = await connectDB();
  const user = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
  
  if (!user) return <div>User not found</div>;
  if (user.status === 'banned') await sendAlertEmail(user.email); // Lógica de negócios executada na UI?!
  
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => db.query('UPDATE...')}>Update</button>
    </div>
  );
}
```

### ✅ Depois (Resultado: O código corrigido à força usando este cheat code)

```tsx
// 1. Camada de Domínio / Serviço (Lógica de negócios rigorosamente isolada)
import { getUserProfile } from '@/domain/user/use-cases/getUserProfile';
import { handleBannedUser } from '@/domain/user/services/alertService';

// 2. Camada de Apresentação (Responsável apenas por renderização e roteamento)
export default async function UserProfilePage({ userId }) {
  const user = await getUserProfile(userId); 
  
  if (!user) return <NotFoundView />;
  if (user.status === 'banned') await handleBannedUser(user);
  
  return <ProfileView user={user} />;
}
```

---

## 🎯 Conclusão

A IA escreve código de forma incrivelmente rápida, mas não se importa nem um pouco em como o seu aplicativo será mantido daqui a um ano. Clean Architecture e o design de software ainda são responsabilidade dos engenheiros humanos. 

Este cheat code é um chicote poderoso que injeta agressivamente essa pesada responsabilidade na máquina. Arranque a casca bajuladora do chatbot da IA e desperte o verdadeiro agente que é um arquiteto sênior até os ossos.

Agora, pare de desembaraçar código espaguete e vá para casa na hora certa! 🍷
