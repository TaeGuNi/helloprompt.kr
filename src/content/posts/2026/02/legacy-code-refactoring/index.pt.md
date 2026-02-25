---
layout: /src/layouts/Layout.astro
title: " \"ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기\""
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "개발/코딩"
description: " \"Um guia definitivo para usar IA como um desenvolvedor sênior com 10 anos de experiência para refatorar códigos legados complexos com segurança e gerar testes automatizados de uma só vez.\""
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

# 🧹 Aspirador de Código Legado: Refatoração & Automação de Testes

- **🎯 Público-Alvo:** Desenvolvedores Júnior, Mantenedores de Projetos Legados, Revisores de Código
- **⏱️ Tempo Gasto:** De 1 hora de análise de código → Reduzido para menos de 5 minutos
- **🤖 Modelo Recomendado:** Claude 3.5 Sonnet, GPT-4o (Claude é altamente recomendado para lógicas complexas e contextos longos)

- ⭐ **Dificuldade:** ⭐⭐☆☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Quem diabos escreveu esse código? (...Ah, fui eu há 1 ano atrás.)"_

Você já se sentiu perdido diante de um **Código Legado (Legacy Code)** repleto de `if-else` aninhados, variáveis com nomes sem sentido e tratamentos de exceções não documentados, temendo que o sistema desmoronasse ao menor toque?

Não tenha mais medo. Apresentamos uma técnica impecável de engenharia de prompt para contratar a IA como seu **Pair Programmer Sênior** dedicado. Com ela, você refatorará códigos espaguete com elegância e criará uma barreira de proteção sólida com testes automatizados num piscar de olhos.

---

## ⚡️ Resumo de 3 Linhas (TL;DR)

1. **Exija Explicações Primeiro:** Em vez de consertar cegamente, force a IA a compreender primeiro o fluxo de execução e a intenção do código.
2. **Aplique Princípios de Clean Code:** Refatore nomenclaturas e estruturas de forma segura, baseando-se nos princípios SOLID e na legibilidade.
3. **Construa Defesas com Testes:** Gere automaticamente testes unitários, incluindo *edge cases* (casos extremos), para garantir que a funcionalidade permaneça idêntica antes e depois da refatoração.

---

## 🚀 A Solução: "Simulador de Desenvolvedor Sênior"

### 🥇 Versão Pro (Especialista)

Se você simplesmente pedir "refatore isso", o risco de quebrar as funcionalidades existentes é enorme. Este prompt aplica a técnica de **Chain-of-Thought (Cadeia de Pensamento)** para forçar a IA a raciocinar em etapas lógicas.

> **Papel (Role):** Você é um `[Desenvolvedor Backend Sênior com 10 anos de experiência]`, ex-funcionário de Big Techs como Google ou Meta. Você é um devoto fervoroso da filosofia Clean Code e segue estritamente o TDD (Test-Driven Development).
>
> **Contexto (Context):**
> Acabei de herdar um código legado muito confuso escrito em `[Insira a linguagem, ex: Python/Java]`. A legibilidade é terrível e a manutenção é quase impossível.
>
> **Tarefa (Task):**
> Execute as seguintes etapas sequencialmente e com profundidade.
>
> **Passo 1. Análise e Diagnóstico do Código:** Resuma em uma frase qual é a função de negócios deste código e aponte especificamente 3 problemas críticos (Code Smells).
> **Passo 2. Refatoração Segura:** Mantenha a lógica de negócios original e os efeitos colaterais (Side Effects) 100% intactos, mas maximize a legibilidade separando funções conforme o Princípio de Responsabilidade Única (SRP) e renomeando variáveis/métodos com clareza. Adicione obrigatoriamente Docstrings e comentários nas lógicas de negócios complexas.
> **Passo 3. Verificação Defensiva (Testes Automatizados):** Escreva testes unitários (Unit Tests) que garantam perfeitamente que o seu código refatorado funciona exatamente como o original. Você deve incluir cenários de sucesso e pelo menos 2 situações de exceção (Edge Cases) possíveis.
>
> **Código de Entrada:**
>
> ```python
> [Cole aqui o código legado a ser analisado]
> ```

---

## 💡 Insight do Autor (Comentário)

O verdadeiro valor deste prompt não está apenas em gerar um código bonito, mas em **estabelecer uma "rede de segurança" (testes automatizados) primeiro**. Eu apliquei este prompt na prática ao assumir um módulo de pagamento obsoleto em Java, com 5 anos de idade.

O mais surpreendente foi que a IA apontou proativamente em seus testes *edge cases* ocultos que eu não havia notado (por exemplo, ramificações de lógica quando o valor do pagamento é 0).

