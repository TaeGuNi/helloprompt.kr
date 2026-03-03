---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: " \"Aprenda a integrar o Workflow Builder do Slack a uma IA, sem digitar uma linha de código, e crie um assistente virtual exclusivo para resolver o dilema do almoço da sua equipe.\""
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Como criar um bot no Slack: um assistente interno para recomendar o "almoço de hoje"

- **🎯 Recomendado para:** Profissionais juniores que sofrem diariamente para escolher o cardápio, ou equipes de RH e Cultura que buscam aumentar o engajamento no mensageiro corporativo.
- **⏱️ Tempo estimado:** 10 minutos (via Slack Workflow).
- **🤖 Modelo recomendado:** ChatGPT-4o (Excelente para recomendações criativas e leitura de contexto).

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"O que vamos almoçar hoje? Por mim, qualquer coisa. Massa? Ah, ontem já comi... Chega desse jogo de adivinhação exaustivo. Terceirize essa decisão para uma IA e guarde sua energia mental para o que realmente importa!"_

O maior dilema da vida corporativa não é resolver um projeto complexo, mas sim responder à fatídica pergunta diária: "O que vamos comer hoje?". Em vez de tentar ler a mente dos seus colegas e propor opções que acabarão sendo rejeitadas, que tal perguntar diretamente ao bot no Slack da empresa? Ao digitar "O que comer num dia de chuva?", ele responderá com maestria: "Que tal um caldo quente ou um lámen reconfortante?". Neste guia, mostraremos como construir um bot brilhante usando o Workflow Builder do Slack, sem precisar escrever uma única linha de código.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

1. Configure um bot de automação utilizando o **Workflow Builder** do Slack, de forma totalmente No-Code.
2. Defina uma palavra-chave (ex: "sugestão de almoço") ou uma reação de emoji como gatilho (Trigger) para acionar o assistente.
3. Integre uma IA (como o ChatGPT) para processar prompts personalizados e recomendar pratos perfeitos para o clima e o humor do dia.

---

## 🚀 A Solução: Prompt "Lunch Buddy" (Companheiro de Almoço)

### 🥉 Versão Básica (Basic Version)

Utilize este prompt para recomendações aleatórias e rápidas, ideal para aniquilar a indecisão em segundos.

> **Papel (Role):** Você é um assistente amigável e carismático, responsável por definir o cardápio de almoço da nossa equipe.
>
> **Tarefa (Task):** Escolha aleatoriamente uma das seguintes categorias: comida brasileira, italiana, japonesa, fast-food ou vegetariana. Em seguida, recomende 3 pratos populares e à prova de falhas dentro dessa categoria, que a esmagadora maioria dos profissionais adoraria comer.

### 🥇 Versão Profissional (Pro Version)

Use esta versão para obter uma recomendação de almoço inteligente e hipercontextualizada, levando em conta variáveis cruciais como o clima, o ânimo da equipe e o tamanho do grupo.

> **Papel (Role):** Você é um crítico gastronômico com um paladar exigente e um mapa mental completo dos melhores restaurantes perto do nosso escritório (`[Localização da empresa, ex: Avenida Paulista]`).
>
> **Contexto (Context):**
>
> - Clima: `[Clima atual, ex: chuvoso, ensolarado, frente fria]`
> - Humor e Situação: `[Clima da equipe, ex: semana de fechamento estressante, dia de pagamento, foco na dieta]`
> - Participantes: `[Composição do grupo, ex: almoçando sozinho, almoço da firma, happy hour com a diretoria]`
>
> **Tarefa (Task):**
>
> 1. Recomende exatamente 1 opção de prato que se alinhe perfeitamente com o cenário descrito acima.
> 2. Adicione uma justificativa perspicaz e bem-humorada (1 a 2 frases) que explique a escolha e crie uma conexão instantânea com a equipe.
> 3. Formate a saída usando uma lista em Markdown, inserindo emojis relevantes para tornar a leitura mais visual e atrativa.
>
> **Restrições (Constraints):**
>
> - Exclua opções que dividem opiniões (ex: excesso de coentro, pratos muito exóticos) ou refeições tão pesadas que causem letargia no período da tarde.
>
> **Aviso (Warning):**
>
> - Foco exclusivo nos nomes dos pratos. Jamais invente ou crie nomes de restaurantes fictícios, a menos que você tenha 100% de certeza de que o estabelecimento existe na nossa região. (Prevenção rigorosa de alucinação)

