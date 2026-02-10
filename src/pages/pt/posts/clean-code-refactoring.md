---
layout: /src/layouts/Layout.astro
title: "Meu Código é Lixo! Treinador de Refatoração Clean Code"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/TI"
description: "Prompt que atualiza código bagunçado que apenas funciona para código limpo 'fácil de ler e manter'."
tags: ["Refatoração", "CleanCode", "Desenvolvedor", "RevisãoCódigo"]
---

# 📝 Meu Código é Lixo! Treinador de Refatoração Clean Code

**🎯 Recomendado para:** Todos
**⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Eu disse que consertaria mais tarde, mas 1 ano se passou. Agora estou com medo de tocar."_

Código espaguete (código emaranhado) é o inimigo dos desenvolvedores. Se a legibilidade é baixa, é difícil encontrar bugs e difícil adicionar recursos. Este prompt possui Robert C. Martin (Autor de Clean Code), lavando e polindo seu código para torná-lo brilhante.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Remova código duplicado e separe funções (Extrair Método).
2. Melhore nomes de variáveis/funções pouco claros (Convenção de Nomenclatura).
3. Otimize o desempenho e aplique sintaxe moderna (Sintaxe Moderna).

---

## 🚀 A Solução: "Lavanderia Clean Code"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um `[Evangelista de Clean Code e Arquiteto Chefe]`.
**Solicitação:** Crie um prompt que atualize código bagunçado que apenas funciona para código limpo 'fácil de ler e manter'.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e use-o.

> **Papel:** Você é um `[Evangelista de Clean Code e Arquiteto Chefe]`.
>
> **Contexto:** Meu código funciona, mas é bagunçado e difícil de ler (Código Sujo). Refatore-o para que seja fácil de manter.
>
> **Tarefa:**
>
> 1. **[Senso de Nomenclatura]**: Mude nomes de variáveis e funções para serem intuitivos e significativos. (ex: `a` -> `userAge`)
> 2. **[Melhoria de Estrutura]**: Divida funções que são muito longas por papel e combine lógica duplicada em uma.
> 3. **[Modernizar]**: Se possível, aplique a sintaxe de linguagem mais recente (ES6+, Python 3.10+, etc.).
> 4. **[Antes & Depois]**: Compare onde e como mudou, e explique a razão pela qual você mudou assim.
>
> **Restrições:**
>
> - A operação (função) do código nunca deve mudar.
> - Adicione comentários apenas onde absolutamente necessário. (Exclua comentários se explicado pelo código)
>
> **Código Alvo:**
>
> ```python
> [Cole código sujo(?) aqui]
> ```

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

```python
def calc(x, y):
    if x > 19:
        print("Adulto")
        p = y * 0.9
        return p
    else:
        print("Estudante")
        return y
```

(Nome da função `calc` não diz o que calcula, `p` também é pouco claro)

### ✅ Depois (Resultado do Prompt)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Você é um adulto.")
        return price * DISCOUNT_RATE

    print("Você é um estudante.")
    return price
```

**[Pontos de Melhoria]**

1. **Mudar Nome da Função**: `calc` -> `calculate_discounted_price` (Claro que é cálculo de preço com desconto)
2. **Remover Números Mágicos**: Declarados números como `19`, `0.9` como constantes para dar significado.
3. **Remover else Desnecessário**: Reduzida profundidade de indentação usando padrão Early Return.

---

## 🎯 Conclusão

Código bem escrito lê-se suavemente como um ensaio bem escrito. Limpe seu código para seu futuro eu (e colegas).

Agora saia do trabalho na hora e tome um banho. Corpo, não código. 🍷
