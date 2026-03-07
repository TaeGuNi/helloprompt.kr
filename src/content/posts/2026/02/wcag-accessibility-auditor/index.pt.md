---
layout: /src/layouts/Layout.astro
title: " \"WCAG 2.2 웹 접근성 감사(Audit) 봇\""
author: "Jay"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "프론트엔드"
description: "O seu código é acessível para todos? Verifique se ele está em conformidade com as diretrizes de acessibilidade (WCAG)."
tags: ["Accessibility", "HTML", "WCAG"]
---

## ♿️ O seu código é amigável para todos? Bot de Auditoria Automática de Acessibilidade Web (WCAG)

- **🎯 Recomendado para:** Desenvolvedores de projetos governamentais e corporativos, desenvolvedores juniores que desejam aprimorar os detalhes de seus portfólios, desenvolvedores front-end seniores.
- **⏱️ Tempo economizado:** Verificação manual do checklist de acessibilidade (2 horas) → Diagnóstico automático por IA (1 minuto)
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet (análise de código imbatível), GPT-4o

- ⭐ **Dificuldade:** ⭐☆☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Você pode ter criado animações incríveis, mas se um usuário sequer consegue clicar no botão de login, o seu código falhou."_

A acessibilidade web não é apenas uma "cortesia", mas a "base" de qualquer serviço e, cada vez mais, uma obrigação legal. No entanto, memorizar e aplicar as vastas e complexas diretrizes do WCAG (Web Content Accessibility Guidelines) 2.2 a cada linha de código é uma tarefa quase impossível. Este prompt faz a varredura da sua marcação e do código dos seus componentes, identificando em apenas um minuto as falhas críticas de acessibilidade que afetam leitores de tela e a navegação por teclado, e refatorando tudo para garantir uma semântica perfeita.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

1. **Conversão para Marcação Semântica:** Transforma o uso excessivo e sem sentido de `<div>` nas tags semânticas apropriadas do HTML5.
2. **Conformidade Total com o WCAG 2.2:** Verifica rigorosamente os critérios exigentes de acessibilidade, como contraste de cores, gerenciamento de foco e o uso indevido do WAI-ARIA.
3. **Guia Prático de Testes:** Fornece métodos de teste específicos para que você possa validar o código utilizando apenas leitores de tela (VoiceOver, NVDA) e a navegação por teclado (tecla Tab).

---

## 🚀 A Solução: "Auditor de A11y (Acessibilidade)"

### 🥉 Versão Básica (Basic)

Use esta versão para uma verificação rápida sempre que tiver dúvidas sobre a acessibilidade de um botão específico ou elemento de formulário.

> **Função:** Você é um especialista em acessibilidade web (A11y).
> 
> **Tarefa:** Verifique se há problemas de acessibilidade no código HTML abaixo que possam afetar os leitores de tela ou a navegação por teclado, e corrija-o para garantir a semântica adequada.
> 
> **Código:**
>
>
> [Cole o seu código aqui]
>

### 🥇 Versão Pro (Especialista)

Ideal para auditar componentes de interface de alta complexidade, como modais, menus suspensos (dropdowns) e interações de abas (tabs).

> **Função (Role):** Você é um auditor rigoroso de certificação WCAG 2.2 e um Desenvolvedor Front-end Sênior com 10 anos de experiência.
>
> **Contexto (Context):**
>
> - Alvo: Acabei de desenvolver o componente `[Nome do Componente, ex.: Modal de Formulário de Cadastro]`.
> - Objetivo: Usuários que navegam exclusivamente pelo teclado ou pessoas com deficiência visual (usuários de leitores de tela) devem conseguir operar esta interface sem qualquer barreira.
>
> **Tarefa (Task):**
>
> 1. **Diagnóstico WCAG 2.2:** Analise o código fornecido em busca de qualquer violação dos critérios WCAG 2.2 (Nível AA ou superior), incluindo contraste de cores, gerenciamento de foco, rótulos de formulários e textos alternativos.
> 2. **Refatoração Semântica:** Elimine o uso excessivo e sem sentido de `<div>` ou `<span>` e reescreva o código utilizando as tags semânticas do HTML5.
> 3. **Otimização do WAI-ARIA:** Siga estritamente a Primeira Regra do ARIA: "A melhor regra do ARIA é não usar o ARIA". Aplique os atributos `aria-*` e `role` apenas quando for estritamente necessário e a solução não puder ser alcançada apenas com o HTML nativo.
> 4. **Armadilha de Foco (Focus Trap):** Se for um modal ou pop-up, crie um fluxo lógico de Focus Trap (armadilha de foco) para garantir que o foco do teclado não escape do componente aberto.
> 5. **Guia de Validação:** Forneça um cenário específico de 3 linhas explicando como posso testar este código manualmente usando o teclado (Tab/Shift+Tab, Space/Enter) e um leitor de tela.
>
> **Código (Code):**
>
>
> [Cole o código do seu componente aqui]
>
>
> **Restrições (Constraints):**
>
> - Identifique e aplique a classe utilitária (como `sr-only` ou similar) em elementos que devem ficar visualmente ocultos, mas acessíveis para os leitores de tela.

