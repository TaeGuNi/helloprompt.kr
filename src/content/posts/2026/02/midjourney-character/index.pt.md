---
layout: /src/layouts/Layout.astro
title: " \"Midjourney 캐릭터 일관성: 완벽한 캐릭터 시트 만들기\""
author: "Jay"
date: "2026-02-13"
updatedDate: "2026-02-13"
category: "AI 디자인"
description: "Cansado de ver o rosto do seu personagem mudar a cada nova geração? Descubra o segredo para manter um design impecável e consistente usando um único prompt de Character Sheet no Midjourney."
tags: ["Midjourney", "캐릭터 디자인", "AI 아트", "일관성"]
---

# 📝 Consistência de Personagens no Midjourney: O Segredo para a Character Sheet Perfeita

- **🎯 Recomendado para:** Desenvolvedores de jogos, quadrinistas e concept artists
- **⏱️ Tempo necessário:** 1 hora → Reduzido para 5 minutos
- **🤖 Modelo recomendado:** ChatGPT (para o prompt) e Midjourney v6.0+

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Cansado de gerar personagens com IA e ver o rosto ou as roupas mudarem a cada nova imagem, como se fossem pessoas completamente diferentes?"_

O maior pesadelo de quem utiliza arte gerada por IA em fluxos de trabalho profissionais é, sem dúvida, manter a **consistência do personagem**. Se você está desenvolvendo assets para jogos ou ilustrando uma história em quadrinhos, deparar-se com um protagonista que muda de rosto, proporção ou figurino a cada nova cena torna o material praticamente inútil. A solução mais robusta e comprovada para contornar esse problema estrutural é estabelecer, logo no início, uma **'Character Sheet' (Ficha de Personagem)**.

Apresentamos aqui a técnica definitiva de *prompt engineering*: uma abordagem estratégica que extrai as visões frontal, lateral e traseira em uma única geração. Isso cria a base de referência perfeita para garantir uma consistência visual absoluta em todos os seus projetos futuros, eliminando horas de retrabalho e frustração.

---

## ⚡️ 3 Pontos Principais (TL;DR)

1. Gere sempre uma **Character Sheet** primeiro para fixar o design oficial do seu personagem.
2. Utilize a versão **Pro** do nosso prompt no ChatGPT para arquitetar as instruções perfeitas para o Midjourney, garantindo visões frontal, lateral e traseira.
3. Ajuste a proporção de tela (**`--ar`**) para formatos panorâmicos (como 16:9), evitando cortes indesejados ou sobreposições bizarras do corpo.

---

## 🚀 A Solução: "Master Prompt para Character Sheet"

### 🥉 Versão Basic (Básica)

Ideal para validar rapidamente a atmosfera e o design geral do seu personagem direto no Midjourney.

> **Prompt para o Midjourney:**
> character sheet of a `[descrição detalhada do personagem]`, full body, white background, multiple views, front side and back view --v 6.0 --ar 3:2

### 🥇 Versão Pro (Especialista)

Um prompt avançado feito sob medida para o ChatGPT ou Claude. Ele atua como um engenheiro que constrói o prompt exato para o Midjourney, garantindo *concept arts* detalhadas, prontas para modelagem 3D ou desenvolvimento de jogos.

