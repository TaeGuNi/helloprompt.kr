---
layout: /src/layouts/Layout.astro
title: "Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "Aprenda a conectar o Workflow Builder do Slack a uma IA, sem necessidade de programação, para criar um assistente virtual exclusivo da sua equipe que recomenda o cardápio do almoço."
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Criando um Bot no Slack: Assistente Interno para Recomendar o "Almoço de Hoje"

- **🎯 Recomendado para:** O funcionário júnior que sofre todos os dias para escolher o menu do almoço, ou a equipe de RH que deseja revitalizar o mensageiro corporativo.
- **⏱️ Tempo Estimado:** 10 minutos (utilizando o Slack Workflow).
- **🤖 Modelo Recomendado:** ChatGPT-4o (Excelente em recomendações criativas e consciência de contexto).

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"O que vamos almoçar hoje? Qualquer coisa. Que tal massa? Ah, massa não... Chega desse jogo de adivinhação exaustivo todos os dias. Deixe isso com um assistente de IA e guarde sua energia para sair do trabalho no horário!"_

O maior dilema de todo trabalhador: escolher o que comer no almoço. Agora, em vez de ficar tentando ler a mente dos seus colegas, pergunte ao bot no mensageiro da empresa. Se você digitar "O que comer em um dia de chuva?", ele pode responder com estilo: "Que tal um prato quente de ensopado ou um macarrão reconfortante?". Neste guia, mostraremos como construir um bot brilhante através do Slack Workflow sem escrever uma única linha de código.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

1. Configure um bot de automação utilizando o **'Workflow Builder'** do Slack, sem precisar programar.
2. Defina uma palavra específica (ex: "sugestão de almoço") ou uma reação com emoji como gatilho (Trigger) para acionar o bot.
3. Integre um conector de IA (como o ChatGPT) para gerar prompts personalizados que recomendam menus adequados à situação e ao clima.

---

## 🚀 A Solução: Prompt "Lunch Buddy" (Companheiro de Almoço)

### 🥉 Versão Básica (Basic Version)

Utilize este prompt para recomendações aleatórias rápidas quando quiser superar a indecisão instantaneamente.

> **Papel (Role):** Você é um assistente amigável encarregado de escolher o menu do almoço para a equipe da empresa.
>
> **Tarefa (Task):** Escolha aleatoriamente uma das seguintes categorias: comida brasileira, italiana, japonesa, fast-food ou vegetariana. Em seguida, recomende 3 pratos populares e seguros dessa categoria que a maioria dos trabalhadores de escritório adoraria.

<br>

### 🥇 Versão Profissional (Pro Version)

Use isto quando quiser receber uma recomendação de almoço inteligente e contextualizada, refletindo detalhes específicos como clima, humor da equipe e número de pessoas.

> **Papel (Role):** Você é um gourmet com um paladar exigente e um navegador especialista em restaurantes perto do nosso escritório (`[Localização da empresa (ex: Avenida Paulista)]`).
>
> **Contexto (Context):**
>
> - Clima: `[Clima atual (ex: chuvoso, ensolarado, frio)]`
> - Humor e Situação: `[Clima da equipe (ex: estressados, dia de pagamento, de dieta)]`
> - Participantes: `[Composição do grupo (ex: almoço sozinho, almoço de toda a equipe, encontro com colegas de nível)]`
>
> **Tarefa (Task):**
>
> 1. Recomende exatamente 1 opção de cardápio de almoço que se alinhe perfeitamente com a situação acima.
> 2. Adicione uma explicação espirituosa (1 a 2 frases) que justifique a escolha e gere empatia entre os trabalhadores.
> 3. Formate a saída como uma lista em Markdown, incluindo emojis relevantes para facilitar a leitura.
>
> **Restrições (Constraints):**
>
> - Exclua pratos extremamente polarizadores (ex: muito coentro, pratos excessivamente exóticos) ou refeições muito pesadas que sejam difíceis de terminar durante o horário de almoço.
>
> **Aviso (Warning):**
>
> - Concentre-se nos nomes dos pratos em si. Não invente ou alucine nomes de restaurantes específicos a menos que tenha certeza absoluta de que eles existem na região. (Prevenção de alucinação)

