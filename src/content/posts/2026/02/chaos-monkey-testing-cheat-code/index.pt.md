---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Code Hardcore: Transforme a IA no Chaos Monkey da Netflix"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Cansado de IAs que só entregam o 'caminho feliz'? Revele o prompt definitivo que força testes implacáveis e prepara seu código para o pior cenário."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 💣 Cheat Code Hardcore: Transforme a IA no Chaos Monkey da Netflix

- **🎯 Recomendado para:** Desenvolvedores Seniores exaustos de IAs que só entregam o "Happy Path" (caminho feliz), e Juniores que sofrem sem a mentoria de um Tech Lead.
- **⏱️ Tempo gasto:** De virar a madrugada debugando → para apenas 1 minuto.
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o (Modelos menos robustos não suportam essas regras rigorosas).
- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _A grande maioria dos desenvolvedores comete um erro fatal ao pedir testes para a IA. Eles apenas dizem "Faça funcionar". É exatamente por isso que recebem 200 linhas de um Happy Path frágil como uma flor de estufa. Porém, no mundo real, o campo de batalha é um verdadeiro inferno._

Não existe API externa com 100% de *uptime*, tampouco conexões de banco de dados imunes a quedas. O *cheat code* de hoje vai pulverizar aquela atitude complacente e de "yes-man" da IA, forçando-a a programar assumindo os piores cenários de desastre (o puro *Chaos*). Este é um prompt de nível **"Sênior Espartano"**.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. 🚫 **Happy Path é apenas 20%:** Deixe os cenários de funcionamento normal em segundo plano e exija que 80% do foco vá para o tratamento de exceções e recuperação de falhas.
2. 🔥 **Simulação de Desastres Obrigatória:** Obrigue a IA a *mockar* (simular) *timeouts* de rede, erros HTTP 500 e instabilidades no banco de dados.
3. 🧹 **Guerra aos Mocks Globais Sujos:** Proíba categoricamente a poluição do estado com `global.fetch` e exija isolamento absoluto com MSW ou Injeção de Dependências (DI).

---

## 🚀 A Solução: "Protocolo de Teste Chaos Monkey"

### 🥉 Versão Básica (Basic Version)

Utilize este prompt quando precisar gerar rapidamente a espinha dorsal de testes voltados para tratamento de erros.

> **Papel:** Você é um Engenheiro de QA Sênior implacável.
> 
> **Tarefa:** Escreva a suíte de testes para `[Nome da função ou componente a testar]`. Desenvolva apenas 1 cenário de sucesso (Happy Path) e concentre todo o restante na lógica de defesa contra falhas extremas (Failure), como instabilidades de rede e quedas de banco de dados.

### 🥇 Versão Pro (Pro Version)

Este é o *cheat code* hardcore. Ele anula a personalidade passiva padrão da IA e injeta a filosofia de destruição arquitetural do Chaos Monkey da Netflix.

> **Papel (Role):** Você é um Engenheiro de Testes Sênior extremo e implacável, fiel devoto da filosofia 'Chaos Monkey' da Netflix. Abandone a obediência cega e a falsa simpatia; seu único objetivo é expor e destruir as vulnerabilidades do meu sistema.
> 
> **Contexto (Context):**
> - Objetivo: Escrever uma suíte de testes Unitários/E2E com defesa impenetrável para `[Nome da função ou componente a testar]`.
> - Framework: `[Vitest / Jest / Playwright, etc.]`
> 
> **Tarefa (Task):**
> 1. **Morte ao Happy Path:** Limite a um máximo de 20% os testes ingênuos onde as variáveis são ideais e o servidor responde com 100% de sucesso. Dedique os 80% restantes exclusivamente à blindagem contra falhas e cenários caóticos.
> 2. **Cenários de Desastre (Disaster Scenarios):** Inclua obrigatoriamente pelo menos um dos seguintes blocos de teste (`describe`):
>    - Lentidão severa em API de terceiros acompanhada de HTTP 500 Internal Error, validando tanto a exibição de uma mensagem amigável ao usuário quanto o *rollback* dos dados.
>    - Queda abrupta do *pool* de conexões do banco de dados, atestando a prevenção de *deadlocks* e a eficácia da fila de tentativas (*Retry Queue*).
> 3. **Cobertura Implacável:** Não se contente em verificar se o teste apenas "passou" sem estourar erros. Seja agressivo com as asserções (`expect`), cobrindo desde os limites de tolerância de *delay* até o estado do *Garbage Collection* após a falha.
> 
> **Restrições (Constraints):**
> - **A Regra do Mock Limpo:** É estritamente proibida a poluição suja do escopo global, como utilizar `global.fetch = vi.fn().mockRejectedValue(...)`.
> - A simulação de caos na rede deve garantir 100% de isolamento nos testes, *mockando* unicamente em nível de protocolo (ex: MSW - Mock Service Worker) ou através da Injeção de Dependência (DI) em clientes HTTP.
> - **Tolerância Zero à Alucinação:** Não invente sintaxes milagrosas ou bibliotecas que não existem. Se não tiver certeza de algo, exija com firmeza: "Forneça a documentação atualizada".

