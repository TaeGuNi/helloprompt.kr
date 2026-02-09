---
layout: /src/layouts/Layout.astro
title: "Configuração de Ambiente Docker, 3 Minutos com Um Arquivo de Configuração"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt que gera automaticamente Dockerfile e docker-compose.yml para transformar o ambiente de execução de aplicativos em um contêiner."
tags: ["Docker", "Contêiner", "Implantação", "DevOps"]
---

# 📝 Configuração de Ambiente Docker, 3 Minutos com Um Arquivo de Configuração

> **🎯 Recomendado para:** Todos
> **⏱️ Tempo necessário:** 5 minutos

- **🤖 Modelo recomendado:** Todos os modelos de IA

| Dificuldade |  Eficácia  | Utilidade |
| :---------: | :--------: | :-------: |
|   ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Ocorre erro porque a versão do Node.js é diferente no servidor de implantação..."_

Incompatibilidade entre ambiente de desenvolvimento e ambiente de operação é o inimigo de todos os desenvolvedores.
Você sabe que usar Docker resolve, mas escrever `Dockerfile` e otimizar a construção da imagem é outra barreira.
Apenas diga a pilha do projeto. A IA escreverá arquivos de configuração Docker otimizados.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Gerar `Dockerfile` otimizado para linguagem/framework
2. Escrever `docker-compose.yml` incluindo BD, Cache, etc.
3. Aplicar otimização de tamanho de imagem (Multi-stage Build)

---

## 🚀 A Solução: "Especialista em Dockerização"

### 🥉 Versão Básica

Use isso quando precisar apenas de um resultado rápido.

> **Papel:** Você é um Especialista em Orquestração de Contêineres e Engenheiro DevOps.
> **Solicitação:** Crie um prompt que gera automaticamente Dockerfile e docker-compose.yml para transformar o ambiente de execução de aplicativos em um contêiner.

<br>

### 🥇 Versão Pro (Expert)

Use isso quando precisar de qualidade detalhada.

Copie o conteúdo do **PROMPT** abaixo e cole no ChatGPT ou Claude.

> **Papel:** Você é um Especialista em Orquestração de Contêineres e Engenheiro DevOps.
>
> **Contexto:** Quero implantar meu aplicativo como um contêiner Docker. Quero unificar o ambiente de desenvolvimento local e o ambiente de implantação.
>
> **Tarefa:**
>
> 1. Escreva um **Dockerfile** otimizado adequado para a pilha de tecnologia abaixo. (Recomende usar Multi-stage build)
> 2. Escreva um arquivo **docker-compose.yml** incluindo bancos de dados, etc., vinculados ao app.
> 3. Diga-me qual conteúdo deve ser incluído no arquivo `.dockerignore`.
>
> **Pilha de Tecnologia:**
> `[Escreva linguagem e versão usadas, framework, BD necessário, etc. ex.: Node.js 18, NestJS, PostgreSQL, Redis]`
>
> **Restrições:**
>
> - Minimize o tamanho da imagem considerando o ambiente de produção (ex.: use Alpine Linux).
> - Configure para executar como usuário geral em vez de privilégios root por segurança.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Pilha de Entrada)

"Usando Python 3.9, Django, PostgreSQL."

### ✅ Depois (Resultado - Parte do Dockerfile)

```dockerfile
# 1. Build Stage
FROM python:3.9-slim as builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# 2. Production Stage
FROM python:3.9-slim
WORKDIR /app
# Copiar apenas pacotes instalados do estágio de construção
COPY --from=builder /root/.local /root/.local
COPY . .

# Configuração de variável de ambiente
ENV PATH=/root/.local/bin:$PATH
# Criar e mudar para usuário não root por segurança
RUN useradd -m myuser
USER myuser

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
```

_Características: Usar imagem slim, build multi-estágio, executar como usuário não root._

---

## 🎯 Conclusão

"Funciona no meu computador..." é coisa do passado.
Coloque em um contêiner chamado Docker e faça rodar igual em qualquer lugar. A IA vai te ensinar essa habilidade de empacotamento! 🍷