---

## 💡 Comentário do Autor (Insight)

Um bot no Slack vai muito além de uma simples "funcionalidade" técnica; é uma ferramenta poderosa para moldar a **'cultura'** da empresa. Ele atua como um lubrificante social, trazendo pequenas risadas e pontos de conversa para canais que, de outra forma, seriam frios e estritamente transacionais. Se você começar com um bot de recomendação de almoço e ganhar tração entre a equipe, poderá expandi-lo facilmente para um "Bot de Elogios", "Bot de Aniversários" ou "Bot de Retrospectiva Semanal", contribuindo significativamente para um ambiente de trabalho mais ágil e positivo. Se você conectar esse prompt a ferramentas de automação como Zapier ou Make, poderá contornar as limitações nativas do Slack e evoluí-lo para um assistente de IA incrivelmente inteligente.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Minha empresa usa a versão gratuita do Slack. Ainda posso usar o Workflow Builder?**
  - R: Infelizmente, o Workflow Builder do Slack é totalmente suportado apenas em planos pagos (Pro ou superior). Se você estiver no plano gratuito, pode criar uma solução alternativa usando o Zapier ou o Make.com para monitorar mensagens em um canal específico e enviar respostas através da API do ChatGPT.

- **P: Qual é a diferença entre isso e codificar o bot do zero (ex: usando Python)?**
  - R: Utilizar a biblioteca `slack-bolt` do Python permite interações muito mais avançadas, como cliques em botões, janelas modais e integração direta com o banco de dados interno da sua empresa. No entanto, isso traz custos de manutenção e de servidor. Para recomendações simples de cardápio ou respostas baseadas em texto, um fluxo de trabalho sem código (No-code) é esmagadoramente mais eficiente e barato.

---

## 🧬 Dissecando o Prompt (Why it works?)

1. **Variáveis Contextuais (Contextual Variables):** Em vez de um simples "Recomende um menu", fornecer variáveis (`[ ]`) como clima, humor e número de pessoas força a IA a evitar respostas clichês e a gerar soluções altamente empáticas e personalizadas.
2. **Controle de Alucinações e Preferências (Constraint Setting):** A seção de `Aviso (Warning)` conscientiza a IA sobre as nuances peculiares do horário de almoço corporativo (limites de tempo, pratos polarizadores) e impede a geração de restaurantes falsos.
3. **Atribuição de Persona (Role-playing):** Definir a persona como um 'gourmet e navegador especialista' garante que o tom da resposta seja envolvente, amigável e espirituoso, em vez de uma entrega de informações fria e robótica.

---

## 📊 Prova: Antes e Depois (Before & After)

### ❌ Antes (O Silêncio Constrangedor do Almoço)

```text
Funcionário Júnior: "O que vocês querem almoçar hoje?"
Colega A: "Hmm... Por mim, qualquer coisa serve."
Chefe: "Vamos comer qualquer coisa."
(Um silêncio interminável e 10 minutos de indecisão 🕰️)
```

### ✅ Depois (A Intervenção do Assistente de IA)

```text
Eu: /almoco
Bot (Lunch Buddy): "☔ Vejo que é um dia chuvoso, a equipe está estressada e é o almoço antes do dia de pagamento!
Para um dia assim, eu recomendo fortemente um **'Ensopado Quente com Carne e Batatas'**.
O caldo quente vai derreter o estresse do trabalho, e a carne vai te dar a energia necessária para sobreviver à tarde! 🥘"
Chefe: "Opa, um ensopado cai muito bem hoje. Vamos lá!"
```

---

## 🎯 Conclusão

O escritório é um lugar para trabalho árduo, mas a sua hora de almoço deve ser sempre deliciosa e livre de estresse. Um pequeno bot pode suavizar a atmosfera da equipe e reduzir drasticamente a fadiga das pequenas decisões diárias.

Hoje, abandone o jogo de adivinhação do almoço e confie nas **escolhas inteligentes do seu assistente de IA**. Tenha uma refeição fantástica e saia do trabalho na hora certa, com um sorriso no rosto! 🍷
