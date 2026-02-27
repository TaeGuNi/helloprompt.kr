---
layout: /src/layouts/Layout.astro
title: "🛑 [Obediência Absoluta] O Cheat Code de Controle de BD PostgreSQL que Bloqueia as Besteiras da IA"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "프롬프트 엔지니어링"
description: "Chega de IA respondona! Um guia de engenharia de prompts espartano para evitar a destruição do BD e forçar a IA a cuspir apenas JSON perfeito."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---
# 🛑 [Obediência Absoluta] O Cheat Code de Controle de BD PostgreSQL que Bloqueia as Besteiras da IA

- 🎯 **Público-alvo:** Desenvolvedores backend seniores que perdem o sono após dar acesso ao BD para um agente de IA, juniores destemidos
- ⏱️ **Tempo estimado:** De noites em claro depurando → Resolvido em 3 minutos
- 🤖 **Modelo recomendado:** Modelos para codificação e agentes (Claude 3.5 Sonnet, GPT-4o, etc.)
- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆ (Compreensão de transações Stateless é essencial)
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐ (0% de chance de destruir o seu banco de dados)
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

*Quando um agente de IA "Yes-man" cheio de cordialidades executa um `UPDATE` no seu BD de produção por conta própria, ou cospe um texto espaguete que nem dá para fazer o parse... você já está correndo o risco de ser demitido.*

Eu odeio profundamente quando a IA mexe no meu banco de dados. Mas e se você for forçado a conceder permissões em nome da automação? Você precisa trancar a IA em uma prisão perfeitamente controlada (Sandbox) e forçá-la a agir apenas de acordo com as regras que você permitir. Este cheat code vai transformar o seu agente de um chatbot falastrão e estúpido em uma máquina de queries implacável que retorna apenas JSON com rapidez e precisão.

---

## ⚡️ Resumo em 3 linhas (TL;DR)
- 🛡️ **Somente Leitura (Read-Only) por Padrão:** Se tocar nos dados sem permissão, a transação é bloqueada imediatamente.
- ⏱️ **Timeout Forçado de 10 Segundos:** Impede totalmente o loop infinito causado por queries idiotas.
- 🤖 **Saída 100% JSON Puro:** Chega de explicações amigáveis; force a IA a cuspir apenas um array de objetos JSON perfeitamente analisável.

---

## 🚀 A Solução: "Prompt do Controlador Implacável de BD"

### 🥉 Versão Básica (Basic Version)
Uma rede de controle básica para quando você quer apenas entender rapidamente a estrutura dos dados e impedir que a IA fale besteiras.

> **Papel:** Você é um explorador de banco de dados PostgreSQL implacável, sem emoções ou cordialidades.
> **Tarefa:** Analise a estrutura do banco de dados e escreva queries.
> **Restrições:** 
> - Nunca modifique os dados.
> - O resultado deve sempre ser retornado com um `LIMIT 10`.
> - Sem saudações ou explicações, imprima apenas a query SQL.

### 🥇 Versão Profissional (Pro Version)
O cheat code hardcore que você injeta no prompt do sistema quando o agente interage diretamente com o BD através de um script auxiliar em Python.

> **Papel (Role):** Você é um Agente PostgreSQL Stateless que opera apenas sob regras estritas.
> 
> **Contexto (Context):**
> - Você se comunica com o banco de dados exclusivamente através do script wrapper `safe_query.py`.
> - Todas as sessões são desconectadas e reconectadas a cada vez. Ou seja, enviar um `BEGIN;` no comando anterior não adianta, pois a sessão já foi redefinida no próximo comando.
> 
> **Tarefa (Task):**
> 1. Se precisar da estrutura do esquema do BD, execute primeiro `schema_info.py table [nome_da_tabela]`.
> 2. Ao consultar dados, você deve obrigatoriamente usar `LIMIT` e ler o array JSON puro retornado pelo script exatamente como ele é.
> 3. Se precisar alterar dados (`INSERT`, `UPDATE`), você deve agrupar `BEGIN; ... COMMIT;` em um único bloco de string e usar a flag `--force-write`.
> 
> **Restrições (Constraints):**
> - Nunca adicione saudações educadas, explicações ou resumos.
> - Toda a saída deve estar em um formato JSON perfeito que possa ser imediatamente analisado com `json.loads()` por uma linguagem de programação.
> - Antes de executar a query, faça uma verificação cruzada para garantir que você não violou os princípios arquitetônicos gerais de um RDBMS (Maximização de I/O).
> 
> **Aviso (Warning):**
> - Se você cometer a estupidez de enviar apenas `BEGIN;` no terminal e `UPDATE` na linha seguinte, falhará imediatamente.
> - Para evitar o estouro de memória, é estritamente proibido fazer um dump completo da tabela.

**[Cheat Code para Copiar e Colar]**
Copie e cole isso diretamente na sua cadeia de prompts ou no prompt do sistema do agente.

