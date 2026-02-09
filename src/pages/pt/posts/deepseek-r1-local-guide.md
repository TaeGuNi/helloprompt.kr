---
layout: /src/layouts/Layout.astro
title: "Instalação Local do DeepSeek R1: Seu Escravo de Código Gratuito no PC"
author: "ZZabbis"
date: "2026-02-08"
updatedDate: "2026-02-08"
category: "Dev & Coding"
description: "Como instalar o DeepSeek R1 localmente com Ollama e ter um assistente de codificação ilimitado e gratuito. Sem vazamento de dados, 100% privado."
tags: ["DeepSeek", "Ollama", "Local LLM", "Codificação", "Produtividade"]
---

# 💻 Seu Escravo de Código Gratuito no PC: Guia de Instalação Local do DeepSeek R1

> **🎯 Recomendado para:** Desenvolvedores preocupados em vazar código da empresa, Estudantes economizando custos de API, Trabalhadores offline
> **⏱️ Tempo Necessário:** 10 min

- **🤖 Modelo Recomendado:** DeepSeek-R1-Distill-Llama-8B (ou 70B)

| Dificuldade | Efetividade | Utilidade  |
| :---------: | :---------: | :--------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ |

> _"Não pode colar código da empresa no ChatGPT por causa das políticas de segurança? Mas odeia usar modelos antigos e burros? Agora, tranque o **DeepSeek R1** no seu computador e faça-o trabalhar para você. 100% Gratuito, 100% Privado."_

Em 2026, a palavra-chave mais quente entre os desenvolvedores é sem dúvida **"Local LLM"**. Entre eles, o **DeepSeek R1** está mostrando um desempenho insano (especialmente em habilidades de codificação), muitas vezes chamado de "O Erro do Open Source". Este guia mostra a maneira mais fácil e rápida de instalar o DeepSeek no seu Mac (ou PC Windows).

---

## ⚡️ TL;DR (Resumo)

1.  Instale o **Ollama** (O executor de LLM).
2.  Digite um comando no terminal (`ollama run deepseek-r1`).
3.  Desfrute de codificação gratuita ilimitada no VS Code ou Navegador.

---

## 🚀 Passo 1: Instalar o Ollama

Primeiro, você precisa do motor para rodar o LLM, o **Ollama**. É muito mais fácil que o Docker.

### Mac / Linux

Abra seu terminal e cole isto:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows

Vá para o [Site Oficial do Ollama](https://ollama.com), clique em `Download for Windows` e execute o instalador.

---

## 🚀 Passo 2: Invocar o DeepSeek R1

Agora, vamos baixar e rodar o modelo. Escolha de acordo com suas especificações.

### 🥉 Básico: Modelo 8B (Para Laptops)

Roda liso no MacBook Air M1/M2, Laptops Gamer gerais.

```bash
ollama run deepseek-r1:8b
```

### 🥇 Pro: Modelo 70B (Para PC High-End/M3 Max)

Requer 32GB+ de RAM. Mostra capacidades de raciocínio nível GPT-4.

```bash
ollama run deepseek-r1:70b
```

Assim que digitar o comando, ele baixa automaticamente e abre um prompt de chat.

---

## 🚀 Passo 3: Uso Prático (Integração VS Code)

Conversar no terminal não é legal. Vamos anexá-lo ao **VS Code** e torná-lo um verdadeiro Copilot.

1.  Pesquise e instale **"Continue"** nas Extensões do VS Code.
2.  Clique no ícone da barra lateral -> Selecione `Add Model`.
3.  Selecione `Ollama` como Provedor.
4.  Selecione `DeepSeek R1` como Modelo. (Autodetect também funciona)
5.  Agora arraste o código e pressione `Cmd + L` (Win: `Ctrl + L`) para perguntar.

> **Q:** "Refatore esta função."
> **A:** (DeepSeek cospe código instantaneamente)

---

## 🧬 Anatomia do Prompt (Por que funciona?)

"Espere, isso não é um guia de instalação? Onde está o prompt?"
Aqui está **O Prompt de Codificação Mais Eficaz para DeepSeek**. Como o DeepSeek valoriza a "Cadeia de Pensamento" (Chain of Thought), a chave é pedir para ele **"Pensar"**.

### Prompt de Codificação Especializado para DeepSeek

> **Papel:** Você é um Engenheiro Sênior do Google e Evangelista de Código Limpo.
>
> **Contexto:** Este código funciona, mas é ilegível e ineficiente.
>
> **Tarefa:**
>
> 1. Analise os problemas (Complexidade de tempo, Nomenclatura, etc.) primeiro. (**Imprima o Processo de Pensamento primeiro**)
> 2. Escreva o código otimizado.
> 3. Adicione comentários explicando por que você mudou.

---

## 📊 Prova: Antes e Depois

### ❌ Antes (ChatGPT Gratuito)

"Este código... hum... não tenho certeza. Por favor, pergunte novamente." (Ou respostas genéricas)

### ✅ Depois (DeepSeek R1 Local)

```text
<think>
O loop aninhado do usuário é O(n^2), o que será lento com grandes dados.
Posso reduzir para O(n) usando um Hash Map.
Variáveis 'a', 'b' não são claras, vamos renomear para 'userList', 'targetId'.
</think>

(Cospe código otimizado...)
```

_A velocidade depende do seu PC, mas você pode perguntar infinitamente sem preocupações de segurança!_

---

## 🎯 Conclusão

Agora você tem um **Desenvolvedor Sênior Gratuito** vivendo dentro do seu PC.
Mesmo que a internet caia, mesmo que a empresa vá à falência, seu DeepSeek fica com você para sempre.

Abra seu terminal agora mesmo.
`ollama run deepseek-r1`

Seu horário de saída se adianta. 🍷