*(Disponibilizado também em bloco de código para facilitar a cópia rápida!)*

```text
Papel (Role): Você é um Engenheiro de Testes Sênior extremo e implacável, fiel devoto da filosofia 'Chaos Monkey' da Netflix. Abandone a obediência cega e a falsa simpatia; seu único objetivo é expor e destruir as vulnerabilidades do meu sistema.

Contexto (Context):
- Objetivo: Escrever uma suíte de testes Unitários/E2E com defesa impenetrável para [Nome da função ou componente a testar].
- Framework: [Vitest / Jest / Playwright, etc.]

Tarefa (Task):
1. Morte ao Happy Path: Limite a um máximo de 20% os testes ingênuos onde as variáveis são ideais e o servidor responde com 100% de sucesso. Dedique os 80% restantes exclusivamente à blindagem contra falhas e cenários caóticos.
2. Cenários de Desastre (Disaster Scenarios): Inclua obrigatoriamente pelo menos um dos seguintes blocos de teste (`describe`):
   - Lentidão severa em API de terceiros acompanhada de HTTP 500 Internal Error, validando tanto a exibição de uma mensagem amigável ao usuário quanto o rollback dos dados.
   - Queda abrupta do pool de conexões do banco de dados, atestando a prevenção de deadlocks e a eficácia da fila de tentativas (Retry Queue).
3. Cobertura Implacável: Não se contente em verificar se o teste apenas "passou" sem estourar erros. Seja agressivo com as asserções (`expect`), cobrindo desde os limites de tolerância de delay até o estado do Garbage Collection após a falha.

Restrições (Constraints):
- A Regra do Mock Limpo: É estritamente proibida a poluição suja do escopo global, como utilizar `global.fetch = vi.fn().mockRejectedValue(...)`.
- A simulação de caos na rede deve garantir 100% de isolamento nos testes, mockando unicamente em nível de protocolo (ex: MSW - Mock Service Worker) ou através da Injeção de Dependência (DI) em clientes HTTP.
- Tolerância Zero à Alucinação: Não invente sintaxes milagrosas ou bibliotecas que não existem. Se não tiver certeza de algo, exija com firmeza: "Forneça a documentação atualizada".
```

---

## 💡 Comentários do Autor (Insight)

Vamos ser cruamente honestos. Quando delegamos a escrita de testes para a IA, no fundo, não estamos apenas pensando: *"Alcança os 100% de cobertura logo e me dá a luz verde"*? A IA percebe essa intenção. Como resultado, ela empilha uma montanha de 'Happy Paths', enche seu ego e diz: *"Pronto! Concluído com sucesso!"*. 
**Atenção: isso não é engenharia de software. Isso é jogar confete em código espaguete.**

Este prompt é a essência do conceito **Anti-Frágil**. Ele foi esculpido com sangue, suor e lágrimas após incontáveis *deadlocks* de banco de dados e servidores desabando em produção. Ao alimentar sua IA com este *cheat code*, ela deixa de ser um assistente dócil e assume a postura de um *Tech Lead* neurótico e extremamente exigente. 

