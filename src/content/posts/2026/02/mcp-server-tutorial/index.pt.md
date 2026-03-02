---
title: " \"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\""
description: " \"O MCP (Model Context Protocol) é a porta USB para LLMs. Pare de copiar e colar schemas JSON exaustivamente: descubra o prompt para criar um servidor personalizado e conectar seus dados locais direto ao Claude ou Ollama.\""
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

- **🎯 Recomendado para:** Desenvolvedores exaustos de copiar e colar schemas de banco de dados ou documentação de APIs, e profissionais que lidam com dados locais.
- **⏱️ Tempo Necessário:** 5 minutos → Economia de tempo vitalícia.
- **🤖 Modelos Recomendados:** Modelos com suporte nativo ao MCP (Claude Desktop, Ollama, etc.).

- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Você abre o Claude, cola o schema do banco de dados e faz a pergunta. Dez minutos depois, abre uma nova janela e repete todo o processo. Já passou da hora de dar um fim nessa repetição exaustiva."_

Hoje, em 2026, o **MCP (Model Context Protocol)** consolidou-se como o padrão absoluto para conectar LLMs aos seus dados. Pense nele como uma "porta USB" para modelos de IA. Em vez de alimentar o modelo manualmente com contexto a cada nova interação, você conecta o servidor uma única vez. A partir daí, o modelo passa a "ler" seus arquivos, bancos de dados e APIs internas de forma autônoma e em tempo real.

Embora já existam excelentes servidores MCP de uso geral — para integrar o GitHub ou o seu sistema de arquivos, por exemplo —, o verdadeiro poder dessa tecnologia se revela ao plugar a **lógica de negócios exclusiva da sua empresa** direto no LLM.

Neste post, em vez de fazer você escrever códigos boilerplate tediosos do zero, vou te entregar o prompt exato para que a própria IA faça o scaffolding (estruturação) de um servidor MCP em TypeScript, 100% personalizado e robusto, em apenas 5 minutos.

---

## ⚡️ Resumo em 3 Tópicos (TL;DR)

1. **O fim do "copia e cola":** Use o MCP para permitir que o LLM acesse seus dados locais (bancos de dados, logs, APIs) sob demanda.
2. **Servidor pronto via prompt:** Gere o código de um servidor MCP completo automaticamente, sem perder tempo com configurações complexas.
3. **Privacidade inegociável:** Transmita informações para o contexto do modelo rodando tudo no seu ambiente local, sem vazar dados sensíveis para a web.

---

## 🚀 A Solução: "MCP Server Scaffolder"

### 🥉 Versão Basic (Básica)

Ideal para quando você precisa de um esqueleto rápido de servidor MCP em segundos.

> **Role (Papel):** Você é um Desenvolvedor TypeScript Sênior.
> **Task (Tarefa):** Escreva o código para um servidor MCP simples usando o `@modelcontextprotocol/sdk` com o seguinte objetivo: `[inserir o objetivo desejado, ex: consultar a previsão do tempo de uma cidade específica]`.

### 🥇 Versão Pro (Profissional)

Use esta versão quando precisar de um código de servidor robusto, escalável e pronto para ir para produção.

> **Role (Papel):** Você é um Engenheiro TypeScript Sênior e especialista no ecossistema do Model Context Protocol (MCP).
>
> **Context (Contexto):**
>
> - Cenário: Preciso de um servidor MCP personalizado para integrar dados locais ou APIs internas diretamente a um LLM.
> - Objetivo: Você deve gerar um código de servidor MCP completo, executável e contido em um único arquivo (`index.ts`), perfeitamente ajustado às minhas necessidades.
>
> **Task (Tarefa):**
>
> 1. Escreva o código do servidor MCP atendendo ao seguinte requisito:
>    - **Objetivo:** `[Descreva detalhadamente o objetivo do servidor aqui. Ex: ler e retornar as últimas 50 linhas de um arquivo de log específico na máquina local]`
> 2. O código deve ser amigável para ser copiado e colado, incluindo comentários explicativos, para que eu possa executá-lo imediatamente no terminal.
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
> - Não invente métodos do SDK que não existem (zero alucinações). Em caso de incerteza, utilize APIs nativas do Node.js como alternativa segura.

---

## 💡 Comentário do Autor (Insight)

O grande trunfo deste prompt não é simplesmente pedir à IA que "faça um código qualquer", mas forçá-la a seguir rigorosamente os **padrões essenciais da especificação do protocolo** (em especial, a manipulação das requisições `ListTools` e `CallTool`) que todo servidor MCP exige para funcionar sem engasgos.

