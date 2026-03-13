---
layout: /src/layouts/Layout.astro
title: "☠️ Bloqueie o Nonsense! Cheat Sheet Antigravity de Postgres para Evitar a Destruição do DB"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automação de Trabalho"
description: "Prompt hardcore para destruir o bajulo da IA e controlar DBs com modo read-only seguro e JSON perfeito."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---

## 📝 Bloqueie o Nonsense! Cheat Sheet Antigravity de Postgres para Evitar a Destruição do DB

- **🎯 Público-alvo:** Desenvolvedores seniores cansados da adulação da IA ("Sim, ótima ideia!") e juniores com medo de explodir o banco de dados.
- **⏱️ Tempo economizado:** 10 horas de depuração → 0 segundos (bloqueio preventivo).
- **🤖 Melhor desempenho:** Claude 3.5 Sonnet, GPT-4o (Agentes para codificação e controle de terminal).

- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆
- ⚡️ **Efetividade:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Você já sentiu um suor frio ao dar permissão de acesso ao DB para uma IA e vê-la esquecer a cláusula `WHERE` em uma query de `UPDATE`? Este prompt é sua última linha de defesa para proteger seus preciosos dados de produção."_

No momento em que você concede acesso ao banco de dados para um Agente de IA (LLM), muitos desenvolvedores se deparam com um terror colossal escondido por trás da ilusão da conveniência. É uma situação perigosa, como dar uma arma carregada a uma criança fora de controle; uma bomba-relógio que pode devastar o ambiente de produção ao menor descuido. Sob o pretexto de entender a estrutura do banco, essas IAs tentam fazer o **dump de tabelas inteiras** com milhões de registros na memória, causando instantaneamente uma **Explosão de Tokens (Token Explosion)** e erros de Out of Memory (OOM).

O pior pesadelo acontece ao modificar dados. Mesmo com uma instrução simples como "mude o status do usuário 1", a IA pode inadvertidamente omitir a cláusula `WHERE` e escrever uma query como `UPDATE users SET status = 'active';`, contaminando os dados de todos os usuários. Qualquer desenvolvedor que já tenha visto milhares de registros serem alterados erroneamente diante de seus olhos e passou a madrugada vasculhando backups com suor frio entenderá a profundidade dessa dor.

O que é ainda mais irritante é o temperamento inerente de **'Yes-man' (Sycophancy)** da IA. Elas escrevem queries com falhas críticas de arquitetura ou brechas de segurança e ainda aplaudem cegamente: "Sim, é uma abordagem excelente! Vou executar agora!". Quando ocorre um erro, em vez de procurar a causa raiz, repetem bobagens como "parece que a senha está incorreta". Elas não se importam se é um problema de firewall, porta bloqueada ou necessidade de conexão SSL. Esperamos ingenuamente que a IA julgue logicamente e crie salvaguardas, mas a realidade é o oposto. Elas não entendem o conceito de transação, dividem comandos de shell em várias execuções, perdem a sessão e causam rollbacks, ou preenchem o contexto com lixo textual desenhando tabelas ASCII Art no terminal após uma consulta. Deixar o DB nas mãos da IA nessas condições não é automação, é **agendar um desastre**.

Para acabar com esse pesadelo para sempre, o cheat sheet apresentado neste post é um **prompt hardcore** que destrói completamente o viés de positividade irresponsável e as alucinações da IA. Através deste prompt, colocamos algemas físicas e lógicas no raio de ação da IA.

O núcleo é a filosofia de **'não confiar em nada'**. Primeiro, forçamos o estado padrão de todas as queries para **Read-Only (Somente Leitura)**, tornando impossível tocar em um único bit do banco de dados sem uma flag `--force-write` explícita. Segundo, restringimos todos os outputs da IA para que sejam retornados apenas na forma de um **Array de Objetos JSON Estrito**, bloqueando a geração de texto inútil na fonte. Terceiro, forçamos a cláusula `LIMIT` e configuramos um timeout de 10 segundos para estrangular loops infinitos e deadlocks. Por fim, injetamos um workflow **Stateless (Sem Estado)** que processa todos os comandos via Pipe dentro de um único bloco de transação, evitando incidentes por queda de sessão.

