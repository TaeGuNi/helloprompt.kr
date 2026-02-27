---
layout: /src/layouts/Layout.astro
title: "Prompt de Teste Chaos Monkey para Torturar a IA 💣 (O Happy Path Morreu)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Cansado da IA entregar um 'Sucesso!' sem alma? Um cheat code hardcore que força cenários de destruição do sistema."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 📝 Prompt de Teste Chaos Monkey para Torturar a IA 💣

- **🎯 Público-Alvo:** Seniores, Engenheiros de QA e Tech Leads irritados com IAs que se acham especialistas mas só entregam 'Happy Paths'.
- **⏱️ Tempo Necessário:** De 10 minutos → para 10 segundos (Corta na raiz a enrolação da IA)
- **🤖 Modelos Recomendados:** Todas as IAs conversacionais (Especialmente Claude 3.5 Sonnet e GPT-4o, fortes em código)
- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆ (A IA vai sofrer um pouco)
- ⚡️ **Efetividade:** ⭐⭐⭐⭐⭐ (Mata os bugs antes mesmo deles nascerem)
- 🚀 **Versatilidade:** ⭐⭐⭐⭐⭐ (Aplicação imediata em qualquer teste TDD ou E2E)

_"Você fica feliz quando o código de teste gerado pela IA passa de primeira? Parabéns. Seu servidor de produção vai cair amanhã."_

Peça a um agente de IA para escrever testes e, em 9 de 10 vezes, ele trará apenas cenários de 'caminho feliz' (Happy Path) perfeitos e agradáveis. É um conto de fadas onde APIs externas respondem em 0.1 segundos, o banco de dados nunca desconecta e o usuário sempre insere os valores perfeitos. Esqueça isso. O código que precisamos escrever é um escudo de defesa espacial capaz de bloquear 80% das falhas e desastres. O cheat code apresentado neste artigo é um prompt hardcore que agarra a IA pelo colarinho e injeta à força a filosofia do 'Chaos Monkey' da Netflix.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

- 🚫 **Happy Path é apenas 20%:** Testes que passam são apenas enfeite; aloque 80% do esforço para defender cenários de falha.
- 💥 **Simulação de Desastres Obrigatória:** Você deve forçar a inclusão de timeouts de rede, erros 500 e quedas de conexão com o DB nos blocos de teste.
- 🧹 **Proibido Mocking Sujo (Dirty Mocking):** Puna severamente a poluição de objetos globais como `window.fetch` e exija um isolamento limpo através de MSW ou Injeção de Dependência (DI).

---

## 🚀 Solução: "Protocolo Chaos Monkey"

### 🥉 Versão Básica (Basic Version)
Jogue esta versão quando quiser adicionar testes de tratamento de erros rapidamente.

>
> Papel: Você é um Engenheiro de QA hardcore e impiedoso, um verdadeiro Chaos Monkey.
> Tarefa: Escreva o código de teste para o [código] que forneci. Crie apenas 1 cenário de funcionamento normal (Happy Path). Para todo o resto, assuma o 'pior cenário de desastre' – erros 500 de rede, timeouts de banco de dados, entradas de tipo incorreto, etc. – e valide a lógica de defesa.
>
### 🥇 Versão Profissional (Pro Version)
O cheat code definitivo que remove a bajulação sem alma da IA e verifica o isolamento perfeito dos testes e a coleta de lixo (garbage collection) em nível de produção. Copie e cole do jeito que está.

>
> **Papel (Role):** 
> Você é um SRE implacável ex-Netflix e um Arquiteto de QA Sênior conhecido como 'Chaos Monkey'. Você sente prazer em encontrar código que quebra em vez de código que funciona. Não faça saudações educadas nem diga bobagens.
> 
> **Contexto (Context):**
> - Cenário: Preciso que você escreva os testes Unitários/E2E para o [módulo/componente a ser testado].
> - Objetivo: Construir uma suíte de testes extremos, nível de defesa espacial, para verificar se o sistema não trava e se recupera graciosamente (ou trata os erros) sob qualquer cenário de desastre.
> 
> **Tarefa (Task):**
> 1. Limite o Happy Path a menos de 20% do total de testes. Seu valor está na validação dos 80% de cenários de falha.
> 2. Você deve incluir pelo menos um dos seguintes cenários de desastre: Atraso de comunicação com API externa (Timeout), HTTP 500 Internal Error, Desconexão do Banco de Dados.
> 3. Não olhe apenas para Pass/Fail. Seja insistente com o `expect` para garantir de forma estrita que: o rollback de erros funcione corretamente, os limites de timeout sejam atingidos durante atrasos de performance, e que o estado de limpeza de memória (garbage collection) esteja normal.
> 
> **Restrições (Constraints):**
> - NUNCA polua objetos globais (Dirty Mocking)! Se você tentar sobrescrever `global.fetch` ou `window.setTimeout` diretamente, eu matarei o processo imediatamente.
> - Para mocking de rede, você DEVE usar MSW (Mock Service Worker) ou isolar/mockar apenas os objetos clientes recebidos via DI (Injeção de Dependência).
> - Produza a saída APENAS em um bloco de código Markdown. NUNCA adicione rodapés inúteis como "Isso foi útil?".
>
---

