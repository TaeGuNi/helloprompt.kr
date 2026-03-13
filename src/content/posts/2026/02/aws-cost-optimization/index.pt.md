---
layout: /src/layouts/Layout.astro
title: "Redução de 50% nos custos da AWS: Checklist para evitar surpresas no EC2 e RDS"
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "DevOps/Infraestrutura"
description: "Surpreso com a conta da nuvem? Descubra prompts de FinOps para identificar infraestrutura ociosa e reduzir custos da AWS em mais de 50% em apenas 5 minutos."
tags: ["AWS", "Cloud", "Redução de Custos", "DevOps", "Infraestrutura"]
image: "/images/hooks/aws-cost-optimization.jpg"
---

## 💸 Redução de 50% nos custos da AWS: Checklist para evitar surpresas no EC2 e RDS

- **🎯 Público-alvo:** CEOs de startups que suspiram ao ver a fatura da AWS todo mês, desenvolvedores pressionados pela pergunta "Por que a conta do servidor veio tão alta?"
- **⏱️ Tempo estimado:** 5 minutos (Baseado na análise do Cost Explorer)
- **🤖 Melhor desempenho:** ChatGPT-4o, Claude 3.5 Sonnet

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"10 instâncias t3.medium... todas elas estão mesmo rodando agora?"_

Você já teve aquela experiência de sentir um frio na espinha ao clicar na fatura da AWS que chega no e-mail todo final de mês? O tráfego de usuários ativos do seu serviço não aumentou drasticamente em relação ao mês passado, nem você lançou uma nova funcionalidade gigante, então por que os custos de infraestrutura continuam subindo silenciosamente mês após mês? Ao perguntar à equipe de desenvolvimento ou ao responsável pela infraestrutura, é comum ouvir respostas de livro didático como: "É uma instância que subimos temporariamente para o teste do próximo sprint" ou "Provisionamos com folga para estarmos preparados para picos repentinos de tráfego". No entanto, para uma startup com um runway limitado ou para uma empresa comum que opera com um orçamento de TI apertado, os custos de manutenção da infraestrutura em nuvem que vazam como um balde furado são o "assassino silencioso" mais perigoso para a sobrevivência do negócio. É como se estivéssemos vivendo perigosamente com um elefante invisível chamado "custo operacional de servidor".

O ponto mais frustrante é que nem sequer é fácil identificar exatamente "por onde" o dinheiro da empresa está escapando. Com determinação, você acessa o painel do AWS Cost Explorer para tentar encontrar a causa por conta própria, mas logo se sente perdido diante dos inúmeros gráficos de barras e itens de serviço complexos que preenchem a tela. **Custos de instâncias de computação EC2, taxas de provisionamento excessivo de armazenamento RDS, cobranças de tráfego de NAT Gateway configurados inadvertidamente, custos de retenção de snapshots** — extrair insights significativos deste mar de sistemas de cobrança técnicos e abstratos é mais difícil do que encontrar uma agulha no palheiro para um não especialista. Para organizações sem um engenheiro de FinOps (Cloud Financial Operations) dedicado, esta tarefa é uma missão quase impossível. No final, acabamos tomando medidas tímidas, como diminuir alguns tipos de instâncias visíveis ou excluir dados de volumes abandonados há muito tempo. Mas, com essas soluções paliativas, no mês seguinte, recursos excedentes que alguém ligou e esqueceu preencherão novamente os espaços vazios da fatura, e nos encontraremos novamente afundados no ciclo vicioso de falha na redução de custos.

Mas agora, não há mais necessidade de continuar lutando com manuais de otimização de custos de nuvem complexos e cansativos. Isso porque temos a IA, que é a melhor arquiteta de infraestrutura em nuvem e uma consultora de FinOps implacável. Tudo o que você precisa fazer é fornecer à IA os dados da fatura deste mês (arquivo CSV) e as informações gerais do diagrama de arquitetura do serviço que está operando atualmente. E instrua assim: **"Identifique exatamente onde o dinheiro está vazando no ambiente de arquitetura atual e apresente um plano de ação concreto de redução de custos que possa ser aplicado na prática amanhã de manhã."** Com apenas essa linha de prompt poderosa, a IA escaneia os dados instantaneamente e encontra "recursos zumbis" que foram ligados e esquecidos como se estivesse usando uma pinça. Além disso, ela fornece relatórios de nível executivo, cobrindo desde **planos de design de grupos de Auto Scaling (ASG)** que aumentam e diminuem automaticamente o número de instâncias com base nos padrões de tráfego, até **estratégias de adoção de Spot Instances** que podem reduzir os custos drasticamente em 70-90%, e simulações de descontos por compromisso de **Savings Plan** a longo prazo, tudo em apenas 5 minutos.

