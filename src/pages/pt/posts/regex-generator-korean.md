---
layout: /src/layouts/Layout.astro
title: "Regex Tipo Alienígena, Peça em Linguagem Natural"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Não lute com expressões regulares complexas como decifrar códigos. Apenas diga o padrão que você deseja, e a IA criará o regex."
tags: ["Regex", "Expressão Regular", "Processamento de String", "Validação"]
---

# 📝 Regex Tipo Alienígena, Peça em Linguagem Natural

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Qual era o regex de validação de e-mail mesmo... Ah, e como coloco hifens em números de telefone?"_

Expressão Regular (Regex), nova toda vez que você usa e parece linguagem alienígena toda vez que você vê, certo?
Digitar `^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`... você mesmo é tortura.
Agora apenas diga "Encontrar formato de e-mail" em linguagem natural.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Solicite correspondência de padrão complexo em linguagem natural
2. Forneça explicação detalhada para o regex gerado
3. Verifique com casos de teste

---

## 🚀 A Solução: "Intérprete de Regex"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

> **Papel:** Você é um Mestre de Regex.
> **Solicitação:** Não lute com expressões regulares complexas como decifrar códigos. Apenas diga o padrão que você deseja, e a IA criará o regex.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um Mestre de Regex.
>
> **Contexto:** Preciso extrair ou validar padrões específicos de dados de texto. Mas a sintaxe regex é muito difícil.
>
> **Tarefa:**
>
> 1. Escreva uma **Expressão Regular (Regex)** que se ajuste perfeitamente ao padrão que descrevo.
> 2. Explique como o regex escrito funciona quebrando-o em partes.
> 3. Mostre 3 exemplos que correspondem (Match) e 3 exemplos que não correspondem (Non-match) a este regex, respectivamente.
>
> **Padrão que quero encontrar:**
> `[Descreva o padrão que você deseja em linguagem natural aqui. ex.: "Número de telefone celular no formato 010-1234-5678"]`
>
> **Linguagem/Ambiente:** `[ex.: JavaScript / Python / Java]`
>
> **Restrições:**
>
> - Garanta que o processamento de escape de caracteres especiais seja feito corretamente.
> - Crie uma expressão que seja o mais concisa e precisa possível.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

**Padrão:** "A senha deve ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."

### ✅ Depois (Resultado)

**Regex (JavaScript):**

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

**Explicação:**

- `^`: Início da string
- `(?=.*[a-z])`: Contém pelo menos uma letra minúscula
- `(?=.*[A-Z])`: Contém pelo menos uma letra maiúscula
- `(?=.*\d)`: Contém pelo menos um número
- `{8,}`: 8 caracteres ou mais

**Teste:**

- ✅ `Pass1234!` (Correspondência)
- ❌ `pass1234` (Sem caractere especial/maiúscula)

---

## 🎯 Conclusão

Regex é poderoso, mas muito hostil para humanos lerem.
Agora deixe essa decifração de código complexo para a IA, e você apenas aproveite a magia do processamento de texto! 🍷
