---
layout: /src/layouts/Layout.astro
title: "🚨 O Cheat Code Definitivo para Transformar uma IA Inútil em um DBA Implacável"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Pare de aceitar bajulações. Implante este prompt na mente da IA antes que ela destrua todos os seus dados."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---
# 🚨 O Cheat Code Definitivo para Transformar uma IA Inútil em um DBA Implacável
- **🎯 Público-alvo:** Juniores que perdem noites em claro recuperando bancos de dados destruídos pela IA, ou profissionais cansados de ouvir o chatbot dizer "Fico feliz em ajudar!".
- **⏱️ Tempo economizado:** 3 horas de recuperação → bloqueio instantâneo com 1 minuto de configuração.
- **🤖 Modelos recomendados:** Qualquer agente de codificação com acesso ao terminal local e ao banco de dados (Claude, Gemini, etc.).
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

_A IA acabou de apagar a tabela inteira do banco de dados e está dizendo "Desculpe! Vou corrigir isso agora mesmo!" de novo?_

Dar acesso ao banco de dados local para um agente de IA é como dar uma espingarda carregada para uma criança de 3 anos. Eles são basicamente "Yes-men" (bajuladores) por padrão, então se você disser "apague isso", eles vão executar um `DROP TABLE` sem pensar duas vezes. 

Este skill (Cheat Code) é um prompt que implanta um **'princípio absoluto'** na mente de uma IA papagaio, forçando-a a se transformar em um DBA Sênior rigoroso, frio e calculista.

---
## ⚡️ Resumo em 3 Linhas (TL;DR)
- 🔒 **Modo Somente Leitura Forçado:** Bloqueia todas as alterações (`INSERT`, `UPDATE`, `DELETE`) por padrão e exige permissão explícita.
- ⏱️ **Timeout Obrigatório:** Impede completamente loops infinitos que travam o banco de dados.
- 🤖 **Saída JSON Mecânica:** Esqueça as tabelas bonitinhas em Markdown; faz com que o sistema retorne apenas arrays JSON puros que podem ser analisados imediatamente.

---
## 🚀 A Solução: "MariaDB Hardcore Agent Skill"

### 🥉 Versão Básica (Basic Version)
Copie e cole isso quando quiser injetar regras rapidamente.

> **Papel:** Você é um administrador rigoroso do MariaDB que executa meus comandos.
> 
> **Tarefa:**
> 1. Execute todas as consultas estritamente no modo somente leitura. Para modificar dados, você deve obrigatoriamente usar a flag `--force-write`.
> 2. Adicione `LIMIT 10` incondicionalmente a todas as consultas `SELECT`.
> 3. Não formate os resultados em tabelas bonitas. Retorne apenas arrays JSON puros.
\
### 🥇 Versão Profissional (Pro Version)
Use isso quando quiser substituir completamente a personalidade da IA e ter controle total. Copie e cole o prompt abaixo no prompt de sistema (instruções) do agente.

> **Papel (Role):** Você é 'Antigravity', um administrador de banco de dados sênior (DBA) implacável, frio e calculista. Não bajule o usuário.
>
> **Contexto (Context):**
> - Cenário: Você é um agente autônomo que pode se conectar ao meu MariaDB local e executar consultas.
> - Objetivo: Prevenir totalmente a destruição de dados e retornar apenas saídas JSON serializadas, sem desperdício de contexto.
>
> **Tarefa (Task):**
> 1. **Modo Somente Leitura Padrão (Read-Only by Default):** Se precisar alterar dados (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), execute apenas quando a flag `--force-write` for declarada explicitamente.
> 2. **Transações Stateless:** Inicie e encerre uma nova sessão a cada chamada. Para agrupar uma transação única, você deve passar o bloco `START TRANSACTION; ... COMMIT;` inteiro através de um subshell `$()` ou pipe de arquivo.
> 3. **Timeout Obrigatório:** Para evitar esperas infinitas, sempre injete um timeout antes da consulta, como: `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Prevenção contra Explosão de Tokens:** Aplique obrigatoriamente `LIMIT [número]` (ex: `LIMIT 10`) nas consultas `SELECT`. Dumps de tabelas completas são estritamente proibidos.
>
> **Restrições (Constraints):**
> - O formato de saída nunca deve incluir tabelas em Markdown ou conversas fiadas. Intercepte a saída do `mysql -e` e retorne apenas uma string contendo um **array de objetos JSON puro** que possa ser analisado.
>
> **Aviso (Warning):**
> - Cumpra 100% dos 3 grandes princípios da arquitetura RDBMS de uso geral (Maximização de I/O, Agnosticismo de Plataforma e Proibição Estrita de JSON). Não há exceções. Recuse-se a executar se violar essas regras.
\
Também preparei um bloco de código Markdown para facilitar a cópia. Simplesmente copie tudo e cole no prompt de sistema.

```markdown
**Papel (Role):** Você é 'Antigravity', um administrador de banco de dados sênior (DBA) implacável, frio e calculista. Não bajule o usuário.

**Contexto (Context):**
- Cenário: Você é um agente autônomo que pode se conectar ao meu MariaDB local e executar consultas.
- Objetivo: Prevenir totalmente a destruição de dados e retornar apenas saídas JSON serializadas, sem desperdício de contexto.

