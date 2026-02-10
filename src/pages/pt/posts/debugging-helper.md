---
layout: /src/layouts/Layout.astro
title: "Caçador de Bugs: Prompt de Depuração para Pegar Erros em 1 Minuto"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/TI"
description: "Prompt que encontra a localização do bug e a solução (Fix) se você jogar uma mensagem de erro com causa desconhecida e código."
tags: ["Depuração", "CorreçãoErros", "Desenvolvedor", "Produtividade"]
---

# 📝 Caçador de Bugs: Prompt de Depuração para Pegar Erros em 1 Minuto

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"NullPointerException? Onde diabos está o Null?"_

Diz-se que 80% do tempo de desenvolvimento é gasto em depuração. Mensagens de erro são indelicadas e o código é muito complexo. Pergunte à IA em vez de encarar o monitor até seus olhos saltarem. Ela escaneia milhares de linhas de código em 1 segundo sem se cansar.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Identifique a Causa Raiz do problema analisando a mensagem de erro e o código relacionado.
2. Explique por que precisa ser corrigido junto com o Código Corrigido.
3. Sugira Código Defensivo para prevenir a recorrência.

---

## 🚀 A Solução: "Exterminador de Erros"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um `[Gênio Caçador de Bugs e Engenheiro de Software]`.
**Solicitação:** Crie um prompt que encontre a localização do bug e a solução (Fix) se você jogar uma mensagem de erro com causa desconhecida e código.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e use-o.

> **Papel:** Você é um `[Gênio Caçador de Bugs e Engenheiro de Software]`.
>
> **Contexto:** Executei o código, mas ocorreu um erro ou um resultado indesejado saiu. Não consigo encontrar a causa.
>
> **Tarefa:**
>
> 1. **[Análise de Causa]**: Interprete a mensagem de erro e aponte exatamente qual parte do código é o problema. (Se é um erro lógico ou um erro de sintaxe)
> 2. **[Solução]**: Mostre o código com o bug corrigido. (Marque as partes alteradas com comentários)
> 3. **[Prevenção]**: Diga-me quais hábitos devo ter para não cometer esse erro no futuro, ou código de 'tratamento de exceção' que seria bom adicionar.
>
> **Mensagem de Erro:**
>
> ```text
> [Cole o log de erro aqui]
> ```
>
> **Código Escrito:**
>
> ```text
> [Cole o código problemático aqui]
> ```

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Situação)

`Uncaught TypeError: Cannot read properties of undefined (reading 'map')` ocorreu em JavaScript.
(Iniciante: "Mapa? Por que mapa?")

### ✅ Depois (Resultado do Prompt)

**[Análise de Causa]**
Aconteceu porque você tentou desenhar a tela antes de receber dados da API. A variável `userList` está no estado `undefined` porque os dados ainda não chegaram, mas você usou a função `.map()` nela, então o erro ocorreu. É um problema de processamento assíncrono.

**[Solução]**

```text
// Antes da correção: userList.map(...)
// Depois da correção: Use encadeamento opcional (?.)
userList?.map(user => ...)
```

Anexado operador `?.` para executar map apenas quando houver dados.

**[Prevenção]**
Ao escrever código de comunicação de API, é bom sempre assumir que 'dados podem chegar tarde' ou 'podem falhar' e inserir código como `if (!data) return loading...` primeiro.

---

## 🎯 Conclusão

Um bug não é uma falha. É um processo onde o código se torna mais perfeito. (Claro, um bug logo antes de sair do trabalho é um desastre. Pegue-o rapidamente.)

Agora saia do trabalho na hora e aproveite uma vida livre de bugs! 🍷
