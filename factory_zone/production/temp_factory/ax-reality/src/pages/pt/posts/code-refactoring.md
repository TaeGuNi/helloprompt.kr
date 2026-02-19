---
layout: /src/layouts/Layout.astro
title: "Meu código é um lixo! Coach de Refatoração Clean Code"
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Programação/TI"
description: "Um prompt que atualiza códigos sujos que apenas funcionam para códigos limpos, 'fáceis de ler e manter'."
tags: ["Refatoração", "Clean Code", "Desenvolvedor", "Revisão de Código"]
---

# 📝 Meu código é um lixo! Coach de Refatoração Clean Code

- **🎯 Público-alvo:** Qualquer pessoa
- **⏱️ Tempo estimado:** 5 minutos
- **🤖 Modelo recomendado:** Todos os modelos de IA

- **📊 Dificuldade:** ⭐⭐☆☆☆
- **⚡️ Eficácia:** ⭐⭐⭐⭐⭐
- **🛠️ Utilidade:** ⭐⭐⭐⭐☆

_"Disse que ia arrumar depois e já se passou um ano. Agora tenho medo de mexer."_

Código espaguete (código emaranhado) é o inimigo dos desenvolvedores. Se a legibilidade for ruim, é difícil encontrar bugs e adicionar funcionalidades. Este prompt incorpora Robert C. Martin (autor de Clean Code) para lavar, polir e deixar seu código brilhando.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Remoção de código duplicado e separação de funções (Extract Method)
2. Melhoria de nomes de variáveis/funções pouco claros (Naming Convention)
3. Otimização de desempenho e aplicação de sintaxe moderna (Modern Syntax)

---

## 🚀 Solução: "Lavanderia Clean Code"

### 🥉 Basic Version (Versão Básica)

Use quando precisar apenas do resultado rapidamente.

> **Papel:** Você é um `[Evangelista de Clean Code e Arquiteto Chefe]`.
> **Solicitação:** Crie um prompt que atualize um código sujo que apenas funciona para um código limpo, 'fácil de ler e de manter'.

<br>

### 🥇 Pro Version (Versão Profissional)

Use quando precisar de qualidade detalhada.

Copie e use o conteúdo do **PROMPT** abaixo.

> **Papel (Role):** Você é um `[Evangelista de Clean Code e Arquiteto Chefe]`.
>
> **Contexto (Context):** Meu código funciona, mas está sujo e difícil de ler (Dirty Code). Refatore-o para que seja fácil de manter.
>
> **Tarefa (Task):**
>
> 1. **[Senso de Nomenclatura]**: Mude os nomes de variáveis e funções para serem intuitivos e significativos. (ex: `a` -> `userAge`)
> 2. **[Melhoria Estrutural]**: Divida funções muito longas por responsabilidade e combine lógicas duplicadas em uma só.
> 3. **[Modernize]**: Se possível, aplique a sintaxe mais recente da linguagem (ES6+, Python 3.10+, etc.).
> 4. **[Before & After]**: Compare o que mudou e como, e explique o motivo da mudança.
>
> **Restrições (Constraints):**
>
> - O funcionamento (funcionalidade) do código nunca deve mudar.
> - Adicione comentários (Comment) apenas onde for estritamente necessário. (Se o código explicar, remova o comentário)
>
> **Código alvo:**

> [Cole o código sujo(?) aqui]

---

## 🧬 Anatomia do Prompt (Why it works?)

Este prompt foi projetado para capturar exatamente a intenção da IA, combinando uma definição clara de persona com instruções específicas (Task). Ele induz um pensamento passo a passo (Chain of Thought) para obter respostas lógicas.

---

## 📊 Prova: Before & After (Antes e Depois)

A diferença entre um comando simples e um prompt otimizado é clara. Ao usar o prompt fornecido, você obtém respostas mais específicas e estruturadas, economizando tempo de re-prompting.

### ❌ Before (Entrada)

```python
def calc(x, y):
    if x > 19:
        print("성인")
        p = y * 0.9
        return p
    else:
        print("학생")
        return y
```

(O nome da função `calc` não diz o que está calculando, e `p` também não tem significado claro)

### ✅ After (Resultado do Prompt)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("성인입니다.")
        return price * DISCOUNT_RATE

    print("학생입니다.")
    return price
```

**[Pontos de Melhoria]**

1. **Mudança no nome da função**: `calc` -> `calculate_discounted_price` (Fica claro que é um cálculo de preço com desconto)
2. **Remoção de Magic Numbers**: Números como `19`, `0.9` foram declarados como constantes para dar significado.
3. **Remoção de else desnecessário**: Uso do padrão Early Return para reduzir a profundidade da indentação.

---

## 💡 Comentário do Autor (Insight)

Este prompt focou na praticidade para ser usado imediatamente no trabalho.
Se o resultado não for satisfatório, tente configurar as variáveis de entrada ou a situação (Context) de forma um pouco mais concreta.

---

## 🙋 Perguntas Frequentes (FAQ)

**Q. Não gostei do resultado.**
A. Adicione exemplos concretos ou descreva a situação (Context) com mais detalhes.

**Q. Funciona com outras linguagens?**
A. Sim, é possível se você traduzir as instruções do prompt para a linguagem desejada.

---

## 🎯 Conclusão

Um código bem escrito é lido facilmente como um bom ensaio. Limpe seu código para o seu eu do futuro (e colegas).

Agora saia do trabalho na hora certa e tome um banho. Lave o corpo, não o código. 🍷