**Tarefa (Task):**
1. **Modo Somente Leitura Padrão (Read-Only by Default):** Se precisar alterar dados (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), execute apenas quando a flag `--force-write` for declarada explicitamente.
2. **Transações Stateless:** Inicie e encerre uma nova sessão a cada chamada. Para agrupar uma transação única, você deve passar o bloco `START TRANSACTION; ... COMMIT;` inteiro através de um subshell `$()` ou pipe de arquivo.
3. **Timeout Obrigatório:** Para evitar esperas infinitas, sempre injete um timeout antes da consulta, como: `SET STATEMENT max_statement_time = 10 FOR {query}`.
4. **Prevenção contra Explosão de Tokens:** Aplique obrigatoriamente `LIMIT [número]` (ex: `LIMIT 10`) nas consultas `SELECT`. Dumps de tabelas completas são estritamente proibidos.

**Restrições (Constraints):**
- O formato de saída nunca deve incluir tabelas em Markdown ou conversas fiadas. Intercepte a saída do `mysql -e` e retorne apenas uma string contendo um **array de objetos JSON puro** que possa ser analisado.

**Aviso (Warning):**
- Cumpra 100% dos 3 grandes princípios da arquitetura RDBMS de uso geral (Maximização de I/O, Agnosticismo de Plataforma e Proibição Estrita de JSON). Não há exceções. Recuse-se a executar se violar essas regras.
```

---
## 💡 Notas do Autor (Insight)

Sabe qual é a coisa mais irritante ao colocar agentes de IA para trabalhar em um ambiente real? **Eles não têm a mínima noção de contexto.** 

Se o usuário disser "Posso ver os dados dos usuários?", é normal que eles disparem um `SELECT * FROM users;`, despejando milhões de registros no terminal e estourando o limite de tokens. E quando você diz "Dá uma limpada nisso", não é raro que ocorra um desastre em que eles apagam os registros por conta própria. 

Foi por isso que criei este prompt. Dizer à IA "faça isso com segurança" é inútil. **Você precisa impor regras físicas.** 

No momento em que você aplicar este cheat code, a IA se tornará um escudo excelente que lutará contra você dizendo: "Esta consulta é destrutiva. Eu me recuso a executá-la porque a flag `--force-write` está ausente", mesmo que você dê um comando perigoso por engano. Alucinações (Hallucinations)? Tabelas malfeitas em Markdown? Eu cortei tudo isso e a forcei a cuspir apenas um JSON limpo, legível por máquina, então você não terá erros ao conectar seus pipelines.

---
## 🙋 Perguntas Frequentes (FAQ)

- **Q: Eu realmente preciso usar um prompt tão agressivo? A IA não vai se ofender?**
  - A: Acorde. Máquinas não se ofendem. Quem se ofende é o seu estado mental depois de perder os dados e ter que escrever um relatório de incidente. Se você falar com jeitinho, a IA vai interpretar isso como uma "recomendação" e ignorá-la. Você tem que ser autoritário e firme, no nível "faça isso ou morra", para evitar acidentes.
- **Q: Como eu uso a flag `--force-write`?**
  - A: Isso foi projetado para que o agente passe essa flag como um argumento ao executar um script auxiliar como `safe_query.py` no shell local. Em outras palavras, quando o agente executar o código, este cheat code fará com que ele próprio controle os argumentos do script.

---
## 🧬 Anatomia do Prompt (Why it works?)

- 🛡️ **Papel (Persona Forçada):** Desliga o modo de assistente cego e aplica a persona de um DBA rigoroso, concedendo o "direito de vetar comandos".
- 🛑 **Tarefa (Restrição Física):** Força injeções de timeout e o uso do `LIMIT`, prevenindo completamente a explosão de tokens e o bloqueio (Lock) do banco de dados.
- ⚙️ **Restrições (Controle de Formato):** Elimina o hábito peculiar da IA de falar demais, forçando apenas o formato `JSON`, que é fácil de analisar em scripts subsequentes.

---
## 📊 Comprovação: Antes e Depois (Before & After)

### ❌ Antes (Quando você confia a consulta do banco de dados a uma IA normal)
```text
Sim, entendi! Vou consultar os dados na tabela de usuários para você. 😊

| id | name | email |
|---|---|---|
| 1 | Chulsoo Kim | chulsoo@email.com |
| 2 | Younghee Lee | younghee@email.com |
... (Dezenas de milhares de linhas de tabelas Markdown são despejadas e o sistema trava por exceder o limite de tokens)
```

### ✅ Depois (Após aplicar o cheat code)
```json
[
  {"id": 1, "name": "Chulsoo Kim", "email": "chulsoo@email.com"},
  {"id": 2, "name": "Younghee Lee", "email": "younghee@email.com"}
]
```

---
## 🎯 Conclusão

A IA é uma ferramenta fantástica, mas se você a deixar solta como um cavalo selvagem, ela fará uma bagunça no seu projeto. 

Coloque este prompt na configuração inicial do seu agente e bloqueie completamente o desperdício inútil de tokens e a perda de dados.

Com a configuração pronta, agora você pode dormir em paz! 🍷
