---
layout: /src/layouts/Layout.astro
title: "고객 문의 자동 분류 및 우선순위 지정 (CS Automation)"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "업무 자동화"
description: "Um prompt de classificação de CS que analisa as emoções dos clientes para identificar e priorizar o atendimento aos 'clientes irritados'."
tags: ["CS", "고객경험", "자동화", "감정분석"]
---

# 📝 Não faça seus clientes irritados esperarem

- **🎯 Público-alvo:** Gerentes de CS, Operadores de E-commerce, Analistas de Customer Experience (CX)
- **⏱️ Tempo economizado:** de 1 hora → para 1 minuto
- **🤖 Modelo recomendado:** GPT-3.5 Turbo (Rápido), GPT-4o (Preciso)

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐☆
- 🚀 **Utilidade:** ⭐⭐⭐☆☆

> _"Velocidade é a melhor forma de empatia. Proteja a 'golden hour' do cliente frustrado."_

Você já se sentiu sobrecarregado diante de um painel com centenas de tickets de suporte acumulados? Provavelmente, ao respondê-los em ordem cronológica, você já acabou perdendo aquela reclamação urgente sobre "extravio de entrega" ou "erro de cobrança duplicada", fazendo a insatisfação do cliente explodir. Agora, use a IA para filtrar primeiro o estado emocional do cliente e a urgência da solicitação. Transforme a priorização do seu CS em uma verdadeira "triagem de pronto-socorro".

---

## ⚡️ Resumo em 3 passos (TL;DR) {#tl-dr}

1. **Coleta de Dados:** Reúna o histórico de solicitações dos clientes e envie para a IA.
2. **Triagem com IA:** A IA analisa e classifica o "score emocional" e a "categoria" de cada ticket.
3. **Atendimento Prioritário:** Trate rapidamente as solicitações com alto score emocional (raiva/frustração) e categorias urgentes (pagamentos/entregas).

---

## 🚀 A Solução: "Prompt de Triagem de Emergência para CS"

### 🥉 Versão Basic (Básica)

Use quando precisar apenas de uma categorização rápida.

> **Função (Role):** Você é um `[Líder de Equipe de CS]` rápido e preciso.
> **Tarefa (Task):** Leia as solicitações abaixo, determine a `[Categoria]` e o `[Nível de Urgência (Alto/Médio/Baixo)]` e forneça a resposta.
> **Entrada (Input):** `[Cole/digite aqui o conteúdo da solicitação do cliente]`

<br>

### 🥇 Versão Pro (Especialista)

Ideal para combinar a análise emocional do cliente, gerenciar o risco de churn (cancelamento) e definir prioridades claras. Essa estrutura é perfeita para integração com pipelines de automação (Zapier, Make, etc.).

> **Função (Role):** Você é um `[Especialista Sênior em Customer Experience (CX)]` com raciocínio analítico afiado e profunda capacidade de empatia.
>
> **Contexto (Context):**
>
> - **Cenário:** Precisamos lidar com um volume avassalador de tickets de suporte com uma equipe de CS reduzida, tornando urgente a definição clara de prioridades.
> - **Objetivo:** O objetivo principal é detectar clientes insatisfeitos (Risco de Churn) como prioridade máxima e atendê-los para evitar a perda do cliente.
>
> **Tarefa (Task):**
>
> Analise a `[Lista de Solicitações]` fornecida e execute as três tarefas a seguir:
>
> 1. **Score Emocional (Sentiment Score):** Avalie o estado emocional de cada solicitação numa escala de 1 a 5. (1: Muito satisfeito/Feliz ~ 5: Muito irritado/Frustrado).
> 2. **Classificação da Categoria:** Atribua uma das seguintes categorias: Entrega / Reembolso / Defeito no Produto / Dúvida Simples / Outros.
> 3. **Prioridade e Justificativa:** Combinando o score emocional e a categoria, defina a prioridade de atendimento (High/Medium/Low) e explique o motivo em uma única frase clara.
>
> **Restrições (Constraints):**
>
> - **Formato de Saída:** Produza os resultados estritamente em formato de Array JSON. (Como será usado para integração de sistemas, não adicione absolutamente nenhuma explicação extra).
> - **Exemplo de Estrutura JSON:** `[{"id": 1, "sentiment": 5, "category": "Reembolso", "priority": "High", "reason": "Forte protesto sobre atraso no reembolso com menção a medidas legais"}]`
>
> **Dados de Entrada (Input):**
> `[Cole toda a lista de solicitações a serem analisadas aqui]`

---

