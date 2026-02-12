---
title: "Refatorar Código Sujo para Código Limpo em 1 Segundo"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt que transforma código espaguete complexo em código limpo fácil de ler e manter."
tags: ["Refatoração", "Código Limpo", "Manutenção", "Produtividade Dev"]
---

# 📝 Refatorar Código Sujo para Código Limpo em 1 Segundo

**🎯 Recomendado para:** Todos
**⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Eu nem consigo reconhecer o código que escrevi... Como desenrolo esse espaguete?"_

Todos nós tivemos a experiência de escrever nomes de variáveis bagunçados porque estávamos com pressa, ou ter uma única função excedendo 100 linhas.
E se houvesse um secretário que refatorasse o código que você tem vergonha de mostrar aos colegas em **padrões de 'Código Limpo'**?
Com apenas este prompt, você pode capturar legibilidade, desempenho e manutenibilidade de uma só vez.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Mudar intuitivamente nomes de variáveis/funções
2. Remover código duplicado e separar funções
3. Aplicar sintaxe recente e otimizar desempenho

---

## 🚀 A Solução: "Refatorador de Código Limpo"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um Engenheiro de Software Sênior com 20 anos de experiência e um especialista em 'Código Limpo'.
**Solicitação:** Transforme código espaguete complexo em código limpo fácil de ler e manter.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um Engenheiro de Software Sênior com 20 anos de experiência e um especialista em 'Código Limpo'.
>
> **Contexto:** O código que escrevi funciona, mas tem baixa legibilidade e é difícil de manter. Nomes de variáveis não são claros e há muita lógica duplicada.
>
> **Tarefa:**
> Refatore o código fornecido abaixo de acordo com os seguintes critérios:
>
> 1. **Nomenclatura:** Mude nomes de variáveis e funções para que sua intenção seja claramente conhecida.
> 2. **Separação de Funções:** Quebre funções em pedaços menores para que uma função faça apenas uma coisa (SRP).
> 3. **Remover Duplicatas:** Extraia lógica repetida em funções ou utilitários separados.
> 4. **Comentários:** Adicione comentários apenas às partes onde a explicação é necessária sobre 'Por que' o código foi escrito dessa maneira.
> 5. **Sintaxe Moderna:** Aplique a sintaxe moderna mais recente da linguagem.
>
> **Código:**

> [Cole o código para refatorar aqui]

> **Restrições:**
>
> - Nunca mude a lógica de negócios (comportamento) do código existente.
> - Resuma as principais mudanças antes e depois da refatoração em uma lista.
> - Mostre a saída dividida em um bloco de código e um bloco de explicação.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

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
 * Calcula o valor total do carrinho.
 * Aplica um desconto de 10% para itens acima de 100 won.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((total, item) => {
    const finalPrice =
      item.price > DISCOUNT_THRESHOLD ? item.price * DISCOUNT_RATE : item.price;
    return total + finalPrice;
  }, 0);
}
```

_Mudanças: `calc` -> `calculateTotalPrice`, `d` -> `items`, números mágicos para constantes, usado `reduce`._

---

## 🎯 Conclusão

Não procrastine dizendo "Vou consertar depois" mais.
Transforme código fedorento em código perfumado em 3 segundos com este prompt e vá para casa! 🍷