No momento em que você aplicar este prompt inovador ao seu trabalho, sentirá a catarse de reduzir instantaneamente pela metade os custos fixos de infraestrutura que pressionavam a empresa todos os meses. O custo de manutenção da nuvem que estava sendo desperdiçado se torna o combustível para o crescimento do negócio, sendo convertido inteiramente em desenvolvimento de novos produtos e orçamentos de marketing agressivos. Servidores de desenvolvimento e staging que ficavam rodando durante a madrugada e fins de semana, desperdiçando eletricidade no vácuo, passam a ser controlados perfeitamente através de um agendamento inteligente de instâncias (Instance Scheduler), completando um ecossistema de nuvem verdadeiramente elástico que opera de forma flexível e poderosa apenas durante os horários de pico dos usuários. Agora, não tenha mais medo de clicar na fatura da AWS que chega por e-mail no final do mês. Com apenas uma linha de prompt e alguns cliques, sua infraestrutura terá sucesso em uma dieta de nuvem perfeita e sem gordura. Sinta a magia da otimização de custos mais agressiva e eficiente a partir de hoje.

---

## 📊 Prova: Resultado satisfatório (Before & After)

### ❌ Before (A dor que sentíamos)

Ambiente de infraestrutura da época em que operávamos em capacidade total com instâncias On-Demand sem critério. Tínhamos que assistir aos servidores rodando 24 horas por dia, pagando taxas caras mesmo nas madrugadas e fins de semana, quando não havia tráfego.

```text
- Modo de operação: 5 instâncias t3.medium rodando em On-Demand 24 horas por dia, 365 dias por ano
- Fatura mensal: Aprox. $1.000 (mesmo custo ocorre de madrugada, sem tráfego algum)
- Problemas: Recursos zumbis abandonados e volumes EBS não conectados geram cobranças contínuas
```

### ✅ After (Resultado da transformação perfeita)

![Redução de 50% nos custos da AWS: Checklist para evitar surpresas no EC2 e RDS](/images/hooks/aws-cost-optimization.jpg)

```text
- Modo de operação: O tráfego base é defendido por 1 instância On-Demand, e instâncias Spot são inseridas automaticamente via Auto Scaling durante os picos diurnos. Os ambientes de desenvolvimento/staging são desligados automaticamente às 19:00 e reiniciados às 08:00.
- Fatura mensal: Aprox. $350 (redução de 65% em relação ao anterior)
- Resultado final: Criação de um efeito de defesa de lucro líquido de mais de $7.800 (aprox. 10 milhões de KRW) anualmente 💰
```

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Forneça à IA os dados de cobrança mensais e por serviço extraídos do AWS Cost Explorer em formato CSV para análise.
2. Apresente à IA as informações da arquitetura atual e os padrões de tráfego, instruindo-a a encontrar os detalhes de gastos mais ineficientes e falhas estruturais na infraestrutura.
3. Implemente imediatamente as estratégias sugeridas de Spot Instance, Auto Scaling e Instance Scheduler para reduzir drasticamente os custos de computação que ocorrem em tempos ociosos.

---

## 🚀 É assim que os verdadeiros especialistas escrevem

Este é o prompt finalizado após dezenas de tentativas e erros. Copie o prompt abaixo e preencha as partes em `[variável]` de acordo com a sua situação para aplicá-lo imediatamente na prática.

### 🥉 Versão Básica (Caça aos recursos zumbis)

Este é o prompt para quando você não tem ideia de onde o dinheiro está vazando e quer encontrar recursos excedentes abandonados de forma rápida e segura.

> **Função (Role):** Você é um Arquiteto de Nuvem Sênior.
>
> **Contexto (Context):**
>
> - Histórico: Na fatura da AWS deste mês, os custos de `[Volume EBS]` estão anormalmente altos.
> - Objetivo: Entender onde o dinheiro está vazando e identificar recursos excedentes que podem ser excluídos imediatamente para organizar a conta.
>
> **Tarefa (Task):**
>
> 1. Explique em ordem como encontrar todos os recursos que geram custos, como volumes não conectados (Unattached), snapshots antigos e Elastic IPs alocados mas não utilizados.
> 2. Escreva os `[comandos AWS CLI]` exatos para excluir esses recursos encontrados com segurança.
>
> **Restrições (Constraints):**
>
> - Para facilitar a leitura no celular, nunca use tabelas (Table). Organize em formato de lista (List) com alta legibilidade.
> - Coloque em **negrito** as precauções que devem ser verificadas antes de realizar qualquer exclusão.
>
> **Aviso (Warning):**
>
> - Insira claramente avisos prévios para comandos perigosos que podem causar falhas no sistema.

