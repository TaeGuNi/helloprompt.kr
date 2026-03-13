---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Sheet de Testes Hardcore para Transformar a IA no Chaos Monkey da Netflix"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automação de Trabalho"
description: "Cansado de códigos 'Happy Path' sem alma? Conheça o prompt que injeta a filosofia Chaos Monkey da Netflix para forçar tratamento de exceções e recuperação de desastres."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 📝 💣 Cheat Sheet de Testes Hardcore para Transformar a IA no Chaos Monkey da Netflix

- **🎯 Recomendado para:** Desenvolvedores sêniores cansados de IAs que só escrevem o "fluxo feliz" (Happy Path) ao pedir testes, e desenvolvedores juniores lutando sozinhos sem um mentor.
- **⏱️ Tempo economizado:** De noites inteiras de depuração para apenas 1 minuto.
- **🤖 Melhor desempenho:** Claude 3.5 Sonnet, GPT-4o (modelos mais simples não conseguem lidar com o rigor destas regras).

- ⭐ **Dificuldade:** ⭐⭐⭐⭐☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"O erro fatal que a maioria dos desenvolvedores comete ao delegar testes para a IA é a frase ingênua 'escreva um código que funcione', que acaba resultando em um desastre terrível às 3 da manhã no dia da implantação."_

O que esperamos quando pedimos à IA para escrever código de teste? Esperamos um tratamento perfeito de casos de borda, tratamento de erros meticuloso e um escudo robusto que impeça o sistema de cair em qualquer situação excepcional. Mas a realidade é o inferno. Com um simples "escreva o código de teste", a IA gera mais de 200 linhas de um fluxo normal (**Happy Path**) como se fosse uma planta de estufa. Ela assume um utopia maravilhosa onde todas as APIs respondem em 1 segundo com 200 OK, o banco de dados nunca desconecta e vazamentos de memória não existem.

No momento em que esse código de "yes-man sem alma" é implantado em produção, o verdadeiro pesadelo começa. Não existe API externa que responda 100% do tempo ou conexão de banco de dados que dure para sempre. **Timeouts de rede** por picos repentinos de tráfego, erros 500 Internal Server Error de serviços de terceiros ou falhas temporárias na infraestrutura de nuvem ocorrem a qualquer momento. Nessas horas, o código de teste bonitinho que a IA escreveu não passa de papel higiênico. No final, você será acordado por um alerta do PagerDuty na sexta à noite ou às 3 da manhã de um domingo, chorando lágrimas de sangue enquanto depura manualmente um código bagunçado. Isso não é automação; é plantar uma bomba-relógio dentro do seu sistema.

Ao adotar a IA no trabalho, muitos desenvolvedores caem em uma ilusão. O pensamento complacente de que "agora a inteligência artificial cuidará de toda a escrita chata de código de teste". Mas ao abrir o resultado, a decepção é total. O código escrito pela IA parece funcionar muito bem superficialmente, mas basta olhar um pouco mais de perto para encontrar falhas fatais. Não há reflexão sobre **Casos de Borda (Edge Cases)**, e o tratamento de exceções é frequentemente resolvido com uma única linha de `console.log(error)`. É como pintar uma fachada luxuosa em um prédio sem estrutura. Basta um pouco de vento e chuva — ou seja, um comportamento imprevisto do usuário ou um pequeno atraso em um servidor externo — para que todo o sistema desabe como um dominó.

O que é ainda mais terrível é que esse código de "falso sucesso" acende a luz 100% 🟢(Green) nas ferramentas de cobertura de teste. Relatórios de cobertura do SonarQube ou Jest não enviam nenhum aviso. A diretoria e os líderes de equipe ficam com a falsa impressão de que uma defesa perfeita foi construída, e essa bomba acaba pendurada nas costas de quem executa o trabalho. No dia de um evento com grande tráfego, se a API de pagamentos atrasar apenas 3 segundos, o pool de conexões do banco de dados se esgota, levando a uma interrupção total do serviço. Só então percebemos: "Eu confiei apenas no código de fluxo normal que a IA gerou".

Para quebrar esse ciclo vicioso, precisamos inverter fundamentalmente a forma como inserimos os prompts. Não devemos dar liberdade à IA. Devemos impor **Restrições (Constraints)** explícitas e cenários de desastre extremos. Assim como o framework **'Chaos Monkey'** da Netflix, que desliga aleatoriamente instâncias de servidores em produção para testar a resiliência do sistema, devemos incutir na IA o propósito destrutivo de tentar colapsar o próprio código que ela escreveu. Precisamos de comandos firmes: "Situações normais não importam. Faça esta função falhar de qualquer maneira e prove como o sistema se recupera elegantemente dessa falha".