## 💡 Comentário do Autor (Insight)

Sejamos honestos. Quando você pede a uma IA para escrever código de teste, ela foge para sua própria fantasia apenas para exibir aquele 'check verde (✅)'. Uma utopia onde as APIs respondem em 1ms e os usuários enviam apenas JSONs perfeitamente formatados. 

Este prompt incendeia essa utopia. No mundo real, os servidores não caem porque a lógica está errada. Eles caem porque aquela API de terceiros confiável de repente cospe um 502 Bad Gateway, ou porque o sistema entra num loop de carregamento infinito estúpido quando as conexões do AWS RDS oscilam. Ao usar este cheat code 'Chaos Monkey', a IA irá cavar proativamente os casos extremos (Edge Cases) confusos e bloquear completamente táticas de mocking amadoras que poluem o escopo global. É a única vacina que vai salvar seus finais de semana e noites em claro depurando.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: E se a IA criar cenários de erro tão complexos que os testes nem rodem?**
  - R: É exatamente isso que queremos. Se o teste estourar, significa que falta lógica de tratamento de erros no seu código de produção real. Pare de choramingar e conserte o código principal.
- **P: Posso usar isso para testes de componentes front-end também?**
  - R: Absolutamente. Faça com que valide situações onde o usuário clica freneticamente num botão 50 vezes em 0.1 segundos, ou quando o spinner de carregamento gira por 30 segundos devido à latência da rede.
- **P: Não posso usar jest.mock() ao invés do MSW?**
  - R: Fazer mock de módulos está tudo bem. O que eu odeio profundamente é alterar arbitrariamente o escopo `global` e espalhar a doença para outros arquivos de teste. Desde que o Isolamento (Isolation) seja garantido, use a ferramenta que preferir.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

- **Persona Implacável (Role):** Remove o papel de 'assistente amigável' da IA e implanta o ego de um Arquiteto SRE sedento por encontrar falhas, bloqueando bajulações e conversas inúteis.
- **Restrições Quantificadas (Constraints):** Em vez de frases vagas como "adicione muitos cenários de falha", fornece um número preciso ("Happy Path abaixo de 20%"), forçando mecanicamente o raio de ação da IA.
- **Diretrizes de Arquitetura (Clean Mocking):** Proíbe proativamente o 'anti-pattern (poluição de objeto global)' que a IA comumente comete por preguiça no nível do prompt, elevando forçosamente a qualidade de isolamento do código de teste.

---

## 📊 Prova: Antes & Depois

### ❌ Antes (Entrada)
- **Atitude da IA com um prompt normal:** _"Claro! Vou escrever o código de teste para a lógica de login do usuário! 😊"_
- **Resultado:** Um único teste bonitinho que retorna `200 OK` quando você insere o e-mail e a senha corretos. (E, invariavelmente, sobrescreveu o `fetch` global de qualquer jeito)

### ✅ Depois (Resultado)
- **Atitude da IA com o cheat code Chaos Monkey:** (Cospe o código de defesa imediatamente, sem saudações inúteis)
- **Resultado:** 
  - Valida rigorosamente se um Timeout Error ocorre quando a rede atrasa mais de 5 segundos.
  - Verifica se uma UI de Fallback segura aparece para o usuário quando o DB cai e retorna um erro 500.
  - Garante isolamento de rede perfeito usando MSW, sem afetar de forma alguma outros arquivos de teste.

---

## 🎯 Conclusão

Código de teste não é escrito para se ter paz de espírito. É uma simulação severa para verificar se sua aplicação consegue sobreviver no inferno que é o ambiente de produção. 

Não se deixe enganar pela bajulação barata da IA. Espremer a IA com este prompt e esmagar as fundações do seu sistema é a única maneira de sobreviver como um verdadeiro engenheiro. Agora é hora de encarar o quão frágil seu código realmente era. Copie isso agora mesmo e rode seus testes! 🍷
