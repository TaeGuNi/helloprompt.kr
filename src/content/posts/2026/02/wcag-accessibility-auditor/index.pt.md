---
layout: /src/layouts/Layout.astro
title: " \"WCAG 2.2 웹 접근성 감사(Audit) 봇\""
author: "Zzabbis"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "프론트엔드"
description: " \"O seu código é acessível para todos? Verifique se ele está em conformidade com as diretrizes de acessibilidade (WCAG).\""
tags: ["Accessibility", "HTML", "WCAG"]
---

# ♿️ O seu código é amigável para todos? Bot de Auditoria Automática de Acessibilidade Web (WCAG)

- **🎯 Recomendado para:** Desenvolvedores de projetos governamentais/corporativos, juniores que desejam aprimorar os detalhes de seus portfólios, desenvolvedores Front-end Seniores.
- **⏱️ Tempo Estimado:** Verificação manual do checklist de acessibilidade (2 horas) → Diagnóstico automático por IA (1 minuto)
- **🤖 Modelos Recomendados:** Claude 3.5 Sonnet (análise de código imbatível), GPT-4o

- ⭐ **Dificuldade:** ⭐☆☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐☆

> _"Você pode ter implementado animações deslumbrantes, mas se alguém não consegue sequer clicar no botão de login, o seu código falhou."_

A Acessibilidade Web não é apenas uma "cortesia", mas a "base" de qualquer serviço e, cada vez mais, uma obrigação legal. No entanto, memorizar e aplicar as diretrizes vastas e complexas do WCAG (Web Content Accessibility Guidelines) 2.2 a cada linha de código é quase impossível. Este prompt faz a varredura da sua marcação e dos códigos dos seus componentes, identificando falhas críticas de acessibilidade que podem ocorrer em leitores de tela e na navegação por teclado em apenas um minuto, refatorando tudo para um código semântico perfeito.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

1. **Conversão para Marcação Semântica:** Transforma o uso excessivo e sem sentido de `<div>` em tags semânticas HTML5 apropriadas.
2. **Conformidade Total com WCAG 2.2:** Verifica rigorosamente os critérios exigentes de acessibilidade, como contraste de cores, gerenciamento de foco e o uso indevido de WAI-ARIA.
3. **Guia de Teste Prático:** Fornece métodos práticos e específicos de teste que você pode validar usando apenas leitores de tela (VoiceOver, NVDA) e navegação por teclado (Tab).

---

## 🚀 A Solução: "Auditor de A11y (Acessibilidade)"

### 🥉 Versão Básica (Basic)

Use esta versão para uma verificação rápida quando tiver dúvidas sobre a acessibilidade de um botão específico ou elemento de formulário.

> **Função:** Você é um especialista em Acessibilidade Web (A11y).
> **Tarefa:** Verifique se há problemas de acessibilidade no código HTML abaixo que possam afetar leitores de tela ou a navegação por teclado, e corrija-o para que fique semântico.
> **Código:**
>
> ```html
> [Cole o seu código aqui]
> ```

<br>

### 🥇 Versão Pro (Especialista)

Ideal para auditar componentes de UI de alta complexidade, como modais, menus suspensos (dropdowns) e interações de abas (tabs).

> **Função (Role):** Você é um auditor rigoroso de certificação WCAG 2.2 e um Desenvolvedor Front-end Sênior com 10 anos de experiência.
>
> **Contexto (Context):**
>
> - Alvo: Acabei de desenvolver o componente `[Nome do Componente, ex: Modal de Formulário de Cadastro]`.
> - Objetivo: Usuários que navegam exclusivamente pelo teclado ou pessoas com deficiência visual (usuários de leitores de tela) devem conseguir operar esta interface sem qualquer barreira.
>
> **Tarefa (Task):**
>
> 1. **Diagnóstico WCAG 2.2:** Vasculhe o código fornecido em busca de qualquer violação dos critérios WCAG 2.2 (Nível AA ou superior), incluindo contraste de cores, gerenciamento de foco, rótulos de formulários e textos alternativos.
> 2. **Refatoração Semântica:** Elimine o uso excessivo e sem sentido de `<div>` ou `<span>` e reescreva o código utilizando tags semânticas do HTML5.
> 3. **Otimização de WAI-ARIA:** Siga estritamente a Primeira Regra do ARIA: "A melhor regra do ARIA é não usar o ARIA". Aplique atributos `aria-*` e `role` apenas quando for estritamente necessário e a solução não puder ser alcançada com HTML nativo.
> 4. **Armadilha de Foco (Focus Trap):** Se for um modal ou pop-up, crie um fluxo lógico de Focus Trap para garantir que o foco do teclado não escape do componente aberto.
> 5. **Guia de Validação:** Forneça um cenário específico de 3 linhas explicando como eu posso testar pessoalmente este código usando o teclado (Tab/Shift+Tab, Space/Enter) e um leitor de tela.
>
> **Código (Code):**
>
> ```[Linguagem, ex: tsx]
> [Cole o código do seu componente aqui]
> ```
>
> **Restrições (Constraints):**
>
> - Identifique e aplique a classe utilitária (`sr-only` ou similar) em elementos que devem ficar visualmente ocultos, mas acessíveis para os leitores de tela.

