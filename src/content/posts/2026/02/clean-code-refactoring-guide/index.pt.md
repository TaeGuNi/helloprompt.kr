---
layout: /src/layouts/Layout.astro
title: " \"Refatorar Código Sujo para Código Limpo em 1 Segundo\""
author: "Jay"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: " \"Um prompt que transforma códigos espaguete complexos em códigos limpos, fáceis de ler e manter.\""
tags: ["Refatoração", "Código Limpo", "Manutenção", "Produtividade Dev"]
---

# 📝 Refatorar Código Sujo para Código Limpo em 1 Segundo

- **🎯 Recomendado para:** Desenvolvedores, Engenheiros de Software, Tech Leads
- **⏱️ Tempo necessário:** 5 minutos → Reduzido para 1 segundo
- **🤖 Modelo recomendado:** Todos os modelos de IA conversacional (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Eu nem consigo reconhecer o código que escrevi ontem... Como eu desembaraço esse espaguete sem quebrar tudo?"_

Todos nós já passamos por isso: escrever nomes de variáveis de forma apressada para cumprir prazos ou criar funções monolíticas que ultrapassam 100 linhas.
E se você tivesse um assistente sênior que refatorasse aquele código que você tem vergonha de mostrar na revisão de código (Code Review), transformando-o em algo digno de elogios e seguindo estritamente os princípios do **'Clean Code'**?
Com apenas este prompt, você garante legibilidade, performance e facilidade de manutenção de uma só vez.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. **Nomenclatura Intuitiva:** Renomeia variáveis e funções para revelar claramente suas intenções.
2. **Separação de Responsabilidades:** Remove duplicações de código e divide funções complexas.
3. **Modernização:** Aplica as sintaxes mais recentes da linguagem e otimiza a performance geral.

---

## 🚀 A Solução: "Refatorador de Clean Code"

### 🥉 Versão Básica (Basic Version)

Use esta versão quando precisar apenas de um resultado rápido e direto.

> **Papel:** Você é um Engenheiro de Software Sênior com 20 anos de experiência e especialista em 'Clean Code'.
> **Solicitação:** Transforme o código espaguete a seguir em um código limpo, de fácil leitura e manutenção.


### 🥇 Versão Pro (Pro Version)

Use esta versão quando precisar de um refinamento profundo e controle detalhado sobre a refatoração.

> **Papel (Role):** Você é um Engenheiro de Software Sênior com 20 anos de experiência, especialista em arquitetura de software e princípios de 'Clean Code' (SOLID, DRY, KISS).
>
> **Situação (Context):**
>
> - Fundo: O código que escrevi funciona perfeitamente, mas a legibilidade é muito baixa e a manutenção se tornou um pesadelo. Os nomes das variáveis são confusos e há muita lógica de negócios duplicada.
> - Objetivo: Refatorar o código para que qualquer desenvolvedor da equipe possa entendê-lo instantaneamente, mantendo exatamente o mesmo comportamento original.
>
> **Tarefa (Task):**
>
> Refatore o código fornecido abaixo seguindo rigorosamente estes critérios:
>
> 1. **Nomenclatura:** Altere nomes de variáveis e funções para que suas intenções fiquem cristalinas. Evite abreviações obscuras.
> 2. **Separação de Funções (SRP):** Quebre funções grandes em pedaços menores, garantindo que cada função faça apenas uma coisa.
> 3. **Remoção de Duplicações:** Extraia lógicas repetidas para funções utilitárias isoladas.
> 4. **Comentários Estratégicos:** Adicione comentários _apenas_ onde for necessário explicar o 'Porquê' de uma decisão arquitetural. O 'O quê' deve ser explicado pelo próprio código.
> 5. **Sintaxe Moderna:** Aplique as práticas e sintaxes modernas mais recentes da linguagem utilizada.
>
> **[Insira o seu código sujo aqui]**
>
> **Restrições (Constraints):**
>
> - NUNCA altere a lógica de negócios ou o comportamento final do código existente.
> - Retorne a resposta utilizando blocos de código Markdown.
> - Ao final, crie uma lista resumindo as principais mudanças feitas (Antes vs. Depois).
>
> **Aviso (Warning):**
>
> - Não adicione bibliotecas externas a menos que já estejam sendo utilizadas no código original.

---

## 💡 Comentário do Autor (Insight)

Esta técnica de refatoração com IA é um verdadeiro "salva-vidas" antes de abrir um Pull Request (PR). Muitos desenvolvedores têm receio de usar IA para refatorar por medo de que a lógica de negócios seja quebrada silenciosamente. É por isso que a instrução `"NUNCA altere a lógica de negócios"` e o pedido por um resumo das mudanças são tão cruciais na Versão Pro.

**Dica de ouro:** Ao colar o código, inclua também os testes unitários da função (se existirem). A IA usará os testes para garantir que a refatoração não quebrou nada, e se não existirem testes, você pode até pedir para a IA criá-los na mesma interação!

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: A IA pode quebrar o meu código em produção?**
  - A: Sempre há um pequeno risco. A IA é excelente para sugerir melhorias estruturais, mas você **deve** rodar seus testes unitários após a refatoração. Nunca copie, cole e envie direto para produção sem testar localmente e validar.

- **Q: Posso refatorar arquivos inteiros de uma só vez?**
  - A: Depende do tamanho do arquivo e do limite de tokens da IA (Context Window). O ideal é refatorar função por função ou módulos pequenos (até 300-500 linhas) para garantir que a IA preste atenção aos detalhes e não "esqueça" partes vitais do código.

- **Q: Funciona com qualquer linguagem de programação?**
  - A: Sim! Este prompt é agnóstico de linguagem. Seja JavaScript, Python, Go, Java ou Rust, a IA aplicará as convenções específicas e sintaxes modernas da linguagem que identificar no código fornecido.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1.  **Definição Clara de Especialidade (Role):** Exigir 20 anos de experiência e domínio em Clean Code eleva o padrão das sugestões da IA, evitando refatorações amadoras ou ingênuas.
2.  **Diretrizes Específicas (Task):** Em vez de um simples "melhore isso", detalhamos os 5 pilares fundamentais da refatoração (Nomenclatura, SRP, DRY, Comentários, Sintaxe).
3.  **Segurança (Constraints & Warning):** As travas de segurança garantem que a IA não invente requisitos (Hallucination) nem introduza dependências desnecessárias, focando estritamente na estrutura do código.

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

```javascript
function calc(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i].price > 100) {
      t += d[i].price * 0.9;
    } else {
      t += d[i].price;
    }
  }
  return t;
}
```

### ✅ Depois (Resultado)

```javascript
/**
 * Calcula o valor total do carrinho de compras.
 * Aplica um desconto de 10% para itens com valor acima do limite.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((total, item) => {
    const isEligibleForDiscount = item.price > DISCOUNT_THRESHOLD;
    const finalPrice = isEligibleForDiscount
      ? item.price * DISCOUNT_RATE
      : item.price;

    return total + finalPrice;
  }, 0);
}
```

_Mudanças realizadas:_

- _Nome da função: `calc` → `calculateTotalPrice`_
- _Nome da variável: `d` → `items`_
- _Extração de "Magic Numbers" para constantes claras (`DISCOUNT_THRESHOLD`, `DISCOUNT_RATE`)._
- _Substituição do loop `for` imperativo pelo método declarativo `reduce`._
- _Extração da lógica condicional para a variável `isEligibleForDiscount` visando maior legibilidade._

---

## 🎯 Conclusão

Chega de procrastinar a dívida técnica com a famosa frase: "Vou arrumar isso depois".
Transforme aquele código que "cheira mal" (Code Smell) em um código elegante e perfumado em menos de 3 segundos com este prompt e vá para casa no horário! 🍷
