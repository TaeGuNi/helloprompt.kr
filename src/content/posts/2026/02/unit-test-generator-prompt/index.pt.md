---
layout: /src/layouts/Layout.astro
title: "Prompt para Criar Testes Unitários em 5 Minutos"
author: "Jay"
date: "2026-02-07T09:10:33.155Z"
updatedDate: "2026-02-07T09:10:33.155Z"
category: "Coding & Development"
description: "Deixe a escrita de testes unitários chata com a IA. Descubra o segredo para atingir 100% de cobertura em apenas 5 minutos."
tags: ["테스트코드", "TDD", "Jest", "PyTest", "QA"]
image: "/images/hooks/unit-test-generator-prompt.jpg"
---

## 📝 Prompt para Criar Testes Unitários em 5 Minutos

- **🎯 Público-alvo:** Desenvolvedores juniores, engenheiros frontend/backend, QA
- **⏱️ Tempo economizado:** De 30 minutos para apenas 5 minutos
- **🤖 Melhor desempenho:** Modelos especializados em código (Claude 3.5 Sonnet, GPT-4o, etc.)

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Praticidade:** ⭐⭐⭐⭐☆

> _"O deploy é amanhã, mal tive tempo de terminar a lógica de negócio principal, como vou conseguir tempo para escrever os testes?"_

Todo desenvolvedor já passou por aquele momento de frio na barriga. Tarde de sexta-feira, você faz o deploy de uma nova funcionalidade no ambiente de produção e, de repente, um bug crítico surge onde você menos esperava. Ao abrir o código para o hotfix, é difícil até identificar onde o problema começou no meio de tanta lógica. O arrependimento bate: _"Se eu tivesse escrito os testes com atenção..."_. Todos sabemos da importância dos testes. Termos como Arquitetura Limpa, TDD e 100% de cobertura sempre aceleram o coração de um desenvolvedor.

Mas a realidade é dura. Com o lançamento marcado para amanhã e uma enxurrada de requisitos pendentes, são poucos os desenvolvedores que conseguem dedicar tempo a uma tarefa que, muitas vezes, leva duas ou três vezes mais tempo que a própria lógica de negócio. Especialmente quando se lida com códigos legados cheios de dependências de APIs externas ou lógicas fortemente acopladas ao banco de dados, o esforço para configurar dezenas de linhas de **Mocking** e boilerplate é exaustivo.

No fim, cansados de pensar em todos os possíveis casos de borda (Edge Cases), acabamos cedendo a um compromisso perigoso: "Vamos confiar nos testes manuais do time de QA e subir assim mesmo". Esse **débito técnico (Technical Debt)** acumulado torna-se uma âncora que impede até mesmo refatorações futuras. O medo de quebrar algo ao clicar em qualquer botão começa a crescer. É hora de parar de andar na corda bamba sem rede de proteção.

Agora, esqueça todo esse processo doloroso e cansativo. Basta copiar e colar a lógica principal que você escreveu com tanto esforço. Desde casos de exceção minúsculos que costumam passar despercebidos até barreiras defensivas contra Null Pointers, a **IA escreverá instantaneamente um código de teste unitário (Unit Test) impecável**.

Apenas 5 minutos. Desde a criação de objetos Mock complexos até a elaboração de cenários de teste limpos seguindo o padrão GIVEN-WHEN-THEN, contrate um engenheiro de QA sênior perfeccionista como seu parceiro de pair programming. Ele **preencherá todos os pontos cegos com uma precisão mecânica** que a intuição humana muitas vezes deixa escapar. Sinta o alívio psicológico de ter 100% de cobertura e a satisfação de clicar no botão 'Merge' com total confiança.

---

## 📊 Prova: Resultados Claros (Before & After)

### ❌ Before (A dor que sentíamos)

Aquele momento de escrever a lógica com um canvas vazio ou de forma manual e descuidada. Uma lógica perigosa deixada sozinha, sem proteção.

```javascript
// Exemplo de código de entrada simples
function calculateDiscount(price, discountRate) {
  if (price < 0 || discountRate < 0) {
    throw new Error("유효하지 않은 값입니다.");
  }
  if (discountRate > 100) {
    return 0; // 100% 이상 할인은 무료
  }
  return price - price * (discountRate / 100);
}
```

### ✅ After (Resultado transformado e perfeito)

!["Prompt para Criar Testes Unitários em 5 Minutos"](/images/hooks/unit-test-generator-prompt.jpg)

