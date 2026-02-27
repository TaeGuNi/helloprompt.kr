---
layout: /src/layouts/Layout.astro
title: " \"'Recomendar Mensagem de Commit' Sem Mais Preocupações! Geração Automática de Conventional Commits\""
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: " \"Um prompt que escreve mensagens de commit impecáveis, seguindo o padrão global (Conventional Commits), apenas colando as suas alterações (git diff).\""
tags: ["Git", "Mensagem de Commit", "Colaboração", "Produtividade"]
---

# 📝 "O que eu escrevo no Commit?" Nunca Mais! Geração Automática de Conventional Commits

- **🎯 Recomendado para:** Desenvolvedores, Engenheiros de Software, Contribuidores Open Source
- **⏱️ Tempo economizado:** De 5 minutos suando frio → 10 segundos
- **🤖 Modelo recomendado:** ChatGPT (GPT-4o), Claude 3.5 Sonnet, Gemini 2.5 Pro

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Escrever o código complexo levou 3 horas. Ficar encarando a tela pensando na mensagem de commit levou mais 15 minutos... Quem nunca?"_

`fix: bug`, `update code`, `wip`... Você ainda faz commits assim?
Mensagens de commit claras são a espinha dorsal de um bom histórico de versionamento e trabalho em equipe, mas escrevê-las a cada pequena alteração drena a nossa energia criativa.
A partir de agora, basta colar o resultado do seu comando `git diff`. A IA irá extrair o contexto e redigir uma mensagem perfeita seguindo o padrão **Conventional Commits**, a regra de ouro do universo Open Source e das grandes empresas de tecnologia.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. **Análise de Contexto Automática:** A IA entende exatamente o que mudou no seu código sem precisar de explicações.
2. **Classificação Precisa:** Escolhe automaticamente o prefixo correto (`feat`, `fix`, `refactor`, `chore`, etc.).
3. **Formatação Impecável:** Gera o Título (Subject) conciso e a Descrição (Body) detalhada em tópicos, prontos para o repositório.

---

## 🚀 A Solução: "Gerador Mágico de Mensagens Git"

### 🥉 Basic Version (Versão Rápida)

Para quando você está com pressa, fez uma alteração pequena e precisa de um commit direto ao ponto.

> **Papel:** Você é um Engenheiro de Software Sênior rigoroso com o histórico do Git.
> **Solicitação:** Analise o `git diff` fornecido em seguida e escreva uma única mensagem de commit seguindo o padrão Conventional Commits em inglês. Retorne APENAS a mensagem de commit, sem introduções ou explicações extras.
> **Alterações:** `[Cole seu git diff aqui]`


### 🥇 Pro Version (Versão Especialista)

Para Pull Requests complexos que exigem uma descrição detalhada do "Por que" e "O que" mudou.

> **Papel (Role):** Você é um Mantenedor Open Source de elite, obcecado por históricos de Git impecáveis e semânticos.
>
> **Contexto (Context):**
>
> - Cenário: Acabei de finalizar uma série de alterações no código e preciso "comitar".
> - Objetivo: Preciso de mensagens de commit claras, rastreáveis e profissionais para que a minha equipe (e o meu eu do futuro) entenda exatamente o impacto desta mudança.
>
> **Solicitação (Task):**
>
> 1. Analise as `[Alterações]` fornecidas abaixo.
> 2. Recomende 3 opções distintas de mensagens de commit, rigorosamente alinhadas às regras do **Conventional Commits**.
> 3. Formato obrigatório: `<type>(<scope>): <subject>`
> 4. Corpo (Body): Explique o motivo da alteração (Why) e o que foi feito (What) utilizando marcadores (bullet points).
> 5. Rodapé (Footer): Se eu fornecer um `[Número da Issue]`, adicione `Closes #[Número]` no final da mensagem.
>
> **Alterações (Changes):**
> `[Cole aqui o resultado do comando 'git diff' ou descreva as mudanças]`
>
> **Número da Issue (Opcional):**
> `[Ex: 123 ou deixe em branco]`
>
> **Restrições (Constraints):**
>
> - O Tipo (Type) DEVE ser selecionado a partir desta lista: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
> - O Assunto (Subject) não deve ultrapassar 50 caracteres e deve ser obrigatoriamente escrito no modo imperativo (ex: "add", não "added" ou "adds").
> - O idioma final da mensagem de commit gerada DEVE ser OBRIGATORIAMENTE o **Inglês**, pois é o padrão global da indústria de software.