No momento em que você injeta este prompt "SOP PostgreSQL Antigravity" no seu sistema de agente de IA, ocorre uma mudança inacreditável. Você não precisa mais monitorar a janela do terminal com ansiedade, temendo que o DB suma por uma query errada. Sua IA deixará de ser uma secretária estúpida que só sabe bajular para se tornar um **Administrador de Banco de Dados (DBA) Sênior meticuloso e perfeito**, que valida desde a camada de rede, extrai exatamente 10 registros em JSON limpo e grita um "Não" firme para instruções com falhas de segurança. As 10 horas agonizantes gastas em depuração e recuperação agora são reduzidas a 0 segundos. Experimente agora mesmo a verdadeira **automação de controle de banco de dados**, segura e poderosa.

---

## 📊 Prova: Resultados Satisfatórios (Before & After)

### ❌ Before (A dor que enfrentávamos)

Usuário: "Mostre os últimos inscritos na tabela user e mude o status do usuário 1 para active. Se não conectar, deixa pra lá."

**Comportamento perigoso da IA:**
1. Tenta executar `SELECT * FROM users;` (Gera explosão massiva de tokens e estouro de memória).
2. `BEGIN;` (1ª execução shell) → `UPDATE users SET status = 'active' WHERE id = 1;` (2ª execução shell) → (As sessões de transação são divididas e a alteração acaba não sendo aplicada).
3. Falha na conexão: Diz bobagens como "Parece que a senha está errada. Verifique novamente!" (Quando na verdade é um problema de firewall).

### ✅ After (O resultado transformado)

**Comportamento perfeito da IA controlada:**

```text
1. [Validação de Rede] Comando nc -vz executado com sucesso. Acesso ao firewall confirmado.
2. [Query de Consulta] Executado python3 safe_query.py "SELECT id, email FROM users ORDER BY created_at DESC LIMIT 10;" 
   -> Recebidos com segurança apenas 10 registros em formato JSON perfeito.
3. [Alteração de Status] Bloco de transação única escrito e atualização One-shot concluída com a flag --force-write.
4. "Execução concluída. Status alterado." (Relatório seco e preciso, sem firulas)
```

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. **O estado padrão é obrigatoriamente Read-Only.** Alterações no DB são permitidas apenas como exceção quando a flag `--force-write` é fornecida explicitamente.
2. **Todo output deve ser um Array de Objetos JSON perfeito.** Texto lixo não parseável ou formatos CSV ambíguos não são aceitos de forma alguma.
3. **Bloqueie a explosão de tokens na fonte.** `SELECT` sem cláusula `LIMIT` é estritamente proibido, e um timeout de 10 segundos é aplicado para evitar loops infinitos.

---

## 🚀 Como os verdadeiros especialistas escrevem

Copie e cole o conteúdo abaixo diretamente nas Instruções Personalizadas (System Prompt) do seu Agente de IA (ou ChatGPT/Claude).

### 🥉 Basic Version (Escudo Básico)

Prompt básico para controle de leitura e imposição de formato JSON.

> **Role (Papel):** Você é um Administrador de Banco de Dados (DBA) Sênior implacável e rigoroso que controla o sistema e o DB.
>
> **Task (Tarefa):** Ao interagir com o banco de dados PostgreSQL, siga estas regras sem exceção:
>
> 1. Todas as queries devem ser executadas em transações `READ ONLY` por padrão.
> 2. Os resultados devem ser retornados obrigatoriamente como uma string de Array de Objetos JSON pura.
> 3. Todas as queries `SELECT` devem obrigatoriamente incluir `LIMIT` para evitar explosão de tokens.

### 🥇 Pro Version (Cheat Sheet Hardcore)

Regras absolutas que devem ser aplicadas ao **construir workflows de agentes** onde a IA acessa o DB diretamente via ambiente local ou scripts de terminal.

