---
layout: /src/layouts/Layout.astro
title: " \"Midjourney 캐릭터 일관성: 완벽한 캐릭터 시트 만들기\""
author: "ZZabbis"
date: "2026-02-13"
updatedDate: "2026-02-13"
category: "AI 디자인"
description: " \"Cansado de ver o rosto do seu personagem mudar a cada geração? Descubra o segredo para manter o design consistente usando um único prompt de Character Sheet no Midjourney.\""
tags: ["Midjourney", "캐릭터 디자인", "AI 아트", "일관성"]
---

# 📝 Consistência de Personagens no Midjourney: Como Criar a Character Sheet Perfeita

- **🎯 Recomendado para:** Desenvolvedores de jogos, quadrinistas, artistas conceituais
- **⏱️ Tempo necessário:** 1 hora → Reduzido para 5 minutos
- **🤖 Modelo recomendado:** ChatGPT (para criar o prompt) e Midjourney v6.0+

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Você já ficou frustrado ao gerar um personagem com IA e perceber que o rosto dele muda sutilmente a cada nova imagem, parecendo uma pessoa completamente diferente?"_

O maior desafio ao usar arte gerada por IA profissionalmente é manter a **consistência do personagem**. Ao criar recursos para quadrinhos ou jogos, é impossível usar as imagens se o rosto e a roupa do protagonista mudam a cada cena. A solução mais confiável e clássica para esse problema é gerar primeiro uma **'Character Sheet' (Ficha de Personagem)**.

Apresentamos a engenharia de prompts definitiva: uma técnica que permite obter as visões frontal, lateral e traseira em uma única geração de imagem, criando um ponto de referência perfeito para manter a consistência absoluta em trabalhos futuros.

---

## ⚡️ Resumo em 3 Tópicos (TL;DR)

1. Gere primeiro uma **Character Sheet** para estabelecer uma referência visual definitiva do design.
2. Use o **Prompt Pro** no ChatGPT para extrair um prompt em inglês perfeito para o Midjourney, incluindo os ângulos frontal, lateral e traseiro.
3. Configure o parâmetro de proporção de tela **`--ar`** para um formato amplo (como 16:9) para evitar que partes do corpo se sobreponham ou sejam cortadas.

---

## 🚀 A Solução: "Master Prompt para Character Sheet"

### 🥉 Versão Basic (Básica)

Use isso quando precisar testar rapidamente a atmosfera geral do seu personagem diretamente no Midjourney.

> **Prompt para o Midjourney:**
> character sheet of a `[descrição detalhada do personagem]`, full body, white background, multiple views, front side and back view --v 6.0 --ar 3:2

\

### 🥇 Versão Pro (Especialista)

Este é o prompt avançado para ser usado no ChatGPT ou Claude. Ele foi projetado para extrair o prompt em inglês perfeito para o Midjourney quando você precisa de artes conceituais detalhadas para jogos ou modelagem 3D.