### 🥇 Versão Pro (Instâncias Spot e Otimização de Arquitetura)

Este é um prompt de nível consultor sênior para quando você precisa projetar uma redução estrutural de custos junto com estratégias de escalonamento automatizado.

> **Função (Role):** Você é um Consultor Principal de AWS FinOps especializado em infraestruturas de nível empresarial.
>
> **Contexto (Context):**
>
> - Histórico: A arquitetura atual consiste em `[5]` instâncias EC2 (On-Demand) (sempre ligadas) e `[1]` instância RDS (MySQL).
> - Padrão de tráfego: O tráfego se concentra apenas no horário comercial (`[09:00~18:00]`), com quase nenhum tráfego à noite ou nos fins de semana.
> - Objetivo: Reduzir os custos de infraestrutura em pelo menos `[50%]` mantendo 100% da estabilidade da carga de trabalho atual.
>
> **Tarefa (Task):**
>
> 1. Estratégia específica de adoção de Spot Instance: Proponha uma arquitetura que utilize instâncias Spot com segurança na carga de trabalho atual para reduzir drasticamente os custos de computação. (Inclua obrigatoriamente planos de contingência para interrupção de instâncias).
> 2. Plano de Auto Scaling e Agendamento: Sugira valores de configuração específicos de ASG (Auto Scaling Group) para reduzir os servidores ao mínimo (`[1]` unidade) à noite e desligar completamente o ambiente de desenvolvimento nos fins de semana, além de um plano de aplicação do Instance Scheduler.
> 3. Simulação de Desconto por Compromisso (Savings Plan): Resuma a economia estimada comparando o método On-Demand atual com a aplicação de um compromisso de pagamento antecipado de 1 ano.
>
> **Restrições (Constraints):**
>
> - Baseie as respostas estritamente nas melhores práticas oficiais da AWS (Well-Architected Framework).
> - Para facilitar a leitura no celular, nunca use tabelas (Table). Organize em formato de lista (List) com alta legibilidade.
> - Coloque em **negrito** as palavras-chave importantes da arquitetura e os números principais.
> - Exclua terminantemente o banco de dados (RDS) da aplicação de instâncias Spot.
>
> **Aviso (Warning):**
>
> - Omita todas as explicações conceituais vagas e foque em itens de ação (Action Items) práticos que um engenheiro possa copiar e executar amanhã de manhã. Não invente opções incertas ou funções depreciadas (Deprecated).

---

## 💡 Comentários do Autor (Insight & How to use)

Ao realizar consultoria de arquitetura AWS para inúmeras startups e empresas, encontro um erro comum e fatal: **"Deixar os ambientes de servidor de desenvolvimento (Dev) e homologação (Stage) abandonados 24 horas por dia, 365 dias por ano, sem qualquer controle, inclusive nos fins de semana e madrugadas."** Pensamos na nuvem como um sistema racional onde se paga pelo que usa, mas na verdade, ela é como um taxímetro rigoroso que cobra impiedosamente pelo tempo que fica ligado. Apenas ao introduzir corretamente um **AWS Instance Scheduler** que desliga automaticamente as instâncias às 19:00, quando o trabalho termina, e as liga novamente às 08:00, antes do expediente, você pode economizar mais de 60% dos custos de manutenção de toda a infraestrutura de desenvolvimento instantaneamente. Há inúmeras empresas que negligenciam até essa configuração simples e jogam centenas ou milhares de dólares no lixo todos os meses.

O ponto principal mais poderoso deste prompt reside em como você controla as variáveis (`Variable`) de **[Padrão de tráfego]** e **[Objetivo]**. Se você simplesmente perguntar "diminua meus custos de servidor", a IA dará uma resposta óbvia recomendando a redução de tipos de instâncias comuns. No entanto, ao fornecer claramente o contexto de negócio como `[tráfego concentrado apenas das 09:00 às 18:00]` conforme especificado no prompt, e forçar uma meta numérica específica e desafiadora como `[redução de pelo menos 50%]`, a IA finalmente propõe soluções altamente eficazes e disruptivas, como **arquiteturas híbridas com Spot Instances** ou **políticas dinâmicas de Auto Scaling**.

