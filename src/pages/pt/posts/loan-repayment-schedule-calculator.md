---
layout: /src/layouts/Layout.astro
title: "Cronograma de Reembolso de Empréstimo: Principal e Juros Iguais vs Principal Igual"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automação de Trabalho"
description: "Modelo de calculadora de juros de empréstimo feito diretamente no Excel sem precisar entrar em sites bancários."
tags: ["Excel", "JurosEmpréstimo", "FunçãoFinanceira", "PMT"]
---

# 📝 Cronograma de Reembolso de Empréstimo: Principal e Juros Iguais vs Principal Igual

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos
> **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Pagando 1 milhão de won mensalmente, quanto é principal e quanto é juros?"_

Existem basicamente dois métodos de reembolso de empréstimo. **'Principal e Juros Iguais'** onde pagamento mensal é o mesmo, e **'Principal Igual'** onde diminui com o tempo. Qual é vantajoso para mim? Fazer cronograma de reembolso completo usando funções financeiras do Excel (`PMT`, `IPMT`, `PPMT`) mostra diferença total de juros num relance.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Auto-calcular pagamento mensal (Principal + Juros) com função `PMT` (PGTO)
2. Separar porção de juros e principal com funções `IPMT` (IPGTO) e `PPMT` (PPGTO)
3. Gerar cronograma mostrando mudança de saldo por rodada de reembolso (1~360 rodadas)

---

## 🚀 A Solução: "Auto Calculadora de Empréstimo"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

> **Papel:** Você é um `[Especialista em Excel Financeiro]`.
> **Solicitação:** Modelo de calculadora de juros de empréstimo feito diretamente no Excel sem precisar entrar em sites bancários.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e use-o.

> **Papel:** Você é um `[Especialista em Excel Financeiro]`.
>
> **Contexto:** Quero fazer cronograma de empréstimo do método de **Reembolso de Principal e Juros Iguais** no Excel.
>
> - **Valor do Empréstimo:** 100 Milhões KRW (B1)
> - **Taxa de Juros Anual:** 4,5% (B2)
> - **Período de Reembolso:** 10 Anos (120 Meses) (B3)
>
> **Tarefa:**
>
> 1. Diga-me **fórmula da função `PMT`** para encontrar pagamento mensal total (Principal + Juros).
> 2. Diga-me fórmulas para encontrar **Juros (`IPMT`)** e **Principal (`PPMT`)** saindo na N-ésima rodada (ex: 1ª rodada) respectivamente.
> 3. Dê fórmula aplicando referência absoluta ($) para que eu possa arrastar e preencher da 1ª à 120ª rodada.
>
> **Restrições:**
>
> - Não esqueça de dividir taxa de juros anual por 12 já que é cálculo mensal.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

```text
Como calcular juros de empréstimo no Excel?
```

### ✅ Depois (Resultado)

````text
### 🏦 Coleção de Fórmulas de Reembolso de Empréstimo Excel

**1. Pagamento Mensal (Total Principal + Juros)**
```text
=PMT($B$2/12, $B$3*12, -$B$1)
```
````

_Resultado: Aprox 1.036.384 KRW (Pague tanto mensalmente)_

**2. Quanto é juros? (Baseado na 1ª rodada)**

- Assumindo rodada (1, 2, 3...) está na Coluna A:

```text
=IPMT($B$2/12, A5, $B$3*12, -$B$1)
```

_(A5 é rodada atual. Arraste para baixo)_

**3. Quanto é principal?**

```text
=PPMT($B$2/12, A5, $B$3*12, -$B$1)
```

**💡 Análise:**
No estágio inicial `IPMT` (Juros) é grande e `PPMT` (Principal) é pequeno, mas porção de reembolso do principal aumenta com o tempo.

```

---

## 🎯 Conclusão

Verificar custo total de juros visualmente queima sua vontade de reembolsar empréstimo. Desenhe seu próprio mapa de reembolso com Excel.

Agora saia do trabalho! 🍷
```