## 💡 Comentário do Autor (Insight) {#insight}

O verdadeiro valor deste prompt não está na simples resposta em texto, mas sim na sua capacidade de brilhar na construção de **'fluxos de automação'**. Ao restringir o formato de saída a JSON, ele se integra perfeitamente com ferramentas de automação como Zapier ou Make. Por exemplo, tente configurar a seguinte regra: **"Sempre que a IA detectar um ticket com Score Emocional 5 (Muito irritado), envie imediatamente uma mensagem de [Alerta Urgente] para o canal do Slack da equipe de CS"**. Isso garante que você tenha tempo hábil para agir antes que a insatisfação do cliente se espalhe para as redes sociais ou fóruns online. Depois que implementei essa abordagem, consegui reduzir drasticamente os casos que poderiam ter se transformado em grandes crises de reputação.

---

## 🙋 Perguntas Frequentes (FAQ) {#faq}

- **P: Quantos tickets posso analisar de uma só vez?**
  - R: Utilizando o GPT-4o, você pode processar facilmente de 50 a 100 tickets por vez. No entanto, considerando os limites de tokens, recomendo não inserir quantidades enormes (milhares) de uma só vez. A melhor prática é segmentar o processamento em lotes menores, como de hora em hora ou por turnos (manhã/tarde).

- **P: A IA consegue entender sarcasmo ou ironia por parte dos clientes?**
  - R: Sim! Modelos avançados como o GPT-4o são excelentes em captar o contexto de expressões sarcásticas como "Nossa, chegou super rápido, hein? sqn". No entanto, se o seu setor utilizar muitas gírias ou jargões específicos, adicionar uma nota na seção de `Contexto (Context)` dizendo algo como "No nosso nicho, a expressão 'X' significa um erro gravíssimo" aumentará significativamente a precisão da ferramenta.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1.  **Quantificação das Emoções (Sentiment Scoring):** Transformamos o "humor" vago do cliente em um dado quantitativo (escala de 1 a 5), possibilitando a filtragem e classificação mecânica.
2.  **Restrições Claras (Constraints):** Forçamos a IA a não gerar nenhuma outra palavra além do formato JSON. Isso previne erros de parsing no momento da integração com APIs e ferramentas No-Code.
3.  **Exigência de Justificativa (Reasoning):** Pedimos que a IA explique em uma frase o motivo de classificar um ticket como "High". Isso traz 'previsibilidade', permitindo que o operador de CS entenda a gravidade da situação antes mesmo de abrir a mensagem completa.

---

## 📊 Prova: Antes e Depois (Before & After)

### ❌ Antes (Método tradicional: Ordem cronológica)

```text
[Ticket 1 - 09:00] Olá. É possível trocar o tamanho?
[Ticket 2 - 09:02] Quando meu pedido será entregue?
[Ticket 3 - 09:05] Olha aqui, cancelei o pagamento ontem e vocês cobraram de novo? Tão de brincadeira? Vou processar vocês.
[Ticket 4 - 09:10] Esqueci minha senha.
```

_Problema: O ticket super urgente e explosivo das 09:05 fica parado na fila, atrasado por trás de dúvidas simples._

### ✅ Depois (Com a Triagem da IA)

```json
[
  {
    "id": 3,
    "sentiment": 5,
    "category": "Reembolso",
    "priority": "High",
    "reason": "Cobrança duplicada causando extrema irritação e menção a processo legal"
  },
  {
    "id": 2,
    "sentiment": 3,
    "category": "Entrega",
    "priority": "Medium",
    "reason": "Dúvida geral sobre o cronograma de entrega"
  },
  {
    "id": 1,
    "sentiment": 2,
    "category": "Outros",
    "priority": "Low",
    "reason": "Dúvida simples sobre troca de tamanho"
  },
  {
    "id": 4,
    "sentiment": 2,
    "category": "Outros",
    "priority": "Low",
    "reason": "Dúvida simples de recuperação de conta"
  }
]
```

_Resultado: A IA reconhece instantaneamente a gravidade do `Ticket 3` e o puxa para o topo da lista de atendimento prioritário (High)._

---

## 🎯 Conclusão

É impossível tratar um grande volume de tickets na mesma velocidade. O que realmente importa é ter um sistema que decida **'quem salvar primeiro'**.

Copie este prompt hoje mesmo e aplique no seu canal de CS. Você reduzirá o desgaste emocional desnecessário da equipe e poderá focar sua energia nas verdadeiras situações de crise. Torço por um fim de expediente tranquilo para você! 🍷
