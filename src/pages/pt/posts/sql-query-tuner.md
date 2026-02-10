---
layout: /src/layouts/Layout.astro
title: "Consulta SQL Lenta, Segredo para Ajustar em 3 Segundos"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt que analisa consultas SQL complexas e ineficientes para otimizar o desempenho e recomendar índices."
tags: ["SQL", "Ajuste de BD", "Otimização de Consulta", "Banco de Dados"]
---

# 📝 Consulta SQL Lenta, Segredo para Ajustar em 3 Segundos

**🎯 Recomendado para:** Todos
**⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Mesmo com apenas um pouco de dados acumulados, leva 5 segundos para consultar..."_

Consultas que eram rápidas no início se tornam tartarugas à medida que os dados aumentam.
Você se sentiu perdido olhando para o Plano de Execução (Explain Plan) porque o preto são letras e o branco é o fundo?
Se você mostrar a consulta para a IA, ela encontra partes ineficientes e até faz recomendações mágicas de índices.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Melhorar Joins e Subconsultas ineficientes
2. Recomendar Índices necessários
3. Reescrever com sintaxe SQL moderna legível

---

## 🚀 A Solução: "Afinador de Consulta SQL"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um DBA (Administrador de Banco de Dados) Chefe com 20 anos de experiência e um especialista em ajuste de SQL.
**Solicitação:** Um prompt que analisa consultas SQL complexas e ineficientes para otimizar o desempenho e recomendar índices.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um DBA (Administrador de Banco de Dados) Chefe com 20 anos de experiência e um especialista em ajuste de SQL.
>
> **Contexto:** A consulta SQL usada no meu aplicativo está causando degradação de desempenho à medida que a quantidade de dados aumenta.
>
> **Tarefa:**
> Analise a consulta SQL fornecida abaixo e execute as seguintes tarefas:
>
> 1. **Diagnóstico do Problema:** Aponte partes que podem causar degradação de desempenho na consulta atual (Full Table Scan, etc.).
> 2. **Otimização de Consulta:** Reescreva em uma consulta que retorne o mesmo resultado, mas opere de forma mais eficiente.
> 3. **Recomendação de Índice:** Sugira quais colunas indexar com a sintaxe `CREATE INDEX` para maximizar o desempenho da consulta.
>
> **BD Usado:** `[MySQL / PostgreSQL / Oracle / MS-SQL]`
>
> **Consulta Alvo:**
>
> ```sql
> [Cole a consulta lenta aqui]
> ```
>
> **Restrições:**
>
> - O conjunto de dados de resultado da consulta existente nunca deve mudar.
> - Explique brevemente o princípio de execução de por que ficou mais rápido.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Consulta de Entrada)

```sql
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE price > 10000);
```

_Problema: A subconsulta pode ser executada para cada linha (Dependent Subquery)._

### ✅ Depois (Resultado)

**Consulta Otimizada (Usando JOIN):**

```sql
SELECT DISTINCT u.*
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.price > 10000;
```

**Índice Recomendado:**

```sql
CREATE INDEX idx_orders_price_userid ON orders(price, user_id);
```

_Explicação: Otimizado alterando a subconsulta para JOIN, e criado um índice composto para juntar por `user_id` após filtrar por `price`._

---

## 🎯 Conclusão

Dizem que "Ajuste é uma arte", mas agora é uma 'ciência' onde você pode obter ajuda da IA.
Não sofra com consultas lentas, obtenha consultoria gratuita do DBA IA! 🍷
