---
layout: /src/layouts/Layout.astro
title: "'Recomendar Mensagem de Commit' Sem Mais Preocupações! Geração Automática de Conventional Commits"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt que escreve mensagens de commit limpas adaptadas aos padrões globais (Conventional Commits) se você apenas colar as alterações (`git diff`)."
tags: ["Git", "Mensagem de Commit", "Colaboração", "Produtividade"]
---

# 📝 "Recomendar Mensagem de Commit" Sem Mais Preocupações! Geração Automática de Conventional Commits

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Escrever mensagens de commit é mais difícil do que escrever código..."_

`fix: bug`, `update code`... Você está fazendo commit assim?
Boas mensagens de commit são o núcleo do gerenciamento de histórico, mas escrevê-las toda vez me dá dor de cabeça.
Apenas jogue o conteúdo `git diff`, e ele puxará no estilo **Conventional Commits**, o padrão do campo open source.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Analise alterações e selecione automaticamente o tipo apropriado (feat, fix, refactor, etc.)
2. Escreva assunto conciso e claro e corpo detalhado
3. Formatação adaptada às convenções da equipe

---

## 🚀 A Solução: "Gerador de Mensagem de Commit Git"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

> **Papel:** Você é um Mantenedor Open Source obcecado com gerenciamento de histórico Git.
> **Solicitação:** Escreva uma mensagem de commit limpa adaptada aos padrões globais (Conventional Commits) se eu apenas colar as alterações (`git diff`).

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um Mantenedor Open Source obcecado com gerenciamento de histórico Git.
>
> **Contexto:** Modifiquei o código e preciso de uma mensagem de commit limpa que os colegas possam entender facilmente.
>
> **Tarefa:**
> Analise as `[Alterações]` abaixo e recomende 3 mensagens de commit que se ajustem às regras de **Conventional Commits**.
>
> 1. **Formato:** `<type>(<scope>): <subject>`
> 2. **Corpo:** Resuma a razão da mudança (Por que) e o conteúdo da mudança (O que) com marcadores.
> 3. **Rodapé:** (Opcional) Se houver um número de problema, adicione-o no formato `Closes #123`.
>
> **Alterações (git diff ou resumo):**
>
> ```
> [Escreva o resultado `git diff` ou alterações simplesmente aqui]
> ```
>
> **Restrições:**
>
> - Tipos de Type: Selecione um de `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
> - O Assunto não deve exceder 50 caracteres e começar com um imperativo (raiz do verbo). (Inglês é o padrão)

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Alterações de Entrada)

"Mudei a cor do botão de login para vermelho, corrigi o bug onde o login não funcionava. Ah, e adicionei o guia de instalação ao readme."

### ✅ Depois (Resultado)

**Opção 1 (Foco na Correção de Bugs)**

```text
fix(auth): resolve login failure issue and update button style

- Fix logic error preventing user login
- Change login button color to red for better visibility
- Add installation guide to README.md
```

**Opção 2 (Foco na Melhoria da IU)**

```text
style(ui): update login button color and fix login bug

- Change login button color to red
- Fix login functionality bug
- docs: update installation guide in README
```

---

## 🎯 Conclusão

Mensagens de commit são cartas para o seu eu futuro e colegas.
Não as escreva de qualquer jeito. Obtenha ajuda da IA e ouça o elogio "O log de commit dessa pessoa é tão limpo"! 🍷
