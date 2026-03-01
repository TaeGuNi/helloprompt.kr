---
layout: /src/layouts/Layout.astro
title: "🎙️ Prompt Estruturado: Resuma Reuniões Caóticas em 1 Minuto"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: "Automação de Tarefas"
description: "Um prompt prático que transforma instantaneamente o áudio transcrito e confuso de reuniões em um resumo limpo com itens de ação."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Estruture Reuniões Caóticas em 1 Minuto




- **🎯 Recomendado para:** Profissionais juniores, Gerentes de Projeto (PMs), Profissionais de Marketing
- **⏱️ Tempo gasto:** Reduzido de 30 minutos para 1 minuto
- **🤖 Modelos recomendados:** Qualquer IA conversacional (ChatGPT, Claude, Gemini, etc.)
- ⭐ **Dificuldade:** ⭐☆☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐


> _"Você perdeu a tarde toda organizando as atas da reunião de hoje?"_

Mesmo que você converta o áudio gravado em texto logo após a reunião (usando ferramentas como Clova Note, Whisper, etc.), extrair os pontos principais de uma conversa confusa é outro tormento. Este prompt extrai com precisão apenas as **'decisões principais'** e **'quem deve fazer o quê (Action Items)'** de uma pilha de texto sem contexto. Basta copiar e colar.

---

## ⚡️ Resumo de 3 Linhas (TL;DR)

1. Copie o texto bruto transcrito do áudio e jogue-o na IA.
2. A IA filtra as conversas paralelas e extrai apenas as decisões principais.
3. Extrai claramente os 'próximos passos por responsável (Action Items)', que é a parte mais importante.

---

## 🚀 Solução: "Prompt de Estruturação Automática de Atas de Reunião"



### 🥉 Versão Básica (Basic Version)

Use quando precisar apenas de resultados rápidos.

> **Função:** Você é um `[Gerente de Projeto Sênior]`.
> **Tarefa:** Leia a seguinte `[Transcrição da Reunião]` e resuma apenas os pontos principais: decisões-chave e os próximos passos (Action Items).

### 🥇 Versão Profissional (Pro Version)

Use quando precisar de qualidade e detalhes.

> **Função (Role):** Você é um `[Gerente de Produto de TI e PM com 10 anos de experiência]`. Você é um especialista em captar o contexto de uma reunião e organizar de forma clara quem deve fazer o quê e até quando.
>
> **Contexto (Context):**
> - Cenário: Temos uma transcrição confusa gerada após uma `[reunião semanal de status ou sessão de brainstorming]`.
> - Objetivo: Criar um resumo estruturado de forma limpa para que os participantes entendam rapidamente o que foi discutido e executem suas tarefas (Action Items) sem confusão.
>
> **Tarefa (Task):**
> 1. Leia a `[Transcrição da Reunião]` abaixo e resuma de acordo com a seguinte estrutura:
>   - 📌 Tópico Principal (Main Topic)
>   - 🎯 Decisões Principais (Key Decisions)
>   - 🚨 Assuntos Pendentes (Pending Issues)
>   - ✅ Itens de Ação (Action Items: especificar responsável, prazo e tarefa)
> 2. Remova completamente saudações, conversas desnecessárias e conteúdos duplicados.
> 3. Mantenha um tom e estilo de negócios (linguagem escrita, formal e clara).
>
> **Restrições (Constraints):**
> - O formato de saída deve ser em forma de lista usando símbolos Markdown (-, *, crases, etc.) e emojis.
> - Nunca use tabelas (Tables) em Markdown.
> - Se o responsável por um item de ação não estiver claro, marque como '[A Confirmar]'.
>
> **Aviso (Warning):**
> - Nunca invente informações que não estejam na transcrição. (Evite alucinações)
>
> **Entrada (Input):**
> - Transcrição da Reunião: `[Cole o texto da transcrição copiado aqui]`

---



## 💡 Comentário do Autor (Insight)

