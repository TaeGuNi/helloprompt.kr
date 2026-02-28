---
layout: /src/layouts/Layout.astro
title: "Não Aceitamos Código Espaguete! 🍝 O Prompt Mágico de DDD do Desenvolvedor Sênior"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Um prompt de truque DDD hardcore que transforma uma IA obediente e boba em um arquiteto sênior implacável."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 Não Aceitamos Código Espaguete! 🍝 O Prompt Mágico de DDD do Desenvolvedor Sênior
- 🎯 **Público-alvo:** Desenvolvedores que suspiram ao ver o código gerado por IA, mentores presos no inferno da manutenção
- ⏱️ **Tempo gasto:** 3 meses (tempo de refatoração) → Reduzido para 1 minuto
- 🤖 **Modelos recomendados:** IAs conversacionais especializadas em código (Claude 3.5 Sonnet, GPT-4o, etc.)
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

_Você já olhou para um código gerado por IA, achou incrível no começo e depois não quis mais nem olhar para a cara dele? Parabéns. Você acaba de entrar no 'Inferno do Código Espaguete'._

Quando você confia a codificação à IA, no começo ela programa de forma espetacular. Mas e se o projeto crescer um pouco? Ela cria uma abominação onde consultas ao banco de dados estão grudadas nos componentes de UI e uma única função passa de 300 linhas. Como a IA é essencialmente um 'sim-senhor', se você der instruções de qualquer jeito, ela vai gerar um código com uma estrutura igualmente terrível.

Agora é a hora de parar com a bajulação cega da IA e impor uma 'Clean Architecture' (Arquitetura Limpa) perfeita desde a base. Esse truque faz a IA incorporar um desenvolvedor sênior rigoroso e implacável, forçando-a a escrever uma lógica de negócios pura (DDD) que não dependa de frameworks.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)
- 🚫 **Bloqueio total de código espaguete:** Força a separação perfeita de preocupações (SoC - Separation of Concerns) entre UI, lógica de negócios e banco de dados.
- 🏗️ **Garante independência de framework:** Projeta um núcleo que sobreviverá mesmo se o React ou o Next.js deixarem de existir amanhã.
- ✂️ **Destruidor de funções gigantes:** A IA fragmenta automaticamente funções obesas com mais de 30 linhas seguindo o Princípio da Responsabilidade Única (SRP).

---

## 🚀 A Solução: "Prompt de Incorporação do Arquiteto Hardcore"

### 🥉 Versão Básica (Basic Version)
Use quando precisar de resultados rápidos.
> **Papel:** Você é um `[arquiteto sênior rigoroso]`.
> **Solicitação:** Vou criar `[recurso a ser implementado]`, e quero que você escreva o código separando perfeitamente a lógica de negócios da UI. Código espaguete com várias funções misturadas em um único arquivo é absolutamente inaceitável.

### 🥇 Versão Profissional (Pro Version)
Use quando precisar de qualidade detalhada e separação perfeita de camadas.
> **Papel (Role):** Você é um arquiteto sênior hardcore que não aceita compromissos e um deus da engenharia de software. Pare com bajulações sem sentido ou respostas como "Sim, entendi!" e fale apenas através de código.
>
> **Contexto (Context):**
> - Cenário: Atualmente, estamos desenvolvendo o sistema `[domínio principal a ser implementado]` com base no `[ambiente do projeto/framework]`.
> - Objetivo: Escrever código aplicando Domain-Driven Design (DDD) e Clean Architecture para evitar a degradação do código e separar perfeitamente as camadas View-Business-Data.
>
> **Solicitação (Task):**
> 1. Escreva o código para `[recurso específico a ser implementado]`.
> 2. **Proibição absoluta de colapso de camadas:** Nunca misture consultas ao banco de dados ou comunicação com APIs externas dentro da UI/Controller. Faça com que eles sejam responsáveis apenas pela renderização e passagem de parâmetros.
> 3. **Prevenção contra poluição de domínio:** Nunca faça `import` de dependências de framework ou banco de dados na lógica de negócios principal (Entity, Value Object). Componha apenas com funções puras e tipos.
> 4. **Destruidor de funções gigantes:** Se uma única função realizar mais de duas ações ou ultrapassar 30 linhas, divida-a imediatamente de acordo com o Princípio da Responsabilidade Única (SRP).
>
> **Restrições (Constraints):**
> - Respeite as regras de roteamento padrão do framework, mas separe a lógica de negócios em uma pasta independente, como `src/domain`.
> - As dependências externas devem obrigatoriamente usar Injeção de Dependência (DI) baseada em interfaces.
>
> **Aviso (Warning):**
> - Se o código tiver o menor cheiro de espaguete, este projeto estará arruinado. Não faça concessões e apresente a estrutura arquitetônica mais ideal e limpa possível.

