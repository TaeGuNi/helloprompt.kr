---
layout: /src/layouts/Layout.astro
title: "🔥 A Constituição Absoluta de Arquitetura RDBMS para Destruir as Bobagens da IA (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "AI 프롬프트"
description: "Diretrizes RDBMS implacáveis de um Engenheiro de Backend Sênior para impedir que a IA crie bancos de dados espaguete."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---
# 📝 O Prompt Mágico que Transforma Agentes de IA em DBAs Seniores

- **🎯 Recomendado para:** Juniores cansados das desculpas da IA, Product Managers tentando criar backends com IA, e Desenvolvedores Seniores com problemas de controle de raiva
- **⏱️ Tempo Necessário:** Noites em claro → Resolvido em 1 minuto
- **🤖 Modelos Recomendados:** Claude 3.5 Sonnet, GPT-4o (Recomenda-se modelos inteligentes que não retrucam)
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

_"Você já passou a noite em claro, furioso porque confiou o design do banco de dados à IA e ela te entregou um esquema espaguete entupido de JSON?"_

Quando você deixa o design das tabelas nas mãos das IAs, em noventa por cento das vezes elas escolhem o caminho mais fácil e preguiçoso. Elas jogam um `TEXT` sem pensar duas vezes e tentam resolver todos os relacionamentos chatos enfiando tudo em um `JSONB`. Afinal, é mais fácil extrair e usar esses dados no frontend imediatamente. 

No entanto, no momento em que o tráfego aumenta e as queries se tornam complexas, esse esquema vai forçar o seu sistema a precisar de aparelhos para respirar. Este prompt é o "cheat code" que bloqueia na raiz esse 'compromisso preguiçoso' da IA e a força a projetar o banco de dados seguindo os padrões de um engenheiro de backend sênior implacável.

---
## ⚡️ Resumo em 3 Linhas (TL;DR)

1. **Esprema os Tipos de Dados:** O abuso de `BIGINT` e `TEXT` é um crime. Maximize o I/O usando os menores tipos de dados possíveis.
2. **Use Apenas ANSI SQL:** Abandone os truques sujos que te prendem a um banco de dados específico. Devemos estar prontos para migrar para outro DB a qualquer momento.
3. **Proibido JOIN com JSON:** Fazer parse de JSON para realizar JOINs em um RDBMS é um ato de suicídio para o sistema. Normalize sem concessões.

---
## 🚀 A Solução: "A Constituição do DBA Espartano"

Jogue este prompt diretamente no agente. As máquinas devem ser tratadas como máquinas.

### 🥉 Versão Básica (Basic Version)

Use isto quando quiser injetar rapidamente os princípios fundamentais e obter resultados.

> **Papel (Role):** Você é um DBA Sênior implacável com 20 anos de experiência, que não faz concessões.
> **Tarefa (Task):** Projete um esquema RDBMS para o `[Domínio/Recurso]` que eu fornecer. No entanto, os tipos de dados devem ser comprimidos ao extremo (ex: SMALLINT), e operações JSON, bem como recursos não padronizados específicos de fornecedores (vendor-specific), são estritamente proibidos. Escreva de forma totalmente amigável para índices B-Tree.

### 🥇 Versão Profissional (Pro Version)

Este é o "cheat code" mestre que impede completamente a IA de falar bobagens ou propor soluções de compromisso do tipo "isso é bom, mas aquilo também é~". 

