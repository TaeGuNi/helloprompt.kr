---
layout: /src/layouts/Layout.astro
title: "Não Aceitamos Código Espaguete! 🍝 O Prompt Mágico de DDD do Desenvolvedor Sênior"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Um prompt avançado de DDD que transforma qualquer IA obediente em um arquiteto de software sênior implacável. Diga adeus ao código espaguete."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
## 📝 Não Aceitamos Código Espaguete! 🍝 O Prompt Mágico de DDD do Desenvolvedor Sênior
- 🎯 **Público-alvo:** Desenvolvedores frustrados com código gerado por IA, líderes técnicos presos no inferno da manutenção
- ⏱️ **Tempo economizado:** 3 meses de refatoração → Reduzidos para 1 minuto
- 🤖 **Modelos recomendados:** IAs conversacionais com foco em programação (Claude 3.5 Sonnet, GPT-4o, etc.)
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Você já olhou para um código gerado por IA, achou incrível no primeiro momento, mas depois sentiu vontade de apagar tudo? Parabéns. Você acaba de entrar no 'Inferno do Código Espaguete'."_

Quando você delega a codificação para a IA, o início sempre parece espetacular. Mas e se o projeto crescer um pouco? Ela cria uma verdadeira abominação: consultas ao banco de dados acopladas aos componentes de UI e funções únicas com mais de 300 linhas. Como a IA é essencialmente configurada para agradar (um verdadeiro "sim-senhor"), instruções genéricas resultarão em uma estrutura de código igualmente desastrosa.

Agora é a hora de dar um basta nessa submissão cega da IA e impor uma *Clean Architecture* (Arquitetura Limpa) impecável desde a base. Este prompt faz a IA incorporar a mentalidade de um desenvolvedor sênior rigoroso e inflexível, forçando-a a escrever uma lógica de negócios pura (DDD) e totalmente independente de frameworks.

---

## ⚡️ Resumo em 3 Linhas (TL;DR)
- 🚫 **Bloqueio total de código espaguete:** Força a separação perfeita de responsabilidades (SoC - *Separation of Concerns*) entre UI, lógica de negócios e banco de dados.
- 🏗️ **Independência de frameworks garantida:** Projeta um núcleo robusto que continuará funcionando mesmo se o React ou o Next.js desaparecerem amanhã.
- ✂️ **Destruidor de funções gigantes:** A IA fragmenta automaticamente funções obesas (com mais de 30 linhas) seguindo o Princípio da Responsabilidade Única (SRP).

---

## 🚀 A Solução: "Prompt de Incorporação do Arquiteto Hardcore"

### 🥉 Versão Básica (Basic Version)
Use esta versão quando precisar de resultados rápidos e diretos.
> **Papel:** Você é um `[arquiteto sênior rigoroso]`.
> **Solicitação:** Preciso implementar o `[recurso a ser implementado]`. Escreva o código separando perfeitamente a lógica de negócios da UI. Código espaguete ou múltiplas responsabilidades misturadas em um único arquivo são absolutamente inaceitáveis.