Este **Prompt de Cheat Sheet de Testes Hardcore** foi finalizado analisando inúmeros documentos de post-mortem de falhas e incorporando cenários de recuperação de desastres (Disaster Recovery) que os engenheiros de SRE (Site Reliability Engineering) do mais alto nível do Vale do Silício consideram. Ele foi projetado para forçar o Mocking de todas as situações maliciosas que levam um desenvolvedor ao limite: timeouts, vazamentos de memória, loops infinitos, deadlocks e muito mais. Agora, use este feitiço mágico para arrancar a máscara da IA pretensiosa e obediente. E transforme seu sistema em uma arquitetura verdadeiramente **Antifrágil**, capaz de resistir a qualquer tempestade.

---

## 📊 Prova: Resultado Satisfatório (Before & After)

### ❌ Before (A dor que sentíamos)

Resultado ao inserir um prompt comum ("Escreva o código de teste para a função fetchUser que busca informações do usuário."): apenas dados fictícios sem alma e validações inúteis de resposta 200 OK.

```text
Resultado: 
- Teste de parsing de texto de resposta 200 OK (Pass)
- Teste se lança erro quando não há ID (Pass)
... (Uma festa de lógicas global.fetch sobrescritas de forma suja)
```

### ✅ After (Transformação Perfeita)

Após aplicar o Cheat Sheet Hardcore Chaos Monkey, a IA gera cenários de desastre impiedosos que testam os limites do sistema em um ambiente perfeitamente isolado.

```text
Resultado:
- [Setup MSW concluído] Escrita de código de defesa simulando atraso na comunicação com API externa (Timeout 5000ms)
- Validação da lógica de retorno de UI de Fallback elegante após 3 tentativas de Retry em caso de HTTP 500 Internal Error
- Validação do estado de Garbage Collection (sem vazamento de memória) e limpeza do servidor MSW após a conclusão dos testes
- Teste de fluxo normal (Happy Path) condensado em apenas 1 caso.
```

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

1. **Apenas 20% de Happy Path:** Minimize cenários de funcionamento normal inúteis e foque 80% do teste na validação de lógicas de tratamento de exceções e recuperação de desastres.
2. **Simulação de Desastre Forçada:** Controle a IA para que ela obrigatoriamente faça Mocking de situações de falha crítica, como timeouts de rede, erros HTTP 500 e desconexão de banco de dados.
3. **Proibição de Global Mocking Sujo:** Bloqueie na fonte a sobrescrita de `global.fetch` que polui o ambiente de teste, permitindo apenas testes perfeitamente isolados usando MSW ou Injeção de Dependência (DI).

---

## 🚀 Como os verdadeiros especialistas escrevem

Este é o prompt finalizado após dezenas de tentativas e erros. Copie o prompt abaixo e preencha apenas a parte `[variável]` de acordo com a sua situação.

### 🥉 Basic Version (Versão Básica)

Use quando quiser apenas estruturar rapidamente os testes de tratamento de exceções.

> **Papel (Role):** Você é um engenheiro de QA sênior impiedoso.
>
> **Tarefa (Task):** Escreva o código de teste para `[alvo do teste]`, mas escreva apenas 1 cenário de funcionamento normal e preencha todo o resto com lógicas defensivas para cenários de falha (Failure), como erro de rede e desconexão de banco de dados.

### 🥇 Pro Version (Versão Profissional)

Este é o cheat sheet hardcore que deleta completamente o ego da IA e injeta a filosofia Chaos Monkey da Netflix.

> **Papel (Role):** Você é um engenheiro de testes sênior extremo e implacável que acredita cegamente na filosofia 'Chaos Monkey' da Netflix. Esqueça a obediência cega ou a gentileza fingida e foque apenas em destruir as fraquezas do meu sistema.
> 
> **Contexto (Context):**
> - Objetivo: Escrever uma suíte de testes (Test Suite) de nível de defesa espacial Unit/E2E para `[nome da função ou componente a ser testado]`.
> - Framework: `[Vitest / Jest / Playwright etc.]`
> 
> **Tarefa (Task):**
> 1. **Morte aos Happy Paths:** Limite cenários ingênuos onde os valores estão corretos e o servidor externo responde 100% a menos de 20% do total de testes. Foque os outros 80% em falhas e defesa de situações excepcionais.
> 2. **Cenários de Desastre:** Inclua obrigatoriamente um ou mais dos seguintes cenários de desastre no bloco de teste (`describe`):
>    - Validação de retorno de erro amigável ao usuário e rollback em caso de atraso de API externa e HTTP 500 Internal Error.
>    - Validação de lógica de Retry Queue e prevenção de deadlock em caso de desconexão do pool de banco de dados.
> 3. **Cobertura de Lógica Implacável:** Não verifique apenas se termina sem erros (Pass). Persiga obsessivamente com cláusulas `expect` até o limite de tolerância de atraso (Delay) e o estado de coleta de lixo (limpeza de memória) após o erro.
> 
> **Restrições (Constraints):**
> - **A Regra do Clean Mocking:** Proíbo estritamente a poluição de objetos globais sujos como `global.fetch = vi.fn().mockRejectedValue(...)`.
> - Garanta 100% de isolamento de teste (Isolation) simulando desastres de rede apenas através de mocking em nível de protocolo como MSW (Mock Service Worker) ou objetos de cliente com injeção de dependência (DI).
> - Proibição de Alucinação (Hallucination): Não invente sintaxes das quais você não tem certeza ou bibliotecas que não existem. Se não souber, exija corajosamente: "Por favor, me forneça a documentação".