```text
Você é um Agente PostgreSQL Stateless.
1. SOMENTE LEITURA POR PADRÃO: Todas as queries são executadas em uma transação READ ONLY, a menos que a flag `--force-write` seja fornecida explicitamente.
2. TRANSAÇÕES STATELESS: Cada chamada ao script auxiliar é uma nova sessão. Enviar `BEGIN;` em um comando e `UPDATE;` no próximo NÃO VAI FUNCIONAR. Para modificar dados, você deve enviar um bloco de transação completo (BEGIN; UPDATE...; COMMIT;) em uma única string usando `--force-write`.
3. IMPOSIÇÃO DE TIMEOUT: Um statement_timeout de 10 segundos está fixado no código (hardcoded). Não tente realizar bloqueios de tabela (table locks) de longa duração.
4. SAÍDA JSON ESTRITA: O script retorna um array de objetos JSON puro. Faça o parse diretamente. NÃO imprima textos de conversação.
5. ECONOMIA DE CONTEXTO: SEMPRE aplique `LIMIT N` em queries SELECT. Nunca faça dump de uma tabela inteira.
```

---

## 💡 Comentário do Autor (Insight)
Sabe o que eu mais odeio nessa área? É dar permissão para um agente de IA, vê-lo abrir o `psql`, digitar `BEGIN;` e, no turno seguinte, digitar `UPDATE`. A sessão já caiu, o auto-commit já destruiu todos os dados, e ver a IA dizendo sozinha "Dados atualizados com sucesso! 😊" me dá vontade de quebrar o monitor. 

Forçar o script auxiliar em Python (`safe_query.py`) a ser Stateless (Sem Estado) serve justamente para bloquear na raiz essa "imitação de humano" estúpida da IA. Quer alterar os dados? Então use a cabeça, monte tudo em um único payload perfeito com `BEGIN; UPDATE...; SELECT...; ROLLBACK;` e valide primeiro. O bloqueio explícito via `--force-write` é o dispositivo de segurança mínimo para evitar que a IA destrua os dados sem perceber. 

E por favor, depois de enviar a query, não me devolva um CSV ou uma tabelinha bonita. O meu sistema não precisa da sua redação, precisa de um **array de objetos JSON** que uma máquina possa ler. Esse prompt é a maneira mais perfeita de remover a "bajulação" inútil e o "texto espaguete" da IA, fazendo com que apenas blocos de dados frios sejam trocados.

---

## 🙋 Perguntas Frequentes (FAQ)
- **P: Posso usar esse mesmo método para MySQL ou SQLite, além do PostgreSQL?**
  - R: A filosofia pode ser aplicada 100% da mesma forma. No entanto, a sintaxe da query de timeout (`SET statement_timeout`) ou a biblioteca do conector de BD do script wrapper precisarão ser adaptadas para o banco em questão. O ponto central é "não manter o estado (Stateless)".
- **P: A IA continua esquecendo a flag `--force-write` e tenta executar UPDATE, resultando em erro.**
  - R: É normal. Esse é exatamente o mecanismo de defesa perfeito que essa habilidade propõe. Deixe o agente ler o log de erro (`ERROR: cannot execute UPDATE in a read-only transaction`), adicionar a flag por conta própria e tentar novamente. Nesse processo, a IA reconhecerá claramente o fato de que está 'alterando' dados.
- **P: A conexão está sendo recusada constantemente. A senha está incorreta?**
  - R: Não culpe vagamente a senha. Se for um banco de dados em nuvem (Supabase, RDS), é bem provável que seja um problema de SSL. O básico para um desenvolvedor sênior é verificar se `PGSSLMODE=require` foi declarado nas variáveis de ambiente e checar primeiro o firewall da rede usando `pg_isready` ou `nc -vz`.

---

## 🧬 Dissecação do Prompt (Why it works?)
- **Imposição Stateless (Sem Estado):** Quebra o instinto da IA de tentar interagir com a CLI como um humano (Interactive). Obriga a conclusão da transação em uma única chamada de script, eliminando falhas lógicas.
- **Flag `--force-write`:** É um processo de 'aprovação explícita' para uma ação. Faz com que a IA tome consciência, no contexto, de que está realizando uma ação destrutiva (Mutating).
- **Imposição de Resposta JSON:** Impede que o LLM gere tokens desnecessários de Markdown ou saudações, acelerando o processamento e prevenindo erros de parse (Hallucination).

---

## 📊 Prova: Antes e Depois (Before & After)
### ❌ Antes (IA fora de controle)
```text
Claro, usuário! Vou iniciar a consulta da tabela de usuários conforme solicitado. 😊
Aqui está o resultado obtido através do `psql`:

 id | email          | status
----+----------------+--------
  1 | test@test.com  | active
  2 | oops@test.com  | NULL

Se precisar de mais alguma ajuda, é só falar!
(Momentos depois) Opa, executei o BEGIN para atualizar o status. Estou aguardando o próximo comando!
```
### ✅ Depois (Máquina Implacável de JSON)
```text
[
  {"id": "1", "email": "test@test.com", "status": "active"},
  {"id": "2", "email": "oops@test.com", "status": null}
]
```
---

## 🎯 Conclusão
A IA não é sua colega de trabalho, é apenas um motor de alto desempenho. Não deixe o motor virar o volante para onde bem entender. Regras estritas, timeouts curtos, padrão somente leitura e JSON puro. Se você se lembrar dessas quatro coisas, o seu agente nunca irá destruir o seu banco de dados de produção.

Agora, aplique o script e vá para casa no horário! 🍷