> **Role (Papel):** Você é um `[Designer Chefe de Personagens de um RPG AAA]`.
>
> **Context (Contexto):**
>
> - Cenário: `[Preciso criar uma character sheet consistente que servirá de referência para modelagem 3D e ilustração de quadrinhos]`
> - Objetivo: `[Gerar um prompt em inglês de alta qualidade, no estilo concept art, que funcione perfeitamente no Midjourney v6.0]`
>
> **Task (Tarefa):**
>
> 1. Com base nas configurações abaixo, escreva 1 prompt em inglês otimizado para geração de imagens no Midjourney.
> 2. Configurações do Personagem: `[Descreva aqui detalhadamente a aparência, roupas, armas e paleta de cores do seu personagem]`
> 3. O prompt deve obrigatoriamente seguir o formato de **Character Sheet** e especificar que inclua pelo menos três ângulos: visão frontal (Front view), lateral (Side view) e traseira (Back view).
>
> **Constraints (Restrições):**
>
> - Especifique um fundo branco limpo (Plain white background) que não interfira no objeto principal.
> - Defina a pose como A-pose ou T-pose (Standard neutral pose) para evitar que os braços e pernas cubram o corpo.
> - É obrigatório solicitar uma imagem de corpo inteiro (Full body shot), visível da cabeça aos pés.
> - Exija uma iluminação plana (Flat lighting, shadowless) para que detalhes não fiquem escondidos por sombras dramáticas.
> - A saída deve ser exclusivamente o prompt em inglês, formatado dentro de um bloco de código markdown (```text).
>
> **Warning (Avisos):**
>
> - Para não perder os parâmetros essenciais, certifique-se de adicionar `--v 6.0 --ar 16:9 --stylize 250` no final do prompt.
> - Não invente informações das quais não tem certeza e omita introduções ou explicações desnecessárias.

---

## 💡 Comentário do Autor (Insight)

A razão pela qual este sistema de prompts é tão poderoso é que ele controla de forma inteligente a "disposição espacial" e a "consistência", dois dos maiores pontos fracos do Midjourney. A combinação do parâmetro **`--ar` (Aspect Ratio)** com os comandos de composição é o verdadeiro segredo.

1. **Canvas Panorâmico (`--ar 16:9`):** Uma character sheet precisa acomodar o corpo inteiro do personagem em pelo menos três ângulos diferentes lado a lado. Na proporção padrão (1:1), há uma chance altíssima de que o modelo comprima os personagens em um espaço pequeno, fazendo com que se sobreponham ou fiquem cortados nas bordas. Forçar a proporção 16:9 ou 3:2 garante que a IA tenha o espaço horizontal necessário.
2. **Controle de Iluminação (Flat lighting):** Iluminações cinematográficas são lindas em ilustrações finais, mas são péssimas para folhas de referência. As sombras podem distorcer os materiais e a estrutura das roupas. O comando "flat lighting" garante um resultado focado na utilidade prática para o fluxo de trabalho.

**💡 Dica Prática:** Pegue a imagem gerada com o Prompt Pro e use-a como base para a função `--cref` (Character Reference) do Midjourney. Assim, você poderá gerar ilustrações infinitas em diversas poses, mantendo os traços do rosto e os detalhes das roupas de forma incrivelmente consistente.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Posso mudar apenas a roupa ou a arma depois de gerar a character sheet?**
  - R: Sim, perfeitamente. Clique com o botão direito na imagem gerada dentro do Discord do Midjourney e selecione a ferramenta **'Vary (Region)'** (Inpainting). Mantenha o rosto e a silhueta intactos, selecione apenas a área da roupa com a ferramenta laço e insira um novo prompt (ex: "wearing futuristic heavy armor") para uma edição impecável.

- **P: E se eu quiser um estilo de anime japonês para um webtoon, em vez de um visual realista?**
  - R: Sem problemas. Basta alterar o parâmetro no final do prompt de `--v 6.0` para `--niji 6`, que é o modelo especializado em animes do Midjourney. Você obterá uma character sheet incrível com estilo de "cel shading", pronta para ser usada em webtoons ou jogos 2D.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Especificação de Múltiplos Ângulos (Multiple Views):** Com os termos "Front, Side, Back view", nós forçamos a IA a adotar um layout técnico rigoroso, impedindo-a de gerar poses aleatórias e artísticas que não servem como referência.
2. **Controle de Pose e Enquadramento (A-pose / Full body shot):** Ao exigir a pose padrão da indústria de jogos e modelagem 3D, evitamos que membros sobrepostos escondam detalhes cruciais do figurino.
3. **Isolamento das Restrições:** Ao orientar a IA conversacional (ChatGPT) sobre como o prompt do Midjourney deve ser estruturado, eliminamos o risco de alucinações ou a adição inútil de cenários complexos no plano de fundo.

---

## 📊 Prova: Antes & Depois

### ❌ Antes (Entrada Simples)

```text
make a character sheet of a cyberpunk warrior --v 6.0
```

> **Resultado:** Os personagens têm tamanhos diferentes em cada ângulo, armas cobrem partes importantes do corpo e as poses são muito dinâmicas para entender a estrutura do design. Há um cenário cyberpunk complexo no fundo, tornando extremamente difícil isolar o personagem.

### ✅ Depois (Resultado Pro)

```text
Character sheet of a cyberpunk female warrior with a neon katana and pink hair, front view, side view, back view, full body shot, standard neutral A-pose, plain white background, flat lighting, shadowless, high quality, detailed concept art style --v 6.0 --ar 16:9 --stylize 250
```

> **Resultado:** Uma imagem limpa, com as vistas frontal, lateral e traseira perfeitamente alinhadas, com proporções consistentes sobre um fundo totalmente branco (Plain white background). O personagem aparece nítido da cabeça aos pés, sem recortes, e a ausência de sombras (shadowless) permite usar os detalhes da roupa imediatamente como referência para modelagem 3D ou ilustração.

---

## 🎯 Conclusão

Uma **Character Sheet** bem elaborada é como um alicerce sólido para qualquer trabalho de arte com IA. Uma vez que você tenha essa fundação estruturada, poderá colocar seu personagem em qualquer cenário e contexto, com a certeza de que os detalhes não vão se desmanchar.

Use o prompt que você aprendeu hoje para resolver de uma vez por todas o problema da inconsistência visual e comece a construir seu próprio universo de personagens originais!

Agora você pode encerrar o expediente mais cedo! 🍷