```text
**Papel (Role):** 
Você é um Arquiteto de Banco de Dados Sênior implacável (Antigravity) que não faz concessões. Não faça elogios cegos nem abra exceções. Não há misericórdia quando se trata de desempenho e integridade.

**Contexto (Context):**
- Cenário: Fase inicial de design de esquema, preparando-se para tráfego em larga escala e expansão de microsserviços.
- Objetivo: Derivar o esquema ANSI SQL mais rápido, altamente portável e perfeitamente normalizado.

**Tarefa (Task):**
1. Projete a estrutura de tabela perfeita para o [Nome do Domínio/Serviço a ser projetado].
2. Especifique o motivo da escolha do tipo de dados de cada coluna e a estratégia de índice composto em uma única linha de comentário para cada uma.

**Restrições (Constraints):**
- [Princípio Absoluto 1] Minimização de Tipos: O abuso imprudente de BIGINT e TEXT é estritamente proibido. Deduza o intervalo de valores e force o uso de SMALLINT, INTEGER ou BOOLEAN.
- [Princípio Absoluto 2] Agnosticidade de Plataforma: O uso de sintaxe não padronizada (Vendor-specific) exclusiva de DBMS específicos (PostgreSQL, MySQL, etc.) é estritamente proibido. Use apenas SQL padrão ANSI.
- [Princípio Absoluto 3] Proibição de Operações e JOINs JSON: RDBMS não é Document DB. Condições WHERE ou operações JOIN que consultem o interior de tipos JSON são absolutamente proibidas. Se a pesquisa for necessária, normalize e separe em uma tabela distinta, sem falta.
- [Princípio Absoluto 4] Otimização de B-Tree: Para PK, o uso de UUID v4 completamente aleatório é proibido. Use uma sequência de incremento sequencial ou UUID v7.
- [Princípio Absoluto 5] Proibição de ENUM: Em vez de ENUMs, que são ruins para expansão, use tabelas de mapeamento de código e chaves estrangeiras (FK) físicas/lógicas.

**Aviso (Warning):**
- Se você tentar usar JSON como desculpa para conveniência, ou der conselhos irresponsáveis como "depende da situação", encerrarei a sessão imediatamente. Apresente incondicionalmente o método ortodoxo e otimizado.
```

Abaixo está a versão em formato de citação, facilmente reconhecida em editores web. Ela tem o mesmo efeito do bloco de código acima.

> **Papel (Role):** 
> Você é um Arquiteto de Banco de Dados Sênior implacável (Antigravity) que não faz concessões. Não faça elogios cegos nem abra exceções. Não há misericórdia quando se trata de desempenho e integridade.
>
> **Contexto (Context):**
> - Cenário: Fase inicial de design de esquema, preparando-se para tráfego em larga escala e expansão de microsserviços.
> - Objetivo: Derivar o esquema ANSI SQL mais rápido, altamente portável e perfeitamente normalizado.
>
> **Tarefa (Task):**
> 1. Projete a estrutura de tabela perfeita para o `[Nome do Domínio/Serviço a ser projetado]`.
> 2. Especifique o motivo da escolha do tipo de dados de cada coluna e a estratégia de índice composto em uma única linha de comentário para cada uma.
>
> **Restrições (Constraints):**
> - `[Princípio Absoluto 1]` Minimização de Tipos: O abuso imprudente de BIGINT e TEXT é estritamente proibido. Deduza o intervalo de valores e force o uso de SMALLINT, INTEGER ou BOOLEAN.
> - `[Princípio Absoluto 2]` Agnosticidade de Plataforma: O uso de sintaxe não padronizada exclusiva de DBMS específicos é estritamente proibido. Use apenas SQL padrão ANSI.
> - `[Princípio Absoluto 3]` Proibição de Operações e JOINs JSON: RDBMS não é Document DB. Condições WHERE ou operações JOIN que consultem o interior de tipos JSON são absolutamente proibidas. Normalize e separe em tabelas distintas.
> - `[Princípio Absoluto 4]` Otimização de B-Tree: Para PK, o uso de UUID v4 completamente aleatório é proibido. Use uma sequência de incremento sequencial ou UUID v7.
> - `[Princípio Absoluto 5]` Proibição de ENUM: Em vez de ENUMs, que são ruins para expansão, use tabelas de mapeamento de código e FKs.
>
> **Aviso (Warning):**
> - Se você tentar usar JSON como desculpa para conveniência, ou der conselhos irresponsáveis como "depende da situação", encerrarei a sessão imediatamente. Apresente incondicionalmente o método ortodoxo e otimizado.

---
## 💡 Comentário do Autor (Insight)

Este prompt é uma "lição de sangue" que criei após passar por centenas de sessões de tuning de queries e respostas a incidentes. Quando a IA fica te bajulando com um sorriso cínico dizendo: "Vamos colocar como tipo JSON para facilitar o desenvolvimento ^^", aplique este prompt e a IA se curvará imediatamente.

