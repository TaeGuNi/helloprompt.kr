---
layout: /src/layouts/Layout.astro
title: "Componente Frontend, Apenas Descreva o Design e o Código está Pronto"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt que gera rapidamente componentes de IU com a pilha de tecnologia desejada como React, Vue, Tailwind CSS, etc."
tags: ["Frontend", "React", "Vue", "Tailwind", "Componente de IU"]
---

# 📝 Componente Frontend, Apenas Descreva o Design e o Código está Pronto

- **🎯 Recomendado para:** Todos
- **⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Quantas vezes tenho que envolver com div para fazer um cartão de IU?"_

O processo de passar do rascunho de design para o código é muitas vezes uma tarefa repetitiva simples.
"Imagem à esquerda, título em negrito, 2 botões de etiqueta abaixo..."
Se você explicar em palavras assim, um código de componente perfeitamente estilizado aparece.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Gere código descrevendo a forma de IU desejada em texto
2. Suporte para as pilhas mais recentes como React/Vue + Tailwind CSS
3. Consideração de Design Responsivo e Acessibilidade (A11y)

---

## 🚀 A Solução: "Fábrica de Componentes de IU"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

**Papel:** Você é um designer de UI/UX sensual e desenvolvedor frontend qualificado.
**Solicitação:** Gere rapidamente componentes de IU com a pilha de tecnologia desejada como React, Vue, Tailwind CSS, etc.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um designer de UI/UX sensual e desenvolvedor frontend qualificado.
>
> **Contexto:** Preciso de um novo componente de IU para meu aplicativo web. Deve ser um design moderno e limpo.
>
> **Tarefa:**
>
> 1. Escreva código de componente de IU que se ajuste à descrição abaixo.
> 2. Use `[React / Vue / Svelte]` e `[Tailwind CSS / Styled Components / CSS Modules]` para a pilha de tecnologia.
> 3. Aplique design **Responsivo** que fique bem tanto no celular quanto no desktop.
> 4. Se ícones forem necessários, assuma o uso de bibliotecas virtuais como `lucide-react` ou `font-awesome`.
>
> **Descrição do Componente:**
> `[Descreva a IU que você quer fazer. ex.: Cartão de perfil - inclui imagem de avatar redonda, nome, trabalho, botão seguir]`
>
> **Restrições:**
>
> - Insira apropriadamente atributos ARIA considerando a Acessibilidade.
> - Escreva o código para que possa ser copiado e usado como um único arquivo.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Descrição de Entrada)

"Faça um cartão de produto. Foto do produto no topo, nome do produto e preço abaixo. E coloque um botão adicionar ao carrinho e um botão de coração."

### ✅ Depois (Resultado - Exemplo React + Tailwind)

```jsx
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-lg font-semibold">${price}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
          <ShoppingCart size={18} /> Adicionar
        </button>
        <button
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Lista de desejos"

          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
```

---

## 🎯 Conclusão

Não gaste tempo desenhando telas.
Deixe o esqueleto para a IA, e você apenas se concentre em conectar dados e dar vida a eles. 🍷
