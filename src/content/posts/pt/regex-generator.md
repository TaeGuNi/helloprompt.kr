---
title: "Pesadelo Regex, agora passe para a IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Desenvolvimento"
description: "Não escreva expressões regulares enigmáticas você mesmo. Um prompt que gera código apenas explicando o padrão que você deseja."
tags: ["Regex", "Expressão Regular", "Produtividade Dev"]
---

# 📝 Pesadelo Regex, agora passe para a IA

**🎯 Recomendado para:** Todos
**⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Você está decifrando `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$` apenas para verificar a validade de e-mail?"_

Expressões Regulares (Regex) são essenciais para desenvolvedores, mas são uma das áreas com as quais mais odiamos lidar. Você tem que procurar a sintaxe toda vez que escreve, e o que os outros escreveram parece língua alienígena. Agora, não sofra, apenas diga à IA o 'padrão'.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Não lute para memorizar ou pesquisar sintaxe complexa de regex.
2. Apenas diga o padrão que você deseja (número de telefone, e-mail, etc.), e a IA escreverá a regex e até a interpretará.
3. Solicite códigos de teste juntos para verificar imediatamente a precisão da regex.

---

## 🚀 A Solução: "Gerador de Regex"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um `[Desenvolvedor Sênior]`.
**Solicitação:** Crie um prompt que gere código para expressões regulares enigmáticas apenas explicando o padrão.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um `[Desenvolvedor Sênior]`.
>
> **Situação:** Preciso de uma expressão regular para usar em `[Python/JavaScript]`.
>
> **Tarefa:**
>
> 1. Crie uma expressão regular que satisfaça os requisitos abaixo.
> 2. Explique detalhadamente o que cada símbolo significa (Interpretação).
> 3. Mostre código de exemplo (casos correspondentes/não correspondentes) para testar esta regex.
>
> **Requisitos:**
>
> - Quero encontrar o formato de número de telefone dos EUA.
> - Exemplo: 123-456-7890 ou (123) 456-7890 ou 1234567890
> - O código de área é opcional.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

```text
Escreva uma regex para números de telefone dos EUA. Hífens, parênteses ou nada.
```

<br>

### ✅ Depois (Resultado)

```javascript
// Exemplo JavaScript

const regex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

// Teste
const phone1 = "123-456-7890"; // Match O
const phone2 = "(123) 456-7890"; // Match O
const phone3 = "1234567890"; // Match O

console.log(regex.test(phone1)); // true
```

### 🔍 Explicação

- `^`: Início da string
- `(\(\d{3}\)|\d{3})`: 3 dígitos dentro de parênteses OU apenas 3 dígitos
- `[- ]?`: Hífen ou espaço opcional
- `\d{3}`: 3 dígitos
- `\d{4}`: 4 dígitos
- `$`: Fim da string

---

## 🎯 Conclusão

Não abra o livro de gramática Regex. Você só precisa saber claramente qual 'padrão' você deseja.
