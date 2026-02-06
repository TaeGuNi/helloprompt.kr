---
layout: /src/layouts/Layout.astro
title: "Escrevendo Código de Teste, Um Prompt Que Termina em 5 Minutos"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Deixe a escrita chata e problemática de Testes Unitários para a IA. Desafio 100% de cobertura!"
tags: ["Código de Teste", "TDD", "Jest", "PyTest", "QA"]
---

# 📝 Escrevendo Código de Teste, Um Prompt Que Termina em 5 Minutos

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos
> **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Estou ocupado apenas escrevendo código, quando farei todos os códigos de teste?"_

Todos sabem da importância do código de teste, mas quando você realmente tenta escrevê-lo, muitas vezes leva mais tempo do que a lógica principal.
Pensando em Casos de Borda, fazendo Mocking... te deu dor de cabeça?
Agora apenas cole a lógica de negócios. A IA escreverá códigos de teste meticulosos para você.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Cobre não apenas Caminhos Felizes, mas também casos de exceção
2. Suporte perfeito para sintaxe de framework de teste amplamente utilizada
3. Geração automática de dados Mock

---

## 🚀 A Solução: "Gerador de Teste Unitário"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

> **Papel:** Você é um Engenheiro de QA meticuloso e perfeccionista e especialista em automação de testes.
> **Solicitação:** Deixe a escrita chata e problemática de Testes Unitários para a IA. Desafio 100% de cobertura!

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um Engenheiro de QA meticuloso e perfeccionista e especialista em automação de testes.
>
> **Contexto:** Tenho código escrito em `[Linguagem/Framework Usado]`. Preciso de Testes Unitários para aumentar a confiabilidade deste código.
>
> **Tarefa:**
>
> 1. Analise o código fornecido e primeiro escreva uma lista de casos de teste. (Incluindo casos de sucesso, casos de falha, análise de valor limite)
> 2. Escreva código de teste executável usando `[Nome da Biblioteca de Teste (ex., Jest, PyTest, JUnit)]`.
> 3. Se houver dependências externas, lide com Mocking.
> 4. Adicione comentários para cada caso de teste explicando o que ele verifica.
>
> **Código:**
>
> ```
> [Cole o código para testar aqui]
> ```
>
> **Restrições:**
>
> - Inclua vários cenários para que a cobertura de teste seja a mais alta possível.
> - Forneça o código em uma forma que possa ser copiada e executada imediatamente.
> - Escreva a Descrição do teste em português.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Código de Entrada)

```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Não é possível dividir por 0.");
  return a / b;
}
```

### ✅ Depois (Resultado)

```javascript
describe("teste de função divide", () => {
  // 1. Teste de operação normal
  test("Dividir 10 por 2 deve ser 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Teste de tratamento de exceção
  test("Dividir por 0 deve lançar um erro", () => {
    expect(() => divide(10, 0)).toThrow("Não é possível dividir por 0.");
  });

  // 3. Teste de valor limite/valor especial
  test("Dividir números negativos deve resultar em um número negativo", () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});
```

---

## 🎯 Conclusão

Se bugs forem encontrados após a implantação, o custo de corrigi-los salta 100 vezes.
Extermine bugs no estágio de desenvolvimento com este prompt e pressione o botão 'Merge' com confiança! 🍷
