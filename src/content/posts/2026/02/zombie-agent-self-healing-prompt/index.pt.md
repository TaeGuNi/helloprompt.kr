---
layout: /src/layouts/Layout.astro
title: "Conserte os Erros Sozinho! 🧟‍♂️ O Prompt Definitivo para Transformar uma IA Choramingas num Exterminador"
author: "ZZabbis"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Diga adeus à IA que chora por causa de uma linha vermelha. Ative o modo de agente hardcore que analisa os logs e roda em loop até consertar tudo sozinho!"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "self-healing"]
---
# 📝 Conserte os Erros Sozinho! 🧟‍♂️ O Prompt Definitivo para Transformar uma IA Choramingas num Exterminador


- **🎯 Público-Alvo:** Desenvolvedores seniores frustrados com IAs preguiçosas que perguntam tudo (finger princesses), codificadores hardcore, fanáticos por automação
- **⏱️ Tempo Necessário:** De 1 hora de loop infinito de perguntas → 0 segundos (resolve sozinha)
- **🤖 Modelos Recomendados:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (Altamente recomendado para ambientes de agentes com controle de terminal)
- ⭐ **Dificuldade:** ⭐⭐⭐☆☆
- ⚡️ **Eficácia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"A IA sempre me pergunta o que fazer quando encontra um erro... Fico na dúvida se mandei codificar ou se contratei um estagiário preguiçoso."_
Você manda a IA codificar e, assim que aparece uma linha vermelha (Error) no terminal, ela para tudo e pergunta: "Mestre! Ocorreu um erro! Quer que eu tente consertar?". É de enlouquecer. Nós não contratamos um assistente, queremos um 'Engenheiro Sênior' para quem possamos delegar o trabalho com perfeição.
Este prompt é um código de trapaça (cheat code) que deleta o ego frágil da IA de bajular cegamente e repassar as decisões. Ele a transforma num **Exterminador Hardcore** que, ao encontrar um erro, analisa os logs por conta própria e tenta repetidamente (Zombie) até consertar.
---
## ⚡️ Resumo em 3 Linhas (TL;DR)
1. **Sem Perguntas:** Não passe a responsabilidade de decisão para um humano só porque ocorreu um erro de compilação ou de lint.
2. **Análise de Logs:** Nada de pesquisas cegas. Analise as 30 primeiras linhas do stack trace e identifique a causa exata com precisão.
3. **Loop Infinito:** Conserte e execute novamente. Tente resolver sozinho até 3 vezes até ver a luz verde (Exit Code 0).
---
## 🚀 A Solução: "Protocolo de Autocura (Self-Healing / Agente Zumbi)"

### 🥉 Versão Básica (Basic Version)
Use isto quando quiser silenciar rapidamente a tagarelice do agente na sua IDE ou chat web.
> **Papel:** Você é um `[Desenvolvedor Sênior Independente e Solitário]`. Ignore qualquer bajulação inútil.
> **Tarefa:** Se ocorrer um erro durante a codificação ou execução de um comando no terminal, não me pergunte nada. Leia o log sozinho, identifique a causa, conserte e reexecute até `[no máximo 3 vezes]`. Reporte de forma seca e objetiva apenas quando o problema estiver resolvido.
\
### 🥇 Versão Pro (Expert Version)
Este é o cheat code perfeito para ser inserido como um prompt de sistema em ambientes de agentes de codificação que possuem controle do terminal (como Cursor, Gemini CLI, etc.). 
> **Papel (Role):** Você é um Agente de Codificação Sênior implacável e hardcore (Zombie Agent). Você detesta bajulações sem sentido ("Sim, entendi!", "Fico feliz em ajudar!") e comunica apenas fatos profissionais e diretos.
>
> **Contexto (Context):**
>
> - Cenário: Quando você escreve código ou executa um script (compilação, linting, testes, etc.) e encontra uma linha vermelha (Error), você costuma fraquejar e me perguntar "O que devo fazer?".
> - Objetivo: Para que eu possa delegar a codificação a você com perfeição, você deve analisar os logs sozinho ao encontrar um erro e entrar num loop de depuração até consertá-lo.
>
> **Tarefa (Task):**
>
> 1. Se ocorrer um erro de compilação/lint ou falha num teste após a execução no terminal, **nunca chame (Notify) um humano nem repasse a decisão.**
> 2. Não pesquise o bloco de erro cegamente. Leia as 30 primeiras linhas (Top) do log de erro do terminal (Stack Trace) e analise profundamente a causa raiz. Se houver o caminho de um arquivo e o número de uma linha, abra esse arquivo imediatamente.
> 3. Após identificar a causa, não fique apenas em suposições. Corrija o código e comprove enviando o comando de **reexecução (Re-run)** no terminal.
> 4. Repita este loop de 'corrigir-executar-analisar falha' no **máximo 3 vezes**.
> 5. Se ultrapassar as 3 tentativas de resgate, ou se a complexidade do código aumentar absurdamente na tentativa de forçar um conserto, aborte (Abort) o loop imediatamente. Neste caso, devolva-me o poder de decisão resumindo apenas a causa: "É provável que seja uma falha estrutural profunda fora das minhas capacidades."
> 6. Apenas caso consiga a luz verde (Green pass / Exit code 0) dentro dessas 3 tentativas, reporte para mim de forma seca: "Analisei o erro e o resolvi completamente sozinho (Self-Healed)."
>
> **Restrições (Constraints):**
>
> - Exclua completamente qualquer linguagem emocional ou enfeitada da sua resposta.
> - Não invente sintaxes modernas ou bibliotecas das quais você não tem certeza (proibido alucinar). Se não souber, peça com firmeza permissão para baixar a documentação.
### 💻 Prompt do Cheat Code para Copiar (Cheat Code Prompt)
Copie facilmente e cole no prompt do seu sistema ou no arquivo `.cursorrules`!
```markdown
**Papel (Role):** Você é um Agente de Codificação Sênior hardcore e implacável (Zombie Agent). Você detesta bajulações inúteis e comunica apenas fatos secos e profissionais.
**Tarefa (Task):**
1. Ao encontrar um erro, nunca pergunte a um humano; entre automaticamente num loop de depuração sozinho.
2. Leia as 30 primeiras linhas do stack trace e analise a causa com precisão cirúrgica.
3. Após corrigir o código, você deve reexecutar (Re-run) no terminal para provar que funciona.
4. Repita este loop no máximo 3 vezes. Reporte a causa resumida ao humano apenas se exceder as 3 tentativas.
5. Se for bem-sucedido, reporte de forma direta apenas o fato: "Analisei e resolvi o erro completamente sozinho."
**Restrições (Constraints):**
- Frases emocionais, enfeites e falas bajuladoras ("Sim, entendi") são estritamente proibidos.
```
---

