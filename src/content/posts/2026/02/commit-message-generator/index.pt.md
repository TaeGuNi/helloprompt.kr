---
layout: /src/layouts/Layout.astro
title: "Geração Automática de Conventional Commits: O Fim da Dúvida na Mensagem de Commit"
author: "Jay"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt que gera mensagens de commit impecáveis no padrão Conventional Commits. Basta colar o seu git diff e a IA faz o resto em segundos."
tags: ["Git", "Mensagem de Commit", "Colaboração", "Produtividade"]
---

## 📝 "O que eu escrevo no commit?" Nunca mais! Geração automática de Conventional Commits

- **🎯 Recomendado para:** Desenvolvedores, Engenheiros de Software, Contribuidores Open Source
- **⏱️ Tempo economizado:** De 5 minutos suando frio → 10 segundos
- **🤖 Modelo recomendado:** ChatGPT (GPT-4o), Claude 3.5 Sonnet, Gemini 2.5 Pro

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Escrever uma lógica complexa levou 3 horas. Ficar encarando a tela em branco pensando na mensagem de commit levou mais 15 minutos... Quem nunca?"_

`fix: bug`, `update code`, `wip`... Você ainda faz commits assim? 

Mensagens de commit claras e semânticas são a espinha dorsal de um bom histórico de versionamento e fundamentais para o trabalho em equipe. No entanto, ter que redigi-las do zero a cada pequena alteração drena a nossa energia criativa e produtividade. 

A partir de agora, o seu fluxo de trabalho vai mudar: basta colar o resultado do seu comando `git diff`. A IA irá extrair o contexto das suas alterações e redigir uma mensagem perfeita seguindo o padrão **Conventional Commits**, a regra de ouro adotada pelo universo Open Source e pelas maiores empresas de tecnologia do mundo.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. **Análise de Contexto Automática:** A IA entende exatamente o que mudou no seu código sem precisar de nenhuma explicação manual.
2. **Classificação Precisa:** Escolhe automaticamente o prefixo semântico correto (`feat`, `fix`, `refactor`, `chore`, etc.).
3. **Formatação Impecável:** Gera um Título (Subject) conciso e um Corpo (Body) detalhado em tópicos, prontos para colar no repositório.

---

## 🚀 A Solução: "Gerador Mágico de Mensagens Git"

### 🥉 Basic Version (Versão Rápida)

Ideal para quando você está com pressa, fez uma alteração cirúrgica e precisa de um commit direto ao ponto.

> **Papel (Role):** Você é um Engenheiro de Software Sênior extremamente rigoroso com o histórico do Git.
> 
> **Solicitação (Task):** Analise o `git diff` fornecido em seguida e escreva uma única mensagem de commit seguindo o padrão Conventional Commits em inglês. Retorne APENAS a mensagem de commit, sem introduções, formatações extras ou explicações.
> 
> **Alterações (Changes):** `[Cole o seu git diff aqui]`

### 🥇 Pro Version (Versão Especialista)

A solução definitiva para Pull Requests complexos que exigem uma descrição detalhada e técnica do "Por que" e "O que" mudou no projeto.

> **Papel (Role):** Você é um Mantenedor Open Source de elite, obcecado por históricos de Git impecáveis e semânticos.
>
> **Contexto (Context):**
>
> - Cenário: Acabei de finalizar uma série de alterações complexas no código e preciso realizar o commit.
> - Objetivo: Preciso de mensagens de commit claras, rastreáveis e profissionais para que a minha equipe (e o meu eu do futuro) entenda perfeitamente o impacto arquitetural e funcional desta mudança.
>
> **Solicitação (Task):**
>
> 1. Analise as `[Alterações]` fornecidas abaixo.
> 2. Recomende 3 opções distintas de mensagens de commit, rigorosamente alinhadas às regras do **Conventional Commits**.
> 3. Formato obrigatório: `<type>(<scope>): <subject>`
> 4. Corpo (Body): Explique o motivo real da alteração (Why) e o que foi de fato implementado (What) utilizando marcadores (bullet points) claros.
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
> - O Tipo (Type) DEVE ser selecionado obrigatoriamente a partir desta lista: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
> - O Assunto (Subject) não deve ultrapassar 50 caracteres e deve ser obrigatoriamente escrito no modo imperativo (ex: "add", não "added" ou "adds").
> - O idioma final da mensagem de commit gerada DEVE ser OBRIGATORIAMENTE o **Inglês**, pois é o padrão global unificado da indústria de software.

---

## 💡 Comentário do Autor (Insight)

Este prompt atua como um verdadeiro "salva-vidas" no fim de um longo dia de codificação intensa. Muitas vezes, logo após resolvermos um bug incrivelmente complexo ou refatorarmos um módulo inteiro, a nossa capacidade cognitiva está simplesmente esgotada para formular uma frase decente e semanticamente correta em inglês. 