A maior vantagem de construir e rodar o seu próprio servidor MCP local é a **privacidade incomparável**. Ao utilizar ferramentas genéricas de busca web, suas consultas invariavelmente trafegam por servidores de terceiros. Porém, ao plugar um servidor MCP personalizado direto no seu PostgreSQL interno ou em uma API privada, seus dados são processados e transmitidos com segurança absoluta, sob seu controle exclusivo. É o fim definitivo da prática arriscada de copiar documentos sensíveis da empresa e colar em uma janela de navegador.

Minha dica para começar: use este prompt para criar uma ferramenta de escopo reduzido e 'Somente Leitura' (Read-only), como um visualizador de logs locais. Assim que você dominar o fluxo de funcionamento da ferramenta, expanda as funcionalidades para incluir operações de escrita no banco de dados. No fim das contas, você estará construindo o seu assistente de IA local definitivo.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: Posso usar este prompt mesmo sem ter experiência avançada com programação?**
  - R: Com certeza! Basta descrever o `[Objetivo]` em linguagem natural (ex: "uma função que mostra o clima na cidade de São Paulo"), e a IA montará a lógica em TypeScript para você. Depois, é só copiar e rodar no seu ambiente Node.js local.

- **Q: Como executo e conecto o código do servidor gerado pelo prompt?**
  - R: Salve o código gerado em um arquivo `index.ts`. Em seguida, adicione o caminho absoluto desse script na seção `mcpServers` do seu arquivo de configuração (como o `claude_desktop_config.json` no caso do Claude Desktop). O cliente reconhecerá as novas ferramentas assim que for reiniciado.

- **Q: O servidor criado com este prompt funciona apenas no cliente do Claude?**
  - R: De jeito nenhum. O Model Context Protocol é um padrão de código aberto (Open Standard). Seu servidor recém-criado funcionará da mesma forma no Ollama, no Cursor ou em qualquer outra ferramenta que ofereça suporte nativo ao MCP.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Controle Rigoroso de Dependências (Constraints):** Ao exigir a importação do `@modelcontextprotocol/sdk` aliado ao `zod` para validação, e ao ditar os schemas exatos (`ListToolsRequestSchema`, `CallToolRequestSchema`), cortamos pela raiz a chance de a IA inventar métodos inexistentes que quebrariam o protocolo.
2. **Arquivo Único e Foco Exclusivo no Código:** Em vez de deixar a IA fragmentar a solução em múltiplos arquivos complexos, forçamos um script único (`index.ts`) focado estritamente no código. Isso reduz o atrito e acelera radicalmente a fase de testes (Time-to-Value) do desenvolvedor.
3. **Prevenção de Falhas Críticas:** Ao impor blocos `try/catch` nos Handlers, eliminamos a causa número um de travamentos em integrações de IA: o servidor MCP cair de vez por conta de um erro de formatação de parâmetro na hora de chamar a ferramenta.

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Entrada)

```text
Usuário:
(Copia e cola manualmente o arquivo my_database_schema.sql inteiro com 4.500 linhas)
(Copia e cola manualmente o arquivo internal_api_docs.md inteiro com mais 800 linhas)

Com base nesse schema que eu acabei de colar, crie uma query para buscar o número de usuários que se cadastraram hoje e me mostre como chamar a API seguindo a documentação.
```

### ✅ Depois (Resultado)

```text
Usuário:
Quantos usuários se cadastraram no sistema hoje? 
(O Claude chama a ferramenta MCP em segundo plano de forma autônoma, executa a consulta no banco e interpreta o resultado)

Claude:
Consultando o seu banco de dados interno diretamente, identifiquei que tivemos 150 novos usuários cadastrados hoje.
```

---

## 🎯 Conclusão

A era rudimentar de arrastar e colar megabytes de contexto manualmente para dentro da janela de chat da IA finalmente chegou ao fim. Agora, é a hora de conectar ('Plug-in') seus sistemas diretamente ao cérebro do modelo de linguagem e utilizá-lo como uma verdadeira camada de infraestrutura inteligente.

Pare de queimar o seu tempo com trabalho braçal. Copie o prompt agora mesmo, faça o scaffolding do seu servidor MCP em menos de 5 minutos e deixe a IA cuidar do trabalho pesado. Agora é só aproveitar a produtividade extra e sair mais cedo do trabalho! 🍷