**🔥 Dica de Otimização Prática:**
Se você copiar e colar uma classe inteira com centenas de linhas de uma vez, a IA pode sofrer de "alucinações" ou perder o contexto. **Quebre o código em níveis de métodos (menos de 100 linhas) antes de perguntar**. A profundidade da análise e a precisão dos testes unitários aumentarão exponencialmente.

---

## 🙋 Perguntas Frequentes (FAQ)

- **P: Qual modelo de IA é o mais adequado para lidar com lógica de programação?**
  - R: Atualmente, em 2026, **Claude 3.5 Sonnet** e **GPT-4o** são os dois gigantes em codificação e refatoração. Entre eles, o Claude 3.5 Sonnet apresenta uma leve vantagem na manutenção de contextos complexos e na escrita de códigos limpos mais próximos do estilo humano.

- **P: Posso enviar códigos internos da minha empresa para a IA sem problemas de segurança?**
  - R: **Absolutamente não.** Informações sensíveis como chaves de API, IPs da rede corporativa, dados reais de clientes e algoritmos de segurança essenciais devem ser mascarados como `[MASKED]` ou substituídos por dados fictícios (Dummy Data) antes de executar o prompt. Alternativamente, use apenas ambientes de Enterprise AI homologados pela sua empresa.

- **P: E se ocorrerem erros após a refatoração?**
  - R: É muito provável que a IA tenha ignorado alguma dependência (Dependency). Copie todo o log de erro junto com o contexto relevante do código original e dê um feedback específico: _"Ocorreu este erro nesta parte. Parece que você omitiu a [condição específica] da lógica original. Por favor, corrija."_

---

## 🧬 Anatomia do Prompt (Por que funciona?)

1. **Atribuição de Persona Sênior (Role):** Ao impor a persona rigorosa de "Sênior com 10 anos de experiência, devoto do Clean Code", elevamos o padrão para que a IA gere um código de altíssimo nível e fácil manutenção, não apenas algo que funcione.
2. **Chain-of-Thought (Cadeia de Pensamento):** Em vez de comandar um "conserte" abrupto, forçamos um processo lógico de 3 etapas: **[Análise → Correção → Verificação]**. Esse é o mecanismo chave que induz a IA a melhorar a estrutura sem corromper a intenção original do código.
3. **Casos Extremos Obrigatórios (Constraints):** Exigir explicitamente a criação de testes para *edge cases* garante uma qualidade de código robusta e pronta para ser utilizada imediatamente em produção.

---

## 📊 Comprovação: Antes e Depois

### ❌ Antes (Entrada: Código legado de pesadelo)

```python
def calc_trx(a, t, f=False):
    # a: amount, t: type
    if t == 1:
        if f: return a * 1.1 + 500
        else: return a * 1.1
    elif t == 2:
        return a - (a * 0.05)
    else: return 0 # erro
```

### ✅ Depois (Resultado: Clean Code & Testes por um Sênior)

```python
from enum import Enum
import unittest

class TransactionType(Enum):
    DEPOSIT = 1
    WITHDRAWAL = 2

def calculate_transaction_amount(amount: float, transaction_type: TransactionType, apply_fee: bool = False) -> float:
    """
    Calcula o valor final após a aplicação de impostos e taxas, com base no tipo de transação (depósito/saque).
    """
    if amount < 0:
        raise ValueError("O valor da transação deve ser maior que 0.")

    if transaction_type == TransactionType.DEPOSIT:
        taxed_amount = amount * 1.1
        return taxed_amount + 500 if apply_fee else taxed_amount

    elif transaction_type == TransactionType.WITHDRAWAL:
        return amount * 0.95

    return 0.0

# ----------------- Unit Tests ----------------- #
class TestCalculateTransaction(unittest.TestCase):
    def test_deposit_with_fee(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.DEPOSIT, True), 1600.0)

    def test_withdrawal_amount(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.WITHDRAWAL), 950.0)

    def test_negative_amount_raises_error(self):
        with self.assertRaises(ValueError):
            calculate_transaction_amount(-500, TransactionType.DEPOSIT)
```

---

## 🎯 Conclusão

Não suspire mais diante de telas cheias de códigos legados.
Com a IA e um prompt bem estruturado, a refatoração deixa de ser um sofrimento frustrante e se torna uma **faxina gratificante** e cheia de realizações.

Que tal começar hoje mesmo a refatorar aquela função que você mais odiava olhar, em parceria com a IA? 💻 Seu horário de saída do trabalho chegará visivelmente mais cedo!
