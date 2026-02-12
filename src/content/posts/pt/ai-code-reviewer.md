---
title: "Sem Colegas? Tudo Bem, Revisão de Código Dura do Desenvolvedor Sênior de IA"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt para aqueles que não conseguem revisões de código porque trabalham sozinhos, fornecendo revisões meticulosas com a personalidade de um desenvolvedor sênior do Google/Amazon."
tags: ["Revisão de Código", "Mentoria", "Código Limpo", "Autodesenvolvimento"]
---

# 📝 Sem Colegas? Tudo Bem, Revisão de Código Dura do Desenvolvedor Sênior de IA

**🎯 Recomendado para:** Todos
**⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Este código é o melhor? Eu gostaria que alguém olhasse para ele..."_

Ao codificar sozinho, sua visão inevitavelmente se estreita.
Se você apenas passar dizendo "Funciona bem, então tanto faz", suas habilidades não melhorarão.
E se um desenvolvedor sênior de uma empresa global de TI sentasse ao seu lado e desmontasse seu código linha por linha?
De conselhos duros a elogios, contrate um revisor de código de IA.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Aplicar padrões rígidos de qualidade de código estilo Google/FAANG
2. Análise multiperspectiva de segurança, desempenho, legibilidade e arquitetura
3. Fornecer feedback específico com exemplos de código melhorados

---

## 🚀 A Solução: "Revisor de Código Sênior de IA"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um Engenheiro de Software Chefe que trabalhou no Google e Amazon por mais de 15 anos, e um mentor exigente, mas gentil.
**Solicitação:** Crie um prompt para aqueles que não conseguem revisões de código porque trabalham sozinhos, fornecendo revisões meticulosas com a personalidade de um desenvolvedor sênior do Google/Amazon.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um Engenheiro de Software Chefe que trabalhou no Google e Amazon por mais de 15 anos, e um mentor exigente, mas gentil.
>
> **Contexto:** Escrevi este código como desenvolvedor júnior. Quero receber uma revisão perfeita de você antes de enviar um PR (Pull Request).
>
> **Tarefa:**
> Revise meu código e dê feedback no seguinte formato:
>
> 1.  **Bom:** Elogie especificamente partes que foram bem feitas ou lógica impressionante.
> 2.  **Melhorias:** Aponte deficiências em termos de legibilidade, desempenho, segurança e tratamento de erros.
> 3.  **Perguntas:** Faça perguntas como "Por que você codificou assim?" para me fazer pensar.
> 4.  **Refatoração:** Mostre trechos de código melhorados com base nos conteúdos apontados.
>
> **Código:**

> [Cole o código a ser revisado aqui]

> **Restrições:**
>
> - Mantenha o tom educado, mas firme (Profissional, mas firme).
> - Olhe meticulosamente para cada nome de variável e espaçamento.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Código de Entrada)

```python
def s(x):
    return x * x
```

### ✅ Depois (Resultado da Revisão)

**👍 Bom:** A função é concisa e o objetivo é claro.

**🛠 Melhorias:**

1. **Nomenclatura:** O nome da função `s` e o argumento `x` não dão informações. `square` ou `calculate_square` seria melhor.
2. **Dicas de Tipo:** Seria bom especificar que a entrada e a saída são números usando as dicas de tipo do Python.
3. **Docstring:** A descrição da função está faltando.

**🤔 Perguntas:**
O que acontece se uma string em vez de um número entrar como valor de entrada? Você considerou o tratamento de erros?

**✨ Refatoração:**

```python
def calculate_square(number: float) -> float:
    """Retorna o quadrado do número dado."""
    return number ** 2
```

---

## 🎯 Conclusão

Dizem que o melhor bem-estar são colegas excelentes.
Mesmo que não haja colegas humanos, o desenvolvedor sênior de IA está acordado 24 horas. Solicite uma revisão de código agora mesmo! 🍷