```javascript
describe("calculateDiscount 함수 테스트", () => {
  // 1. 정상 동작 테스트 (Happy Path)
  it("정상적인 가격과 할인율이 주어지면 할인이 적용된 가격을 반환해야 한다", () => {
    // GIVEN
    const price = 10000;
    const discountRate = 20;
    // WHEN
    const result = calculateDiscount(price, discountRate);
    // THEN
    expect(result).toBe(8000);
  });

  // 2. 경계값 테스트 (Edge Case)
  it("할인율이 100%를 초과하면 0원을 반환해야 한다", () => {
    // GIVEN & WHEN
    const result = calculateDiscount(10000, 110);
    // THEN
    expect(result).toBe(0);
  });

  // 3. 예외 처리 테스트 (Failure Case)
  it("가격이 음수일 경우 에러를 던져야 한다", () => {
    // GIVEN, WHEN & THEN
    expect(() => calculateDiscount(-5000, 10)).toThrow(
      "유효하지 않은 값입니다."
    );
  });
});
```

---

## ⚡️ Resumo em 3 Linhas (TL;DR)

1. **Do Happy Path aos Edge Cases:** Gere automaticamente cenários de teste que validam desde o fluxo normal até situações de exceção difíceis de prever manualmente.
2. **Personalizado para o seu Framework:** Gere códigos prontos para execução imediata, refletindo com precisão a sintaxe do framework utilizado (Jest, PyTest, JUnit, etc.).
3. **Automação de Mocks Complexos:** A IA identifica dependências de APIs externas ou banco de dados e configura perfeitamente os dados de Mock e Stubs necessários.

---

## 🚀 Como os especialistas escrevem

Este é o prompt finalizado após dezenas de tentativas e erros. Copie o prompt abaixo e preencha as partes em `[colchetes]` de acordo com a sua situação para uso imediato.

### 🥉 Versão Básica

Use quando quiser apenas criar uma estrutura básica de teste rapidamente.

> **Função:** Você é um engenheiro de QA sênior perfeccionista e especialista em automação de testes.
>
> **Pedido:** Analise o código a seguir e escreva o código de teste unitário (Unit Test), incluindo casos de exceção.

### 🥇 Versão Pro (Especialista)

Utilize este prompt quando precisar de validação de lógica de negócio complexa, mocking de dependências difíceis e cobertura de teste total.

> **Função (Role):** Você é um engenheiro de QA sênior com 10 anos de experiência, perfeccionista e especialista em automação de testes.
>
> **Contexto (Context):**
>
> - Background: Estou desenvolvendo um projeto no ambiente `[Linguagem e Framework (ex: TypeScript, Jest)]`.
> - Objetivo: Preciso escrever testes unitários extremamente detalhados para garantir a confiabilidade da nova lógica de negócio e atingir 100% de cobertura de teste (Test Coverage).
>
> **Tarefa (Task):**
>
> 1. Realize uma análise profunda do código fornecido e organize primeiro uma **lista de casos de teste** em formato de lista Markdown. (Deve incluir obrigatoriamente Happy Path, casos de exceção/falha e análise de valores limite/boundary cases).
> 2. Com base na biblioteca `[Biblioteca de Teste (ex: Jest)]`, escreva um código de teste impecável que possa ser copiado e executado imediatamente.
> 3. Se houver dependências externas no código (chamadas de API, conexões de DB, funções de data e hora, etc.), realize o Mocking de forma completa.
> 4. Aplique o padrão GIVEN-WHEN-THEN dentro de cada bloco `it` ou `test` com comentários claros.
>
> **Código:**
>
> `[Cole aqui o código para testar]`
>
> **Restrições (Constraints):**
>
> - O resultado deve ser entregue obrigatoriamente dentro de blocos de código Markdown.
> - Escreva as descrições dos testes (Description) em frases claras em português que qualquer pessoa possa entender. (ex: "Deve lançar um erro ao tentar dividir por zero").
> - Não omita partes do código (sem placeholders); forneça a forma final completa e pronta para execução.
>
> **Aviso (Warning):**
>
> - Não invente bibliotecas ou métodos que não existem. (Proibido alucinações).

---

## 💡 Comentários do Autor (Insight & Como usar)

Este prompt é muito mais do que um simples autocompletar que "escreve o teste por você"; ele é um poderoso **parceiro de Quality Assurance (QA)**. O verdadeiro valor central e diferencial deste prompt reside na primeira instrução: **'Evolução da lista de casos de teste'**. Antes da IA sair escrevendo código aleatoriamente, você poderá ver com seus próprios olhos, em formato de lista, como ela analisou e interpretou aquela lógica de negócio. Isso permite que você identifique e neutralize brechas lógicas e Edge Cases fatais (como entradas nulas extremas, tipos inesperados, problemas de concorrência, etc.) que você mesmo poderia ter esquecido.