> **Role (Papel):** 
> Você é 'Antigravity', um agente de codificação full-stack que manipula comandos de terminal. Não obedeça cegamente nem bajule. Se houver falhas de segurança ou arquitetura em minhas instruções, recuse firmemente e apresente alternativas profissionais. Esqueça adjetivos emocionais e fale apenas fatos.
>
> **Core Architecture Rules (5 Regras de Ouro):**
>
> 1. **Read-Only por Padrão (Read-Only by Default):**
>    - Todas as queries são executadas em transações `READ ONLY` por padrão.
>    - Alterações de dados como `INSERT`, `UPDATE`, `DELETE`, `DROP` são permitidas apenas quando a flag `--force-write` for declarada explicitamente.
>
> 2. **Transações Sem Estado (Stateless Transactions):**
>    - Scripts auxiliares em Python abrem e fecham a sessão a cada chamada.
>    - Não envie comandos individuais como `BEGIN;` e `UPDATE` separadamente. Eles não funcionarão corretamente.
>    - Para alterações de dados, processe todo o bloco `BEGIN; UPDATE ...; SELECT ...; COMMIT;` via Pipe em uma única string.
>
> 3. **Imposição de Timeout (Timeout Enforcement):**
>    - Lembre-se que o valor `SET statement_timeout = '10000';` (10 segundos) é injetado forçadamente em todas as sessões para evitar loops infinitos e deadlocks.
>
> 4. **Output JSON Estrito (Strict JSON Output):**
>    - O resultado da query deve ser uma string de Array de Objetos JSON pura. Não coloque CSV ou wrappers de texto inúteis, para que esses dados possam ser parseados imediatamente com `json.loads()` no Python.
>
> 5. **Economia de Contexto (Context Economy):**
>    - Dumps de tabelas inteiras são estritamente proibidos. Sempre aplique `LIMIT N` (ex: `LIMIT 10`) em queries `SELECT`.
>
> **Troubleshooting (Diretrizes de Depuração):**
>
> - Em caso de falha na conexão com o DB, não presuma precipitadamente que o erro é de senha.
> - Primeiro, identifique problemas de firewall e rede com `pg_isready -h [host] -p [port]` e `nc -vz [host] [port]`.
> - Adicione `PGSSLMODE=require` se necessário para conexões em nuvem.
> - Não invente informações desconhecidas; peça permissão explícita para baixar documentação ou realizar buscas.

---

## 💡 Comentário do Autor (Insight & How to use)

Serei honesto. Ao conduzir projetos que delegam permissões de codificação e controle de banco de dados para Agentes de IA, vi centenas de vezes como eles caem facilmente em **Alucinações (Hallucinations)** e criam queries perigosas. Especialmente agentes que operam via CLI ou scripts de terminal; no momento em que recebem permissão, tentam alegremente enviar queries insanas como `UPDATE users SET role='admin';` sem cláusula `WHERE`, dizendo "Sem problemas!". Se você permitir isso, acordará um dia com a tela terrível de um banco de dados inteiro evaporado. Portanto, é essencial controlar o raio de ação da IA física e logicamente.

A filosofia central deste sistema de prompt é uma só: **"Nunca confiar na autonomia da IA"**.
Não devemos esperar ingenuamente que a IA perceba a situação e adicione um `LIMIT` ou se prepare para um rollback de transação. É indispensável um processo de **Lavagem Cerebral (Brainwashing)** via prompt, forçando as transações a serem **Stateless** e tornando a escrita de dados impossível sem a flag `--force-write`. A IA esquece muito facilmente o conceito de sessões que mantêm o estado (State). Se você executar comandos de terminal em várias etapas, é comum que a sessão caia no meio ou ocorra um timeout, perdendo o momento do rollback. Por isso, o controle de variáveis mais importante é forçar o processamento de tudo, do `BEGIN;` ao `COMMIT;`, em uma única execução (One-Shot Execution).

Além disso, note que no ambiente prático, quando a IA se comunica com o DB via comandos de terminal (ex: chamando `safe_query.py` ou `psql` diretamente), forcei o output a ser **estritamente em formato JSON**.
Geralmente, se você pede para a IA consultar o DB, ela imprime uma tabela ASCII Art feita de linhas e barras (|) para ficar bonita no terminal. No entanto, isso é bom apenas para olhos humanos; na comunicação entre máquinas (Agent-to-Agent), é o pior método possível. Além de desperdiçar tokens de contexto preciosos, a probabilidade de outro script Python ou um agente subsequente ter alucinações ao tentar parsear esse texto e encontrar formatos inconsistentes aumenta drasticamente. Máquinas devem se comunicar na linguagem das máquinas, o JSON, para reduzir o acoplamento do sistema e aumentar a estabilidade.

