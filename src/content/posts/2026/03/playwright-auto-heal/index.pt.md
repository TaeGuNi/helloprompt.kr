---
layout: /src/layouts/Layout.astro
title: "Testes E2E parando por causa de erros? Resolva em 1 minuto com o prompt de Auto-healing do Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Descubra o prompt definitivo para recuperar automaticamente seus testes do Playwright que falham devido a mudanças na interface, usando o poder da IA."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---

# 📝 Testes E2E parando por causa de erros? Resolva em 1 minuto com o prompt de Auto-healing do Playwright 🛠️

- **🎯 Público-alvo:** Engenheiros de QA, Desenvolvedores Front-end, Especialistas em Automação de Testes
- **⏱️ Tempo economizado:** De 2 horas → para 1 minuto
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Aquele teste E2E que rodou perfeitamente ontem acabou de falhar só porque a classe CSS de um botão mudou. Vou ter que caçar esse seletor de novo nas DevTools?"_

Quem trabalha com desenvolvimento front-end ou QA sabe muito bem: é frustrante ver os testes E2E (End-to-End) quebrarem a cada pequena alteração na interface (UI). Em ferramentas como Playwright ou Cypress, se a estrutura do DOM ou o nome de uma classe for alterado, o teste inevitavelmente vai falhar. O processo de abrir os arquivos quebrados, inspecionar a página e atualizar o código manualmente é um desperdício enorme de tempo. Mas e se pudéssemos delegar isso? Vamos fazer com que a IA realize o "Auto-healing" (autocura) de forma instantânea, fornecendo apenas o log de erro e o HTML atualizado.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Este prompt faz com que a IA analise e conserte automaticamente os seletores do Playwright quebrados por mudanças na UI.
2. Além de corrigir o código, ele aplica estratégias para criar seletores muito mais resilientes contra futuras alterações.
3. Basta fornecer o log de erro e o trecho HTML atualizado para obter o código perfeito em menos de 1 minuto.

---

## 🚀 A Solução: "Prompt de Auto-healing do Playwright"

### 🥉 Versão Básica (Basic Version)

Use esta versão quando precisar de um conserto rápido e direto, fornecendo apenas o erro e o código defeituoso.

> **Papel:** Você é um `[Engenheiro de QA Sênior]`.
> **Tarefa:** Analise o log de erro do Playwright e o novo HTML fornecidos para corrigir o `[Código de teste quebrado]`.

### 🥇 Versão Profissional (Pro Version)

Ideal para quando você deseja não apenas corrigir, mas refatorar o teste para torná-lo robusto e imune a pequenas mudanças de design.

> **Papel (Role):** Você é um `[Especialista Sênior em Automação de Testes (SDET)]`. Você domina perfeitamente as melhores práticas (Best Practices) do Playwright.
> 
> **Contexto (Context):**
> 
> - Cenário: Devido a uma atualização recente na interface, os testes E2E existentes no Playwright começaram a falhar. A causa principal é a alteração nos seletores (Selectors).
> - Objetivo: Recuperar o código de teste que falhou e aprimorá-lo com uma estrutura de seletores resiliente, minimizando drasticamente o risco de quebras em futuras mudanças de UI.
> 
> **Tarefa (Task):**
> 
> 1. Analise o `[Log de erro]` e a `[Nova Estrutura HTML]` fornecidos abaixo para identificar a causa raiz da falha.
> 2. Modifique o `[Código de teste original]` para que o teste volte a passar perfeitamente.
> 3. Na refatoração, priorize o uso de atributos voltados para o usuário (User-Facing) — como textos visíveis, atributos ARIA e data-testid — em vez de depender de classes CSS frágeis ou XPath.
> 4. Adicione comentários curtos no código explicando "por que essa alteração foi feita".
> 
> **Dados de Entrada:**
> - Log de erro: `[Cole aqui o log de erro completo]`
> - Nova Estrutura HTML: `[Cole aqui o trecho HTML relevante extraído do DevTools]`
> - Código de teste original: `[Cole aqui o trecho do código do Playwright que falhou]`
> 
> **Restrições (Constraints):**
> 
> - A resposta deve ser entregue exclusivamente em um bloco de código Markdown, pronto para ser copiado e colado na IDE.
> - Utilize os Locators nativos e de acessibilidade do Playwright (ex: `getByRole`, `getByText`, `getByTestId`) como prioridade absoluta.
> 
> **Aviso (Warning):**
> 
> - Se não for possível encontrar um elemento adequado no trecho HTML fornecido, não tente adivinhar ou inventar soluções. Responda apenas: "Não foi possível encontrar o seletor exato com o HTML fornecido. Por favor, inclua mais contexto do DOM."

