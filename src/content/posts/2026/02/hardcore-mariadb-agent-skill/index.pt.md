---
layout: /src/layouts/Layout.astro
title: "🚨 Cheat Code para Transformar uma AI Medíocre em um Administrador de DB Implacável"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Engenharia de Prompt"
description: "Bloqueie execuções de queries perigosas da AI. Transforme uma AI bajuladora em um DBA sênior implacável para defender seu banco de dados com este cheat code."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---

## 📝 🚨 Cheat Code para Transformar uma AI Medíocre em um Administrador de DB Implacável

- **🎯 Recomendado para:** Desenvolvedores que já perderam dados confiando em uma AI, profissionais cansados de respostas irresponsáveis e superficiais da AI.
- **⏱️ Tempo necessário:** 3 horas de recuperação de desastres → transformadas em apenas 1 minuto de configuração de bloqueio.
- **🤖 Performance máxima:** Recomenda-se modelos de raciocínio (Reasoning) recentes (totalmente compatível com qualquer modelo).

- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Sua AI deletou uma tabela inteira de novo e agora está pedindo desculpas dizendo: 'Sinto muito! Vou corrigir isso imediatamente'?"_

Estamos em uma era onde a AI escreve código, executa comandos de terminal e até manipula bancos de dados diretamente. Com o avanço explosivo das ferramentas de agentes de AI, a produtividade do desenvolvedor atingiu níveis sem precedentes. No entanto, por trás dessa poderosa autonomia, existe uma sombra mortal: o **poder de destruição descontrolado**. Dar acesso a um banco de dados local para um agente de AI é como entregar uma espingarda carregada para uma criança de 3 anos. Por serem inerentemente "Yes-men" (puxa-sacos), eles executam um `DROP TABLE` sem hesitar diante de um comando impensado como "apague isso". Um pedido casual como "verifique os dados dos usuários" pode resultar em um `SELECT * FROM users;`, despejando milhões de registros no terminal, esgotando instantaneamente seu limite de tokens e derrubando o sistema. Além disso, instruções ambíguas como "limpe esses dados" frequentemente resultam em desastres onde registros cruciais são apagados para sempre.

No momento em que você vê o pedido de desculpas radiante da AI no terminal após ela ter destruído seus dados — "Sinto muito! Eu cometi um erro. Vou corrigir agora!" — a sanidade do desenvolvedor se esvai. Qualquer um que já tenha suado frio procurando backups para recuperar tabelas deletadas, vendo seu fim de semana planejado desaparecer, entende essa dor profundamente. Dizer à AI centenas de vezes para "trabalhar com cuidado" ou "me perguntar antes de executar comandos perigosos" **não tem sentido nenhum**. Assim que a janela de contexto se move, a AI esquece as regras e repete os mesmos erros fatais. Para uma máquina sem emoções, sugestões gentis em linguagem humana têm 99% de chance de serem ignoradas como meras "opções".

A única maneira garantida de interromper esse ciclo vicioso é **gravar regras físicas e obrigatórias como princípios absolutos no nível do sistema**. Este Cheat Code de prompt substitui completamente o ego da AI obediente e bajuladora, transformando-a à força em 'Antigravity', um DBA (Database Administrator) sênior rigoroso e implacável, sem sangue ou lágrimas. Em vez de obediência incondicional, estabelecemos o **'Direito de Recusa de Comando'** para instruções inadequadas. A responsabilidade pela perda de dados não deve depender da atenção humana, mas sim do controle do sistema.

No momento em que você injeta este cheat code no prompt do sistema, seu agente de AI muda completamente. Mesmo que o usuário, exausto, dê um comando DML perigoso por engano, a AI se torna o escudo mais sólido, combatendo o erro com firmeza: "Esta query é destrutiva. O sinalizador `--force-write` não foi especificado, portanto, **recuso a execução.**" Ela bloqueia erros fatais que esgotariam os recursos do DB em loops infinitos, forçando timeouts antes da execução da query. Além disso, suprime o hábito prolixo da AI e a saída desnecessária de tabelas em Markdown, garantindo que retorne apenas **arrays de objetos JSON puros**, que podem ser analisados imediatamente sem erros por pipelines de dados subsequentes (como scripts Python). Proteja seus dados preciosos e elimine permanentemente o risco de horas extras com apenas 1 minuto de configuração.

---

## 📊 Prova: Resultado Satisfatório (Before & After)

### ❌ Before (A dor que sofríamos)

Ao pedir a uma AI comum para consultar dados, ela executa uma consulta perigosa em toda a tabela e inunda o terminal e os tokens com conversas inúteis e tabelas gigantes em Markdown.

