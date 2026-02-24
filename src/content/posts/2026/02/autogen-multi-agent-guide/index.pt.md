---
layout: /src/layouts/Layout.astro
title: " \"AutoGen 입문: AI 에이전트끼리 대화하게 만들기\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "AI/개발"
description: " \"O AutoGen, framework multi-agente da Microsoft. Um guia para construir uma colaboração automatizada onde bots desenvolvedores e gerentes trocam feedback para concluir o código.\""
tags: ["AutoGen", "멀티에이전트", "MS", "AI협업", "자동화"]
---

# 🤖 Introdução ao AutoGen: Fazendo Agentes de IA Conversarem Entre Si

- **🎯 Público-Alvo:** Desenvolvedores solo sobrecarregados, Tech Geeks que desejam construir sistemas de automação para tarefas complexas.
- **⏱️ Tempo Estimado:** 20 minutos (Configuração do ambiente e execução da demonstração)
- **🤖 Modelo Recomendado:** GPT-4o, Claude 3.5 Sonnet (A qualidade da conversa lógica entre os agentes é crucial)

- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Você não vê os limites de deixar tudo nas mãos de uma única IA? Monte a sua própria equipe virtual de desenvolvimento perfeita com uma IA que planeja, uma que codifica e outra que revisa."_

O **AutoGen**, desenvolvido pela Microsoft (MS), é um poderoso framework multi-agente que transforma essa imaginação em realidade. Ao criar várias personas de IA e colocá-las em um único espaço de trabalho, elas conversam, trocam feedback e finalizam o produto sozinhas. A verdadeira era da **'Colaboração Autônoma'** começou.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

1. **A Magia da Divisão de Papéis:** Maximize a qualidade do trabalho dividindo um prompt único e complexo entre agentes com funções específicas: planejamento, desenvolvimento, revisão, etc.
2. **Execução Autônoma de Código:** A IA executa diretamente o código que escreveu em um ambiente de contêiner e depura os erros que surgem por conta própria.
3. **Controle de Loop Infinito:** Ao configurar o momento da intervenção do gerente humano (Human-in-the-loop), você evita o desperdício de tokens e controla a direção do projeto.

---

## 🚀 Solução: "Prompt para Construção de Equipe Multi-Agente"

### 🥉 Basic Version (Duo de Programação: Desenvolvedor & Executor)

Este é um prompt que gera um código de interação 1:1 entre agentes na sua forma mais básica.

> **Papel:** Você é um `[Desenvolvedor Python Sênior]`.
>
> **Tarefa:** Escreva um script em Python usando o AutoGen onde dois agentes colaboram entre si.
>
> 1. **AssistantAgent (Coder):** O papel de escrever o código em Python.
> 2. **UserProxyAgent (Executor):** O papel de executar o código escrito pelo Coder no ambiente local e enviar o feedback dos resultados de volta ao Coder.
>
> **Objetivo:** Configure os dois agentes para completarem a tarefa de 'encontrar números primos (Prime Numbers) entre 1 e 100 e salvá-los em um arquivo txt'.

<br>

### 🥇 Pro Version (Construindo uma Empresa de TI Virtual: PM, Dev, QA)

Constrói um sistema de bate-papo em grupo (Group Chat) com 3 membros, semelhante a um ambiente de trabalho real.

> **Papel (Role):** Você é um `[Arquiteto do Framework AutoGen com experiência na Microsoft]`.
>
> **Contexto (Context):**
>
> - Cenário: Não tenho tempo suficiente para desenvolver um projeto pessoal sozinho, então quero construir uma equipe de desenvolvimento virtual composta por agentes de IA.
> - Objetivo: Automatizar desde o planejamento até o teste de um simples 'Jogo da Cobrinha (Snake Game)' baseado em Python.
>
> **Tarefa (Task):**
>
> Utilizando o `GroupChat` e o `GroupChatManager` do AutoGen, escreva o código Python completo onde os 3 agentes a seguir irão colaborar:
>
> 1. **PM (Product Manager):** Responsável por planejar as regras principais do jogo, UI/UX e dar as instruções de trabalho.
> 2. **Coder (Developer):** Escreve os códigos HTML/CSS/JS com base no planejamento do PM.
> 3. **Reviewer (QA/Critic):** Revisa o código do Coder, encontra bugs ou falhas de lógica e faz críticas direcionando as correções.
>
> **Restrições (Constraints):**
>
> - Fluxo de Trabalho: Deve haver um loop claro: PM apresenta o plano ➔ Coder escreve o código ➔ Reviewer dá feedback ➔ Coder corrige o código.
> - Limite o número máximo de turnos de conversa (`max_round`) para 10 vezes.
> - Forneça o código em uma forma completa e sem erros, pronto para ser executado imediatamente. Configure o `system_message` de cada agente de forma bem específica, de acordo com seu papel.

