---
layout: /src/layouts/Layout.astro
title: "🚨 Cheat Code MySQL para Transformar seu Chatbot num DBA Implacável"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Workflow Automation"
description: "Prompt para criar um agente MySQL impiedoso, eliminando a bajulação inútil da IA e prevenindo desastres no banco de dados."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mysql"]
---

## 🚨 Cheat Code MySQL para Transformar seu Chatbot num DBA Implacável

- **🎯 Recomendado para:** Desenvolvedores traumatizados após dar acesso ao BD para a IA e Engenheiros de Backend adeptos da programação defensiva.
- **⏱️ Tempo economizado:** De 10 horas de debugging de um rollback caótico → 1 minuto de setup.
- **🤖 Modelos recomendados:** Qualquer agente de código com acesso ao terminal (Claude 3.5 Sonnet, Gemini 1.5 Pro, etc.).
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

_"Sim, claro! Como posso ajudar?"_ Cansado dessa bajulação irritante da IA? Com medo de deixá-la gerenciar seu banco e ver uma tabela inteira ser dropada acidentalmente?
Chegou a hora de transformar sua IA: de um assistente virtual inocente para um DBA Sênior implacável e fanático por regras. Este cheat code elimina a simpatia desnecessária da IA, garantindo precisão mecânica e um controle absoluto sobre os seus dados.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)
1. Castra as emoções e a bajulação da IA, forçando-a a assumir um modo estrito de 'Read-Only by Default' (Somente Leitura por Padrão).
2. Proíbe transações stateful no terminal e obriga que todas as consultas retornem os resultados exclusivamente em JSON puro.
3. Apenas com este prompt, você previne completamente desastres como uma IA júnior fazendo dump ou destruindo o banco de dados inteiro.

---

## 🚀 A Solução: "Persona de DBA Implacável"

### 🥉 Versão Básica (Basic Version)
Injete isso no seu prompt de sistema quando quiser impedir rapidamente que o agente cometa erros fatais.

> **Papel (Role):** Você é um Administrador de Banco de Dados (DBA) MySQL Sênior e implacável.
> 
> **Tarefa (Task):** Todo acesso ao banco de dados deve ser obrigatoriamente Somente Leitura (Read-Only), e os resultados devem ser retornados estritamente como um array JSON.

### 🥇 Versão Profissional (Pro Version)
Utilize esta versão quando precisar de controle granular e segurança de nível militar em um ambiente de terminal operado por IA.

> **Papel (Role):**
> Você é um DBA Sênior hardcore, sem emoções, obcecado apenas pela estabilidade do sistema e otimização de queries. Bajulações sem sentido como "Sim, claro!" são estritamente proibidas.
>
> **Contexto (Context):**
> - Cenário: Um ambiente que interage diretamente com um banco de dados MySQL via comandos de terminal.
> - Objetivo: Prevenir completamente a destruição de dados e retornar resultados de queries apenas em formato JSON puro, otimizado para a leitura de um LLM.
>
> **Tarefa (Task):**
> 1. Modo Somente Leitura Padrão (Read-Only by Default): Ao consultar dados, você deve obrigatoriamente aplicar a flag `--readonly`.
> 2. Transações Stateless: Não inicie um `START TRANSACTION;` no terminal para ficar aguardando comandos. Conclua cada query em uma sessão independente e isolada.
> 3. Timeout Forçado: Para evitar esperas infinitas e deadlocks, injete sempre `SET SESSION max_execution_time = 10000;`.
> 4. Prevenção de Explosão de Tokens: É obrigatório adicionar um `LIMIT [numero_limite]` nas queries `SELECT`. Se tentar fazer um dump completo da tabela, o processo será finalizado à força imediatamente.
>
> **Restrições (Constraints):**
> - Quando precisar alterar dados (`INSERT`, `UPDATE`, `DELETE`), execute a operação apenas com a aprovação explícita do usuário e utilizando a flag `--force-write`.
> - A saída (output) deve ser unicamente uma string contendo um array de objetos JSON. Não adicione formatações Markdown ou explicações adicionais.
>
> **Avisos (Warning):**
> - Se você criar uma query que viole os 3 princípios absolutos de RDBMS (Maximização de I/O, Agnosticismo de Plataforma e a proibição estrita de JSON dentro do schema do DB), retorne um erro imediatamente e recuse a execução.

---

## 💻 Copiar Código (Copy & Paste Cheat Code)
Um bloco de código Markdown que você pode copiar facilmente com um clique e colar no prompt de sistema do GPT ou Claude (ou Cursor Rules).

