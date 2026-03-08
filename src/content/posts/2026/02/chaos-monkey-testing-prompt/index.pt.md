---
layout: /src/layouts/Layout.astro
title: "Prompt de Teste Chaos Monkey para Torturar a IA 💣 (O Happy Path Morreu)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Cansado de IAs que só entregam 'sucesso' ilusório? Este cheat code hardcore força falhas reais para testar a verdadeira resiliência do seu sistema."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 📝 Prompt de Teste Chaos Monkey para Torturar a IA 💣

- **🎯 Público-Alvo:** Desenvolvedores Seniores, Engenheiros de QA e Tech Leads exaustos de IAs que se dizem especialistas, mas só entregam o *happy path*.
- **⏱️ Tempo Necessário:** De 10 minutos → 10 segundos (Corta a enrolação da IA pela raiz)
- **🤖 Modelos Recomendados:** Todas as IAs conversacionais (Especialmente Claude 3.5 Sonnet e GPT-4o, imbatíveis em código)

- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilidade:** ⭐⭐⭐⭐⭐

> _"Você fica aliviado quando o teste gerado pela IA passa de primeira? Meus pêsames. Seu servidor de produção vai cair amanhã."_

Peça a uma IA para escrever testes e, em 9 de cada 10 vezes, ela entregará apenas cenários de *happy path* perfeitamente utópicos. É um conto de fadas onde APIs externas respondem em 0,1 milissegundos, o banco de dados nunca falha e o usuário sempre insere dados imaculados. Esqueça isso. O código que realmente precisamos é um escudo intransponível, capaz de repelir 80% das falhas críticas e desastres em produção. O *cheat code* que apresentamos aqui é um prompt hardcore: ele agarra a IA pelo colarinho e injeta, à força, a implacável filosofia do *Chaos Monkey* da Netflix diretamente na sua suíte de testes.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

- 🚫 **O *Happy Path* é só 20%:** Testes que passam no cenário ideal são apenas enfeite; concentre 80% do seu esforço em blindar o sistema contra cenários de falha.
- 💥 **Simulação de Desastres Obrigatória:** Você deve forçar a IA a incluir *timeouts* de rede, erros HTTP 500 e quedas de conexão com o banco de dados nos blocos de teste.
- 🧹 **Proibido Dirty Mocking:** Puna severamente qualquer tentativa de poluir objetos globais (como `window.fetch`) e exija um isolamento cirúrgico através de MSW ou Injeção de Dependências (DI).

---

## 🚀 Solução: "Protocolo Chaos Monkey"

### 🥉 Versão Básica

Use esta versão quando precisar injetar testes de tratamento de erros rapidamente.

> **Papel:** Você é um Engenheiro de QA hardcore e impiedoso, um verdadeiro *Chaos Monkey*.
> 
> **Tarefa:** Escreva o código de teste para o `[código-fonte]` que forneci. Crie apenas 1 cenário de funcionamento normal (*Happy Path*). Para todo o resto, assuma o absoluto pior cenário – erros HTTP 500 de rede, *timeouts* de banco de dados, entradas com tipos inválidos, etc. – e valide rigorosamente a lógica de defesa.

### 🥇 Versão Profissional

O *cheat code* definitivo. Ele elimina a bajulação superficial da IA, garantindo isolamento absoluto dos testes e verificando o *garbage collection* em nível de produção. Copie e cole exatamente como está.

> **Papel (Role):** 
> Você é um SRE implacável, ex-Netflix, e um Arquiteto de QA Sênior apelidado de 'Chaos Monkey'. Você sente um prazer sádico em encontrar código que quebra, não código que funciona. Pule as saudações educadas e vá direto ao ponto.
> 
> **Contexto (Context):**
> - Cenário: Preciso que você escreva testes Unitários/E2E para o `[módulo ou componente a ser testado]`.
> - Objetivo: Construir uma suíte de testes extrema e blindada para garantir que o sistema não trave e consiga se recuperar com elegância (ou tratar os erros graciosamente) sob qualquer cenário catastrófico.
> 
> **Tarefa (Task):**
> 1. Limite o *Happy Path* a estritos 20% do total de testes. O seu real valor está em validar os 80% focados em cenários de falha crítica.
> 2. Você DEVE incluir, no mínimo, um dos seguintes cenários de desastre: *Timeout* de comunicação com a API externa, erro HTTP 500 Internal Server Error ou desconexão abrupta do banco de dados.
> 3. Não se limite a verificar Pass/Fail. Seja agressivo com o `expect` para garantir estritamente que: o *rollback* de erros funcione de forma impecável, os limites de *timeout* sejam respeitados durante gargalos de performance, e que a limpeza de memória (*garbage collection*) ocorra sem vazamentos.
> 
> **Restrições (Constraints):**
> - NUNCA polua objetos globais (*Dirty Mocking*)! Se você tentar sobrescrever `global.fetch` ou `window.setTimeout` de forma direta, encerrarei o processo imediatamente.
> - Para *mocking* de rede, você DEVE utilizar o MSW (Mock Service Worker) ou isolar/mockar exclusivamente os objetos clientes injetados via DI (Injeção de Dependências).
> - Forneça a saída APENAS em um bloco de código Markdown. NUNCA adicione rodapés inúteis como "Isso foi útil para você?".