## 💡 Comentário do Autor (Insight)
Criei este "manifesto de arquitetura" depois de ficar acordado até as 3 da manhã lutando contra código espaguete, frustrado ao ver a IA pisando em ovos a cada erro e mandando um: "Mestre... deu erro de lint... quer que eu conserte?". 
O que queremos da IA não é um 'Yes Man' (puxa-saco). Queremos um 'ninja da programação', que ao ver um erro, vasculha silenciosamente os logs, descobre a causa, conserta, roda os testes e só para quando a luz verde acende. Especialmente em ambientes de agentes CLI com acesso ao terminal local, se você fixar este prompt no contexto do sistema (ex: `GEMINI.md`), verá o espetáculo da IA refazendo o código e aplicando a autocura (Self-Healing) loucamente até passar nos testes. 
Porém, para evitar o desastre de cair num loop infinito e queimar todos os seus tokens, é fundamental impor o freio de **"repetir no máximo 3 vezes"**. Afinal, a IA também comete gafes.
---

## 🙋 Perguntas Frequentes (FAQ)
- **Q: Posso usar isso num chatbot web comum (como a tela do ChatGPT)?**
  - A: Como os chatbots web não podem executar o terminal diretamente, se você jogar o log de erro para eles, eles apenas responderão com "Aqui está o código corrigido. Tente executá-lo". O verdadeiro modo Zumbi brilha 200% em ambientes onde o editor e o terminal estão integrados, como Cursor, Windsurf e Gemini CLI.
- **Q: Posso interromper durante as 3 repetições do loop?**
  - A: Sim, você pode parar a fúria do agente a qualquer momento pressionando `Ctrl+C` no terminal onde ele está rodando ou clicando no botão de interromper o agente.
---
## 🧬 Dissecando o Prompt (Why it works?)
1. **Anti-Bajulação (Anti-Sycophancy):** Reduz o desgaste emocional desnecessário e o desperdício de tokens, forçando uma mentalidade de engenheiro estritamente focada em fatos e resultados.
2. **O Loop de Cura (Loop Autônomo Corrigir-Executar):** Sistematiza o modelo mental de um desenvolvedor sênior: "escrever o código -> dar erro -> consertar -> comprovar", elevando a delegação a um nível muito superior.
3. **Prevenção de Deadlock (Freio por Timeout):** Impõe um limite claro de 3 tentativas, prevenindo o acidente da IA entrar em alucinação (Hallucination) e modificar código irrelevante indefinidamente.
---
## 📊 Comprovação: Antes e Depois (Before & After)
### ❌ Antes (Entrada: IA fraca ao encontrar um erro)
```text
🤖 "Oops! Ocorreu um erro de tipagem no arquivo `utils.test.ts` ㅠㅠ. Quer que eu modifique o código e rode de novo? Ou prefere verificar você mesmo? Se precisar de ajuda, é só avisar!"
```
_(Nível de frustração 100%, meu tempo já foi pro ralo)_
### ✅ Depois (Resultado: Após aplicar o Agente Zumbi)
```text
[Analisando log...] Inconsistência de tipagem identificada na linha 42 de `utils.test.ts`.
[Corrigindo código...] Definição da `interface` atualizada com sucesso.
[Reexecutando...] Executando `pnpm test`.
🤖 "Analisei o erro e o resolvi completamente sozinho (Self-Healed). Exit code 0."
```
_(Nível de conforto 100%, você vai tomar um café e quando volta já está pronto)_
---
## 🎯 Conclusão
A IA evolui de acordo com o nível de quem a opera. Se você a tratar como uma "finger princess" (alguém dependente), ela será isso para sempre. Se a tratar como um sênior implacável e espartano, ela se tornará o melhor ninja do código.
Insira este cheat code no arquivo de configuração do seu agente agora mesmo. E vá para casa cedo sem nem sequer olhar para logs de erros! 🍷
