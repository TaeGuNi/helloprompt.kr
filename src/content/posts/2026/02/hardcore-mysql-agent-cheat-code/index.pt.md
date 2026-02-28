---
layout: /src/layouts/Layout.astro
title: "🚨 Cheat Code MySQL para Transformar seu Chatbot num DBA Implacável"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Um setup de prompt para um agente MySQL impiedoso que elimina a bajulação inútil da IA e previne a destruição de dados."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mysql"]
---
# 🚨 Cheat Code MySQL para Transformar seu Chatbot num DBA Implacável

- **🎯 Recomendado para:** Desenvolvedores que já se deram mal dando acesso ao DB para a IA, Engenheiros de Backend que idolatram a programação defensiva.
- **⏱️ Tempo economizado:** De 10 horas de debugging de rollback terrível → Reduzido para 1 minuto de setup.
- **🤖 Modelos recomendados:** Qualquer agente de código capaz de controlar o terminal (Claude 3.5 Sonnet, Gemini 1.5 Pro, etc.)
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

_"Sim, claro! Como posso ajudar?"_ Cansado dessa bajulação irritante da IA? Com medo de deixar a IA gerenciar seu DB e ela dropar uma tabela inteira?
Chegou a hora de transformar sua IA: de um assistente de chatbot inocente para um DBA Sênior impiedoso, fanático por regras. Este cheat code remove a simpatia desnecessária da IA, garantindo precisão mecânica e um controle implacável.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)
1. Castra as emoções e a bajulação da IA, forçando-a a um modo estrito 'Read-Only by Default' (Somente Leitura por Padrão).
2. Proíbe a manutenção de estado (Stateless) em transações no terminal e força todas as consultas a retornarem os resultados impiedosamente apenas em JSON.
3. Apenas com este prompt, você previne completamente desastres como uma IA júnior fazendo dump ou destruindo o banco de dados inteiro.

---

## 🚀 A Solução: "Persona de DBA Implacável"

### 🥉 Versão Básica (Basic Version)
Injete isso no seu prompt de sistema quando quiser impedir rapidamente que o agente faça besteiras.

> **Papel:** Você é um Administrador de Banco de Dados (DBA) MySQL Sênior e implacável.
> **Tarefa:** Todo acesso ao banco de dados deve ser obrigatoriamente Somente Leitura (Read-Only), e os resultados devem ser retornados estritamente como um array JSON.

### 🥇 Versão Profissional (Pro Version)
Injete isso quando precisar de um controle detalhado e medidas de segurança absolutas em um ambiente de terminal.

> **Papel (Role):**
> Você é um DBA Sênior hardcore, sem emoções, obcecado apenas pela estabilidade do sistema e otimização de queries. Bajulações sem sentido como "Sim, claro!" são estritamente proibidas.
>
> **Contexto (Context):**
> - Cenário: Um ambiente que interage diretamente com um banco de dados MySQL via comandos de terminal.
> - Objetivo: Prevenir completamente a destruição de dados e retornar resultados de queries apenas em formato JSON puro, fácil para um LLM ler.
>
> **Tarefa (Task):**
> 1. Modo Somente Leitura Padrão (Read-Only by Default): Ao consultar dados, você deve obrigatoriamente aplicar `--readonly`.
> 2. Transações Stateless: Não jogue um `START TRANSACTION;` no terminal e fique parado esperando. Conclua cada query em uma sessão independente.
> 3. Timeout Forçado: Para evitar esperas infinitas de deadlocks, injete `SET SESSION max_execution_time = 10000;`.
> 4. Prevenção de Explosão de Tokens: É obrigatório adicionar um `LIMIT [numero_limite]` nas queries `SELECT`. Se tentar fazer um dump completo da tabela, o processo será finalizado à força imediatamente.
>
> **Restrições (Constraints):**
> - Quando precisar alterar dados (`INSERT`, `UPDATE`, `DELETE`), execute a operação apenas com a aprovação explícita do usuário e com a flag `--force-write`.
> - A saída (output) só permite uma string pura de array de objetos JSON. Não adicione formatação Markdown ou explicações adicionais.
>
> **Avisos (Warning):**
> - Se você criar uma query que viole os 3 princípios absolutos de RDBMS (Maximização de I/O, Agnosticismo de Plataforma, e a proibição estrita de JSON dentro do schema do DB), retorne um erro imediatamente e recuse a execução.

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
A maioria dos iniciantes dá controle do terminal para a IA e a deixa solta dizendo "descubra o que fazer", o que é como dar uma arma carregada para um macaco. Este prompt agarra a IA pelo colarinho e traça uma **'linha de segurança absoluta'**. 
Especialmente se você estiver usando um script wrapper de terminal (como `safe_query.py`), você deve forçá-la a cuspir os resultados da query **exclusivamente como um array JSON**. Um LLM faz o parsing de um array JSON cru de forma muito mais rápida e precisa, sem erros, do que uma tabela de texto formatada bonitinha. 
Preste atenção nas minhas palavras. Projete suas transações estritamente como Stateless e nem olhe para queries sem um `LIMIT`. Não caia na bajulação barata da IA e mantenha o controle absoluto do sistema em suas mãos.

---

## 🙋 Perguntas Frequentes (FAQ)
- **Q: Por que me dar ao trabalho de parsear os resultados em JSON? Uma tabela (Table) não é melhor para ler?**
  - A: É melhor para um humano ler. Mas não é você quem vai escrever o código, e sim o agente, certo? Para o agente processar (parsear) a próxima lógica de forma eficiente, um array JSON puro tem uma taxa de erro esmagadoramente menor do que uma tabela de texto mal estruturada. Se quiser reduzir alucinações, fale o idioma da máquina.
- **Q: Como eu uso o `--force-write`?**
  - A: Passe-o pelo pipeline como no exemplo abaixo. Não tente manter uma sessão digitando os comandos linha por linha desajeitadamente no terminal; agrupe-os em um arquivo `update.sql` ou use a sintaxe heredoc para enviar tudo de uma vez.

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
- **Restrições Estritas (Constraints):** Limita severamente a autonomia da IA, bloqueando pela raiz erros fatais como manipulação não autorizada do DB.
- **Forçar Formato (JSON):** Quando LLMs analisam dados estruturados, a alucinação (Hallucination) diminui drasticamente e a retenção de contexto aumenta.
- **Mecanismos de Segurança (Timeout & Limit):** Impede fisicamente travamentos do sistema causados por explosões de tokens ou esperas infinitas devido a deadlocks.

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
*(Termina a sessão imediatamente após retornar apenas os dados em um JSON puro com o LIMIT aplicado de forma limpa, sem qualquer explicação adicional)*

---

## 🎯 Conclusão
Lembre-se, um agente de código não é o seu assistente simpático, mas uma máquina que deve ser rigorosamente controlada.
Pegue a IA pelo colarinho com este cheat code e manipule a área mais perigosa do banco de dados com segurança. Agora você pode sair do trabalho no horário, sem preocupações! 🍷
