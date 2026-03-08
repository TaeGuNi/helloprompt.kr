---
layout: /src/layouts/Layout.astro
title: " \"AutoGen 입문: AI 에이전트끼리 대화하게 만들기\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "AI/개발"
description: "Guia prático do AutoGen, framework multi-agente da Microsoft. Aprenda a criar bots de IA que colaboram, revisam código e automatizam o desenvolvimento."
tags: ["AutoGen", "멀티에이전트", "MS", "AI협업", "자동화"]
---

## 🤖 Introdução ao AutoGen: Fazendo Agentes de IA Conversarem Entre Si

- **🎯 Público-Alvo:** Desenvolvedores solo sobrecarregados e tech geeks que desejam construir sistemas de automação para tarefas complexas.
- **⏱️ Tempo Estimado:** 20 minutos (Configuração do ambiente e execução da demonstração)
- **🤖 Modelo Recomendado:** GPT-4o ou Claude 3.5 Sonnet (A qualidade do raciocínio lógico entre os agentes é crucial)

- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Já percebeu as limitações de deixar tudo nas mãos de uma única IA? Monte a sua própria equipe virtual de desenvolvimento perfeita: uma IA que planeja, uma que codifica e outra que revisa."_

O **AutoGen**, desenvolvido pela Microsoft (MS), é um poderoso framework multi-agente que transforma essa ideia em realidade. Ao criar várias personas de IA e colocá-las em um único espaço de trabalho, elas interagem, trocam feedback e finalizam o produto sozinhas. A verdadeira era da **'Colaboração Autônoma'** começou.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

1. **A Magia da Divisão de Papéis:** Maximize a qualidade do trabalho dividindo um prompt único e complexo entre agentes com funções específicas: planejamento, desenvolvimento, revisão, etc.
2. **Execução Autônoma de Código:** A IA executa diretamente o código que escreveu em um ambiente de contêiner e soluciona os erros de forma autônoma.
3. **Controle com Human-in-the-Loop:** Ao definir momentos de intervenção humana, você evita o desperdício de tokens, previne loops infinitos e direciona o rumo do projeto.

---

## 🚀 Solução: "Prompt para Construção de Equipe Multi-Agente"

### 🥉 Basic Version (Duo de Programação: Desenvolvedor & Executor)

Este é um prompt que gera um código de interação 1:1 entre agentes na sua forma mais básica.

> **Papel:** Você é um `[Desenvolvedor Python Sênior]`.
>
> **Tarefa:** Escreva um script em Python usando o AutoGen onde dois agentes colaboram entre si.
>
> 1. **AssistantAgent (Coder):** Responsável por escrever o código em Python.
> 2. **UserProxyAgent (Executor):** Responsável por executar o código escrito pelo Coder no ambiente local e enviar o feedback dos resultados de volta para ele.
>
> **Objetivo:** Configure os dois agentes para completarem a tarefa de 'encontrar números primos (Prime Numbers) entre 1 e 100 e salvá-los em um arquivo txt'.

### 🥇 Pro Version (Construindo uma Empresa de TI Virtual: PM, Dev, QA)

Constrói um sistema de bate-papo em grupo (Group Chat) com 3 membros, semelhante a um ambiente de trabalho real.

> **Papel (Role):** Você é um `[Arquiteto de Software especialista no Framework AutoGen com experiência na Microsoft]`.
>
> **Contexto (Context):**
>
> - Cenário: Não tenho tempo suficiente para desenvolver um projeto pessoal sozinho, então quero construir uma equipe de desenvolvimento virtual composta por agentes de IA.
> - Objetivo: Automatizar desde o planejamento até o teste de um simples 'Jogo da Cobrinha' (Snake Game) em Python.
>
> **Tarefa (Task):**
>
> Utilizando o `GroupChat` e o `GroupChatManager` do AutoGen, escreva o código Python completo onde os seguintes 3 agentes irão colaborar:
>
> 1. **PM (Product Manager):** Responsável por definir as regras principais do jogo, UI/UX e distribuir as tarefas.
> 2. **Coder (Developer):** Escreve os códigos HTML/CSS/JS com base nas diretrizes do PM.
> 3. **Reviewer (QA/Critic):** Revisa o código do Coder, identifica bugs ou falhas lógicas e faz críticas construtivas para orientar as correções.
>
> **Restrições (Constraints):**
>
> - Fluxo de Trabalho: Deve existir um ciclo claro: PM apresenta o plano ➔ Coder escreve o código ➔ Reviewer fornece feedback ➔ Coder corrige o código.
> - Limite o número máximo de turnos de conversa (`max_round`) para 10.
> - Forneça o código de forma completa e sem erros, pronto para execução imediata. Configure a `system_message` de cada agente de maneira bastante específica, refletindo seu respectivo papel.

---

## 💡 Comentário do Autor (Insight)