---

## 💡 Insight do Autor (Writer's Insight)

O processo de melhoria da acessibilidade web muitas vezes acaba se tornando um "exagero de WAI-ARIA". No entanto, o uso incorreto de atributos como `aria-label` ou `role` pode causar uma enorme confusão para os usuários de leitores de tela.
O grande diferencial deste prompt é forçar a IA a seguir a **"Primeira Regra do ARIA (usar elementos HTML nativos sempre que possível)"**.
No dia a dia, ao construir componentes complexos, como caixas de seleção (select boxes) personalizadas ou modais, passar o código por este prompt identifica de forma brilhante problemas que costumam passar despercebidos, como a perda de foco do teclado ou a ausência de rótulos em formulários. Especialmente quando utilizado com o modelo Claude 3.5 Sonnet, a experiência é como ter um especialista em acessibilidade extremamente detalhista sentado ao seu lado, fazendo uma revisão de código impecável.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Posso auditar a acessibilidade usando apenas imagens do design da interface (UI)?**
  - R: Sim, é perfeitamente possível. Ao usar o GPT-4o ou Claude 3.5 Sonnet, anexe a captura de tela do componente e adicione o pedido: "Verifique se o contraste de cores atende aos padrões WCAG Nível AA". A IA será capaz de encontrar até mesmo falhas de design que não estão presentes no código.

- **P: Estou usando o Tailwind CSS. A IA corrige os nomes das classes automaticamente?**
  - R: Sim! Basta especificar no Contexto (Context) do prompt: "Use o Tailwind CSS para aplicar classes utilitárias exclusivas para leitores de tela (`sr-only`)". A IA ajustará a resposta para se integrar perfeitamente à stack tecnológica que você está utilizando.

---

## 🧬 Dissecando o Prompt (Por que funciona?)

1.  **Definição Clara dos Critérios de Auditoria:** Em vez de um vago "melhore a acessibilidade", injetamos na persona o padrão internacional "WCAG 2.2 Nível AA". Isso restringe completamente as alucinações da IA.
2.  **Imposição da Primeira Regra do ARIA:** Previne que a IA exagere nos atributos ARIA e força o desenvolvimento de uma marcação semântica impecável, tirando o máximo proveito das especificações nativas do HTML.
3.  **Guia de Teste Acionável (Actionable):** A IA não entrega apenas o código pronto. Ao exigir um cenário de teste, o desenvolvedor pode usar o próprio teclado para sentir e validar as mudanças, maximizando a utilidade prática no fluxo de trabalho.

---

## 📊 Prova: Antes e Depois (Before & After)

### ❌ Antes (Input: O pior botão possível feito com `div`)

```html
<div class="submit-btn" onclick="sendData()">
  <img src="send-icon.png" />
  <span>Enviar</span>
</div>
```

### ✅ Depois (Output: Foco no teclado e suporte impecável a leitores de tela)

```html


<button type="button" class="submit-btn" onClick="sendData()">
  <img src="send-icon.png" alt="" aria-hidden="true" />
  <span>Enviar</span>
</button>
```

---

## 🎯 Conclusão

A acessibilidade web (A11y) pode parecer apenas "um recurso conveniente a mais" para algumas pessoas, mas para outras, é a barreira massiva que determina se elas podem ou não usar o seu serviço. Um bom desenvolvedor não é apenas aquele que escreve um código que funciona, mas aquele que escreve um código que não exclui nenhum usuário.

Agora, escreva um código acessível para todos e encerre o seu expediente com orgulho! 🍷
