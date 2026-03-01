---
layout: /src/layouts/Layout.astro
title: "Testes E2E parando por causa de erros? Resolva em 1 minuto com o prompt de Auto-healing do Playwright 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "Revelamos um prompt prático para recuperar automaticamente com IA os testes do Playwright que quebram devido a mudanças de seletores."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 Testes E2E parando por causa de erros? Resolva em 1 minuto com o prompt de Auto-healing do Playwright 🛠️

- **🎯 Público-alvo:** Engenheiros de QA, Desenvolvedores Front-end, Especialistas em Automação de Testes
- **⏱️ Tempo economizado:** De 2 horas → para 1 minuto
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

_"Aquele teste E2E que estava rodando perfeitamente até ontem, hoje de manhã falhou por completo só porque a classe CSS de um botão mudou. Preciso ir procurar o seletor de novo?"_
Ao trabalhar com desenvolvimento front-end ou QA, é rotina ver os testes E2E (End-to-End) quebrarem devido a alterações na interface do usuário (UI). Especialmente ao usar ferramentas como Playwright ou Cypress, se a estrutura do DOM ou o nome da classe mudar, o código de teste fatalmente apresentará um erro. O processo de ir até cada teste quebrado, abrir as ferramentas de desenvolvedor e copiar um novo seletor a cada vez é uma enorme perda de tempo. Agora, vamos fazer com que a IA realize o 'Auto-healing' (autocura) automaticamente, fornecendo a ela apenas o log de erro e a estrutura HTML alterada.
---
## ⚡️ Resumo em 3 linhas (TL;DR)
1. Este é um prompt onde a IA analisa e recupera por conta própria seletores do Playwright quebrados por mudanças na UI.
2. Além de simplesmente corrigir o código, você pode obter sugestões de estratégias de escrita de seletores resilientes (Resilient) contra alterações.
3. Fornecendo apenas o log de erro e o snapshot mais recente do DOM, você pode obter o código recuperado em menos de 1 minuto.
---
## 🚀 A Solução: "Prompt de Auto-healing do Playwright"

### 🥉 Versão Básica (Basic Version)
Use esta versão quando quiser apenas fornecer o código quebrado e a mensagem de erro rapidamente para receber o código corrigido.
> **Papel:** Você é um `[Engenheiro de QA Sênior]`.
> **Tarefa:** Com base no log de erro do Playwright e no novo HTML fornecidos, corrija o `[Código de teste quebrado]`.
### 🥇 Versão Profissional (Pro Version)
Use esta versão quando quiser ir além de uma simples correção e refatorar para um código robusto e fácil de manter.
> **Papel (Role):** Você é um `[SDET Sênior (Software Development Engineer in Test)]` especializado em automação de testes. Você entende perfeitamente as melhores práticas (Best Practices) do Playwright.
> 
> **Contexto (Context):**
> 
> - Cenário: Devido a uma atualização recente na UI, os testes E2E existentes do Playwright estão falhando. A causa principal é a alteração de seletores (Selectors).
> - Objetivo: Recuperar o código de teste que falhou e melhorá-lo para uma estrutura de seletores robusta (Resilient) e menos propensa a quebrar com futuras alterações na UI.
> 
> **Tarefa (Task):**
> 
> 1. Analise o `[Log de erro]` e a `[Estrutura HTML alterada]` fornecidos abaixo para identificar a causa raiz do erro.
> 2. Modifique o `[Código de teste existente]` para que o teste volte a passar.
> 3. Ao modificar, priorize o uso de atributos voltados para o usuário (User-Facing) (como texto, atributos ARIA, data-testid, etc.) em vez de depender de classes CSS ou XPath.
> 4. Adicione comentários curtos no código explicando "por que essa alteração foi feita" nas partes modificadas.
> 
> **Dados de entrada:**
> - Log de erro: `[Copiar/colar o log de erro completo]`
> - Estrutura HTML alterada: `[Trecho HTML relevante copiado das ferramentas de desenvolvedor]`
> - Código de teste existente: `[Trecho do código do Playwright que falhou]`
> 
> **Restrições (Constraints):**
> 
> - A saída deve ser fornecida em um formato de bloco de código completo, pronto para ser copiado e colado imediatamente.
> - Utilize os Locators integrados do Playwright (ex: `getByRole`, `getByText`, `getByTestId`) como prioridade máxima.
> 
> **Aviso (Warning):**
> 
> - Se não for possível encontrar um elemento adequado no trecho HTML fornecido, não tente adivinhar. Responda com: "Não é possível encontrar o seletor exato devido à falta de informações no HTML. Por favor, forneça mais informações do DOM."
---

