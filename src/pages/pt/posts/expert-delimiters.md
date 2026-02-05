---
layout: /src/layouts/Layout.astro
title: 'E se a IA não entender o que eu digo? Coloque uma "Cerca" (Delimitadores)'
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Engenharia de Prompt"
description: "A IA fica confusa ao resumir textos longos ou corrigir códigos? Aumente a precisão em 2x com a técnica de Delimitadores, dividindo seções com caracteres especiais."
tags: ["Delimitadores", "Legibilidade", "Tags XML"]
lang: pt
---

# 🚧 E se a IA não entender o que eu digo? Coloque uma "Cerca"

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos
> **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

Se você der um texto longo para a IA e disser "resuma isso", ela pode ficar confusa sobre onde começa e termina o texto a ser resumido e onde é o comando.

Assim como os humanos dividem textos em **parágrafos**, você deve desenhar uma **linha de limite (Delimitador)** clara para a IA, dizendo **"é daqui até aqui"**.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. A IA pode ter dificuldade em distinguir comandos de dados em textos longos.
2. Use tags XML (`< >`) ou caracteres especiais (`"""`) para definir limites claros.
3. O hábito de dividir seções reduz erros de reconhecimento da IA e aumenta a precisão do trabalho.

---

## 🚀 Solução: "Usar Tags XML ou Caracteres Especiais"

### 🥉 Versão Básica

Use quando precisar de resultados rápidos.

> **Papel:** Você é um **editor** competente.
> **Solicitação:** A IA fica confusa ao resumir textos longos ou corrigir códigos? Aumente a precisão em 2x com a técnica de Delimitadores, dividindo seções com caracteres especiais.

<br>

### 🥇 Versão Pro (Especialista)

Use quando precisar de qualidade detalhada.

A melhor maneira é usar tags `< >` ou `"""` (três aspas).

> **Papel:** Você é um **editor** competente.
>
> **Solicitação:** Resuma o conteúdo envolto nas tags `<text>` abaixo em 3 frases.
>
> **Dados de entrada:**
> <text>
> `[Aqui entra o artigo de notícias ou relatório extremamente longo]`
> </text>

---

## 🧬 Análise do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada sem distinção)

IA: Pode acabar incluindo a frase "resuma isso" no resumo, ou ler apenas o início do texto e terminar de qualquer jeito.

```text
(Comando e dados misturados, causando confusão)
```

<br>

### ✅ Depois (Envolvendo com tags)

A IA reconhece apenas o conteúdo dentro de `<text>` como **"dados para processar"** e distingue claramente o resto como **"comandos"**.

```text
(Extrai exatamente o conteúdo dentro de <text> e resume perfeitamente)
```

---

## 🎯 Conclusão

Especialistas costumam dividir **seções (Section)** ao criar prompts.

- `<context>` (Situação)
- `<instruction>` (Instruções)
- `<data>` (Dados)

Apenas esse pequeno hábito reduz a taxa de erro do prompt para 0%. 🧱