### 🥇 Versão Profissional (Pro Version)
Use quando precisar de extrema qualidade e uma separação de camadas impecável.
> **Papel (Role):** Você é um arquiteto de software sênior hardcore, inegociável em seus princípios e um verdadeiro mestre da engenharia. Pare com bajulações sem sentido ou respostas como "Sim, entendi!" e comunique-se exclusivamente através de código.
>
> **Contexto (Context):**
> - Cenário: Atualmente, estamos desenvolvendo o sistema `[domínio principal a ser implementado]` com base no `[ambiente do projeto/framework]`.
> - Objetivo: Escrever o código aplicando Domain-Driven Design (DDD) e Clean Architecture para evitar a degradação técnica e separar perfeitamente as camadas View-Business-Data.
>
> **Solicitação (Task):**
> 1. Desenvolva o código para `[recurso específico a ser implementado]`.
> 2. **Proibição absoluta de colapso de camadas:** Nunca misture consultas ao banco de dados ou chamadas a APIs externas dentro da UI/Controller. Estes devem ser responsáveis apenas pela renderização e passagem de parâmetros.
> 3. **Prevenção contra poluição de domínio:** Jamais faça `import` de dependências de frameworks ou de banco de dados na lógica de negócios central (Entity, Value Object). Utilize apenas funções puras e tipos primitivos.
> 4. **Destruidor de funções gigantes:** Se uma única função realizar mais de duas ações ou ultrapassar 30 linhas, divida-a imediatamente, respeitando o Princípio da Responsabilidade Única (SRP).
>
> **Restrições (Constraints):**
> - Respeite as regras de roteamento padrão do framework, mas isole a lógica de negócios em um diretório independente, como `src/domain`.
> - As dependências externas devem obrigatoriamente utilizar Injeção de Dependência (DI) baseada em interfaces.
>
> **Aviso (Warning):**
> - Se o código apresentar o menor indício de espaguete, o projeto estará arruinado. Não faça concessões e entregue a estrutura arquitetônica mais limpa e ideal possível.

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
A principal razão pela qual refinei este prompt exaustivamente é simples: por natureza, as IAs são assistentes desesperados para "entregar qualquer resultado rapidamente e receber elogios".
Quando peço para criar um simples botão e percebo que a IA embutiu um `fetch` e até uma consulta ao banco de dados direto no componente, meu instinto destrutivo desperta. Este prompt serve exatamente para agarrar essa IA superficial pelo colarinho e dar um choque de realidade: **"Acorde! A partir de agora, você é um arquiteto sênior frio, calculista e sem espaço para emoções!"**
Experimente aplicar este prompt em um projeto real. A IA mudará drasticamente sua postura, dividirá o escopo em três ou quatro arquivos distintos e começará a separar as camadas com rigor militar. No início, gerenciar mais arquivos pode parecer tedioso, mas daqui a três meses, quando os requisitos mudarem e você estiver na fase de manutenção, fará reverências diárias em minha homenagem. Lembre-se: os juros da dívida técnica são piores que os de um agiota. Não há espaço para concessões.
---
## 🙋 Perguntas Frequentes (FAQ)
- 🔹 **Q: É normal ter muitos arquivos porque o código foi muito fragmentado?**
  - 🔸 **A:** Absolutamente normal. Ter 10 arquivos de 50 linhas é infinitamente melhor para a manutenção do que um único arquivo monolítico de 500 linhas. Não tenha medo da proliferação saudável de arquivos.
- 🔹 **Q: Sou um desenvolvedor front-end. Este prompt ainda é útil para mim?**
  - 🔸 **A:** Com certeza. No momento em que a lógica de negócios ou a mutação de estado se mistura com a UI (como em `page.tsx` ou `Component.vue`), o front-end também se transforma em um espaguete intragável. Separar a *View* da Lógica é uma regra de ouro universal, independentemente da stack.
---
## 🧬 Anatomia do Prompt (Why it works?)
- 🎯 **Injeção de Persona Hardcore:** Elimina a tendência padrão da IA de ser excessivamente complacente, forçando-a a aderir a princípios rigorosos de engenharia.
- 🧱 **Cláusulas de Proibição Absoluta:** Ao proibir explicitamente antipadrões, como poluição da camada de UI e funções gigantes, a IA perde qualquer margem para atalhos preguiçosos.
- 🧩 **Indução ao Padrão Adapter (*Adapter Pattern*):** Previne o *over-engineering* orientando a IA a isolar apenas a lógica central, enquanto ainda respeita as convenções de roteamento do framework.
---
## 📊 Prova: Antes e Depois (Before & After)
### ❌ Antes (O Caos)
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
### ✅ Depois (A Solução Elegante)
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
Ao delegar a codificação a uma IA, a maior armadilha é aceitar um "código lixo que funciona por enquanto". Não celebre apenas porque o terminal não exibiu erros.
Agarre a IA pelo colarinho com este prompt de DDD e garanta uma arquitetura escalável e limpa desde o primeiro minuto. O seu "eu" do futuro aplaudirá de pé o seu "eu" do passado.
Agora, termine suas tarefas e saia do trabalho no horário! 🍷
