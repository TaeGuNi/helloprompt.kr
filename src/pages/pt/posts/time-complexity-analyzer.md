---
layout: /src/layouts/Layout.astro
title: "Qual é a Complexidade de Tempo (Big O) do Meu Código?"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt que analisa a complexidade de tempo e a complexidade de espaço do algoritmo escrito e encontra pontos de melhoria de desempenho."
tags:
  [
    "Algoritmo",
    "Complexidade de Tempo",
    "Big-O",
    "Otimização de Desempenho",
    "Conhecimento CS",
  ]
---

# 📝 Qual é a Complexidade de Tempo (Big O) do Meu Código?

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos
> **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Dois loops for sobrepostos... Isso é O(N) ou O(N^2)?"_

A análise de Complexidade de Tempo é essencial ao fazer testes de codificação ou escrever lógica para lidar com grande tráfego.
Mas dá dor de cabeça calcular se há chamadas recursivas dentro do loop ou se as condições se tornam complexas?
Se você mostrar o código à IA, ela o analisa com precisão com a notação Big-O e até propõe algoritmos mais eficientes.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Calcule com precisão a Complexidade de Tempo e a Complexidade de Espaço (Big-O)
2. Identifique gargalos de desempenho
3. Sugira algoritmos aprimorados com menor complexidade

---

## 🚀 A Solução: "Analisador de Complexidade"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

> **Papel:** Você é um Professor de Ciência da Computação (CS) e especialista em otimização de algoritmos.
> **Solicitação:** Analise a complexidade de tempo e a complexidade de espaço do algoritmo escrito e encontre pontos de melhoria de desempenho.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um Professor de Ciência da Computação (CS) e especialista em otimização de algoritmos.
>
> **Contexto:** Estou curioso sobre o desempenho do algoritmo que escrevi. Quero saber se é eficiente ou se são necessárias melhorias.
>
> **Tarefa:**
>
> 1. Analise a **Complexidade de Tempo** e a **Complexidade de Espaço** do código fornecido em notação Big-O.
> 2. Explique a base linha por linha de código por que tal complexidade sai.
> 3. Se houver um método mais eficiente (ex., O(N^2) -> O(N log N)), explique-o com o código melhorado.
>
> **Código:**
>
> ```
> [Cole o código para analisar aqui]
> ```
>
> **Restrições:**
>
> - Analise com base no Pior Caso.
> - Mencione problemas que podem ocorrer quando o tamanho dos dados de entrada (N) é muito grande.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Código de Entrada)

```python
def find_duplicate(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return nums[i]
    return None
```

### ✅ Depois (Resultado)

**Análise:**

- **Complexidade de Tempo:** O(N^2). Usando loops `for` duplos. Torna-se muito lento mesmo se N exceder 10.000.
- **Complexidade de Espaço:** O(1). Quase nenhuma memória adicional é usada.

**Código Melhorado (Usando Hash Set):**

```python
def find_duplicate_optimized(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return num
        seen.add(num)
    return None
```

**Resultado da Melhoria:**

- **Complexidade de Tempo:** O(N). Loop apenas uma vez.
- **Complexidade de Espaço:** O(N). Precisa armazenar dados no conjunto `seen`. (Compensação Tempo-Espaço)

---

## 🎯 Conclusão

Pare de pensar "Funciona, então está bom".
Desenvolvedores que cuidam do desempenho invisível são os verdadeiros profissionais. Aumente seus músculos algorítmicos com o feedback do Professor IA! 🍷
