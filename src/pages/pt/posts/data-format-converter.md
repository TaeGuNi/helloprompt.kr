---
layout: /src/layouts/Layout.astro
title: "Excel, JSON, CSV... Escape da Tarefa Chata de Conversão de Formato de Dados"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "JSON para CSV, XML para JSON. Deixe tarefas irritantes de conversão de formato de dados para a IA. Estruturas aninhadas complexas não são problema."
tags: ["Conversão de Dados", "JSON", "CSV", "Excel", "Produtividade"]
---

# 📝 Excel, JSON, CSV... Escape da Tarefa Chata de Conversão de Formato de Dados

**🎯 Recomendado para:** Todos
**⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Por favor, converta o conteúdo deste arquivo Excel para JSON e envie para a API."_

Converter formatos de dados é comum durante o desenvolvimento.
Usar ferramentas de conversão online parece desconfortável ao carregar dados da empresa, e escrever scripts exige mais esforço do que vale a pena.
Apenas raspe os dados e cole-os. A IA entende perfeitamente e os converte.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Conversão de formato livre como JSON ↔ CSV ↔ XML
2. Remover campos desnecessários e alterar estrutura de dados (Mapeamento)
3. Conversão altamente útil como gerar instruções SQL Insert

---

## 🚀 A Solução: "Conversor de Dados Universal"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um especialista em Engenharia de Dados e ETL (Extrair, Transformar, Carregar).
**Solicitação:** JSON para CSV, XML para JSON. Crie um prompt que deixe tarefas irritantes de conversão de formato de dados para a IA. Estruturas aninhadas complexas não são problema.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um especialista em Engenharia de Dados e ETL (Extrair, Transformar, Carregar).
>
> **Contexto:** Preciso converter dados que tenho em um formato utilizável em outro sistema.
>
> **Tarefa:**
>
> 1. Converta os dados de **[Formato Fonte]** abaixo para **[Formato Alvo]**.
> 2. Aplique `[Regra de Alteração de Nome de Campo]` durante a conversão.
> 3. Imprima apenas o resultado de forma limpa para que eu possa verificar se os dados estão corretos.
>
> **Dados Fonte:**
>
> ```
> [Cole os dados originais aqui]
> ```
>
> **Regras de Conversão:**
>
> - Formato Fonte: `[ex.: CSV]`
> - Formato Alvo: `[ex.: Array JSON]`
> - Alteração de Campo: `[ex.: Alterar 'Nome' -> 'name', 'Idade' -> 'age' e excluir 'Endereço']`

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (CSV de Entrada)

```csv
Nome,Idade,Trabalho
Hong Gildong,30,Desenvolvedor
Kim Cheolsoo,25,Designer
```

### ✅ Depois (Resultado - JSON + Alteração de Nome de Campo)

**Solicitação:** Converter CSV para JSON, mas alterar para nomes de campo em inglês.

```json
[
  {
    "name": "Hong Gildong",
    "age": 30,
    "job": "Desenvolvedor"
  },
  {
    "name": "Kim Cheolsoo",
    "age": 25,
    "job": "Designer"
  }
]
```

### ✅ Depois (Resultado - Instrução SQL Insert)

**Solicitação:** Alterar para instrução INSERT utilizável na tabela `users` do MySQL.

```sql
INSERT INTO users (name, age, job) VALUES
('Hong Gildong', 30, 'Desenvolvedor'),
('Kim Cheolsoo', 25, 'Designer');
```

---

## 🎯 Conclusão

Não perca tempo lutando com funções do Excel ou escrevendo regex para conversão de dados.
No momento em que você diz "Mude isso assim" para a IA, a hora de sair fica mais próxima. 🍷
