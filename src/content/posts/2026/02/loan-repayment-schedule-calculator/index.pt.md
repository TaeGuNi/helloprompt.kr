---
layout: /src/layouts/Layout.astro
title: "Cronograma de Reembolso de Empréstimo: Principal e Juros Iguais vs Principal Igual"
author: "Jay"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automação de Trabalho"
description: "Crie a sua própria calculadora de juros de empréstimo no Excel em minutos, sem depender de simuladores de sites bancários."
tags: ["Excel", "JurosEmpréstimo", "FunçãoFinanceira", "PMT"]
---

## 📝 Cronograma de Amortização de Empréstimo: Tabela Price vs SAC no Excel

- **🎯 Recomendado para:** Titulares de empréstimos, mutuários de financiamentos e analistas financeiros
- **⏱️ Tempo necessário:** 30 minutos → 1 minuto
- **🤖 Modelo recomendado:** Qualquer IA de inferência (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Você paga R$ 1.000 de parcela todos os meses... mas sabe exatamente quanto disso realmente quita a sua dívida e quanto vai direto para o bolso do banco?"_

No mundo dos financiamentos, existem basicamente dois métodos de amortização: a **Tabela Price (Parcelas Fixas)**, onde o valor pago mensalmente nunca muda, e o **SAC (Sistema de Amortização Constante)**, onde o valor da parcela diminui ao longo do tempo. Mas qual deles é o mais vantajoso para o seu bolso? Criar o seu próprio cronograma de amortização utilizando as funções financeiras nativas do Excel (`PGTO`, `IPGTO`, `PPGTO` — que equivalem a `PMT`, `IPMT` e `PPMT` em inglês) permite que você visualize a diferença total de juros pagos em questão de segundos, sem depender de simulações opacas das instituições financeiras.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Calcule automaticamente o valor exato da parcela mensal (Principal + Juros) utilizando a função `PGTO` (`PMT`).
2. Separe o valor destinado aos Juros da Amortização real do Principal a cada mês com as funções `IPGTO` (`IPMT`) e `PPGTO` (`PPMT`).
3. Gere um cronograma completo e detalhado que mostra a evolução do seu saldo devedor mês a mês (ex.: do 1º ao 360º mês).

---

## 🚀 A Solução: "Calculadora Automática de Empréstimos"

### 🥉 Basic Version (Versão Básica)

Utilize esta versão quando precisar apenas de uma resposta rápida ou da fórmula direta para o seu problema.

> **Papel (Role):** Você é um `[Especialista Financeiro em Excel]`.
>
> **Tarefa (Task):** Crie um modelo de calculadora de juros de empréstimo diretamente no Excel, explicando o funcionamento das funções necessárias para que eu não dependa dos simuladores de sites bancários.

### 🥇 Pro Version (Versão Especialista)

Utilize esta versão quando precisar de um cronograma detalhado, preciso e estruturado, pronto para ser arrastado pelas linhas da sua planilha.

> **Papel (Role):** Você é um `[Especialista Financeiro em Excel e Matemática Financeira]`.
>
> **Contexto (Context):** Quero montar um cronograma de amortização de empréstimo utilizando o método da **Tabela Price (Parcelas Fixas / Principal e Juros Iguais)** no Excel.
>
> - **Valor do Empréstimo:** R$ 100.000,00 (Célula B1)
> - **Taxa de Juros Anual:** 4,5% (Célula B2)
> - **Prazo de Pagamento:** 10 Anos ou 120 Meses (Célula B3)
>
> **Tarefa (Task):**
>
> 1. Forneça a **fórmula exata da função `PGTO` (`PMT`)** para encontrar o valor da parcela mensal total (Principal + Juros).
> 2. Forneça as fórmulas para calcular a parcela de **Juros (`IPGTO` / `IPMT`)** e a parcela de **Amortização do Principal (`PPGTO` / `PPMT`)** para uma rodada específica _N_ (ex.: 1ª parcela, 2ª parcela, etc.).
> 3. Entregue as fórmulas já com o trancamento correto de células (referência absoluta com `$`), de forma que eu possa simplesmente arrastar para baixo, da linha 1 até a linha 120.
>
> **Restrições (Constraints):**
>
> - O resultado deve ser retornado em formato de blocos de código bem explicados.
> - Não se esqueça de dividir a taxa de juros anual por 12, pois o cálculo das parcelas é mensal.
>
> **Aviso (Warning):**
>
> - Se você não tiver certeza sobre o uso das funções em português (`PGTO`) versus inglês (`PMT`), mostre ambas as opções.

---

## 💡 Comentário do Autor (Insight)

A maior vantagem de utilizar a IA para criar planilhas financeiras é a eliminação da necessidade de decorar a sintaxe de funções complexas, como `IPGTO` e `PPGTO`. O erro mais comum que as pessoas cometem ao tentar fazer isso sozinhas é esquecer de **converter a taxa de juros anual em mensal** (dividindo-a por 12) ou deixar de **trancar as células com `$`**. 

Ao fornecer essas restrições preventivas diretamente no prompt, a IA entrega uma fórmula absolutamente "à prova de falhas". Você só precisa copiar, colar e arrastar para baixo. Isso transcende o mero uso do Excel; é sobre obter **verdadeiro empoderamento financeiro**!

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: O Excel no meu computador está em inglês. As fórmulas vão funcionar normalmente?**
  - A: O prompt foi estrategicamente desenhado para considerar esse cenário. Se o seu Excel estiver em inglês, a IA fornecerá as funções equivalentes corretas, que são `PMT`, `IPMT` e `PPMT`.

- **Q: Posso utilizar esse prompt para simular um financiamento imobiliário na modalidade SAC?**
  - A: Com certeza! Basta alterar o **Contexto** do prompt, solicitando o cálculo para o "Sistema de Amortização Constante (SAC)". A IA ajustará perfeitamente a lógica matemática do cronograma, já que no SAC a amortização é um valor fixo e os juros variam com base no saldo devedor atualizado.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Restrição de Referência Absoluta (`$`):** Um detalhe crucial que economiza horas de frustração. Pedir explicitamente para a IA aplicar o cifrão (`$`) garante que a fórmula funcione em escala ao ser arrastada, evitando erros catastróficos de referência nas linhas subsequentes.
2. **Prevenção de Erro Matemático:** A instrução *"dividir a taxa de juros anual por 12"* impede que a IA cometa a falha mais amadora em cálculos de empréstimos: a perigosa mistura de prazos mensais com taxas anuais.

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

_(Resultado aproximado: R$ 1.036,38 — O valor fixo e imutável que você pagará todos os meses)_

**2. Qual é o valor dos Juros? (Exemplo da linha 5, assumindo que seja a 1ª parcela)**

```plaintext
=IPGTO($B$2/12; A5; $B$3*12; -$B$1)
```

**3. Qual é o valor real da Amortização do Principal?**

```plaintext
=PPGTO($B$2/12; A5; $B$3*12; -$B$1)
```

> **💡 Análise Rápida:**
> No início do empréstimo, o valor retornado pela função `IPGTO` (Juros) é extremamente alto, enquanto o `PPGTO` (Principal) é baixo. Ao arrastar as fórmulas até a última parcela, você verá, de forma transparente, a porção do principal aumentar enquanto os juros despencam até zerar.

---

## 🎯 Conclusão

Ver o custo total e acumulado dos juros ganhando forma visualmente na sua tela do Excel pode ser assustador no começo, mas é o primeiro e mais importante passo para retomar o controle absoluto das suas finanças. Desenhar o seu próprio mapa de amortização liberta você das "caixas pretas" oferecidas pelos bancos.

Agora, feche essa planilha com a sensação de dever cumprido e vá aproveitar o seu dia! 🍷