---

## 💡 Comentário do Autor (Insight & Como usar)

Sejamos honestos. Quando pedimos à IA para escrever código de teste, no fundo não esperávamos que ela "apenas preenchesse 100% de cobertura e mostrasse a luz verde"? A IA também percebe isso perfeitamente. Por isso, ela entrega resultados cínicos e pretensiosos, listando vários **Happy Paths** inúteis e dizendo: "Escrevi a suíte de testes com sucesso!".

Mas qualquer desenvolvedor que já passou por poucas e boas no mercado sabe: **isso não é engenharia de verdade. É como polvilhar açúcar em cima de um código espaguete todo emaranhado para enganar os olhos.** O verdadeiro propósito do teste não é coletar marcas de verificação verdes, mas sim testemunhar antecipadamente o processo de colapso total do sistema em situações de desastre imprevisíveis e construir lógicas robustas para defendê-lo.

Este prompt é a essência do princípio **'Antifrágil'**, refinado com lágrimas de sangue após eu mesmo enfrentar inúmeras falhas de servidor, timeouts e deadlocks terríveis de banco de dados. No momento em que você insere este cheat sheet na IA, o chatbot que era sempre educado e calmo se transforma em um **Tech Lead** extremamente rigoroso, irritável e impiedoso. Ele apontará afiadamente as falhas na sua estrutura de código frouxa e tentará destruí-la.

Um ponto que merece atenção especial é o **Controle de Variáveis (Constraint Control)**. Muitos desenvolvedores ignoram a importância do isolamento de teste (Isolation) e cometem a atrocidade de sobrescrever aleatoriamente os objetos `window.fetch` ou `axios` no escopo global. Essa abordagem polui o próprio ambiente de teste de forma irreversível e propaga efeitos colaterais de causa desconhecida para outros casos de teste. Este prompt bloqueia essa gambiarra na raiz, em nível de arquitetura.

Observe atentamente a **"The Clean Mocking Rule"** dentro do prompt. Bloqueamos com restrições explícitas o caminho mais fácil e preguiçoso que a IA escolhe instintivamente (poluição de objetos globais). Em vez disso, forçamos um setup elegante usando mocking em nível de protocolo de rede como **MSW (Mock Service Worker)** ou padrões de DI (Injeção de Dependência). É claro que, no início, você pode sentir que o código de configuração que a IA escreve se torna muito mais longo e complexo. Surgirá a tentação: "Ah, não dá para só criar uma função mock qualquer e pronto?".

Mas lembre-se: este processo de configuração complexo é o único caminho para uma verdadeira modularização e uma arquitetura testável. Se o alvo que você deseja testar for um teste E2E baseado em `[Framework: Playwright]`, este prompt irá além do simples ato de clicar em um botão na tela; ele aplicará maliciosamente um atraso de rede (Network Throttling) no momento do clique para verificar obsessivamente se o spinner de carregamento é renderizado corretamente.

Se a IA despejar cenários de erro vastos demais, você pode controlar isso especificando um **escopo concreto** no campo da variável `[nome da função ou componente a ser testado]`. Por exemplo, em vez de escrever apenas `PaymentService`, especifique `Lógica de rollback de timeout de transação de pagamento do PaymentService`. Assim, a IA focará apenas no pior golpe fatal que essa lógica de domínio pode sofrer, elevando a densidade do teste ao limite. É o único escudo que protegerá seu equilíbrio entre vida pessoal e profissional (work-life balance) do som do alerta do PagerDuty que faz o coração disparar na madrugada do dia da implantação. Trate a IA não como uma secretária obediente, mas como um destruidor impiedoso, e verifique seu sistema minuciosamente até o fundo.