---

## 💡 Comentário do Autor (Insight)

Este prompt é um verdadeiro "salva-vidas" no fim de um longo dia de codificação. Muitas vezes, depois de resolvermos um bug complexo, a nossa capacidade cognitiva está simplesmente esgotada para formular uma frase decente e semântica em inglês.

O grande truque da **Versão Pro** é exigir **3 opções**. Um `git diff` costuma conter misturas de correções de bugs, pequenas refatorações e ajustes de UI. Ao pedir opções, a IA geralmente te dá um título focado no `fix`, outro no `refactor` e um mais abrangente. Assim, você pode escolher o que melhor reflete a intenção principal do seu PR (Pull Request).

**Dica de ouro:** Se você usa o terminal, pode rodar `git diff | pbcopy` (no Mac) ou `git diff | clip` (no Windows) para copiar todas as alterações instantaneamente para a sua área de transferência e colar direto no ChatGPT!

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: O meu `git diff` é gigantesco (milhares de linhas). A IA consegue lidar com isso?**
  - A: Modelos modernos como Claude 3.5 Sonnet ou Gemini 2.5 Pro possuem janelas de contexto imensas e lidam com diffs grandes perfeitamente. Porém, se o diff for colossal, considere uma boa prática de engenharia: fazer _commits atômicos_ (separando as mudanças lógicas em pequenos commits) em vez de um único commit gigante. O seu time vai agradecer.

- **Q: Posso pedir para gerar a mensagem de commit em Português?**
  - A: Sim! Basta alterar a restrição final no prompt de "Inglês" para "Português". No entanto, recomendo fortemente manter em inglês. É o padrão global adotado na esmagadora maioria das empresas e praticamente obrigatório em projetos Open Source.

- **Q: A IA não vai vazar o meu código proprietário da empresa?**
  - A: Atenção à segurança! Se você estiver trabalhando em um projeto corporativo confidencial, **nunca** cole códigos sensíveis em IAs públicas (como o ChatGPT gratuito). Nesses casos, utilize a versão Enterprise/Team da sua empresa (que não treina modelos com os seus dados) ou, alternativamente, forneça à IA apenas um _resumo em texto_ do que você fez, omitindo o código real.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1.  **Múltiplas Opções (3 opções):** Força a IA a interpretar as mudanças por diferentes ângulos (por exemplo, priorizando a alteração visual vs. priorizando a lógica interna corrigida).
2.  **Estrutura Rígida e Restrições (Constraints):** Ao listar explicitamente os tipos permitidos (`feat`, `fix`, etc.) e impor o limite de 50 caracteres para o assunto, garantimos que o resultado (output) passe de primeira em qualquer validador automático de CI/CD (como o `commitlint`).
3.  **Contexto de Manutenção (Role):** Assumir o papel de "Mantenedor Open Source" calibra o tom da IA para ser extremamente técnica, concisa e focada na legibilidade do projeto a longo prazo.

---

## 📊 Prova: Antes & Depois

### ❌ Before (Entrada - O desenvolvedor cansado)

```text
Mudei a cor do botão de login para vermelho porque tava feio, também arrumei o bug de quando a senha estava errada e travava a tela inteira. Ah, e botei como instalar a parada no readme.
```

### ✅ After (Resultado da Versão Pro)

**Opção 1 (Foco na Correção Crítica de Bug)**

```text
fix(auth): resolve application freeze on invalid password

- Fix logic error that caused the UI to freeze upon incorrect login attempts
- Update login button color to red to improve visual feedback
- docs: Add project installation instructions to README.md
```

**Opção 2 (Foco na Melhoria de UI/UX)**

```text
style(ui): update login button color to red

- Enhance visual hierarchy by changing the login button color
- fix(auth): Prevent screen freeze when entering wrong credentials
- chore(docs): Include installation guide in documentation
```

---

## 🎯 Conclusão

Mensagens de commit são cartas de amor (ou de desculpas) para o seu "eu" do futuro e para os seus colegas de equipe.
Não deixe o cansaço do final do dia arruinar o seu histórico do Git. Automatize essa etapa burocrática, garanta a padronização do repositório e receba o cobiçado elogio da equipe: "Caramba, que log de commits lindo!".

Agora, faça o commit, abra o PR e vá descansar! 🍷