Especialmente, você deve observar as **Restrições (Constraints)** incluídas no prompt da 🥇 Versão Pro. Para não cometer o erro de prejudicar a estabilidade do sistema em busca da redução de custos, colocamos um freio (dispositivo de segurança) forte: **"Exclua terminantemente o banco de dados RDS da aplicação de instâncias Spot."** Como as instâncias Spot são recursos excedentes que podem ser recuperados pela AWS a qualquer momento, aplicá-las a bancos de dados stateful que devem preservar o estado permanentemente é um ato suicida que leva diretamente a falhas no serviço. Ao incorporar essas condições de restrição no prompt, bloqueamos na fonte alucinações fatais que a IA poderia gerar e extraímos a máxima eficiência de custos dentro da faixa mais segura.

Se você obteve as melhores ideias de arquitetura FinOps através do prompt, não pare por aí e finalize a automação através de um prompt de acompanhamento (Follow-up Prompt). Após confirmar a estrutura de arquitetura sugerida pela IA, instrua: **"Escreva o código Terraform ou o template AWS CloudFormation (YAML) perfeito para que possamos implantar agora mesmo essa arquitetura de redução de custos no nosso ambiente de produção. Adicione comentários gentis para cada módulo de recurso."** Você verá diante dos seus olhos a mágica maravilhosa de concluir tarefas complexas de automação de provisionamento IaC (Infrastructure as Code), que antes exigiam que um engenheiro de infraestrutura passasse várias noites debruçado sobre documentos oficiais e depurando dolorosamente, com apenas algumas trocas de mensagens. Nunca se esqueça de que a otimização da nuvem não é apenas um meio defensivo de economizar dinheiro, mas a arma mais agressiva que permite reinvestir o orçamento excedente na lógica central do seu negócio.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Ouvi dizer que as Spot Instances podem desligar o servidor de repente. Não é perigoso demais para aplicar na prática?**
  - R: Correto. Por isso, elas devem ser aplicadas de forma limitada apenas a servidores de API sem estado (Stateless), cargas de trabalho baseadas em containers ou tarefas de lote assíncronas (Batch Processing) onde a tentativa de repetição é possível. Nunca use instâncias Spot isoladamente para servidores principais que processam pagamentos ou tráfego importante, nem para bancos de dados (RDS).

- **P: Os custos do RDS (banco de dados) representam mais da metade da fatura total. Como posso reduzir isso?**
  - R: Em vez de manter o banco sempre ligado com especificações excessivas em On-Demand, recomendo fortemente a adoção do **Aurora Serverless v2**, onde o armazenamento e a computação se expandem de forma flexível de acordo com o aumento ou diminuição do tráfego. A verdadeira redução de custos ocorre quando acompanhada de melhorias estruturais em nível de arquitetura, como a separação de réplicas de leitura (Read Replica) para balanceamento de carga.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Fornecimento de padrões de tráfego claros:** Ao fornecer o contexto de negócio específico "concentração diurna, ociosidade noturna/fins de semana", induzimos a IA a formular estratégias de **otimização dinâmica baseada em agendamento**, em vez de respostas óbvias como "redução do tipo de instância".
2. **Definição de metas numéricas específicas (Redução de 50%):** Ao apresentar uma meta clara em vez de um comando vago como "reduza os custos", forçamos a proposta de decisões arquiteturais disruptivas e eficazes, como instâncias Spot ou Savings Plans.
3. **Controle de riscos (Constraints):** Ao impor uma restrição forte de não aplicar instâncias Spot ao banco de dados, bloqueamos preventivamente alucinações (Hallucinations) fatais que poderiam causar falhas no serviço devido a tentativas excessivas de redução de custos.

---

## 🎯 Conclusão

A otimização de custos de nuvem (FinOps) não é, de forma alguma, um privilégio exclusivo de gigantes globais de TI ou de uma pequena elite de engenheiros seniores. É simplesmente o caminho mais curto e comprovado para recuperar com segurança e certeza os valiosos recursos operacionais da sua empresa, que estão sendo espalhados sem sentido no vácuo todos os dias, e transformá-los em sementes para o crescimento do serviço.

Deixe as tarefas desgastantes de ligar e desligar botões manualmente para as máquinas e foque exclusivamente em pensar em uma melhor experiência para o cliente. Amanhã de manhã, assim que chegar ao escritório, baixe a fatura da AWS deste mês em Excel (CSV), entregue-a com confiança à IA e instrua:

**"Reduza minha conta de servidor pela metade, agora mesmo."**

Automatize seu trabalho e saia do escritório com estilo (ou no horário certo)! 🍷