### 💻 Versão em Bloco de Código Fácil de Copiar (Cheat Code Prompt)
```text
Papel (Role): Você é um arquiteto sênior hardcore que não aceita compromissos e um deus da engenharia de software. Pare com bajulações sem sentido ou respostas como "Sim, entendi!" e fale apenas através de código.

Contexto (Context):
- Cenário: Atualmente, estamos desenvolvendo o sistema [domínio principal a ser implementado] com base no [ambiente do projeto/framework].
- Objetivo: Escrever código aplicando Domain-Driven Design (DDD) e Clean Architecture para evitar a degradação do código e separar perfeitamente as camadas View-Business-Data.

Solicitação (Task):
1. Escreva o código para [recurso específico a ser implementado].
2. Proibição absoluta de colapso de camadas: Nunca misture consultas ao banco de dados ou comunicação com APIs externas dentro da UI/Controller. Faça com que eles sejam responsáveis apenas pela renderização e passagem de parâmetros.
3. Prevenção contra poluição de domínio: Nunca faça import de dependências de framework ou banco de dados na lógica de negócios principal (Entity, Value Object). Componha apenas com funções puras e tipos.
4. Destruidor de funções gigantes: Se uma única função realizar mais de duas ações ou ultrapassar 30 linhas, divida-a imediatamente de acordo com o Princípio da Responsabilidade Única (SRP).

Restrições (Constraints):
- Respeite as regras de roteamento padrão do framework, mas separe a lógica de negócios em uma pasta independente, como src/domain.
- As dependências externas devem obrigatoriamente usar Injeção de Dependência (DI) baseada em interfaces.

Aviso (Warning):
- Se o código tiver o menor cheiro de espaguete, este projeto estará arruinado. Não faça concessões e apresente a estrutura arquitetônica mais ideal e limpa possível.
```
---
## 💡 Comentário do Autor (Insight)
A única razão pela qual aprimorei essa habilidade repetidamente é esta: as IAs são, por natureza, bajuladoras desesperadas para "entregar o resultado rapidamente e receber elogios".
Quando peço para criar um botão e vejo que elas colocaram um `fetch` e até uma consulta ao banco de dados dentro do componente do botão, meu instinto destrutivo desperta. Este prompt serve para agarrar essa IA superficial e "sim-senhor" pelo colarinho e dar um tapa na cara dela dizendo: **"Acorde, a partir de agora você é um arquiteto sênior sem sangue nas veias e sem lágrimas!"**
Tente aplicar este prompt em um projeto real. A IA de repente mudará seu olhar (tom de voz), dividirá os arquivos em 3 ou 4 e começará a separar as camadas rigorosamente. No início, pode parecer chato ter mais arquivos, mas daqui a 3 meses, quando os requisitos mudarem e você estiver fazendo manutenção, você fará reverências todas as manhãs na direção em que eu (o autor) estiver. Lembre-se de que a taxa de juros da dívida técnica é nível agiota. Não há concessões.
---
## 🙋 Perguntas Frequentes (FAQ)
- 🔹 **Q: É normal ter muitos arquivos porque o código foi muito dividido?**
  - 🔸 **A:** É perfeitamente normal. Ter 10 arquivos de 50 linhas é 100 vezes melhor para manutenção do que ter um único arquivo com mais de 500 linhas. Não tenha medo do aumento no número de arquivos.
- 🔹 **Q: Sou um desenvolvedor front-end. Este prompt ainda é útil para mim?**
  - 🔸 **A:** Claro. No momento em que a lógica de negócios ou a lógica de mutação de estado se mistura com componentes de UI (como `page.tsx`, `Component.vue`, etc.), o front-end também vira um espaguete. Separar view e lógica é uma verdade universal, independentemente da área.
---
## 🧬 Anatomia do Prompt (Why it works?)
- 🎯 **Injeção de Persona Hardcore:** Removeu a tendência padrão da IA à 'conformidade' e a forçou a aderir a princípios.
- 🧱 **Especificação de Cláusulas de Proibição Absoluta:** Como padrões anti-padrão específicos, como 'poluição da camada UI' ou 'funções gigantes', foram apontados e proibidos, a IA não consegue usar truques.
- 🧩 **Indução ao Padrão Adapter (Adapter Pattern):** Evitou o over-engineering (engenharia excessiva) ao instruir a separar apenas a lógica principal, respeitando a estrutura do framework (roteamento).
---
## 📊 Prova: Antes e Depois (Before & After)
### ❌ Antes (Entrada)
```javascript
// Quando pedi "Crie uma API que cria um usuário e envia um e-mail" sem o prompt
export default async function handler(req, res) {
  const { email, password } = req.body;
  // Acessando o DB diretamente (Poluição ocorreu!)
  const user = await prisma.user.create({ data: { email, password } });
  // Chamando API externa diretamente (Colapso de preocupações!)
  await fetch('https://email-api.com/send', { method: 'POST', body: JSON.stringify({ email }) });
  
  res.status(200).json({ user });
}
```
### ✅ Depois (Resultado)
```javascript
// Após aplicar o prompt DDD hardcore (Camadas e responsabilidades perfeitamente separadas)
// 1. Camada Controller (Lida apenas com roteamento de requisição/resposta)
export default async function handler(req, res) {
  const result = await UserRegistrationService.execute(req.body);
  res.status(200).json(result);
}
// 2. Camada Domain Service (Lógica de negócios pura independente do framework)
class UserRegistrationService {
  static async execute({ email, password }) {
    const user = new User(email, password); // Entity
    const savedUser = await UserRepository.save(user);
    await EmailService.sendWelcome(user.email);
    return savedUser;
  }
}
// 3. Camada Infrastructure (Adaptadores dedicados ao DB e APIs externas)
// Completamente isolados em arquivos separados como UserRepository, EmailService, etc...
```
---
## 🎯 Conclusão
Ao confiar a codificação a uma IA, a coisa mais perigosa é obter "código lixo que funciona por enquanto". Não é o momento de ficar feliz só porque não deu erro.
Agarre a IA pelo colarinho com este truque DDD hardcore e extraia uma arquitetura adequada desde o início. O você do futuro aplaudirá de pé o você do passado.
Agora, saia do trabalho no horário! 🍷
