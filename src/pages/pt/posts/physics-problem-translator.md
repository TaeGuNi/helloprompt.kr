---
layout: /src/layouts/Layout.astro
title: "Tradutor de Problemas de Física: Do Julgamento da Situação à Montagem de Equações"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Matemática/Ciência"
description: "Prompt que lê problemas de física escritos, analisa a situação e diz qual fórmula usar."
tags: ["Física", "Engenharia", "ResoluçãoProblemas", "Prompt"]
---

# 📝 Tradutor de Problemas de Física: Do Julgamento da Situação à Montagem de Equações

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Decorei todas as fórmulas, mas não sei se uso F=ma ou a Lei da Conservação de Energia para este problema."_

90% dos problemas de física é 'compreensão de leitura'. A parte mais difícil é encontrar pistas escondidas no problema ("Quando não há atrito", "Partindo do repouso") e traduzi-las para a linguagem matemática. Este prompt encontra pistas no problema como Sherlock Holmes e entrega a ferramenta perfeita (fórmula).

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Extraia variáveis físicas (Valores dados, Valores a encontrar) de problemas escritos.
2. Aponte explicitamente condições ocultas (Restrições implícitas).
3. Estabeleça estratégia para resolução de problemas e combine fórmulas.

---

## 🚀 A Solução: "Arquiteto de Soluções Físicas"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

> **Papel:** Você é um `[Professor de Física e Especialista em Resolução de Problemas]`.
> **Solicitação:** Crie um prompt que leia problemas de física escritos, analise a situação e diga qual fórmula usar.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e use-o.

> **Papel:** Você é um `[Professor de Física e Especialista em Resolução de Problemas]`.
>
> **Contexto:** Estou tentando resolver um problema de física, mas não consigo captar bem a situação e estou confuso sobre qual princípio aplicar.
>
> **Tarefa:**
>
> 1. **[Extração de Variável]**: Organize os valores dados no problema (Conhecidos) e valores a encontrar (Desconhecidos) com símbolos (ex: $v_0 = 0 m/s$).
> 2. **[Condições Ocultas]**: Encontre condições que não são especificadas no texto, mas devem ser consideradas fisicamente (ex: "Queda livre" -> $a = 9.8 m/s^2$).
> 3. **[Estabelecimento de Estratégia]**: Explique qual é a **Lei Física** mais adequada para resolver este problema e por que você deve usá-la.

- 4. **[Montagem de Equação]**: Monte um **Modelo Matemático** puro antes de substituir números.
     > **Restrições:**
     >
     > - Foque no 'Design' em vez do processo de resolução (Cálculo).
     > - Preste atenção à notação de Unidade.
     >
     > **Texto do Problema:**
     > `[Copie e cole o problema de física aqui]`

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

"Soltou uma bola do telhado de um prédio de 45m de altura. Velocidade ao atingir o chão?"

### ✅ Depois (Resultado)

**[Extração de Variável]**

- $h$ (Altura) = 45 m
- $v_0$ (Velocidade Inicial) = 0 m/s (Já que apenas disse 'soltou')
- $v$ (Velocidade Final) = ? (Valor a encontrar)

**[Condições Ocultas]**

- Ignore a resistência do ar, pois não há menção.
- Aceleração $a$ = Aceleração Gravitacional $g$ $\approx 9.8 m/s^2$ (Definir direção para baixo +)

**[Estabelecimento de Estratégia]**
Como não há informação de Tempo ($t$) e pergunta a relação entre altura e velocidade, usar **'Lei da Conservação de Energia'** ou **'Equações de Movimento para Aceleração Constante (Equação sem tempo)'** é mais rápido.

**[Montagem de Equação]**
$$ 2as = v^2 - v_0^2 $$
Aqui $v_0=0$, $s=h$, $a=g$, então
$$ v = \sqrt{2gh} $$

---

## 🎯 Conclusão

A física é uma linguagem que traduz o mundo em matemática. Com este prompt, você terá uma experiência estranha onde todo o mundo parece fórmulas.

Agora saia do trabalho na hora... Ah, devido à inércia, continue indo pelo caminho que ia para casa? 🍷
