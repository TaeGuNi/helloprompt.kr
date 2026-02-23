---
layout: /src/layouts/Layout.astro
title: "Documentação de API Irritante, Swagger Aparece com Apenas Código"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificação/Desenvolvimento"
description: "Um prompt que converte automaticamente seu código de API em especificações OpenAPI (Swagger) ou documentação Markdown de forma instantânea."
tags: ["API", "Documentação", "Swagger", "OpenAPI", "Backend"]
---

# 📝 Documentação de API Irritante, Swagger Aparece com Apenas Código

- **🎯 Recomendado para:** Desenvolvedores Backend, Engenheiros de Software, Tech Leads
- **⏱️ Tempo economizado:** 30 minutos → 1 minuto
- **🤖 Modelo recomendado:** Todos os modelos de IA (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificuldade:** ⭐☆☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"O código está pronto, mas o front-end está de braços cruzados esperando a documentação da API? Pare de perder tempo escrevendo YAML manualmente."_

Escrever documentação de API é, muitas vezes, a parte mais tediosa do desenvolvimento backend. Mapear tipos de parâmetros, definir campos obrigatórios e criar exemplos de JSON para cada endpoint consome um tempo valioso que poderia ser gasto na lógica de negócios.
Com este prompt, você só precisa copiar e colar o código do seu controller ou router. A IA fará o trabalho pesado, gerando instantaneamente uma especificação Swagger (OpenAPI) limpa e pronta para uso, ou uma documentação em Markdown perfeitamente estruturada.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. **Extração Inteligente:** Identifica automaticamente parâmetros, métodos e respostas diretamente do código-fonte.
2. **Geração Formato Padrão:** Cria especificações OpenAPI (Swagger) em YAML/JSON prontas para importação.
3. **Exemplos Realistas:** Gera payloads de request e response com dados de exemplo coerentes e fáceis de entender.

---

## 🚀 A Solução: "Gerador Automático de Documentação de API"

### 🥉 Versão Básica (Basic Version)

Use quando precisar de um rascunho rápido para alinhar com a equipe.

> **Papel:** Você é um Desenvolvedor Backend Sênior e um Redator Técnico meticuloso.
> **Solicitação:** Leia o código de API abaixo e crie uma documentação clara em Markdown, incluindo método, endpoint, parâmetros e um exemplo de resposta JSON.
> **Código:** `[Cole seu código aqui]`

<br>

### 🥇 Versão Pro (Pro Version)

Use para gerar especificações OpenAPI completas e prontas para produção.

> **Papel (Role):** Você é um Arquiteto de Software e Redator Técnico especialista em documentação de APIs RESTful.
>
> **Contexto (Context):**
>
> - Fundo: Acabei de desenvolver um novo endpoint da API e preciso documentá-lo perfeitamente para a equipe de Front-end e para terceiros.
> - Objetivo: Gerar uma documentação técnica padronizada, sem erros e pronta para ser consumida por ferramentas como Swagger UI ou Postman.
>
> **Tarefa (Task):**
>
> Analise o código fornecido abaixo e elabore a documentação da API no formato **`[Formato Desejado: OpenAPI 3.0 YAML / Tabela Markdown]`**.
> A documentação DEVE conter estritamente as seguintes seções:
>
> 1. **Endpoint & Método:** O caminho (path) exato da URL e o verbo HTTP correspondente.
> 2. **Resumo (Summary):** Uma descrição concisa (1-2 frases) do propósito desta API.
> 3. **Parâmetros da Requisição:** Detalhamento completo de Body, Query e Path parameters. Inclua o tipo de dado (String, Int, Boolean, etc.), se é obrigatório (Required/Optional) e uma breve descrição.
> 4. **Respostas (Responses):** A estrutura esperada de retorno. Forneça exemplos de JSON realistas para sucesso (ex: 200/201) e para os principais cenários de erro tratados no código (ex: 400 Bad Request, 500 Internal Error).
>
> **Código (Code):**
>
> `[Cole o código do seu Controller/Router aqui]`
>
> **Restrições (Constraints):**
>
> - Especifique claramente e de forma correta todos os tipos de dados.
> - Os valores de exemplo (Example Values) nos JSONs devem ser dados realistas e plausíveis (não use "string" ou "teste").
> - Não adicione explicações ou conversas extras; retorne apenas a documentação solicitada no formato especificado.
>
> **Aviso (Warning):**
>
> - Se houver variáveis de ambiente ou dependências externas não claras no código, não invente comportamentos. Documente apenas o que está explícito ou sinalize com um comentário `TODO`.

---

## 💡 Comentário do Autor (Insight)

A maior vantagem deste prompt não é apenas a velocidade, mas a **consistência**. Quando deixamos a documentação para o final, é comum esquecermos de mapear um erro `400` que adicionamos de última hora no código. Ao fornecer o código diretamente para a IA, ela atua como um revisor de código em tempo real, documentando exatamente o que o código faz, e não o que _achamos_ que ele faz.
**Dica de ouro:** Se a sua base de código utiliza DTOs (Data Transfer Objects) complexos ou tipagem forte (como TypeScript ou Pydantic no Python), cole também a definição desses tipos/interfaces junto com o controller para um nível de detalhamento impecável.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: Posso usar este prompt para GraphQL ou gRPC?**
  - A: Sim! Basta alterar a `[Formato Desejado]` e a `[Tarefa]` para solicitar o schema do GraphQL ou o arquivo `.proto` do gRPC. A IA adapta as descrições perfeitamente.

- **Q: E se o meu controller for muito extenso e chamar múltiplos serviços?**
  - A: O ideal é colar apenas a camada de roteamento/controller que define a interface HTTP (status codes, req/res). O código de lógica de negócios profunda muitas vezes confunde o modelo ou gasta tokens desnecessariamente.

- **Q: Os dados gerados nos exemplos podem ser usados em testes automatizados?**
  - A: Geralmente sim. Como pedimos "dados realistas", a IA gera e-mails, UUIDs e datas válidos, o que facilita copiar e colar os payloads diretamente no Postman, Insomnia ou em mocks de testes unitários.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Role bem definido:** Pedir para a IA atuar como "Redator Técnico" força o modelo a adotar um tom formal e focado em clareza, evitando jargões confusos.
2. **Contextualização do Público:** Ao mencionar que o destino é a equipe de Front-end/Terceiros, a IA entende a necessidade de exemplos práticos de consumo da API.
3. **Estrutura Restrita (Constraints):** Proibir a IA de inventar dados não contidos no código (Aviso/Warning) garante precisão e evita o risco de alucinações técnicas que poderiam quebrar a integração.

---

## 📊 Prova: Antes e Depois

### ❌ Antes (Código de Entrada - Node.js Express)

```javascript
app.post("/api/v1/users", async (req, res) => {
  const { username, email, age } = req.body;
  if (!email || !username)
    return res.status(400).send({ error: "Missing required fields" });
  if (age && isNaN(age))
    return res.status(400).send({ error: "Age must be a number" });

  // DB logic here...
  res.status(201).send({
    id: "usr_12345",
    username,
    email,
    createdAt: new Date().toISOString(),
  });
});
```

### ✅ Depois (Resultado da IA - Exemplo Markdown)

```markdown
### **POST /api/v1/users**

**Resumo:** Cria um novo registro de usuário no sistema.

**Parâmetros da Requisição (Body)**

- `username` (String) - **Obrigatório:** Nome de usuário para login.
- `email` (String) - **Obrigatório:** Endereço de e-mail válido.
- `age` (Number) - Opcional: Idade do usuário.

**Respostas**

**Sucesso: 201 Created**
\`\`\`json
{
"id": "usr_12345",
"username": "joaodasilva",
"email": "joao.silva@example.com",
"createdAt": "2026-02-04T14:30:00.000Z"
}
\`\`\`

**Erro: 400 Bad Request (Campos Ausentes)**
\`\`\`json
{
"error": "Missing required fields"
}
\`\`\`

**Erro: 400 Bad Request (Tipo de Dado Inválido)**
\`\`\`json
{
"error": "Age must be a number"
}
\`\`\`
```

---

## 🎯 Conclusão

A documentação nunca deve ser o gargalo que atrasa o lançamento do seu produto ou a integração entre equipes.
Com este prompt, a sua documentação passa a evoluir na mesma velocidade do seu código. Automatize essa tarefa maçante, garanta a alegria dos desenvolvedores front-end e volte o seu foco para o que realmente importa: construir arquiteturas incríveis! 🍷
