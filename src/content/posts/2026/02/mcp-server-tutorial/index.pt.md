---
title: "Stop Pasting Context: Build Your First MCP Server in 5 Minutes"
description: "O padrão USB para LLMs, o MCP (Model Context Protocol). Em vez de copiar e colar schemas JSON repetidamente, descubra o prompt para construir um servidor personalizado que conecta seus dados locais diretamente ao Claude ou Ollama."
author: "Unifactory Editor"
date: "2026-02-16"
tags:
  [
    "MCP",
    "Model Context Protocol",
    "Local LLM",
    "TypeScript",
    "Ollama",
    "Claude",
  ]
image: "/images/2026/02/16/mcp-server-tutorial.jpg"
---

# 📝 Chega de Copiar e Colar Contexto: Crie Seu Primeiro Servidor MCP em 5 Minutos

- **🎯 Recomendado para:** Desenvolvedores cansados de copiar e colar schemas de banco de dados ou documentações de API nos prompts, e usuários que lidam com dados locais
- **⏱️ Tempo Necessário:** 5 minutos → Economia de tempo permanente
- **🤖 Modelos Recomendados:** Modelos com suporte a MCP, como Claude Desktop e Ollama

- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Você abre a janela do Claude e cola o schema do banco de dados. Dez minutos depois, abre uma nova janela e cola tudo de novo. Já passou da hora de acabar com essa repetição exaustiva."_

Hoje, em 2026, o **MCP (Model Context Protocol)** consolidou-se como o padrão absoluto (De-facto standard) para conectar LLMs aos seus dados. Pense nele como uma "porta USB" para modelos de IA. Em vez de alimentar o modelo manualmente com contexto a cada nova interação, você conecta o servidor uma única vez, e o modelo passa a "ler" seus arquivos, bancos de dados e APIs internas de forma autônoma e em tempo real.

Já existem excelentes servidores MCP de uso geral para integrar o GitHub ou o seu sistema de arquivos local. No entanto, o verdadeiro poder dessa tecnologia se revela quando você conecta a **"lógica de negócios exclusiva da sua empresa"** diretamente ao LLM.

Neste post, em vez de fazer você escrever códigos boilerplate tediosos do zero, apresentaremos um prompt que instrui a IA a fazer o scaffolding (estruturação) de um servidor MCP personalizado, robusto e em TypeScript, em apenas 5 minutos.

---

## ⚡️ Resumo em 3 Tópicos (TL;DR)

1. **O Fim do Copia e Cola:** Use o MCP para permitir que o LLM acesse diretamente seus dados locais (Bancos de dados, logs, APIs) sob demanda.
2. **Criação de Servidor via Prompt:** Gere o código de um servidor MCP completo automaticamente usando apenas um prompt, sem depender de configurações iniciais complexas.
3. **Privacidade Absoluta:** Transmita dados diretamente para a janela de contexto do modelo a partir do seu ambiente local, sem que eles vazem para a internet.

---

## 🚀 A Solução: "MCP Server Scaffolder"

### 🥉 Versão Basic (Básica)

Use esta versão quando precisar apenas de um esqueleto rápido do servidor MCP.

> **Role (Papel):** Você é um desenvolvedor TypeScript Sênior.
> **Task (Tarefa):** Escreva o código para um servidor MCP simples usando o `@modelcontextprotocol/sdk` que tenha o objetivo de `[insira o objetivo desejado, ex: informar o clima de uma cidade específica]`.

<br>

### 🥇 Versão Pro (Profissional)

Use esta versão quando precisar de um código de servidor robusto, escalável e pronto para uso imediato em um ambiente real.

> **Role (Papel):** Você é um Engenheiro TypeScript Sênior, especialista no ecossistema do Model Context Protocol (MCP).
>
> **Context (Contexto):**
>
> - Cenário: Preciso de um servidor MCP personalizado para integrar dados locais ou APIs internas diretamente a um LLM.
> - Objetivo: Você deve gerar um código de servidor MCP completo, executável e contido em um único arquivo (`index.ts`), perfeitamente ajustado às minhas necessidades.
>
> **Task (Tarefa):**
>
> 1. Escreva o código do servidor MCP atendendo ao seguinte requisito:
>    - **Objetivo:** `[Descreva detalhadamente o objetivo do servidor aqui. Ex: Ler e retornar as últimas 50 linhas de um arquivo de log específico]`
> 2. O código deve ser amigável para ser copiado e colado, incluindo comentários explicativos, para que o usuário possa executá-lo imediatamente no terminal.
>
> **Constraints (Restrições):**
>
> - Você deve usar obrigatoriamente o pacote oficial `@modelcontextprotocol/sdk`.
> - Se os parâmetros de entrada da ferramenta forem complexos, utilize a biblioteca `zod` para validação de schema (altamente recomendado).
> - Ao instanciar o servidor, implemente de forma impecável o tratamento das interfaces `ListToolsRequestSchema` e `CallToolRequestSchema`.
> - Inclua obrigatoriamente a lógica de tratamento de exceções (`try/catch`) dentro do manipulador (Handler) da ferramenta para evitar que o servidor sofra um crash durante a execução.
> - **Retorne exclusivamente um único bloco de código TypeScript, sem explicações extras ou textos adicionais.**
>
> **Warning (Aviso):**
>
> - Não invente métodos do SDK que não existem (sem alucinações). Em caso de incerteza, utilize APIs nativas do Node.js como alternativa segura.