> **Role (Papel):** Você é um `[Lead Character Designer de um RPG AAA]`.
>
> **Context (Contexto):**
>
> - Cenário: `[Preciso criar uma character sheet consistente que servirá de base rigorosa para modelagem 3D e ilustração de quadrinhos]`
> - Objetivo: `[Gerar um prompt em inglês de altíssima qualidade, com estética de concept art, totalmente otimizado para o Midjourney v6.0]`
>
> **Task (Tarefa):**
>
> 1. Com base nas diretrizes abaixo, elabore 1 prompt em inglês perfeitamente otimizado para o Midjourney.
> 2. Design do Personagem: `[Descreva aqui detalhadamente a aparência física, figurino, armas e paleta de cores do seu personagem]`
> 3. O prompt deve seguir estritamente o formato de uma **Character Sheet**, exigindo pelo menos três ângulos: visão frontal (Front view), lateral (Side view) e traseira (Back view).
>
> **Constraints (Restrições):**
>
> - Exija um fundo branco absoluto (Plain white background) para facilitar recortes e não poluir o design.
> - Defina a postura como A-pose ou T-pose (Standard neutral pose), impedindo que braços e pernas ocultem os detalhes do corpo.
> - É obrigatório o enquadramento de corpo inteiro (Full body shot), dos pés à cabeça.
> - Solicite iluminação plana e sem sombras marcadas (Flat lighting, shadowless), garantindo que nenhum detalhe seja perdido no escuro.
> - O resultado final deve ser APENAS o prompt em inglês, entregue dentro de um bloco de código markdown (```text).
>
> **Warning (Avisos):**
>
> - Para garantir a integridade da geração, os parâmetros `--v 6.0 --ar 16:9 --stylize 250` devem constar no final do prompt.
> - Não invente elementos não solicitados (sem alucinações) e evite qualquer texto explicativo antes ou depois do código.

---

## 💡 Comentário do Autor (Insight)

A verdadeira genialidade desta estrutura de prompt está em domar os dois maiores calcanhares de Aquiles do Midjourney: a "disposição espacial" e a "consistência direcional". O segredo absoluto mora no alinhamento do parâmetro **`--ar` (Aspect Ratio)** com termos precisos de composição fotográfica.

1. **Canvas Panorâmico (`--ar 16:9`):** Uma Ficha de Personagem exige espaço de sobra para exibir três ângulos de corpo inteiro lado a lado. Se você usar o formato padrão (1:1), o Midjourney vai espremer o personagem na tela, gerando sobreposições bizarras e membros decepados. Forçar proporções *ultrawide*, como 16:9, garante a "tela" necessária para a IA respirar e organizar os elementos adequadamente.
2. **Controle de Iluminação (Flat lighting):** Sombras dramáticas e cinematográficas ficam incríveis em pôsteres, mas são um verdadeiro desastre para *concept art*. Elas escondem texturas, distorcem a percepção das cores e camuflam o caimento das roupas. Ao exigir "flat lighting", você extrai uma imagem com valor técnico real, pronta para ir direto para as mãos de um modelador 3D.

**💡 Dica Prática:** Salve a imagem final gerada pela versão Pro e utilize-a como âncora no parâmetro `--cref` (Character Reference) do Midjourney. Com isso, você criará um ecossistema infinito de poses, dinâmicas e situações diferentes, mas mantendo exatamente o mesmo rosto, biotipo e figurino.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Posso alterar apenas a arma ou uma peça de roupa após gerar a Character Sheet?**
  - R: Com certeza. No Discord do Midjourney, utilize o botão **'Vary (Region)'** (Inpainting) logo abaixo da imagem gerada. Preserve o rosto e a silhueta principal, selecione apenas a área que deseja alterar com a ferramenta de laço e injete um prompt focado (ex: "wearing a heavy futuristic mech-suit") para um ajuste cirúrgico e perfeito.

- **P: Consigo adaptar esse prompt para um estilo de anime ou Webtoon?**
  - R: Facilmente. Basta trocar o parâmetro final `--v 6.0` por `--niji 6`, que é o modelo do Midjourney treinado especificamente para a estética de anime. O resultado será um *concept art* estonteante com finalização em *cel shading*, pronto para ser a base da sua próxima *comic*.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Múltiplos Ângulos Explícitos (Multiple Views):** Ao cravar "Front, Side, Back view", nós amarramos as mãos da IA, forçando um layout técnico estruturado e inibindo poses artísticas soltas que seriam inúteis para o fluxo de produção.
2. **Controle Estrito de Enquadramento (A-pose / Full body shot):** Ao evocar o padrão ouro da indústria de games, garantimos que os braços flexionados ou posturas muito dinâmicas não escondam detalhes essenciais do figurino, como o design de um cinto ou textura da calça.
3. **Isolamento de Ruído (Plain white background):** Ao condicionar o modelo a gerar o resultado com regras inquebráveis, como o fundo totalmente branco, cortamos pela raiz a mania do Midjourney de inserir cenários caóticos que tornariam o recorte da imagem um verdadeiro pesadelo.

---

## 📊 Prova: Antes & Depois

### ❌ Antes (Entrada Simples)

```text
make a character sheet of a cyberpunk warrior --v 6.0
```

> **Resultado:** Uma verdadeira bagunça visual. Escalas distorcidas entre os ângulos, armas bloqueando detalhes essenciais da roupa e uma pose excessivamente dinâmica para servir de base. Sem contar o fundo *cyberpunk* super detalhado que torna o processo de recorte inviável.

### ✅ Depois (Resultado Pro)

```text
Character sheet of a cyberpunk female warrior with a neon katana and pink hair, front view, side view, back view, full body shot, standard neutral A-pose, plain white background, flat lighting, shadowless, high quality, detailed concept art style --v 6.0 --ar 16:9 --stylize 250
```

> **Resultado:** Impecável. Visões frontal, lateral e traseira rigorosamente alinhadas, proporções milimétricas e um fundo branco estéril (*Plain white background*). O personagem é capturado com clareza da ponta do cabelo à sola do sapato, e a iluminação neutra (*shadowless*) entrega um material de referência cristalino, pronto para ser utilizado por qualquer artista 3D ou ilustrador.

---

## 🎯 Conclusão

Uma **Character Sheet** magistral não é apenas um belo desenho; é o alicerce absoluto de toda a sua *pipeline* de produção visual com IA. Com essa matriz padronizada e trancada a sete chaves, você ganha a liberdade inestimável de jogar o seu personagem em qualquer cena de ação, mantendo a identidade e o 100% do design intactos.

Aproprie-se deste *master prompt*, elimine de vez as dores de cabeça com mutações visuais indesejadas e escale com confiança a criação do seu próprio universo!

Agora você pode encerrar o expediente mais cedo! 🍷
