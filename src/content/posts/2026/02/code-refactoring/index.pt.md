---
layout: /src/layouts/Layout.astro
title: "Meu código é um lixo! Coach de Refatoração Clean Code"
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Programação/TI"
description: "Um prompt que transforma aquele código confuso, que apenas 'funciona', em um código limpo, legível e fácil de manter."
tags: ["Refatoração", "Clean Code", "Desenvolvedor", "Revisão de Código"]
---

# 📝 Meu código é um lixo! Coach de Refatoração Clean Code

- **🎯 Público-alvo:** Desenvolvedores Júnior a Pleno, Engenheiros de Software
- **⏱️ Tempo estimado:** 30 minutos → reduzido para 2 minutos
- **🤖 Modelo recomendado:** Todos os modelos de IA (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Eu disse que ia arrumar depois... já se passou um ano e agora tenho medo até de olhar para esse código."_

O famoso "código espaguete" é o maior pesadelo de qualquer equipe de desenvolvimento. Quando a legibilidade é ruim, encontrar bugs vira uma caça ao tesouro e adicionar novas funcionalidades torna-se um risco enorme. Este prompt incorpora a essência de Robert C. Martin (autor de _Clean Code_), atuando como um arquiteto sênior para lavar, polir e deixar o seu código impecável, pronto para produção.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. **Extração e Modularização:** Separação inteligente de funções e remoção implacável de código duplicado (DRY).
2. **Nomenclatura Semântica:** Renomeação de variáveis e funções para refletirem exatamente o seu propósito.
3. **Modernização:** Aplicação das melhores práticas e sintaxes modernas (ES6+, Python 3.10+, etc.) focando em legibilidade.

---

## 🚀 Solução: "Lavanderia Clean Code"

### 🥉 Basic Version (Versão Básica)

Use esta versão quando precisar de uma refatoração rápida e direta.

> **Papel:** Você é um Engenheiro de Software Sênior e especialista em Clean Code.
> **Solicitação:** Refatore o código a seguir para que ele seja mais limpo, fácil de ler e de manter. Aplique boas práticas de nomenclatura e remova redundâncias estruturais.
> **Código:** `[Cole seu código aqui]`

<br>

### 🥇 Pro Version (Versão Profissional)

Use esta versão para refatorações profundas. Ela não apenas corrige o código, mas também explica o raciocínio arquitetural por trás de cada mudança, servindo como uma verdadeira revisão de código (Code Review).

> **Papel (Role):** Você é um Arquiteto de Software Sênior e um evangelista rigoroso de _Clean Code_.
>
> **Contexto (Context):**
>
> - Cenário: O código atual funciona, mas está confuso, difícil de escalar e cheio de "code smells".
> - Objetivo: Refatorar o código para atingir o padrão ouro da indústria em termos de manutenibilidade.
>
> **Tarefa (Task):**
>
> 1. **[Nomenclatura Expressiva]**: Renomeie variáveis e funções para que sejam autoexplicativas e revelem sua intenção (ex: de `a` para `userAge`).
> 2. **[Responsabilidade Única]**: Quebre funções excessivamente longas aplicando o princípio de responsabilidade única (SRP). Elimine qualquer lógica duplicada.
> 3. **[Modernização]**: Atualize o código utilizando os recursos mais modernos da linguagem de forma idiomática.
> 4. **[Análise Before & After]**: Apresente o código refatorado e, em seguida, liste exatamente o que foi alterado e qual o benefício arquitetural de cada mudança.
>
> **Restrições (Constraints):**
>
> - O comportamento e a funcionalidade do código (outputs) **não podem sofrer absolutamente nenhuma alteração**.
> - Evite adicionar comentários no código. Remova comentários obsoletos. O código deve ser tão limpo que dispense explicações.
> - Utilize a formatação padrão da linguagem (como Prettier ou PEP 8) na saída.
>
> **Entrada de Dados:**
>
> - Código alvo: `[COLE SEU CÓDIGO AQUI]`

---

## 💡 Comentário do Autor (Insight)

Este prompt atua como um verdadeiro "Pair Programmer" sênior ao seu lado. Ele é especialmente útil em sprints muito corridas ou ao herdar projetos de terceiros ("código legado"). Ao utilizá-lo, reparei que ele é excepcional para converter lógicas cheias de `if/else` aninhados (o temido _Hadouken de if_) em retornos antecipados (_Early Returns_) e padrões de design mais limpos.

**Dica de Ouro:** Não copie e cole o resultado cegamente. Leia a seção "[Análise Before & After]" gerada pela IA — ela é uma verdadeira aula particular de engenharia de software e ajudará você a não cometer os mesmos erros no futuro.

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: O prompt consegue refatorar arquivos inteiros muito grandes?**
  - A: Depende da janela de contexto do modelo. No entanto, o ideal é enviar blocos menores (função por função ou classe por classe). Isso garante que o modelo mantenha o foco nos detalhes e não "esqueça" variáveis importantes, além de estar alinhado ao princípio de dividir para conquistar.

- **Q: E se a refatoração quebrar a lógica do meu programa?**
  - A: Embora tenhamos adicionado uma restrição rigorosa ("O comportamento não pode mudar"), IAs podem cometer pequenos deslizes. É fundamental que você tenha testes unitários cobrindo o trecho de código original antes de aplicar a refatoração para validar o novo código com segurança.

- **Q: Funciona bem para qualquer linguagem de programação?**
  - A: Sim! O conceito de _Clean Code_ é universal. Seja JavaScript, Python, Go ou Java, o modelo aplicará os padrões idiomáticos específicos da linguagem que identificar no seu código.

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Definição de Papel (Role):** Estabelecer a IA como um "Arquiteto Sênior" eleva o padrão da resposta. Ela não fará apenas edições cosméticas, mas pensará na estrutura arquitetural.
2. **Foco na Intenção e não apenas na Sintaxe:** A instrução de alterar nomes obscuros força a IA a "entender" o que o código faz semanticamente.
3. **Restrição Anti-Comentários (Constraints):** Odiamos códigos poluídos com comentários óbvios (`// incrementa i`). A restrição garante que o código fale por si mesmo.
4. **Justificativa Arquitetural:** Exigir uma explicação do _"porquê"_ a mudança foi feita transforma o prompt em uma ferramenta de aprendizado contínuo, não apenas em um formatador de texto passivo.

---

## 📊 Prova: Before & After

Abaixo, veja um exemplo prático de como este prompt pode transformar uma função Python confusa em algo limpo e profissional.

### ❌ Before (Entrada)

```python
def calc(x, y):
    if x > 19:
        print("성인")
        p = y * 0.9
        return p
    else:
        print("학생")
        return y
```

### ✅ After (Resultado)

```python
def calculate_discounted_price(age: int, base_price: float) -> float:
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("Usuário adulto. Aplicando desconto.")
        return base_price * DISCOUNT_RATE

    print("Usuário estudante. Preço normal.")
    return base_price
```

**Benefícios da Refatoração:**

1. **Nomenclatura Semântica:** A função agora diz exatamente o que faz (`calculate_discounted_price`), e variáveis como `x` e `y` viraram `age` e `base_price`.
2. **Eliminação de _Magic Numbers_:** Os números soltos `19` e `0.9` foram encapsulados em constantes claras (`ADULT_AGE_THRESHOLD`, `DISCOUNT_RATE`), facilitando futuras manutenções e leitura.
3. **_Early Return_ e Tipagem:** O `else` desnecessário foi removido, reduzindo a indentação e a complexidade cognitiva. Além disso, a adição de _Type Hints_ (tipagem) torna o código mais seguro.

---

## 🎯 Conclusão

Um código bem escrito deve ser lido com a fluidez de uma boa prosa. Limpar o seu código não é apenas um preciosismo técnico, é um ato de empatia com o seu "eu do futuro" e com os seus colegas de equipe.

Agora, pare de sofrer decifrando códigos macarrônicos. Refatore, aprove o Pull Request e vá tomar um café (ou um vinho). Lave a alma, e deixe que este prompt lave o seu código! 🍷