---

## 💡 Comentário do Autor (Insight)

O grande trunfo deste prompt não é simplesmente pedir à IA "faça um código para mim", mas sim forçá-la a seguir rigorosamente os **padrões essenciais da especificação do protocolo (manipulação das requisições ListTools e CallTool)** que qualquer servidor MCP deve possuir para funcionar corretamente.

A maior vantagem de construir e operar seu próprio servidor MCP local é a **'Privacidade Incomparável'**. Ao utilizar ferramentas genéricas de busca web no Claude, suas consultas trafegam por servidores de terceiros. Porém, ao usar um servidor MCP personalizado conectado a um banco de dados PostgreSQL interno ou a uma API privada, os dados são processados e transmitidos com total segurança, sob o seu controle exclusivo. Acaba a necessidade de copiar documentos internos sensíveis e colá-los em uma janela de chat no navegador.

Para começar, recomendo que você use este prompt para criar uma ferramenta simples do tipo 'Somente Leitura' (Read-only), como um visualizador de logs locais. Quando dominar o fluxo de funcionamento, você pode expandir as funcionalidades para incluir a execução de modificações no banco de dados, criando, em última instância, o seu assistente de IA local definitivo.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: Posso usar este prompt mesmo não tendo experiência avançada com programação?**
  - R: Sim, perfeitamente! Basta descrever a variável `[Objetivo]` em linguagem natural, como "uma função que mostra o clima na cidade de São Paulo", e o Claude criará a lógica TypeScript para você. Depois, é só copiar e executar no seu ambiente Node.js local.

- **Q: Como executo e conecto o código do servidor gerado pelo prompt?**
  - R: Salve o código gerado em um arquivo chamado `index.ts`. Em seguida, adicione o caminho absoluto desse script na seção `mcpServers` do arquivo de configuração do Claude Desktop (geralmente `claude_desktop_config.json`). A integração ocorrerá de forma transparente assim que o Claude reiniciar.

- **Q: O servidor criado com este prompt funciona apenas no cliente do Claude?**
  - R: Absolutamente não. O Model Context Protocol é um padrão aberto (Open Standard). Isso significa que o seu servidor recém-criado funcionará de maneira idêntica no Ollama, no Cursor, e em qualquer outra IDE ou plataforma que já tenha suporte nativo ao MCP.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1.  **Controle Rigoroso pelas Restrições (Constraints):** Ao forçar a importação do `@modelcontextprotocol/sdk` junto ao uso do `zod`, e ao especificar os schemas obrigatórios (`ListToolsRequestSchema`, `CallToolRequestSchema`), bloqueamos pela raiz a possibilidade de a IA ter alucinações técnicas que quebrariam a integração do protocolo.
2.  **Arquivo Único e Foco Exclusivo no Código:** Ao invés de permitir que a IA gere uma estrutura complexa fragmentada em múltiplos arquivos, exigimos um design "Single-File" (`index.ts`) e removemos explicações textuais supérfluas. Isso minimiza a fricção e acelera dramaticamente a fase de testes (Time-to-Value) do desenvolvedor.
3.  **Tratamento de Exceções Compulsório:** Ao pré-determinar a necessidade de blocos `try/catch` nos Handlers, evitamos o problema mais comum na criação de integrações de IA: o servidor MCP cair completamente devido a um único erro de formatação de parâmetro durante a execução da ferramenta.

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

```text
Usuário:
(Copia e cola manualmente o arquivo inteiro my_database_schema.sql com 4.500 linhas)
(Copia e cola manualmente o arquivo inteiro internal_api_docs.md com mais 800 linhas)

Com base neste schema que eu acabei de colar, crie uma query para buscar o número de usuários que se cadastraram hoje, e me mostre como devo chamar a API seguindo a documentação.
```

### ✅ Depois (Resultado)

```text
Usuário:
Quantos usuários se cadastraram no sistema hoje? 
(O Claude, de forma autônoma, chama a ferramenta MCP em segundo plano, consulta o banco e interpreta o resultado)

Claude:
Consultando o seu banco de dados interno diretamente, identifiquei que o número de novos usuários cadastrados hoje é de 150.
```

---

## 🎯 Conclusão

A era rudimentar do trabalho manual de empurrar "megabytes" de contexto de forma mecânica para a janela de chat da IA chegou ao fim. Agora, é o momento de conectar ('Plug-in') seus sistemas diretamente ao cérebro do modelo de linguagem e utilizá-lo como uma verdadeira camada de infraestrutura inteligente.

Pare de perder seu tempo com repetições. Use o prompt agora mesmo e faça o scaffolding do seu servidor MCP em menos de 5 minutos. Aproveite a produtividade e saia mais cedo do trabalho! 🍷