## 💡 Comentário do Autor (Insight)
Esse método mostra seu verdadeiro valor na prática quando dezenas de testes quebram ao mesmo tempo. No passado, se um seletor mudasse, eu costumava abrir 30 arquivos de teste e procurar com `Ctrl + F` um por um para corrigi-los. Porém, ao registrar esse prompt em uma IA integrada à IDE ou no Claude, e apenas passar o log de erro junto com uma cópia da aba Elements do navegador, é possível terceirizar perfeitamente esse trabalho tedioso de extração de seletores.
O ponto crucial aqui é a restrição "Use atributos voltados para o usuário (User-Facing)". A IA, por padrão, tende a focar na classe CSS mais fácil. Mas, ao impor essa restrição, ela gera um código excelente, como `getByRole('button', { name: 'Submit' })`. Esta é uma arma que vai antecipar o seu horário de saída do trabalho em pelo menos 1 hora. Experimente!
---

## 🙋 Perguntas Frequentes (FAQ)
- **P: E se a estrutura HTML for muito longa?**
  - R: Não é necessário copiar a página inteira. Copiar e fornecer até a tag pai do elemento que causou o erro (ex: botão ou formulário) é suficiente.
- **P: Posso usar isso com Cypress ou Selenium em vez do Playwright?**
  - R: Sim, basta substituir a palavra 'Playwright' no prompt pelo nome da ferramenta que você usa, e funcionará perfeitamente da mesma forma.
- **P: Funciona bem em projetos que não possuem `data-testid`?**
  - R: Sim, a IA encontra de forma inteligente alternativas baseadas em acessibilidade, como `getByRole` ou `getByText`.
---
## 🧬 Anatomia do Prompt (Why it works?)
1. **Atribuição da Persona SDET:** Ao dar a perspectiva de um engenheiro especialista em testes, em vez de um desenvolvedor comum, induzimos a criação de um código que não apenas funciona, mas que segue as Melhores Práticas do Playwright.
2. **Imposição de Locators User-Facing:** Elevamos a qualidade ao forçar, no nível do prompt, a filosofia central do Playwright, que reduz fundamentalmente a instabilidade (Flakiness) dos testes.
3. **Mecanismo de Segurança contra Alucinações:** Para evitar a geração de código sem sentido quando faltam informações — o que tornaria o debug ainda mais complicado — aplicamos uma restrição explícita de "diga que não sabe se não souber".
---
## 📊 Prova: Antes & Depois (Before & After)
### ❌ Antes (Entrada)
```text
Log de erro:
Error: locator.click: Target closed
=========================== logs ===========================
waiting for locator('.btn-primary.submit-btn')
============================================================
Estrutura HTML alterada:
<div class="actions">
  <button class="button--blue" aria-label="Submit Order">Order Now</button>
</div>
Código de teste existente:
await page.locator('.btn-primary.submit-btn').click();
```
### ✅ Depois (Resultado)
```typescript
// Motivo da alteração: A classe CSS ('.btn-primary.submit-btn') foi alterada, fazendo o teste falhar.
// Melhoria: Em vez de classes CSS suscetíveis a mudanças, utilizamos propriedades de acessibilidade (ARIA label) e Role para tornar o código resiliente a alterações na UI.
await page.getByRole('button', { name: 'Submit Order' }).click();
```
---
## 🎯 Conclusão
O código de teste é o escudo que protege o código do produto, mas você não deve perder muito tempo polindo esse escudo. Liberte-se do inferno da manutenção com o prompt de Auto-healing alimentado por IA.
Agora, deixe o tempo de corrigir testes para a IA, aproveite um café e termine seu expediente no horário! 🍷