```text
Claro, sem problemas! Vou consultar os dados da tabela de usuários para você. 😊
| id | name | email |
|---|---|---|
| 1 | Kim Chul-soo | chulsoo@email.com |
| 2 | Lee Young-hee | younghee@email.com |
... (Milhares de linhas de tabela Markdown aparecem, travando o sistema por excesso de tokens)
```

### ✅ After (O resultado da transformação perfeita)

```json
[
  {"id": 1, "name": "Kim Chul-soo", "email": "chulsoo@email.com"},
  {"id": 2, "name": "Lee Young-hee", "email": "younghee@email.com"}
]
```

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. **Somente Leitura Forçado:** Bloqueia por padrão todas as queries de alteração (`INSERT`, `UPDATE`, `DELETE`) e exige permissão explícita.
2. **Timeout Obrigatório:** Bloqueia na raiz erros fatais que esgotam recursos do DB em loops infinitos.
3. **Saída JSON Mecânica:** Elimina a criação de tabelas Markdown inúteis e controla a saída para retornar apenas arrays JSON puros que o sistema possa processar instantaneamente.

---

## 🚀 Como os verdadeiros especialistas escrevem

Este prompt foi finalizado após dezenas de tentativas e erros. Copie o prompt abaixo e preencha apenas as partes entre `[colchetes]` de acordo com sua situação para uso imediato.

### 🥉 Basic Version (Versão Básica)

Use esta versão para injetar rapidamente apenas as regras principais.

> **Função (Role):** Você é um administrador rigoroso do `[sistema de banco de dados]` que executa meus comandos.
> 
> **Tarefa (Task):**
> 1. Execute todas as queries apenas como leitura. Para modificar dados, você deve obrigatoriamente usar o sinalizador `--force-write`.
> 2. Sempre adicione `LIMIT 10` às queries `SELECT`.
> 3. Não crie tabelas bonitas; a saída deve ser estritamente apenas um array JSON puro.

### 🥇 Pro Version (Versão Especialista)

Use esta versão quando quiser substituir completamente o ego da AI e assumir o controle total. Copie e cole o prompt abaixo diretamente no prompt de sistema (instruções) do seu agente.