O núcleo deste prompt é a **'extração de itens de ação'** e a **'supressão de alucinações (Hallucination)'**. 
O verdadeiro propósito de escrever uma ata de reunião não é 'registrar o que foi dito', mas sim 'esclarecer o que fazer a seguir'. 
Na prática, às vezes a IA inventa cronogramas plausíveis que não estão na reunião. Para evitar isso, incluímos uma restrição "nunca invente informações que não estejam na transcrição" e uma instrução defensiva "se o responsável não estiver claro, marque como [A Confirmar]". Tente jogar o texto extraído por ferramentas de STT como o Whisper neste prompt com Claude 3.5 Sonnet ou GPT-4o. O trabalho de refinar o texto que levaria 30 minutos é reduzido para 1 minuto. Use o tempo economizado para tomar mais uma xícara de café.

---



## 🙋 Perguntas Frequentes (FAQ)

- **P: Posso inserir a transcrição inteira de uma reunião de 1 hora?**
  - R: Sim, os modelos mais recentes (Claude 3.5 Sonnet, GPT-4o, etc.) têm excelente capacidade de compreensão de contexto e podem lidar facilmente com o volume de texto de 1 hora. No entanto, se você atingir o limite de tokens, divida a entrada pela metade.
- **P: Funciona na versão gratuita do ChatGPT?**
  - R: É possível, mas a capacidade de entender o contexto e seguir instruções precisas pode ser um pouco menor em modelos gratuitos (como GPT-3.5). Recomendamos o uso dos modelos mais recentes, sempre que possível.

---

## 🧬 Anatomia do Prompt (Why it works?)

1. **Atribuição de Função (Role):** Através da persona de um PM com 10 anos de experiência, forçamos um tom e estilo que não apenas encurta o texto, mas 'esclarece as instruções de trabalho'.
2. **Estruturação da Tarefa (Task):** Dividimos o formato de saída em tópicos, decisões, assuntos pendentes e itens de ação, evitando que a IA responda em um formato inadequado.
3. **Restrições (Constraints):** Bloqueamos o uso de tabelas em Markdown, que prejudicam a legibilidade em dispositivos móveis, e forçamos o uso de formato de lista com emojis.

---

## 📊 Prova: Antes e Depois (Before & After)

### ❌ Antes (Input)

```text
Gerente Kim: Ah, sim, estão me ouvindo? Nós nos reunimos hoje para a campanha de marketing deste trimestre. Sr. Park, como está a preparação do plano A e do plano B?
Sr. Park: Sim, o plano A parece que vai exceder um pouco o orçamento, então acho que teremos que deixá-lo em espera, parece que teremos que seguir com o plano B.
Sr. Choi: Com licença, se seguirmos com o plano B, eu farei a lista de influenciadores para contato até esta sexta-feira.
Gerente Kim: Ok, então fixamos o plano B, e o Sr. Park refaz o orçamento e me apresenta até a próxima terça-feira. E o design da landing page... ah, isso ainda não foi discutido com a equipe de design, certo?
Sr. Park: Sim, isso ainda não foi feito.
```

### ✅ Depois (Result)

```text
📌 Tópico Principal
- Discussão do plano de campanha de marketing do 3º trimestre

🎯 Decisões Principais
- Plano A suspenso devido a problemas de estouro de orçamento, Plano B aprovado como decisão final

🚨 Assuntos Pendentes
- Planejamento do design da landing page (necessita de discussão com a equipe de design)

✅ Itens de Ação
- 👨‍💼 Sr. Park: Refazer e apresentar o orçamento com base no Plano B (Prazo: próxima terça-feira)
- 🧑‍💻 Sr. Choi: Fazer a lista de influenciadores relacionados ao Plano B (Prazo: esta sexta-feira)
- ❓ [A Confirmar]: Responsável pela discussão da landing page com a equipe de design a ser definido
```

---

## 🎯 Conclusão

Não desperdice sua energia organizando atas de reuniões complexas. 
Deixe a organização do texto bagunçado para a IA e concentre-se em executar os itens de ação decididos. 
Agora, saia do trabalho no horário! 🍷
