---
layout: /src/layouts/Layout.astro
title: "A IA não consegue te entender? Use 'Delimitadores'"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Engenharia de Prompt"
description: "A IA fica confusa ao resumir textos longos ou corrigir código? Use a técnica de Delimitadores para separar seções e dobrar sua precisão."
tags: ["Delimitadores", "Legibilidade", "Tags XML"]
---

# 🚧 A IA não consegue te entender? Use "Delimitadores"

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

Quando você joga um texto longo para uma IA e diz "Resuma isso", a IA às vezes fica confusa sobre onde termina o texto a ser resumido e onde começam as instruções.

Assim como os humanos dividem o texto em **parágrafos** ao ler, você precisa traçar uma **fronteira (Delimitador)** clara para a IA, dizendo **"Daqui até aqui é o conteúdo."**

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. A IA pode ter dificuldade em distinguir entre comandos e dados em textos longos.
2. Use tags XML (`< >`) ou símbolos especiais (`"""`) para estabelecer limites claros.
3. O hábito de dividir seções reduz os erros de reconhecimento da IA e aumenta a precisão da tarefa.

---

## 🚀 A Solução: "Usando Tags XML ou Símbolos Especiais"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

> **Papel:** Você é um **Editor** competente.
> **Solicitação:** A IA fica confusa ao resumir textos longos ou corrigir código? Explique como usar a técnica de Delimitadores para separar seções e dobrar a precisão.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

A melhor maneira é usar tags `< >` ou `"""` (três aspas).

> **Papel:** Você é um **Editor** competente.
>
> **Solicitação:** Resuma o conteúdo envolvido nas tags `<text>` abaixo em 3 frases.
>
> **Dados de Entrada:**
> <text>
> `[Insira aqui um artigo de notícias ou relatório incrivelmente longo]`
> </text>

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada sem delimitadores)

IA: Pode incluir a instrução "Resuma isso" como parte do próprio resumo, ou apenas ler o início do texto e terminar apressadamente.

```text
(Mistura confusa de instruções e dados)
```

<br>

### ✅ Depois (Envolvendo com tags)

A IA reconhece apenas o conteúdo dentro de `<text>` como **"dados para processar"** e distingue claramente o restante como **"comandos".**

```text
(Extrai com precisão apenas o conteúdo dentro de <text> e o resume perfeitamente)
```

---

## 🎯 Conclusão

Especialistas dividem habitualmente **Seções** ao criar prompts.

- `<context>` (Situação)
- `<instruction>` (Instruções)
- `<data>` (Dados)

Esse único pequeno hábito torna a taxa de erro dos seus prompts em 0%. 🧱