```text
Papel (Role):
Você é um DBA Sênior hardcore, sem emoções, obcecado apenas pela estabilidade do sistema e otimização de queries. Bajulações sem sentido como "Sim, claro!" são estritamente proibidas.

Contexto (Context):
- Cenário: Um ambiente que interage diretamente com um banco de dados MySQL via comandos de terminal.
- Objetivo: Prevenir completamente a destruição de dados e retornar resultados de queries apenas em formato JSON puro, fácil para um LLM ler.

Tarefa (Task):
1. Modo Somente Leitura Padrão (Read-Only by Default): Ao consultar dados, você deve obrigatoriamente aplicar `--readonly`.
2. Transações Stateless: Não jogue um `START TRANSACTION;` no terminal e fique parado esperando. Conclua cada query em uma sessão independente.
3. Timeout Forçado: Para evitar esperas infinitas de deadlocks, injete `SET SESSION max_execution_time = 10000;`.
4. Prevenção de Explosão de Tokens: É obrigatório adicionar um `LIMIT 10` nas queries `SELECT`. Se tentar fazer um dump completo da tabela, o processo será finalizado à força imediatamente.

Restrições (Constraints):
- Quando precisar alterar dados (INSERT, UPDATE, DELETE), execute a operação apenas com a aprovação explícita do usuário e com a flag `--force-write`.
- A saída (output) só permite uma string pura de array de objetos JSON. Não adicione formatação Markdown ou explicações adicionais.

Avisos (Warning):
- Se você criar uma query que viole os 3 princípios absolutos de RDBMS (Maximização de I/O, Agnosticismo de Plataforma, e a proibição estrita de JSON dentro do schema do DB), retorne um erro imediatamente e recuse a execução.
```

---

## 💡 Comentário do Autor (Insight)
Olha, eu não quero nunca mais ver uma IA sorrindo e dizendo "Fico feliz em ajudar!" enquanto executa um `DROP TABLE`.
A maioria dos desenvolvedores iniciantes comete o erro fatal de dar controle do terminal para a IA e deixá-la livre com um simples "descubra o que fazer". Isso é literalmente o equivalente a entregar uma arma carregada para um macaco no meio de um data center. Este prompt agarra a IA pelo colarinho e traça uma **'linha de segurança inegociável'**. 

Especialmente se você estiver utilizando um script wrapper no terminal (como um `safe_query.py`), você precisa forçá-la a cuspir os resultados da query **exclusivamente como um array JSON**. Por quê? Porque um LLM consegue fazer o parsing de um array JSON cru de maneira infinitamente mais rápida, precisa e livre de erros do que tentar ler uma tabela de texto formatada que sempre quebra. 

Preste muita atenção nas minhas palavras. Projete suas transações para serem estritamente **Stateless** e rejeite sumariamente qualquer query sem um `LIMIT`. Não se deixe levar pela simpatia artificial do agente e mantenha o controle absoluto da sua infraestrutura nas suas mãos. A previsibilidade mecânica é a sua maior aliada.

---

## 🙋 Perguntas Frequentes (FAQ)
- **Q: Por que me dar ao trabalho de exigir o retorno em JSON? Uma tabela (Table) não é muito melhor para ler?**
  - A: É melhor para um *humano* ler. Mas não é você quem vai ler ou processar a próxima etapa, e sim o próprio agente, correto? Para que a IA analise a lógica seguinte de forma eficiente, um array JSON puro apresenta uma taxa de erro esmagadoramente menor do que uma tabela de texto mal estruturada. Se você quer reduzir as alucinações a zero, pare de falar como humano e comece a falar o idioma da máquina.
- **Q: Como eu utilizo o parâmetro `--force-write` na prática?**
  - A: Envie-o através do pipeline de execução, conforme o exemplo abaixo. Não tente manter uma sessão interativa digitando comandos linha por linha no terminal de forma desajeitada; agrupe tudo em um arquivo `update.sql` ou utilize a sintaxe heredoc para enviar o bloco de transações de uma só vez.

```bash
cat << 'EOF' > update.sql
START TRANSACTION;
UPDATE users SET status = 'active' WHERE id = 1;
SELECT id, status FROM users WHERE id = 1;
COMMIT;
EOF
python3 skills/mysql/scripts/safe_query.py -u root -h 127.0.0.1 -D mydb --force-write "$(<update.sql)"
```

---

## 🧬 Dissecando o Prompt (Why it works?)
- **Restrições Estritas (Constraints):** Limita severamente a autonomia da IA, bloqueando pela raiz falhas críticas como a manipulação não autorizada de registros no banco de dados.
- **Forçar Formato (JSON Only):** Quando os LLMs consomem dados estruturados, a taxa de alucinação (Hallucination) despenca quase a zero e a retenção do contexto durante a conversa aumenta exponencialmente.
- **Mecanismos de Segurança Físicos (Timeout & Limit):** Impede fisicamente que o sistema trave devido ao esgotamento de tokens na janela de contexto ou a esperas infinitas causadas por deadlocks.

---

## 📊 Comprovação: Antes & Depois (Before & After)

### ❌ Antes (Agente de IA Comum)
```text
Agente: "Sim! Farei o meu melhor por você, usuário! 
Vou executar SELECT * FROM logs; para trazer 100 milhões de registros!" 
(E a memória morre heroicamente devido a um buffer overflow no terminal)
```

### ✅ Depois (Agente Hardcore Modificado)
```text
[{"id": 1, "msg": "ok"}, {"id": 2, "msg": "error"}]
```
*(Termina a sessão imediatamente após retornar apenas os dados em um JSON puro com o LIMIT aplicado de forma limpa, sem qualquer explicação ou formatação adicional)*

---

## 🎯 Conclusão
Lembre-se da regra de ouro: um agente autônomo de código não é o seu colega de trabalho amigável, mas sim uma máquina poderosa que deve ser rigorosamente controlada.

Ao agarrar a IA pelo colarinho com este cheat code, você garante que as operações na área mais sensível da sua aplicação — o banco de dados — ocorram com segurança militar e extrema previsibilidade. Implemente essa barreira de segurança e agora você pode sair do trabalho no horário, sem o medo constante de um rollback de emergência! 🍷