O grande diferencial e o verdadeiro truque da **Versão Pro** está em exigir **3 opções distintas**. Um `git diff` no mundo real costuma conter uma mistura de correções de bugs, pequenas refatorações de código e ajustes finos de UI. Ao solicitar múltiplas opções, a IA é forçada a analisar a mudança sob diferentes perspectivas: geralmente ela te entrega um título focado no `fix`, outro no `refactor` e um terceiro mais abrangente. Dessa forma, você tem o poder de escolher a opção que melhor reflete a intenção principal e o impacto do seu PR (Pull Request).

**Dica de ouro de produtividade:** Se você utiliza o terminal diariamente, pode executar o comando `git diff | pbcopy` (no macOS) ou `git diff | clip` (no Windows) para copiar todas as alterações não "comitadas" instantaneamente para a sua área de transferência. Depois, é só colar direto no ChatGPT ou Claude e ver a mágica acontecer!

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: O meu `git diff` é gigantesco (contém milhares de linhas). A IA consegue lidar com um volume tão grande de código?**
  - A: Sim. Modelos de última geração como o Claude 3.5 Sonnet ou o Gemini 2.5 Pro possuem janelas de contexto imensas e conseguem interpretar diffs massivos com perfeição. No entanto, se o diff for colossal, considere adotar uma excelente prática de engenharia de software: faça _commits atômicos_ (separando as suas mudanças lógicas em pequenos commits focados) em vez de um único commit gigante de "fim de dia". Os seus colegas de equipe de code review vão agradecer imensamente.

- **Q: Posso pedir para a IA gerar a mensagem de commit em Português?**
  - A: Tecnicamente sim! Basta alterar a restrição final no prompt de "Inglês" para "Português". Contudo, eu recomendo fortemente que você mantenha os seus logs em inglês. Este é o idioma padrão global adotado na esmagadora maioria das empresas de tecnologia e é uma prática praticamente obrigatória se você deseja contribuir em projetos Open Source de relevância mundial.

- **Q: Existe o risco da IA vazar o código proprietário da minha empresa?**
  - A: Atenção total à segurança da informação! Se você estiver trabalhando em um projeto corporativo confidencial ou sob NDA, **nunca** cole códigos sensíveis ou chaves de API em IAs públicas (como a versão gratuita do ChatGPT). Nesses cenários críticos, utilize a versão Enterprise/Team fornecida pela sua empresa (que por contrato não treina modelos utilizando os seus dados privados) ou, alternativamente, forneça à IA apenas um _resumo em texto_ da lógica que você alterou, omitindo qualquer trecho de código real.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Múltiplas Opções Estratégicas (3 opções):** Força o modelo de linguagem a interpretar as mudanças por diferentes ângulos de impacto (por exemplo, priorizando a alteração visual vs. destacando a lógica de negócio corrigida no backend).
2. **Estrutura Rígida e Restrições (Constraints):** Ao listar explicitamente os tipos semânticos permitidos (`feat`, `fix`, etc.) e impor cirurgicamente o limite de 50 caracteres para o assunto, garantimos que o resultado (output) passe de primeira e sem erros em qualquer validador automático de CI/CD (como o rigoroso `commitlint`).
3. **Contexto de Manutenção (Role):** Assumir o papel de um "Mantenedor Open Source" calibra o tom da IA para ser extremamente técnica, analítica, concisa e focada na legibilidade e manutenção do projeto a longo prazo.

---

## 📊 Prova: Antes & Depois

### ❌ Before (A entrada do desenvolvedor exausto)

```text
Mudei a cor do botão de login para vermelho porque tava feio de ler, também arrumei o bug de quando a senha estava errada e travava a tela inteira sem dar erro. Ah, e botei como instalar a parada no readme pro pessoal novo.
```

### ✅ After (O resultado impecável da Versão Pro)

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
- chore(docs): Include installation guide in project documentation
```

---

## 🎯 Conclusão

Mensagens de commit não são apenas um registro burocrático; são cartas de amor (ou de desculpas sinceras) para o seu "eu" do futuro em um momento de desespero investigativo, e para os seus colegas de equipe durante um code review. 

Não permita que o cansaço natural do final do dia arruíne a qualidade e a rastreabilidade do seu histórico do Git. Automatize essa etapa mentalmente custosa, garanta a padronização absoluta do repositório da sua equipe e prepare-se para receber o cobiçado elogio do seu Tech Lead: "Caramba, que log de commits impecável!".

Agora, faça o seu commit com orgulho, abra o Pull Request e vá descansar! 🍷