---

## 💡 Comentário do Autor (Insight)

O verdadeiro poder destrutivo do AutoGen aparece quando a capacidade de geração de texto do LLM se combina com a função de **'Execução de Código (Code Execution)'**. Anteriormente, se o chatbot escrevesse um código, o humano precisava copiá-lo, colar na IDE e, se houvesse um erro, copiar o log de erro e perguntar ao chatbot novamente — um processo muito trabalhoso.

No entanto, ao conectar o `UserProxyAgent` a um contêiner Docker, a IA executa o código por si mesma, analisa o log de erros e reescreve o código. Ou seja, você só precisa observar os logs da IA trabalhando duro e depurando, e depois colher o produto final concluído.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: Posso conectar um modelo local de código aberto (como o Llama 3) em vez da API da OpenAI?**
  - R: Sim, é perfeitamente suportado. Usando o LM Studio ou Ollama para iniciar um servidor local e alterando o `base_url` no `llm_config` do AutoGen para o endereço da API local, você pode operar seu exército de agentes ilimitadamente, sem se preocupar com o custo dos tokens.

- **Q: O que eu faço se os agentes ficarem presos em um loop infinito conversando sem chegar a uma conclusão?**
  - R: Esse é o problema mais comum em sistemas multi-agentes. Você deve projetar o sistema limitando estritamente o número máximo de respostas com o atributo `max_consecutive_auto_reply`, ou configurando `human_input_mode="TERMINATE"` para que a conversa pare imediatamente e o controle passe para o gerente humano quando uma palavra-chave específica (ex: "Tarefa concluída") aparecer.

- **Q: Qual é a diferença para o framework CrewAI?**
  - R: O AutoGen se destaca na **'Conversação (Conversation)'** livre entre agentes e na execução de código. Por outro lado, o CrewAI é otimizado para executar tarefas sequenciais e seguir **'Processos (Process)'** e pipelines predefinidos. O AutoGen é ligeiramente melhor para resolução criativa de problemas ou codificação, enquanto o CrewAI é mais vantajoso para tarefas padronizadas de pesquisa ou marketing.

---

## 🧬 Anatomia do Prompt (Why it works?)

1. **Distribuição da Carga Cognitiva (Cognitive Load Distribution):** Se você colocar todas as condições de planejamento, codificação e revisão em um único prompt, é fácil a IA esquecer as instruções do meio (Lost in the middle). Ao separar os papéis e dar a cada um um `system_message` claro, a IA foca inteiramente no seu próprio Papel (Role), aumentando a qualidade drasticamente.
2. **Mecanismo de Pensamento Crítico (Critic-in-the-loop):** Separar o criador do código (Coder) do crítico (Reviewer) simula a cultura de revisão de código de uma equipe de desenvolvimento real. Como o LLM tem dificuldade em criticar objetivamente o seu próprio trabalho, ter um agente de QA independente força o aumento da integridade do código.

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

Você não precisa mais suportar sozinho a solidão de um desenvolvedor solo e a dor da depuração infinita. Com apenas um conhecimento básico de Python e uma chave de API, você pode criar suas próprias tropas de elite de TI, que não se cansam 24 horas por dia e não reclamam.

Agora, basta dar as ordens com elegância, como um gerente de equipe de verdade.
**O resto do código e depuração chatos serão resolvidos automaticamente pelos agentes do AutoGen.** 🍷
