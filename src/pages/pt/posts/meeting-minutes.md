---
layout: /src/layouts/Layout.astro
title: "O que você perdeu anotando a ata, a IA organiza para você"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "Automação de Trabalho"
description: "Não pergunte 'o que foi dito mesmo?' após a reunião. Com apenas um arquivo de gravação, o resumo fica pronto em 1 minuto."
tags: ["reunião", "resumo", "produtividade"]
---

# 📝 O que você perdeu anotando a ata, a IA organiza para você

- **🎯 Recomendado para:** Todos os trabalhadores, PMs, secretários
- **⏱️ Tempo necessário:** 30 min → Reduzido para 1 min
- **🤖 Modelo recomendado:** Clova Note (STT), ChatGPT (GPT-4), Claude 3

- ⭐ **Dificuldade:** ⭐☆☆☆☆
- ⚡️ **Eficiência:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidade:** ⭐⭐⭐⭐⭐

> _"Não pergunte 'o que foi dito mesmo?' após a reunião. Com apenas um arquivo de gravação, o resumo fica pronto em 1 minuto."_

Registrar todo o conteúdo da reunião é ineficiente. O importante são as 'decisões tomadas' e as 'tarefas a fazer (Action Items)'. Este prompt transforma o conteúdo disperso da reunião em uma lista de tarefas clara.

---

## ⚡️ Resumo em 3 linhas (TL;DR)

1. Resumo de atas longas e extração de pontos principais
2. Geração automática de Action Items (Responsável/Prazo)
3. Especificação de decisões e planos futuros

---

## 🚀 Solução: "Meeting Minutes Master"

### 🥉 Versão Básica

Use quando quiser entender apenas o essencial rapidamente.

> **Função:** Você é um secretário competente.
> **Solicitação:** Resuma esta ata de reunião e me diga apenas os 3 pontos principais.
> **Entrada:** `[Texto da Ata]`

<br>

### 🥇 Versão Pro

Use quando for necessário um compartilhamento sistemático da ata.

> **Função (Role):** Você é um gerente de projetos (PM) meticuloso.
>
> **Contexto (Context):**
>
> - Tipo de Reunião: `[Reunião Semanal / Kick-off / Brainstorming]`
> - Participantes: `[Lista de Participantes]`
>
> **Tarefa (Task):**
>
> 1. Organize a ata da reunião de acordo com o modelo abaixo.
>    - **📅 Data/Hora:** `[Data da Reunião]`
>    - **👥 Participantes:** `[Participantes]`
>    - **🗣️ Pauta Principal (Agenda):** `[Lista de Pautas]`
>    - **✅ Decisões (Decisions):** `[Conteúdo Decidido]`
>    - **📝 A Fazer (Action Items):**
>      - `[Responsável]` : `[Tarefa]` (~`[Prazo]`)
>    - **⏭️ Próxima Reunião:** `[Data Prevista]`
>
> **Restrições (Constraints):**
>
> - Remova conversas fiadas desnecessárias (piadas, conversa sobre o tempo, etc.).
> - Escreva os Action Items como ações o mais específicas possível (ex: "Revisar" -> "Escrever relatório e enviar e-mail").
>
> **Avisos (Warning):**
>
> - Verifique datas e números com precisão.

---

## 💡 Comentário do Autor (Insight)

Especialmente se você extrair o texto primeiro com ferramentas STT (Speech-to-Text) como o Clova Note, o efeito deste prompt é maximizado. Se você compartilhar em até 5 minutos após a reunião, será reconhecido como alguém que "trabalha bem".

---

## 🙋 Perguntas Frequentes (FAQ)

- **Q: E se a ata for muito longa?**
  - A: No caso do ChatGPT, há limite de entrada, então divida o texto ou faça upload do arquivo (usando Code Interpreter) e peça análise. O Claude é vantajoso para contextos longos.

- **Q: Funciona com texto sem separação de oradores?**
  - A: Sim, ele infere até certo ponto quem disse o que pelo contexto, mas para maior precisão, é bom ter a indicação dos oradores.

---

## 🧬 Anatomia do Prompt (Why it works?)

1.  **Apresentação de Template:** Deu-se um formato de saída claro para a IA, reduzindo o tempo de reprocessamento.
2.  **Instrução Explícita:** Instruções claras como "remover conversa fiada", "escrever ação específica" aumentaram a qualidade.

---

## 📊 Prova: Antes e Depois (Before & After)

### ❌ Antes (Entrada)

```text
(중구난방인 회의 녹취록 텍스트...)
김대리: 아, 그 건은 제가 이번 주까지 할게요.
박부장: 그래, 그거 중요하니까 빨리 처리해. 그리고 다음 주 워크샵 장소 섭외는?
이사원: 제가 몇 군데 알아보고 있는데 강남 쪽으로...
```

### ✅ Depois (Saída)

```markdown
**📝 할 일 (Action Items):**

- 김대리 : 중요 안건 처리 (~이번 주)
- 이사원 : 워크샵 장소(강남 인근) 섭외 및 리스트 보고 (~다음 주)
```

---

## 🎯 Conclusão

Deixe o registro para a IA, e o pensamento para os humanos! 🍷