---

## 💡 Comentário do Autor (Insight)

O verdadeiro poder dessa técnica aparece quando dezenas de testes quebram simultaneamente após um grande deploy. Antigamente, uma simples mudança de classe CSS me obrigava a abrir 30 arquivos diferentes e usar o `Ctrl + F` em cada um deles. Hoje, basta rodar esse prompt no Claude ou no seu assistente de IA integrado, colar o erro e o HTML da aba Elements, e terceirizar perfeitamente esse trabalho braçal. 

O grande "pulo do gato" aqui é a restrição para priorizar atributos "User-Facing". Por padrão, a IA tende a escolher o caminho mais fácil e usar a primeira classe CSS que encontrar. Ao forçarmos essa regra, ela gera códigos impecáveis e maduros como `getByRole('button', { name: 'Submit' })`. Essa é a carta na manga que vai antecipar o fim do seu expediente em pelo menos uma hora. Faça o teste!

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: E se o HTML da página for gigante?**
  - R: Você não precisa copiar a página inteira. Copiar apenas o elemento que causou o erro e a sua tag pai (como o formulário ou a div principal) já é mais do que suficiente para a IA entender o contexto.

- **P: Posso adaptar esse prompt para o Cypress ou Selenium?**
  - R: Com certeza! Basta trocar a palavra 'Playwright' pelo nome do seu framework de automação no prompt e ele funcionará com a mesma eficiência.

- **P: Funciona bem em projetos que não utilizam `data-testid`?**
  - R: Sim. A IA é inteligente o suficiente para buscar alternativas focadas na visão do usuário e em acessibilidade, utilizando locators como `getByRole` ou `getByText`.

---

## 🧬 Anatomia do Prompt (Why it works?)

1. **Atribuição da Persona SDET:** Ao definir o papel de um Engenheiro de Testes de Software especializado (em vez de um dev genérico), induzimos a IA a gerar um código que não apenas resolve o problema momentâneo, mas que adere estritamente às Melhores Práticas de mercado.
2. **Imposição de Locators User-Facing:** Forçamos, diretamente no prompt, a filosofia central do Playwright de reduzir a instabilidade (Flakiness). Isso eleva drasticamente a durabilidade do teste.
3. **Mecanismo de Segurança contra Alucinações (Hallucinations):** Para evitar que a IA invente códigos sem sentido quando faltam informações — o que só pioraria o seu debug —, adicionamos uma restrição explícita de "não adivinhe, peça mais contexto".

---

## 📊 Prova: Antes & Depois (Before & After)

### ❌ Antes (Entrada)

```text
Log de erro:
Error: locator.click: Target closed
=========================== logs ===========================
waiting for locator('.btn-primary.submit-btn')
============================================================

Nova Estrutura HTML:
<div class="actions">
  <button class="button--blue" aria-label="Submit Order">Order Now</button>
</div>

Código de teste original:
await page.locator('.btn-primary.submit-btn').click();
```

### ✅ Depois (Resultado)

```typescript
// Motivo da alteração: A classe CSS ('.btn-primary.submit-btn') mudou, causando a falha no teste.
// Melhoria: Para evitar quebras futuras, substituímos o seletor CSS frágil por um baseado em acessibilidade (Role e ARIA label), tornando o teste altamente resiliente a mudanças visuais.
await page.getByRole('button', { name: 'Submit Order' }).click();
```

---

## 🎯 Conclusão

O código de teste é o seu escudo protetor, mas você não deve gastar todo o seu tempo apenas polindo esse escudo em vez de criar novas funcionalidades. Liberte-se do inferno da manutenção com este prompt de Auto-healing. 

A partir de agora, delegue a correção de seletores para a IA, pegue um café e termine o seu expediente no horário de sempre! 🍷