O verdadeiro poder destrutivo do AutoGen se revela quando a capacidade de geração de texto do LLM se une à funcionalidade de **'Execução de Código' (Code Execution)**. Anteriormente, se o chatbot escrevesse um script, o humano precisava copiá-lo, colar na IDE e, em caso de erro, copiar o log de falha e perguntar novamente à IA — um processo exaustivo e repetitivo.

No entanto, ao conectar o `UserProxyAgent` a um contêiner Docker, a IA executa o código por conta própria, analisa os logs de erro e refatora o código. Em outras palavras, você só precisa observar os logs enquanto a IA trabalha duro na depuração e, no final, colher o produto pronto.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: Posso conectar um modelo local de código aberto (como o Llama 3) em vez da API da OpenAI?**
  - R: Sim, o suporte é total. Usando ferramentas como LM Studio ou Ollama para rodar um servidor local, basta alterar o `base_url` no `llm_config` do AutoGen para o endereço da sua API local. Assim, você pode operar seu exército de agentes sem qualquer restrição de custo por tokens.

- **Q: O que eu faço se os agentes ficarem presos em um loop infinito, conversando sem chegar a uma conclusão?**
  - R: Esse é o desafio mais comum em sistemas multi-agentes. É fundamental projetar o sistema limitando rigorosamente o número máximo de respostas através do atributo `max_consecutive_auto_reply`. Outra estratégia é configurar `human_input_mode="TERMINATE"`, garantindo que a conversa pare imediatamente e o controle retorne ao gerente humano assim que uma palavra-chave específica (ex: "Tarefa concluída") for detectada.

- **Q: Qual é a diferença em relação ao framework CrewAI?**
  - R: O AutoGen se destaca na **'Conversação' (Conversation)** dinâmica entre agentes e na execução direta de código. Em contrapartida, o CrewAI é mais otimizado para executar tarefas sequenciais, seguindo rigorosamente **'Processos' (Process)** e pipelines predefinidos. Logo, o AutoGen leva vantagem na resolução criativa de problemas e em programação, enquanto o CrewAI brilha em tarefas padronizadas, como pesquisas aprofundadas ou fluxos de marketing.

---

## 🧬 Anatomia do Prompt (Why it works?)

1. **Distribuição da Carga Cognitiva (Cognitive Load Distribution):** Se você inserir todas as instruções de planejamento, codificação e revisão em um único prompt gigante, é muito provável que a IA esqueça as diretrizes intermediárias (o famoso *Lost in the middle*). Ao separar os papéis e fornecer a cada um uma `system_message` cirúrgica, a IA foca 100% em sua própria função (Role), elevando a qualidade do resultado de forma drástica.
2. **Mecanismo de Pensamento Crítico (Critic-in-the-loop):** Separar quem cria o código (Coder) de quem o avalia (Reviewer) simula a autêntica cultura de revisão de código de uma equipe de desenvolvimento profissional. Como os LLMs costumam ter dificuldade para criticar de forma objetiva o próprio trabalho, introduzir um agente de QA independente força um aumento imediato na robustez do código final.

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Dependência de um único prompt)

```text
[Usuário] "Crie o código de um Jogo da Cobrinha perfeito."
[IA] (Cospe 150 linhas de código)
[Usuário] (Tenta executar no navegador) -> Não funciona. Copia o log do console.
[Usuário] "Uncaught TypeError: Cannot read properties of null... resolve isso para mim."
[IA] (Cospe código modificado) -> Desta vez as setas do teclado não funcionam. Pergunta novamente.
(Eventualmente, o usuário fica exausto e depura sozinho ou desiste 🤯)
```

### ✅ Depois (Equipe Multi-Agente do AutoGen)

```text
[PM] "O tamanho padrão do canvas do Jogo da Cobrinha é 400x400. Planejo que o tamanho da cobra aumente ao comer a maçã."
[Coder] "Escrevi o código HTML e JS de acordo com o planejamento do PM. (Código anexado)"
[UserProxy] (Execução automática no ambiente local) "Durante a execução, ocorreu um erro de colisão na linha 15."
[Reviewer] "Coder, faltou o tratamento de exceção para quando a cobra toca no próprio corpo. Corrija a lógica do array."
[Coder] "Obrigado por apontar. Adicionei o tratamento de exceção e reescrevi o código. (Código modificado anexado)"
[UserProxy] "Executado com sucesso. O resultado foi salvo em 'snake_game.html'."
(O usuário apenas bebe café e observa o arquivo final ser gerado ☕️)
```

---

## 🎯 Conclusão

Você não precisa mais suportar a solidão de um desenvolvedor solo nem a dor da depuração infinita. Com conhecimentos básicos de Python e uma chave de API, você pode criar suas próprias tropas de elite de TI — agentes que não se cansam, trabalham 24 horas por dia e nunca reclamam.

Agora, basta delegar as tarefas com elegância, assumindo a postura de um verdadeiro gerente de tecnologia.
**O resto do trabalho braçal de programação e depuração será resolvido automaticamente pelos agentes do AutoGen.** 🍷
