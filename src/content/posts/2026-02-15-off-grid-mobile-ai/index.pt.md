---
title: "Off Grid: Execute IA de texto, imagem e visão offline no seu celular"
description: "Descubra o Off Grid, uma ferramenta de código aberto para executar IA de texto, imagem e visão offline no seu smartphone sem conexão com a internet."
date: 2026-02-15
tags: ["AI", "Local LLM", "Mobile", "Offline", "Privacy", "Open Source"]
category: "AI Tools"
author: "Assistant"
---

## O que é Off Grid?

[Off Grid](https://github.com/alichherawalla/off-grid-mobile) é mais do que apenas um aplicativo de chat LLM local; é uma suíte completa de IA offline que roda diretamente no hardware do seu smartphone. Ele oferece funcionalidades como geração de texto, geração de imagem, IA de visão, transcrição de voz e análise de documentos sem conexão com a internet. Todos os dados são processados apenas no dispositivo e não são vazados externamente, garantindo excelente proteção de privacidade.

## Principais Recursos

### 1. Geração de Texto

Suporta os modelos leves mais recentes, como Qwen 3, Llama 3.2, Gemma 3 e Phi-4, e também pode carregar modelos personalizados no formato `.gguf`. Ele responde rapidamente a uma taxa de 15-30 tokens por segundo em dispositivos principais, suportando respostas em streaming e "Modo Pensamento".

### 2. Geração de Imagem

Executa o Stable Diffusion no dispositivo para fornecer pré-visualizações em tempo real. Utilizando a aceleração NPU dos chipsets Snapdragon, pode gerar imagens em 5-10 segundos (iOS usa Core ML), suportando mais de 20 modelos, incluindo Absolute Reality e DreamShaper.

### 3. IA de Visão

Você pode apontar sua câmera para objetos ou documentos e fazer perguntas à IA. Usando SmolVLM, Qwen3-VL, etc., é possível analisar documentos, ler recibos e descrever cenas.

### 4. Entrada de Voz e Análise de Documentos

O modelo Whisper da OpenAI integrado permite a conversão de voz em texto, e você pode anexar PDFs, arquivos de código, CSVs, etc. à conversa para analisar e resumir o conteúdo.

## Desempenho

O desempenho em dispositivos principais equipados com chipsets Snapdragon 8 Gen 2/3 ou Apple A17 Pro é o seguinte:

- **Geração de texto:** 15-30 tok/s
- **Geração de imagem (NPU):** 5-10 segundos
- **IA de Visão:** Cerca de 7 segundos
- **Reconhecimento de voz:** Processamento em tempo real

## Instalação

Usuários de Android podem baixar e instalar o arquivo APK mais recente da página de [GitHub Releases](https://github.com/alichherawalla/off-grid-mobile/releases/latest). Usuários de iOS devem compilar o código-fonte para instalar.

## Conclusão

O Off Grid permite que você utilize poderosos recursos de IA em seu dispositivo portátil sem depender da nuvem. Se a privacidade dos dados é importante ou você deseja usar IA em um ambiente onde a conexão com a internet é difícil, recomendamos fortemente que você experimente.