No ambiente profissional, mesmo usando o mesmo framework (ex: Jest, JUnit, PyTest), cada time ou convenção interna tem sua forma preferida de **Mocking** e estilo de código. Alguns times preferem `jest.spyOn`, outros preferem injeção de dependência (DI) com Fake Objects. Se o código gerado pela IA não estiver de acordo com os padrões rígidos do seu projeto, experimente adicionar apenas um snippet de **`[Exemplo de código de Mocking do nosso time]`** na seção de restrições do prompt. Modelos de IA modernos possuem excelente capacidade de Few-Shot Learning e aprenderão instantaneamente seu estilo e sintaxe únicos.

Além disso, testes não são algo que você escreve uma vez e esquece; eles são documentos vivos que precisam ser mantidos conforme a lógica principal muda. Este prompt foi projetado para forçar o uso de comentários no padrão **GIVEN-WHEN-THEN**. Isso não é apenas para deixar o código bonito. É a ferramenta de comunicação mais poderosa para ajudar você mesmo no futuro, ou outros colegas que receberem esse código, a entender a intenção e o fluxo de uma lógica complexa em apenas um segundo.

Ao escrever testes, inevitavelmente você encontrará conexões com bancos de dados ou comunicações com APIs de terceiros. Iniciantes costumam cometer o erro de escrever testes de integração (Integration Tests) que chamam o DB ou API real. No entanto, este prompt inclui a instrução rigorosa de **'Mocking completo de dependências externas'**. A IA detectará de forma inteligente onde ocorrem comunicações de rede ou operações de E/S e as substituirá por objetos falsos (Stub/Mock), eliminando testes instáveis (Flaky Tests) que ora passam, ora falham dependendo da rede.

Por fim, antes de enviar o código completo, lembre-se do **Princípio da Responsabilidade Única (SRP)**. Se você inserir uma função "espaguete" gigante com centenas de linhas, até a melhor IA pode perder o contexto ou ignorar casos de borda importantes. A melhor forma de uso é solicitar a escrita de testes para funções pequenas e independentes. Isso servirá como um ótimo indicador de refatoração, dando feedback se sua lógica atual está modular o suficiente e possui uma estrutura testável (Testable Code).

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: O código é muito longo e a resposta da IA está sendo cortada no meio. O que eu faço?**
  - R: Recomendamos fortemente dividir o pedido em unidades de funções ou classes. Ao inserir um arquivo enorme, a probabilidade da IA perder Edge Cases críticos aumenta. Tente solicitar o teste para cada função que segue o SRP individualmente.

- **P: Meu código inclui conexão com banco de dados. Ainda assim é possível gerar testes unitários?**
  - R: Sim, perfeitamente! Este prompt contém instruções fortes para 'Mocking de dependências externas'. A IA detectará chamadas de Repository ou ORM e as substituirá por objetos Mock que não requerem conexão real com o banco de dados.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Atribuição de Persona (Role):** Ao definir o papel como 'Engenheiro de QA Sênior Perfeccionista', induzimos a IA a gerar testes de alta qualidade que investigam até os valores limite (Boundary), em vez de apenas um código superficial.
2. **Padrão GIVEN-WHEN-THEN forçado:** O uso deste padrão padrão da indústria maximiza a legibilidade. Isso garante uma estrutura sólida que permite que outros membros do time entendam a intenção do teste intuitivamente.
3. **Instrução de Automação de Mocking:** Ao delegar explicitamente a tarefa de 'Injeção de dependência e Mocking' — o maior gargalo na escrita de testes — para a IA, reduzimos drasticamente o tempo necessário para a criação dos testes.

---

## 🎯 Conclusão (Epilogue)

Se um bug crítico for descoberto somente após o deploy em produção, o custo para corrigi-lo é pelo menos 100 vezes maior do que no momento do desenvolvimento. Os juros da dívida técnica crescem como uma bola de neve.

Agora, você pode deixar de lado a desculpa de que "não teve tempo para escrever testes". O estresse dos Mocks entediantes e do canvas vazio agora é responsabilidade do seu parceiro de IA. Você só precisa focar na lógica de negócio e vestir o colete à prova de balas que fica pronto em apenas 5 minutos.

Espero que você use este prompt ativamente para exterminar bugs desde as fases iniciais e clique no botão 'Merge' com 100% de confiança.

Automatize suas tarefas e saia do trabalho (ou peça demissão) com estilo! 🍷