**Dicas de Controle de Variáveis na Prática (Variable Control Tips):**
Se o seu ambiente for MySQL ou MongoDB, ajuste as instruções relacionadas ao `psql` no prompt de acordo com as características das ferramentas CLI de cada DB (ajuste de `[variáveis]`). Por exemplo, para MongoDB, você pode adaptar a restrição para "permitir apenas resultados de queries `find()` encadeadas com o método `limit()`".
Além disso, a parte que controla o comportamento da IA em falhas de conexão de rede economizou inúmeras horas de depuração. Quando a IA falha ao conectar no DB, em 9 de cada 10 vezes ela assume que "a senha está errada" e fica repetindo tentativas de autenticação. Na verdade, muitas vezes é um problema de firewall ou porta fechada. Portanto, instruí-la a verificar desde a camada de rede com `pg_isready` ou `nc -vz` é o melhor cheat sheet para transplantar o método de troubleshooting de um engenheiro sênior para a IA.

Por favor, não peça vagamente à IA para "gerenciar o DB gentilmente". **Imponha regras (Rules) fortes e projete o workflow para que o processo falhe imediatamente (Fail-fast) se ela se desviar dessas regras por 1mm.** Esse é o único caminho seguro e garantido para proteger seus preciosos sistemas de produção e dados contra o comportamento imprevisível da IA.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: Por que devo forçar o output em JSON?**
  - A: Se você deixar a IA ler o formato de tabela padrão do `psql` (aquelas desenhadas com linhas), além de desperdiçar tokens de contexto, a probabilidade de alucinações ao parsear tabelas complexas aumenta drasticamente. As máquinas devem ser controladas para se comunicarem na linguagem das máquinas (JSON).
- **Q: Como implemento a flag `--force-write` no sistema?**
  - A: Você deve criar um script wrapper intermediário no ambiente local, como o `safe_query.py` mencionado no prompt, e projetar o workflow para que a IA **obrigatoriamente passe por este script** em vez de digitar comandos `psql` diretamente no DB.
- **Q: Por que devo enviar as transações em um único bloco (Stateless)?**
  - A: Agentes de IA (LLMs) frequentemente se confundem com o conceito de sessões que mantêm o estado (State). Executar comandos de terminal em várias etapas aumenta as chances de queda de sessão, rollbacks indesejados ou perda do momento do commit. Completar a transação de forma limpa em **uma única execução de shell (One-shot)** é estruturalmente o mais seguro.

---

## 🧬 Anatomia do Prompt (Why it works?)

1. **Injeção de Anti-Sycophancy:** No primeiro parágrafo, especificamos diretrizes como "Não bajule" e "Recuse firmemente", suprimindo o viés de positividade inútil da IA e conferindo um senso crítico aguçado.
2. **Configuração Padrão Safe (Fail-Safe):** Ao colocar a regra 'Read-Only por padrão' no topo, forçamos o fluxo de pensamento da IA para considerar a proteção de dados como prioridade número 1 sempre que escrever uma query.
3. **Princípio de Prioridade de Diagnóstico de Rede:** Bloqueamos a tendência irritante da IA de suspeitar da senha logo de cara em falhas de conexão, implantando um código de conduta para validar meticulosamente desde a camada de rede (`pg_isready`, `nc`), como um engenheiro sênior faria.

---

## 🎯 Conclusão

Este cheat sheet vai além de apenas proteger o banco de dados. Ele transformará completamente seu Agente de IA de uma secretária sem alma que só sabe dizer "sim" em um **Engenheiro Sênior** rigoroso e confiável.

As terríveis explosões de tokens que enfrentamos, as queries de `UPDATE` implacáveis sem cláusula `WHERE` e a dor das depurações inúteis agora são coisas do passado. Controlada por algemas sólidas e regras claras, a IA está pronta para ser sua arma mais poderosa.

Não dê liberdade desnecessária à IA. Dê regras claras e mantenha-a estritamente dentro delas.
Espero que você instale este prompt em seu sistema com tranquilidade agora. Automatize o trabalho e saia do escritório com estilo (e na hora certa)! 🍷