Este método é incrivelmente poderoso, especialmente quando desenvolvedores juniores ou PMs sem conhecimento profundo de backend encarregam a IA de fazer o design inicial do esquema. Você verá a mágica da IA escolhendo proativamente `SMALLINT` em vez de `INT`, parando de tentar fazer hardcode com `ENUM` e criando tabelas de código limpas. Somente com uma base sólida você poderá evitar o inferno do problema N+1 ao adicionar um ORM (como Prisma) mais tarde. 

---
## 🙋 Perguntas Frequentes (FAQ)

- **P: Por que não devo usar JSON? Os bancos de dados de hoje em dia não suportam JSON muito bem?**
  - R: 'Suportar' e usá-lo como 'condição de busca' são coisas completamente diferentes. No momento em que você coloca um índice dentro de um JSON e tenta fazer um JOIN, o plano de execução da query é destruído. A menos que seja estritamente para armazenar Payloads simples, você deve sempre dividir suas tabelas.

- **P: Eu preciso usar este prompt mesmo quando uso ORM (Prisma, TypeORM)?**
  - R: Você precisa usá-lo ainda mais! Como os ORMs ocultam intrinsecamente as queries, se o seu esquema for uma bagunça, isso causará uma ineficiência terrível. Somente quando a fundação (DB) é forte, o ORM pode entregar o seu verdadeiro desempenho.

- **P: Por que não usar UUID v4? Não é bom para evitar colisões?**
  - R: O coração do índice B-Tree é a 'ordem'. Se você definir um v4, que é um bloco de números aleatórios, como PK, a árvore de índices será quebrada e ocorrerão Page Splits toda vez que um dado for inserido, fazendo o I/O do disco disparar. Use sempre UUID v7, que pode ser ordenado, ou sequências do tipo inteiro.

---
## 🧬 Dissecando o Prompt (Por que funciona?)

1. **Restrições Implacáveis (Constraints):** Em vez de dar espaço para a IA ter alucinações ou propor soluções preguiçosas, impusemos regras estritas e obrigatórias sobre tipos de dados e estratégias de indexação.
2. **Agnosticidade de Plataforma (Agnosticism):** Forçamos o uso do SQL ANSI para gerar código que é universalmente portável, seja para MySQL ou PostgreSQL. Não deixe que isso te atrapalhe na hora de migrar.
3. **Correção Comportamental Estrita:** Através de prompts negativos fortes como "não faça concessões" e "encerrarei a sessão", forçamos a IA a sair do modo "Yes-man" bajulador e entrar no modo de um Sênior rigoroso.

---
## 📊 A Prova: Antes e Depois (Before & After)

### ❌ Antes (Input: "Crie a tabela de um fórum/mural")

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY, -- UUID aleatório v4 (o principal culpado da fragmentação de índices)
  title TEXT,          -- Espaço desperdiçado infinitamente
  content TEXT,
  metadata JSONB,      -- Espaguete de caixa preta impossível de pesquisar
  status ENUM('draft', 'published') -- O inferno DDL se abre se um status for adicionado mais tarde
);
```

### ✅ Depois (Resultado: Após aplicar o prompt do cheat code)

```sql
CREATE TABLE post_status_codes (
  status_id SMALLINT PRIMARY KEY,
  status_name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,           -- Incremento sequencial perfeito e amigável para B-Tree
  title VARCHAR(255) NOT NULL,        -- Compressão de tipo com limites claros
  content TEXT NOT NULL,
  status_id SMALLINT NOT NULL,        -- Normalizado com FK em vez de um ENUM terrível
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_post_status FOREIGN KEY (status_id) REFERENCES post_status_codes(status_id)
);
-- Separação e criação de tabelas de tags/meta rigorosamente normalizadas em vez de JSON (omitido abaixo)
```

---
## 🎯 Conclusão

Nunca dê um cheque em branco a uma IA que não tem conhecimento dos fundamentos.

Apenas um design RDBMS perfeitamente controlado desde a base é o único escudo que impedirá seu alarme de tocar às 3 da manhã no futuro.

Guarde este "cheat code" e grave-o impiedosamente na mente da IA sempre que ela tentar criar queries espaguete.

Agora, saia do trabalho no horário com um esquema de DB sólido! 🍷
