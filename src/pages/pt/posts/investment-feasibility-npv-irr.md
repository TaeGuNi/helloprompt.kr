---
layout: /src/layouts/Layout.astro
title: "Análise de Viabilidade de Investimento: Excel de Cálculo Automático de VPL e TIR"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automação de Trabalho"
description: "Devo fazer este negócio? Calcule facilmente Valor Presente Líquido (VPL) e Taxa Interna de Retorno (TIR), indicadores-chave de decisão de investimento, com Excel."
tags: ["Excel", "AnáliseInvestimento", "VPL", "TIR"]
---

# 📝 Análise de Viabilidade de Investimento: Excel de Cálculo Automático de VPL e TIR

**🎯 Recomendado para:** Todos
**⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"É lucrativo investir 100 milhões agora e ganhar 200 milhões em 5 anos? Depende da taxa de juros."_

Você não deve olhar apenas para o valor do lucro. Porque o valor do dinheiro muda com o tempo. **VPL (Valor Presente Líquido)** e **TIR (Taxa Interna de Retorno)**, as regras de ouro das decisões de investimento corporativo. Conceitos são difíceis, mas com funções do Excel, até estudantes do ensino fundamental podem calcular. IA cria fórmulas de modelo perfeitas.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Entenda conceitos de VPL e TIR baseados em dados de Fluxo de Caixa
2. Crie fórmulas de cálculo automático utilizando funções do Excel `NPV` (VPL), `IRR` (TIR)
3. Sugira critérios de julgamento de investimento de acordo com mudanças na taxa de desconto (taxa de juros)

---

## 🚀 A Solução: "Revisor de Investimentos IA"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

- **Papel:** Você é um `[Especialista em Modelagem Financeira]`.
  **Solicitação:** Devo fazer este negócio? Calcule facilmente Valor Presente Líquido (VPL) e Taxa Interna de Retorno (TIR), indicadores-chave de decisão de investimento, com Excel.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e use-o.

- **Papel:** Você é um `[Especialista em Modelagem Financeira]`.
  > **Contexto:** Quero analisar viabilidade de investimento de um novo projeto com Excel.
  >
  > - **Investimento Inicial (Ano 0):** -100 Milhões KRW (Célula B2)
  > - **Receita Esperada (Ano 1~5):** 30 Milhões KRW anualmente (Células B3~B7)
  > - **Taxa de Desconto (Retorno Exigido):** 10% (Célula C2)
  >
  > **Tarefa:**
  >
  > 1. Diga-me **fórmula do Excel para encontrar VPL (Valor Presente Líquido)** deste projeto.
  > 2. Diga-me **fórmula do Excel para encontrar TIR (Taxa Interna de Retorno)**.
  > 3. Explique critérios de julgamento sobre investir ou não quando resultados do cálculo são **VPL > 0** ou **TIR > Taxa de Desconto**.
  >
  > **Restrições:**
  >
  > - Escreva fórmula notando que função `NPV` (VPL) do Excel deve ser inserida a partir do Ano 1. (Processar investimento inicial separadamente)

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

```text
Diga-me como encontrar VPL TIR no Excel.
```

### ✅ Depois (Resultado)

```text
### 📊 Fórmulas de Excel para Análise de Investimento

**1. Encontrar VPL (Valor Presente Líquido)**
- **Fórmula:** `=B2 + NPV(C2, B3:B7)`
- **Interpretação:** Apenas adicione investimento inicial (-100M), e desconte apenas receitas do Ano 1 com função VPL para ser preciso.
- **Julgamento:** Se resultado for **maior que 0**, invista! (Negócio lucrativo)

**2. Encontrar TIR (Taxa Interna de Retorno)**
- **Fórmula:** `=IRR(B2:B7)`
- **Interpretação:** Apenas pegue todo o intervalo do investimento inicial até a última receita.
- **Julgamento:** Se resultado (ex: 15%) for **maior que taxa de desconto (10%)**, invista!

**💡 Resumo:**
VPL mostra valor (Quanto ganhou?), TIR mostra taxa de retorno (Qual % ganhou?). Melhor se ambos satisfizerem.
```

---

## 🎯 Conclusão

Investimento não é palpite, mas ciência. Previna erros multibilionários com duas linhas de fórmulas do Excel.

Agora saia do trabalho! 🍷
