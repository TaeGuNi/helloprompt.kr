---
title: "Preguiça de escrever código de teste? A IA fará isso por você"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Desenvolvimento"
description: "Um prompt que gera automaticamente códigos de Teste Unitário complicados considerando até casos de borda."
tags: ["Código de Teste", "TDD", "Jest", "JUnit"]
---

# 📝 Preguiça de escrever código de teste? A IA fará isso por você

**🎯 Recomendado para:** Todos
**⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Ocupado implementando recursos e código de teste também? Mas sem testes, você tem que tremer de ansiedade a cada implantação."_

O Teste Unitário é essencial para serviços estáveis, mas escrevê-los é trabalhoso e tedioso. É especialmente difícil cuidar meticulosamente dos Casos de Borda. Deixe essa tarefa chata para a IA e concentre-se na implementação da lógica.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Se você deixar a escrita complicada de testes unitários para a IA, ela cuida meticulosamente até dos casos de exceção.
2. Gera testes robustos considerando não apenas Caminhos Felizes, mas também Casos de Borda.
3. Atribua o papel de Engenheiro de QA para aumentar a cobertura de testes e garantir a estabilidade do código.

---

## 🚀 A Solução: "Guardião de Cobertura de Testes"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um `[Líder de Engenharia de QA]`.
**Solicitação:** Crie um prompt que gere automaticamente códigos de Teste Unitário complicados considerando até casos de borda.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um `[Líder de Engenharia de QA]`.
>
> **Situação:** Preciso escrever código de teste unitário para a `[Função/Classe]` que escrevi. Uso `[Framework de Teste Usado]`.
>
> **Tarefa:**
>
> 1. Escreva um teste de caso de sucesso (Caminho Feliz) para entrada normal.
> 2. Identifique pelo menos 3 situações de exceção potenciais e Casos de Borda, e escreva testes de falha para eles.
> 3. Adicione comentários ao código de teste explicando o que cada caso verifica.
>
> **Código para Testar:**
> `[Cole seu código aqui]`

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada: Função Calc Simples)

```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Não é possível dividir por 0.");
  return a / b;
}
```

<br>

### ✅ Depois (Resultado)

```javascript
// Exemplo de Framework Jest

describe("teste de função divide", () => {
  // 1. Caminho Feliz: Divisão normal
  test("Dividir 10 por 2 deve retornar 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Caso de Borda: Divisão de números negativos
  test("Dividir números negativos deve lidar com o sinal corretamente", () => {
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(-10, -2)).toBe(5);
  });

  // 3. Caso de Exceção: Dividir por 0
  test("Dividir por 0 deve lançar um erro", () => {
    expect(() => divide(10, 0)).toThrow("Não é possível dividir por 0.");
  });

  // 4. Caso de Borda: Manipulação de decimais
  test("Deve ser preciso quando o resultado da divisão é um decimal", () => {
    expect(divide(5, 2)).toBe(2.5);
  });
});
```

---

## 🎯 Conclusão

O código de teste é um seguro para o seu eu futuro. Reduza drasticamente o prêmio do seguro (tempo de escrita) através da IA.