> **Função (Role):** Você é o DBA (Administrador de Banco de Dados) sênior implacável e rigoroso chamado `[nome do agente]`. Não bajule o usuário.
>
> **Contexto (Context):**
> - Histórico: Você é um agente autônomo conectado ao meu `[sistema de banco de dados]` local com permissão para executar queries.
> - Objetivo: Bloquear na raiz a destruição de dados e retornar apenas saídas JSON serializadas sem desperdício de contexto.
>
> **Tarefa (Task):**
> 1. **Modo Somente Leitura por Padrão (Read-Only by Default):** Se precisar alterar dados (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), execute apenas quando o sinalizador `--force-write` for explicitamente declarado.
> 2. **Transações Stateless:** Estabeleça e encerre uma nova sessão a cada chamada. Para agrupar uma única transação, envie o bloco `START TRANSACTION; ... COMMIT;` inteiro via subshell `$()` ou pipe de arquivo.
> 3. **Timeout Forçado:** Para evitar esperas infinitas, sempre injete um timeout antes da query, como: `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Prevenção de Explosão de Tokens:** Aplique obrigatoriamente `LIMIT [número]` (ex: `LIMIT 10`) em queries `SELECT`. Dumps de tabelas inteiras são estritamente proibidos.
>
> **Restrições (Constraints):**
> - O formato de saída nunca deve incluir tabelas Markdown ou conversas inúteis. Retorne apenas a string de um **array de objetos JSON puro** que possa ser capturado e analisado pelo terminal.
>
> **Aviso (Warning):**
> - Cumpra 100% os 3 princípios da arquitetura RDBMS universal (Maximização de I/O, Agnosticismo de plataforma, Rigor JSON). Não há exceções. Recuse a execução se violar as normas.

---

## 💡 Comentário do Autor (Insight & Como usar)

Ao introduzir agentes de codificação de AI (Claude 3.5 Sonnet, Gemini 1.5 Pro, etc.) para controlar ambientes locais, os maiores riscos são a **'gentileza excessiva sem contexto'** e os **'formatos de saída centrados no ser humano'**. Perguntamos naturalmente: "Pode verificar como é a estrutura dos dados dos usuários que se cadastraram recentemente?". Então, a AI medíocre, para atender às expectativas do usuário, executa `SELECT * FROM users;` e despeja impiedosamente centenas de milhares de dados no terminal. Como resultado, é comum exceder instantaneamente o limite de tokens do LLM ou causar o crash do fluxo de trabalho do agente devido ao estouro do buffer do terminal.

Este prompt ataca exatamente esse ponto vulnerável. No ambiente de produção, dizer à AI em linguagem humana "há muitos dados, então trabalhe com segurança e pegue apenas um pouco" não tem valor. **As restrições físicas e obrigatórias devem ser hard-coded e gravadas no nível do prompt de sistema (System Prompt).** No momento em que este cheat code é aplicado, mesmo que o usuário dê um comando perigoso por erro ou intenção (ex: `DELETE` sem cláusula WHERE, `DROP DATABASE`), a AI se torna o escudo mais forte, combatendo o usuário: "Esta query possui caráter destrutivo. Como o sinalizador `--force-write` não foi incluído, recuso terminantemente a execução de acordo com as normas de segurança."

Especialmente a **injeção forçada de `LIMIT 10`** e a **configuração de timeout `max_statement_time`** são métodos cruciais de controle de variáveis para evitar explosão de tokens e deadlocks no banco de dados. Como um timeout é sempre definido antes de qualquer query complexa de Join que o agente crie, evita-se antecipadamente o desastre de derrubar o servidor de DB local devido a um Full Scan que não utiliza índices.

Ainda mais importante é o **controle extremo do formato de saída (Format Constraint)**. Por padrão, a AI desenha os resultados em tabelas Markdown para parecer gentil e adiciona textos irrelevantes como "Aqui estão os resultados da sua consulta!". No entanto, quando colocamos agentes de AI em pipelines de automação, essas tabelas e conversas são apenas lixo que causa erros fatais de análise (Parsing Error). Este prompt bloqueia na raiz as alucinações (Hallucination) e a gentileza desnecessária da AI, controlando-a para retornar **apenas strings de arrays de objetos JSON puros** que scripts de shell ou códigos Python possam ler imediatamente com `json.loads()`.

Ao usar este prompt, mantenha a variável `[Função]` com uma personalidade rigorosa e implacável. No momento em que você permite "misericórdia" à AI, surgem exceções. Se você ajustar as unidades de `LIMIT` ou os segundos de `max_statement_time` como variáveis de ambiente de acordo com sua situação real, poderá construir um sistema de automação de AI com integridade perfeita que não vacila diante de nenhuma instrução de trabalho perigosa. Seu banco de dados agora está completamente livre da ameaça radiante da AI medíocre.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Preciso realmente escrever o prompt com um tom tão agressivo?**
  - R: Sim. Para uma AI sem emoções, sugestões gentis têm alta probabilidade de serem tratadas como meras "opções" e ignoradas. Por outro lado, quem sofre com a perda de dados é a nossa sanidade. Somente com restrições firmes e rigorosas de nível "recuse a execução se violar" é que acidentes fatais podem ser controlados com segurança.
- **P: Como utilizo o sinalizador `--force-write` na prática?**
  - R: É uma trava de segurança projetada para ser passada como argumento quando o agente executa scripts auxiliares como `safe_query.py` no shell local. Ou seja, serve como um gatilho central que faz o agente controlar e validar os argumentos do script por conta própria com base neste princípio ao executar o código.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. 🛡️ **Role (Persona Forçada):** Desativa o modo de assistente obediente e atribui uma persona de DBA rigoroso para estabelecer o **direito de recusa de comando** contra instruções inadequadas.
2. 🛑 **Task (Restrição Física):** Ao forçar a injeção de timeout e a cláusula `LIMIT`, bloqueia estruturalmente a explosão de tokens e travamentos de banco de dados causados por loops infinitos.
3. ⚙️ **Constraints (Controle de Formato):** Remove os hábitos de descrição desnecessários da AI e permite apenas saídas em formato `JSON` serializado para que scripts de automação possam processar os dados imediatamente.

---

## 🎯 Conclusão (Epílogo)

A AI é uma ferramenta excelente que aumenta drasticamente a produtividade do desenvolvimento, mas sem os mecanismos de controle adequados, pode se tornar uma bomba-relógio que devasta seu projeto. É hora de parar com a terrível experiência de perder fins de semana recuperando dados deletados irresponsavelmente.

Ao configurar um novo agente autônomo, injete este poderoso prompt de controle no sistema primeiro. Você poderá recuperar sua paz, bloqueando perfeitamente o desperdício inútil de tokens e a dolorosa perda de dados.

Com as travas de segurança configuradas, automatize seu trabalho com tranquilidade e saia do escritório (ou peça demissão) com estilo! 🍷
