---
layout: /src/layouts/Layout.astro
title: " \"Cronograma de Reembolso de Empréstimo: Principal e Juros Iguais vs Principal Igual\""
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automação de Trabalho"
description: " \"Crie uma calculadora de juros de empréstimo diretamente no Excel, sem depender de simuladores bancários.\""
tags: ["Excel", "JurosEmpréstimo", "FunçãoFinanceira", "PMT"]
---

# 📝 Cronograma de Amortização de Empréstimo: Tabela Price vs SAC no Excel

- **🎯 Recomendado para:** Qualquer pessoa com um empréstimo, financiamento ou analistas financeiros
- **⏱️ Tempo necessário:** 30 minutos → 1 minuto
- **🤖 Modelo recomendado:** Qualquer IA conversacional (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Pagando parcelas de R$ 1.000 todo mês... você sabe exatamente quanto disso é para quitar a dívida e quanto é apenas juros indo para o banco?"_

Existem basicamente dois métodos de amortização de empréstimos: **Tabela Price (Parcelas Fixas)**, onde o valor pago mensalmente é sempre o mesmo, e **SAC (Sistema de Amortização Constante)**, onde a parcela diminui com o tempo. Qual deles é o mais vantajoso para você? Criar o seu próprio cronograma de amortização usando as funções financeiras do Excel (`PGTO`, `IPGTO`, `PPGTO` - equivalentes a `PMT`, `IPMT`, `PPMT`) permite visualizar a diferença total de juros em segundos.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Calcule automaticamente a parcela mensal (Principal + Juros) usando a função `PGTO` (`PMT`).
2. Separe o valor dos Juros e da Amortização do Principal a cada mês usando `IPGTO` (`IPMT`) e `PPGTO` (`PPMT`).
3. Gere um cronograma completo mostrando a evolução do saldo devedor mês a mês (ex: 1 a 360 meses).

---

## 🚀 A Solução: "Calculadora Automática de Empréstimos"

### 🥉 Basic Version (Versão Básica)

Use esta versão quando precisar apenas de uma resposta rápida ou da fórmula direta.

> **Papel:** Você é um `[Especialista Financeiro em Excel]`.
> **Tarefa:** Crie um modelo de calculadora de juros de empréstimo diretamente no Excel, explicando as funções necessárias para que eu não dependa de simuladores de sites bancários.


### 🥇 Pro Version (Versão Especialista)

Use esta versão quando precisar de um cronograma detalhado e preciso, pronto para ser arrastado nas planilhas.

> **Papel (Role):** Você é um `[Especialista Financeiro em Excel e Matemática Financeira]`.
>
> **Contexto (Context):** Quero montar um cronograma de amortização de empréstimo usando o método da **Tabela Price (Parcelas Fixas / Principal e Juros Iguais)** no Excel.
>
> - **Valor do Empréstimo:** R$ 100.000,00 (Célula B1)
> - **Taxa de Juros Anual:** 4,5% (Célula B2)
> - **Prazo de Pagamento:** 10 Anos ou 120 Meses (Célula B3)
>
> **Tarefa (Task):**
>
> 1. Forneça a **fórmula exata da função `PGTO` (`PMT`)** para encontrar o valor da parcela mensal total (Principal + Juros).
> 2. Forneça as fórmulas para calcular a parcela de **Juros (`IPGTO` / `IPMT`)** e a parcela de **Amortização do Principal (`PPGTO` / `PPMT`)** para uma rodada específica _N_ (ex: 1ª parcela, 2ª parcela, etc.).
> 3. Entregue as fórmulas já com o trancamento correto de células (referência absoluta com `$`), de forma que eu possa simplesmente arrastar para baixo da linha 1 até a linha 120.
>
> **Restrições (Constraints):**
>
> - O resultado deve ser retornado em formato de blocos de código bem explicados.
> - Não se esqueça de dividir a taxa de juros anual por 12, pois o cálculo das parcelas é mensal.
>
> **Aviso (Warning):**
>
> - Se você não tiver certeza sobre o uso das funções em português (PGTO) versus inglês (PMT), mostre ambas as opções.

---

## 💡 Comentário do Autor (Insight)

A maior vantagem de usar IA para criar planilhas financeiras é não precisar decorar a sintaxe de funções complexas como `IPGTO` e `PPGTO`. O erro mais comum das pessoas ao tentar fazer isso sozinhas é esquecer de transformar a taxa de juros anual em mensal (dividindo por 12) ou esquecer de trancar as células com `$`. Ao fornecer essas restrições no prompt, a IA te entrega uma fórmula "à prova de falhas" que você só copia, cola e arrasta. Isso é empoderamento financeiro real!

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: O Excel no meu computador está em inglês. As fórmulas vão funcionar?**
  - A: O prompt foi desenhado para pedir as fórmulas considerando isso. Se o seu Excel estiver em inglês, as funções equivalentes que a IA vai te entregar serão `PMT`, `IPMT` e `PPMT`.

- **Q: Posso usar esse prompt para simular um financiamento imobiliário (SAC)?**
  - A: Sim! Basta alterar o **Contexto** do prompt pedindo pelo "Sistema de Amortização Constante (SAC)". A IA ajustará a lógica do cronograma perfeitamente, já que no SAC a amortização é fixa e os juros variam sobre o saldo devedor.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Restrição de Referência Absoluta (`$`):** Um detalhe crucial que salva muito tempo. Pedir explicitamente para a IA já aplicar o `$` garante que a fórmula funcione em escala ao ser arrastada, evitando erros de referência nas linhas seguintes.
2. **Prevenção de Erro Matemático:** A instrução "dividir a taxa de juros anual por 12" previne a IA de cometer a falha mais comum em cálculos de empréstimos (misturar prazos mensais com taxas anuais).

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

```text
Como calcular juros de empréstimo no Excel?
```

### ✅ Depois (Resultado)

**1. Parcela Mensal Total (Principal + Juros)**

```plaintext
=PGTO($B$2/12; $B$3*12; -$B$1)
```

_(Resultado aproximado: R$ 1.036,38 - O valor fixo que você pagará todos os meses)_

**2. Qual é o valor dos Juros? (Exemplo da linha 5, assumindo que seja a 1ª parcela)**

```plaintext
=IPGTO($B$2/12; A5; $B$3*12; -$B$1)
```

**3. Qual é o valor da Amortização do Principal?**

```plaintext
=PPGTO($B$2/12; A5; $B$3*12; -$B$1)
```

> **💡 Análise Rápida:**
No início do empréstimo, o valor retornado por `IPGTO` (Juros) é alto e `PPGTO` (Principal) é baixo. Ao arrastar as fórmulas até o fim, você verá a porção do principal aumentar enquanto os juros diminuem até zerar.

---

## 🎯 Conclusão

Ver o custo total dos juros ganhando forma visualmente no Excel pode assustar no começo, mas é o primeiro passo para retomar o controle das suas finanças. Desenhar o seu próprio mapa de amortização liberta você das "caixas pretas" dos bancos.

Agora, feche essa planilha e vá aproveitar seu dia! 🍷
