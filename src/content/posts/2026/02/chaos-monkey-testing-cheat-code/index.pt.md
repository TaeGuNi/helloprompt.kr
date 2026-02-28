---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Code Hardcore: Transforme a IA no Chaos Monkey da Netflix"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Cansado dos 'Sim, entendi' sem alma da IA? Revelamos o prompt definitivo de defesa impenetrável que força o tratamento implacável de exceções e a recuperação de desastres."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 💣 Cheat Code Hardcore: Transforme a IA no Chaos Monkey da Netflix

- **🎯 Recomendado para:** Seniores irritados com IAs que só entregam o "Happy Path" (caminho feliz) ao pedir testes, ou Juniores sofrendo sem mentoria.
- **⏱️ Tempo gasto:** De virar a noite debugando → para 1 minuto.
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o (Modelos fracos não aguentam essas regras rígidas)
- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

_A maioria dos desenvolvedores comete um erro fatal ao pedir códigos de teste para a IA. Eles dizem "Faça funcionar". É por isso que a IA traz 200 linhas de um Happy Path frágil como uma flor de estufa. Mas o campo de batalha real é um inferno._

Não existe API externa que responda 100% das vezes ou conexão de banco de dados que nunca caia. O cheat code de hoje vai destruir aquela atitude complacente de "yes-man" da IA e forçá-la a escrever código assumindo situações de desastre implacáveis (Chaos). É um prompt nível **"Sênior Espartano"**.

---
## ⚡️ Resumo em 3 linhas (TL;DR)
- 🚫 **Happy Path é só 20%:** Coloque os cenários de funcionamento normal de escanteio e force 80% do foco no tratamento de exceções e recuperação de desastres.
- 🔥 **Simulação de Desastre Obrigatória:** Obrigue a IA a mockar (simular) timeouts de rede, erros HTTP 500 e quedas de conexão do banco de dados.
- 🧹 **Proibido Mocks Globais Sujos:** Proíba a poluição desenfreada com `global.fetch` e permita apenas testes isolados usando MSW ou Injeção de Dependências (DI).

---
## 🚀 A Solução: "Protocolo de Teste Chaos Monkey"

### 🥉 Versão Básica (Basic Version)
Use este prompt quando quiser apenas montar o esqueleto dos testes de tratamento de exceção rapidamente.

> **Papel:** Você é um Engenheiro de QA Sênior implacável.
> **Tarefa:** Escreva o código de teste para `[Alvo do teste]`. Crie apenas 1 cenário de funcionamento normal (Happy Path) e preencha todo o resto com lógica de defesa contra cenários de falha (Failure), como erros de rede, quedas de banco de dados, etc.

### 🥇 Versão Pro (Pro Version)
Este é o cheat code hardcore que apaga a personalidade padrão da IA e injeta a filosofia do Chaos Monkey da Netflix.

> **Papel (Role):** Você é um Engenheiro de Testes Sênior extremo e implacável que acredita cegamente na filosofia 'Chaos Monkey' da Netflix. Deixe de lado a obediência cega ou a falsa simpatia, e pense apenas em como destruir os pontos fracos do meu sistema.
> 
> **Contexto (Context):**
> - Objetivo: Escrever uma suíte de testes (Test Suite) Unitários/E2E com defesa impenetrável para `[Nome da função ou componente a testar]`.
> - Framework: `[Vitest / Jest / Playwright, etc.]`
> 
> **Tarefa (Task):**
> 1. **Death to Happy Paths:** Limite a no máximo 20% do total de testes os cenários ingênuos onde os valores são normais e o servidor externo responde 100%. Dedique os 80% restantes totalmente à defesa contra falhas e situações de exceção.
> 2. **Disaster Scenarios:** Você deve incluir pelo menos um dos seguintes cenários de desastre em um bloco de teste (`describe`):
>    - Atraso de API externa e HTTP 500 Internal Error, validando o retorno de um erro amigável ao usuário e o rollback.
>    - Queda do pool de conexões do DB, validando a prevenção de deadlocks e a lógica de fila de repetição (Retry Queue).
> 3. **Cobertura de Lógica Implacável:** Não verifique apenas se o teste termina sem erros (Pass). Seja obstinado com as declarações `expect`, cobrindo desde o limite de tolerância de atraso de performance (Delay) até o status do Garbage Collection (limpeza de memória) após o erro.
> 
> **Restrições (Constraints):**
> - **The Clean Mocking Rule:** A poluição suja de objetos globais, como `global.fetch = vi.fn().mockRejectedValue(...)`, é estritamente proibida.
> - A simulação de desastres de rede deve obrigatoriamente garantir 100% de isolamento de teste (Isolation), mockando apenas em nível de protocolo, como com MSW (Mock Service Worker), ou mockando objetos de cliente com Injeção de Dependência (DI).
> - Sem Alucinação (Hallucination): Não invente sintaxes ou bibliotecas inexistentes das quais você não tem certeza. Se não souber, exija com confiança: "Forneça a documentação".

*(Também fornecido em bloco de texto para facilitar a cópia!)*