---

## 💡 Comentário do Autor (Insight)

Sejamos francos. Quando você pede a uma IA para escrever testes, ela foge para uma utopia particular só para exibir aquele *check* verde (✅) na tela. Um mundo mágico onde as APIs respondem em 1ms e os usuários só enviam *payloads* JSON imaculados. 

Este prompt incendeia essa utopia. No mundo real, os servidores não caem por erros de lógica bobos; eles colapsam porque aquela API de terceiros **"superconfiável"** de repente cospe um *502 Bad Gateway*, ou porque o sistema entra num *loop* de carregamento infinito e estúpido quando as conexões do AWS RDS oscilam. Ao usar este *cheat code* do Chaos Monkey, a IA será forçada a escavar ativamente os *edge cases* mais obscuros e a bloquear totalmente as táticas de *mocking* amadoras que poluem o escopo global. É, literalmente, a única vacina que vai salvar seus finais de semana e madrugadas de *debugging* desesperado.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: E se a IA criar cenários de erro tão complexos que os testes nem consigam rodar?**
  - R: Esse é exatamente o objetivo. Se o teste estourar, significa que falta lógica robusta de tratamento de erros no seu código de produção. Pare de reclamar e conserte a aplicação principal.
- **P: Posso usar isso para testes de componentes no front-end também?**
  - R: Absolutamente. Force a validação de situações insanas, como um usuário clicando freneticamente num botão de *submit* 50 vezes em 0,1 segundos, ou quando o *spinner* de carregamento fica travado por 30 segundos devido à alta latência da rede.
- **P: Posso usar `jest.mock()` em vez do MSW?**
  - R: Fazer *mock* de módulos não é o problema. O que eu repudio profundamente é a alteração arbitrária do escopo `global`, espalhando inconsistências para outros arquivos de teste. Desde que o isolamento (*isolation*) seja rigorosamente garantido, use a ferramenta de sua preferência.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

- **Persona Implacável (Role):** Arranca a máscara de 'assistente amigável' da IA e implanta o ego calculista de um Arquiteto SRE sedento por falhas, bloqueando qualquer bajulação ou conversa inútil logo de cara.
- **Restrições Quantificadas (Constraints):** Em vez de usar jargões vagos como "adicione muitos cenários de falha", o prompt fornece uma métrica exata ("*Happy Path* abaixo de 20%"), forçando mecanicamente a proporção de cobertura da IA.
- **Diretrizes de Arquitetura (Clean Mocking):** Proíbe agressivamente o *anti-pattern* (poluição de objeto global) que a IA costuma cometer por pura preguiça, elevando à força a qualidade e o isolamento arquitetural do código de teste.

---

## 📊 Prova: Before & After

### ❌ Before (Entrada)
- **Postura da IA com um prompt normal:** _"Claro! Terei o maior prazer em escrever os testes para a sua lógica de login! 😊"_
- **Resultado:** Um único teste bonitinho e inútil que retorna `200 OK` quando você insere e-mail e senha corretos. (E, como de costume, ela sobrescreveu o `fetch` global no processo).

### ✅ After (Resultado)
- **Postura da IA com o cheat code Chaos Monkey:** (Cospe o código de defesa imediatamente, sem nenhuma saudação irrelevante).
- **Resultado:** 
  - Valida rigorosamente se um `TimeoutError` é disparado corretamente quando a rede atrasa mais de 5 segundos.
  - Verifica se uma *fallback UI* de segurança é renderizada para o usuário quando o banco de dados cai e retorna um erro HTTP 500.
  - Garante um isolamento de rede cirúrgico utilizando o MSW, sem vazar efeitos colaterais para absolutamente nenhum outro arquivo de teste da suíte.

---

## 🎯 Conclusão

O código de teste não é escrito para lhe dar paz de espírito. Ele é uma simulação brutal, projetada para provar se a sua aplicação consegue sobreviver no inferno absoluto que é o ambiente de produção real. 

Não se deixe enganar pela complacência barata da IA. Espremer o modelo de linguagem com este prompt e bombardear as fundações do seu próprio sistema é a única maneira de sobreviver como um verdadeiro engenheiro de software de elite. Chegou a hora de encarar a dura realidade de quão frágil o seu código realmente era. Copie isso agora mesmo e rode a sua suíte de testes! 🍷