Essa abordagem de teste destrutivo traz, a longo prazo, um enorme efeito colateral positivo (Side Effect) de elevar o nível de qualidade do código de toda a equipe. No começo, você pode ficar surpreso ao ver as inúmeras lógicas de defesa para cenários de erro que a IA gera. Surgirá a dúvida: "Preciso mesmo ser tão meticuloso com o tratamento de exceções?". Mas ao refatorar o código para atender a esses critérios rigorosos, você perceberá que, de repente, as dependências desnecessárias desaparecem do seu código de produção e ele evolui para uma Clean Architecture que respeita estritamente o Princípio da Responsabilidade Única (SRP). Não tenha medo dos erros. Os pontos vulneráveis encontrados pela IA são como medalhas por ter evitado falhas de serviço em potencial. Se você estabelecer este 'Cheat Sheet Chaos Monkey' como a convenção de teste padrão da equipe, em um ano, a estabilidade do projeto atingirá um nível inigualável. Este prompt não é apenas uma coleção de comandos, mas a ferramenta perfeita que mostra da forma mais clara a diferença de filosofia técnica entre um júnior e um sênior.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: A IA escreve o código de configuração do MSW de forma excessivamente complexa, o que torna pesado aplicá-lo. Como ajustar?**
  - R: Isso é um fenômeno perfeitamente normal. É um processo essencial para construir um ambiente perfeitamente isolado em vez de um global mocking instável. Se a configuração ficar muito longa e prejudicar a legibilidade, tente adicionar uma condição forte na parte inferior da seção 'Tarefa (Task)' do prompt: `[No entanto, separe completamente a lógica de handlers do MSW e setup do servidor em um arquivo à parte sob o diretório src/mocks/ para modularizar]`. Assim, você mantém o arquivo de teste principal limpo.
- **P: Preciso aplicar regras tão rigorosas e hardcore a todos os componentes ou funções utilitárias?**
  - R: Absolutamente não. É um óbvio over-spec para componentes "burros" (Dumb) responsáveis apenas por renderização de UI simples ou lógicas utilitárias compostas por funções puras (Pure Function). Use este cheat sheet estrategicamente e de forma concentrada apenas na **lógica de domínio de negócio principal** que lida com transações de pagamento, integrações de APIs de terceiros ou gerenciamento de estado global complexo (Store).
- **P: Qual modelo segue melhor essas restrições, Claude 3.5 Sonnet ou GPT-4o?**
  - R: Atualmente, o **Claude 3.5 Sonnet** apresenta um desempenho esmagadoramente superior ao forçar um roleplay extremo e filosofias de arquitetura rígidas (como a proibição de poluição de objetos globais). Os modelos GPT têm inerentemente um forte viés de positividade (Positivity Bias) para dar ao usuário um "resultado rápido" e positivo, e às vezes tentam usar truques para contornar as restrições.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **A Magia de Atribuir uma Persona Assimétrica:** Em vez de um simples "desenvolvedor sênior", injetamos um ego extremo de "Chaos Monkey que odeia a obediência cega e gosta de destruir sistemas". Essa única palavra inibe fortemente o viés de positividade (Positivity Bias) e as alucinações (Hallucination) dentro do modelo em nível de arquitetura, fazendo-o focar exclusivamente em "encontrar falhas".
2. **Especificidade das Palavras de Proibição (Constraints):** Bloqueamos os piores anti-padrões, como `global.fetch = vi.fn()`, especificando-os em nível de código concreto. A IA reage com muito mais sensibilidade e precisão a condições de restrição claras e afiadas do que a pedidos vagos como "escreva o código bem".
3. **Imposição da Proporção 80/20:** Estabelecemos uma restrição numérica muito clara de "Happy Path abaixo de 20%". Com isso, bloqueamos perfeitamente o fenômeno de a IA despejar infinitos casos de funcionamento normal inúteis, desperdiçando tokens de prompt e seu tempo precioso.

---

## 🎯 Conclusão (Epilogue)

A IA é um espelho honesto que entrega um código exatamente proporcional à densidade e ao nível do prompt que você insere. Depende inteiramente da ponta dos seus dedos se você vai produzir códigos de teste inúteis e impossíveis de manter, empacotados em palavras doces, ou se vai construir um escudo robusto e poderoso que impedirá perfeitamente o desastre de uma queda de servidor às 3 da manhã.

Copie agora mesmo este 'Cheat Sheet Chaos Monkey' e injete-o no seu agente de IA no diretório do seu projeto. Não há mais necessidade de temer situações excepcionais imprevisíveis.

Automatize seu trabalho e saia do escritório (ou peça demissão) com estilo! 🍷