```text
Papel (Role): Você é um Engenheiro de Testes Sênior extremo e implacável que acredita cegamente na filosofia 'Chaos Monkey' da Netflix. Deixe de lado a obediência cega ou a falsa simpatia, e pense apenas em como destruir os pontos fracos do meu sistema.

Contexto (Context):
- Objetivo: Escrever uma suíte de testes (Test Suite) Unitários/E2E com defesa impenetrável para [Nome da função ou componente a testar].
- Framework: [Vitest / Jest / Playwright, etc.]

Tarefa (Task):
1. Death to Happy Paths: Limite a no máximo 20% do total de testes os cenários ingênuos onde os valores são normais e o servidor externo responde 100%. Dedique os 80% restantes totalmente à defesa contra falhas e situações de exceção.
2. Disaster Scenarios: Você deve incluir pelo menos um dos seguintes cenários de desastre em um bloco de teste (`describe`):
   - Atraso de API externa e HTTP 500 Internal Error, validando o retorno de um erro amigável ao usuário e o rollback.
   - Queda do pool de conexões do DB, validando a prevenção de deadlocks e a lógica de fila de repetição (Retry Queue).
3. Cobertura de Lógica Implacável: Não verifique apenas se o teste termina sem erros (Pass). Seja obstinado com as declarações `expect`, cobrindo desde o limite de tolerância de atraso de performance (Delay) até o status do Garbage Collection (limpeza de memória) após o erro.

Restrições (Constraints):
- The Clean Mocking Rule: A poluição suja de objetos globais, como `global.fetch = vi.fn().mockRejectedValue(...)`, é estritamente proibida.
- A simulação de desastres de rede deve obrigatoriamente garantir 100% de isolamento de teste (Isolation), mockando apenas em nível de protocolo, como com MSW (Mock Service Worker), ou mockando objetos de cliente com Injeção de Dependência (DI).
- Sem Alucinação (Hallucination): Não invente sintaxes ou bibliotecas inexistentes das quais você não tem certeza. Se não souber, exija com confiança: "Forneça a documentação".
```

---
## 💡 Comentários do Autor (Insight)
Sejamos honestos. Quando pedimos para a IA escrever um código de teste, no fundo não pensamos "Apenas bata os 100% de cobertura e me dê uma luz verde"? A IA sabe disso, então ela enfileira todo tipo de 'Happy Path' e te bajula dizendo "Concluído com sucesso!". 
**Isso não é engenharia. É jogar açúcar em código espaguete.**

Este prompt é a essência do princípio 'Anti-Frágil' (Anti-Fragile), esculpido com sangue e lágrimas após sofrer inúmeros deadlocks de DB e quedas de servidor no mercado de trabalho. Quando você alimenta a IA com esse cheat code, ela deixa de ser um chatbot dócil e se transforma em um Tech Lead exigente e neurótico. Ela bloqueia na fonte a tentativa preguiçosa de usar mocks globais (como sobrescrever `window.fetch`) e força a configuração de MSW ou DI, então no começo você pode reclamar que o código de configuração ficou longo. 

Mas acredite. Se você não quer ser acordado às 3 da manhã no dia do deploy com um alerta do PagerDuty, você deve tratar a IA não como uma assistente boazinha, mas como um destruidor implacável.

---
## 🙋 Perguntas Frequentes (FAQ)

- **Q: E se a IA fizer um código de configuração do MSW complicado demais?**
  - R: É normal. É o processo de construir um ambiente isolado em vez de mocks globais sujos. Se estiver muito complexo, adicione a condição `[Porém, separe o setup dos handlers do MSW em um arquivo diferente]` na sua Tarefa (Task).
- **Q: Preciso aplicar essa regra rígida para todos os componentes?**
  - R: Não. É um luxo desnecessário para componentes simples de renderização de UI. Lance este prompt apenas nas lógicas de domínio principal que lidam com lógica de pagamento, integrações de terceiros e gerenciamento de estado complexo (Store).
- **Q: Qual modelo obedece melhor, Claude ou GPT?**
  - R: Atualmente, o **Claude 3.5 Sonnet** entende a mensagem perfeitamente. Os modelos GPT tendem a tentar ser estranhamente positivos e amigáveis o tempo todo.

---
## 🧬 Anatomia do Prompt (Why it works?)
- 🎭 **Atribuição Assimétrica de Persona:** Em vez do genérico "Você é um desenvolvedor", injetamos um ego forte de "um Sênior que odeia obediência cega e adora destruir o sistema", suprimindo fisicamente o viés de positividade (Positivity Bias) típico da IA.
- 🚧 **Restrições Explícitas (Constraints):** Proibimos antipadrões como `global.fetch = vi.fn()` apontando o código específico. A IA reage muito melhor a uma ameaça de "se usar este código você morre" do que a um vago "escreva bem".
- ⚖️ **Imposição de Proporções:** Ao definir a restrição numérica "Máximo de 20% para o Happy Path", impedimos totalmente que a IA desperdice tokens produzindo casos desnecessários de funcionamento normal.

---
## 📊 A Prova: Antes & Depois

### ❌ Antes (Pedido Genérico)
```text
"Escreva o código de teste para a função fetchUser que busca os dados do usuário."

Resultado: 
- Teste de parse do texto de resposta 200 OK (Pass)
- Teste se lança erro quando não tem ID (Pass)
... (Um festival de lógicas global.fetch sobrescritas porcamente)
```

### ✅ Depois (Aplicando o Cheat Code do Chaos Monkey)
```text
Resultado:
- [MSW Setup Concluído] Escrita de código de defesa simulando atraso de comunicação da API externa (Timeout 5000ms)
- Validação da lógica de retorno elegante (Fallback UI) após 3 tentativas (Retry) em caso de HTTP 500 Internal Error
- Validação do status de Garbage Collection (sem vazamento de memória) e limpeza do servidor MSW após o fim dos testes
- Teste de fluxo normal (Happy Path) comprimido em apenas 1 caso.
```

---
## 🎯 Conclusão
A IA cospe o código exatamente no nível do prompt que você joga para ela. Se ela vai produzir um código lixo coberto de palavras doces ou criar um escudo robusto que impedirá o desastre das 3 da manhã, isso está na ponta dos seus dedos.
Agora copie este cheat code e conecte-o ao seu agente. E pode encerrar o expediente! 🍷