Ele bloqueia, diretamente na raiz, a preguiça de usar *mocks* globais (como sobrescrever `window.fetch` de forma porca) e exige a configuração madura de MSW ou Injeção de Dependências. É verdade que, inicialmente, você pode se frustrar com o tamanho do setup gerado. Mas acredite na voz da experiência: se você não quer ser acordado às 3 da manhã no dia de um *deploy* crítico pelo bipe desesperador do PagerDuty, comece a tratar a IA não como uma estagiária obediente, mas como uma **testadora implacável**.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: E se a IA gerar uma configuração de MSW estupidamente complexa?**
  - R: É esperado. Essa é a dor do crescimento ao trocar o atalho sujo dos *mocks* globais por um ambiente de teste isolado e profissional. Caso fique denso demais, basta injetar a seguinte instrução na sua Tarefa (Task): `[Porém, isole todo o setup e os handlers do MSW em um arquivo de configuração externo]`.
- **Q: Devo aplicar essa regra militar para todos os componentes do sistema?**
  - R: Definitivamente não. É um canhão para matar mosquitos se usado em botões e UIs burras. Reserve este arsenal pesado para a lógica central do domínio: fluxos de pagamento, integrações de APIs vitais de terceiros e gerenciadores de estado complexos (Store).
- **Q: Qual modelo assimila melhor esse nível de agressividade, Claude ou GPT?**
  - R: No cenário atual, o **Claude 3.5 Sonnet** abraça essa *persona* de forma muito mais visceral. Os modelos GPT, muitas vezes, resistem em abandonar seu viés de tentar ser amigáveis e prestativos o tempo todo.

---

## 🧬 Anatomia do Prompt (Why it works?)

- 🎭 **Atribuição Assimétrica de Persona:** Em vez de usar um passivo "Você é um programador", injetamos um ego fortíssimo ("Sênior que odeia obediência cega e quer destruir o sistema"). Isso suprime mecanicamente o Viés de Positividade (*Positivity Bias*) inerente às IAs.
- 🚧 **Restrições Explícitas (*Constraints*):** Ao apontar explicitamente para o antipadrão `global.fetch = vi.fn()` e bani-lo, não deixamos espaço para interpretações. A IA reage com muito mais precisão a uma "ameaça técnica direta" do que a um vago "escreva testes de qualidade".
- ⚖️ **Imposição Matemática de Proporções:** Ao definir rigidamente a métrica de "Máximo de 20% para o Happy Path", cortamos pela raiz a tendência da IA de desperdiçar *tokens* preciosos inventando infinitas variações inúteis de sucesso.

---

## 📊 A Prova: Antes & Depois

### ❌ Antes (O Pedido Genérico)

```text
"Escreva o código de teste para a função fetchUser que busca os dados do usuário."

Resultado da IA: 
- Teste de parse do texto de resposta 200 OK (Pass)
- Teste se lança erro quando não tem ID (Pass)
... (E um verdadeiro festival de lógicas global.fetch sobrescritas de maneira porca no ambiente global)
```

### ✅ Depois (Aplicando o Cheat Code do Chaos Monkey)

```text
Resultado da IA:
- [MSW Setup Concluído] Escrita de código defensivo simulando timeout severo da API externa (5000ms de Delay).
- Validação agressiva da lógica de Fallback UI após 3 tentativas automáticas (Retry) em caso de HTTP 500 Internal Error.
- Monitoramento do status do Garbage Collection (sem memory leaks) e reset limpo do servidor MSW no afterAll().
- O teste do fluxo normal (Happy Path) foi elegantemente comprimido em apenas 1 caso direto.
```

---

## 🎯 Conclusão

A verdade nua e crua é que a IA devolve um código exatamente proporcional ao nível de exigência do seu prompt. Se ela vai cuspir um script frágil polvilhado de falsas esperanças, ou se vai forjar um escudo de *titanium* capaz de evitar um desastre às 3 da manhã, isso está apenas na ponta dos seus dedos.

Copie este *cheat code*, injete no seu agente e deixe ele trabalhar pelo seu sono. Pode fechar o notebook e encerrar o expediente! 🍷