---

## 💡 Insight do Autor (Writer's Insight)

O trabalho de melhoria da acessibilidade web muitas vezes acaba se tornando um "exagero de WAI-ARIA". No entanto, o uso incorreto de atributos como `aria-label` ou `role` pode causar uma confusão enorme para os usuários de leitores de tela.
O grande diferencial deste prompt é forçar a IA a seguir a **"Primeira Regra do ARIA (usar elementos HTML nativos sempre que possível)"**.
No dia a dia, ao construir componentes complexos como Caixas de Seleção (Select Boxes) personalizadas ou Modais, passar o código por este prompt identifica de forma brilhante problemas que costumam passar despercebidos, como a perda de foco do teclado ou a ausência de rótulos em formulários. Especialmente quando utilizado com o modelo Claude 3.5 Sonnet, a experiência é como ter um especialista em acessibilidade extremamente detalhista sentado ao seu lado, fazendo uma revisão de código impecável.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Posso auditar a acessibilidade usando apenas imagens do design da interface (UI)?**
  - R: Sim, é perfeitamente possível. Ao usar o GPT-4o ou Claude 3.5 Sonnet, anexe a captura de tela do componente e adicione o pedido: "Verifique se o contraste de cores (Color Contrast) atende aos padrões WCAG Nível AA". A IA será capaz de encontrar até mesmo falhas de design que não estão no código.

- **P: Estou usando o Tailwind CSS. A IA corrige os nomes das classes automaticamente?**
  - R: Sim! Basta especificar no Contexto (Context) do prompt: "Use o Tailwind CSS para aplicar classes utilitárias exclusivas para leitores de tela (`sr-only`)". A IA ajustará a resposta para se encaixar perfeitamente na stack tecnológica que você está utilizando.

---

## 🧬 Dissecando o Prompt (Por que funciona?)

1.  **Definição Clara dos Critérios de Auditoria:** Em vez de um vago "melhore a acessibilidade", injetamos na persona o padrão internacional "WCAG 2.2 Nível AA". Isso restringe completamente as alucinações da IA.
2.  **Imposição da Primeira Regra do ARIA:** Previne que a IA exagere nos atributos ARIA e força o desenvolvimento de uma marcação semântica fundamental, tirando o máximo proveito das especificações nativas do HTML.
3.  **Guia de Teste Acionável (Actionable):** A IA não entrega apenas o código pronto. Ao exigir um cenário de teste, o desenvolvedor pode usar o próprio teclado para sentir e validar as mudanças, maximizando a utilidade prática no ambiente de trabalho.

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
<!-- Imagens decorativas sem significado recebem alt vazio ou aria-hidden para serem ignoradas por leitores de tela -->
<!-- Uso da tag button, que nativamente suporta não apenas onClick, mas também interação pelo teclado (Enter/Espaço) -->
<button type="button" class="submit-btn" onClick="sendData()">
  <img src="send-icon.png" alt="" aria-hidden="true" />
  <span>Enviar</span>
</button>
```

---

## 🎯 Conclusão

A Acessibilidade (A11y) pode parecer apenas "um recurso conveniente a mais" para algumas pessoas, mas para outras, é uma barreira massiva que determina "se elas podem ou não usar o serviço". Um bom desenvolvedor não é apenas alguém que escreve um código que funciona, mas alguém que escreve um código que não exclui nenhum usuário.

Agora, escreva um código acessível para todos e aproveite o fim do expediente com orgulho! 🍷