---

## 💡 Comentário do Autor (Insight)

Um bot no Slack vai muito além de um mero "recurso de TI"; ele atua como um poderoso catalisador para moldar a **cultura** da sua empresa. Este assistente funciona como um verdadeiro lubrificante social, injetando momentos de descontração e gerando conversas em canais que, de outra forma, seriam frios e estritamente operacionais. Ao introduzir o bot de almoço e conquistar a adesão da equipe, fica fácil expandir a iniciativa para um "Bot de Elogios", "Bot de Aniversariantes" ou até um "Bot de Retrospectiva Semanal", promovendo um ambiente de trabalho muito mais engajado e positivo. Além disso, se você conectar este prompt a ferramentas robustas de automação como Zapier ou Make, poderá contornar as limitações nativas do Slack e transformar esse bot em um assistente de IA absurdamente inteligente.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Minha empresa usa a versão gratuita do Slack. Ainda posso utilizar o Workflow Builder?**
  - R: Infelizmente, o Workflow Builder nativo do Slack só está disponível nos planos pagos (Pro ou superior). Contudo, se você estiver no plano gratuito, é perfeitamente possível contornar essa barreira usando o Zapier ou o Make para monitorar um canal específico e disparar as respostas via API do ChatGPT.

- **P: Qual é a real diferença entre usar o Workflow e programar um bot do zero (ex: em Python)?**
  - R: Programar com a biblioteca `slack-bolt` do Python abre portas para interações complexas, como cliques em botões interativos, janelas modais e consultas diretas ao banco de dados interno da empresa. O lado negativo é o custo contínuo de manutenção e hospedagem em servidores. Para recomendações diretas de cardápio ou respostas baseadas em texto, a abordagem No-Code (sem código) via Workflow é esmagadoramente mais barata, rápida e eficiente.

---

## 🧬 Dissecando o Prompt (Why it works?)

1. **Variáveis Contextuais (Context Variables):** Em vez de um genérico "Recomende um prato", a inclusão de variáveis (`[ ]`) como clima, humor e tamanho do grupo obriga a IA a fugir dos clichês, entregando sugestões altamente empáticas e sob medida.
2. **Controle de Alucinações e Limites (Constraints Setting):** A seção de `Aviso (Warning)` educa a IA sobre as nuances críticas do almoço corporativo (restrição de tempo, aversão a ingredientes polêmicos) e barra terminantemente a invenção de restaurantes que não existem.
3. **Atribuição de Persona (Role-playing):** Vestir a IA com a persona de um "crítico gastronômico" garante que a entrega seja envolvente, espirituosa e amigável, banindo o tom frio e robótico das respostas padrão.

---

## 📊 Prova: Antes e Depois (Before & After)

### ❌ Antes (O Silêncio Constrangedor do Almoço)

```text
Analista Júnior: "Pessoal, o que vamos almoçar hoje?"
Colega A: "Hmm... Por mim, qualquer coisa serve."
Chefe: "Ah, escolhe aí, qualquer coisa tá bom."
(Silêncio sepulcral e mais 10 minutos perdidos na indecisão 🕰️)
```

### ✅ Depois (A Intervenção do Assistente de IA)

```text
Eu: /almoco
Bot (Lunch Buddy): "☔ Vejo que o dia está chuvoso, a equipe está sob o estresse do fechamento e o vale-refeição já está no fim!
Para um cenário como esse, minha recomendação de ouro é uma **'Feijoada Light ou um Caldo Verde Reforçado'**.
A temperatura do prato vai derreter a tensão da manhã, sendo uma escolha segura que não pesa no bolso! 🥘"
Chefe: "Opa, um caldo verde cai perfeitamente hoje. Fechado!"
```

---

## 🎯 Conclusão

O escritório é definitivamente o palco para o trabalho duro, mas a sua hora de almoço deve ser um oásis delicioso e livre de estresse. Um simples bot pode quebrar o gelo da equipe e eliminar de vez a fadiga de decisão que drena a nossa energia diariamente.

A partir de hoje, abandone o desgastante jogo de adivinhação e confie nas **escolhas inteligentes do seu novo assistente de IA**. Aproveite uma refeição fantástica, recarregue as baterias e garanta a sua saída no horário, com um belo sorriso no rosto! 🍷
