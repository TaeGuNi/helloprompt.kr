---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Domine a extração de dados estruturados com Google LangExtract'
pubDate: 2024-05-20
description: 'Aprenda como extrair JSON preciso e dados estruturados de LLMs usando a nova biblioteca LangExtract do Google.'
author: 'Hello Prompt'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Google LangExtract Logo'
tags: ["Google", "LLM", "Data Extraction", "Python", "AI"]
---

Embora os grandes modelos de linguagem (LLMs) sejam excelentes em escrever poesia ou gerar código, eles frequentemente lutam com a tarefa mais necessária nas aplicações de negócios: **a extração de dados estruturados**. Extrair informações específicas de um texto e ajustá-las com precisão ao formato JSON tem sido um desafio apenas com a engenharia de prompts.

O Google revelou recentemente o **LangExtract**, uma nova biblioteca Python que aborda esse problema de frente. Neste artigo, vamos explorar o que é o LangExtract e como ele pode revolucionar seus pipelines de dados.

## O que é LangExtract?

O LangExtract opera sobre os modelos Gemini e Vertex AI do Google, convertendo dados de texto não estruturados em objetos estruturados (tipicamente modelos Pydantic ou Dataclasses Python). Ele oferece uma **segurança de tipos** e uma **capacidade de recuperação de erros** muito mais robustas do que os analisadores tradicionais do LangChain ou as instruções simples de prompts.

### Principais recursos

1.  **Extração baseada em esquemas**: Defina um modelo Pydantic e force o LLM a gerar dados que correspondam exatamente a esse esquema.
2.  **Autocorreção (Self-Correction)**: Se o modelo gerar um formato incorreto, a biblioteca detecta automaticamente os erros de análise e pede ao modelo que se corrija, obtendo um resultado válido.
3.  **Otimização para Gemini**: Ele aproveita os recursos de chamada de função dos modelos mais recentes Gemini Pro e Flash do Google para realizar tarefas de extração de forma rápida e econômica.

## Exemplo de uso

Vamos ver um exemplo de extração de informações de reunião a partir de um corpo de e-mail simples.

```python
from google.langextract import DataExtractor
from pydantic import BaseModel, Field
from datetime import datetime

# 1. Definir o esquema para extração de dados
class MeetingInfo(BaseModel):
    topic: str = Field(description="Tópico da reunião")
    participants: list[str] = Field(description="Lista de nomes dos participantes")
    start_time: datetime = Field(description="Hora de início da reunião")
    location: str | None = Field(description="Local da reunião (null se nenhum)")

# 2. Inicializar o extrator (usando o modelo Gemini)
extractor = DataExtractor(model="gemini-1.5-flash")

email_content = """
Agendamos a reunião 'Estratégia de Marketing Q3' para a próxima terça-feira às 14h.
Os participantes são Ana, Pedro e João.
O local é a Sala de Conferências 301. Não se atrasem!
"""

# 3. Executar a extração de dados
meeting = extractor.extract(MeetingInfo, email_content)

print(meeting)
# Saída:
# topic='Estratégia de Marketing Q3'
# participants=['Ana', 'Pedro', 'João']
# start_time=datetime(2024, 5, 21, 14, 0)
# location='Sala de Conferências 301'
```

## Por que LangExtract?

Anteriormente, você tinha que usar expressões regulares (Regex) ou escrever prompts complexos, mas com o LangExtract, você pode construir pipelines de dados com uma abordagem **code-first**. É particularmente útil para extrair argumentos-chave necessários para respostas de documentos recuperados em sistemas RAG (Retrieval-Augmented Generation), ou estruturar informações de pedidos em chatbots de suporte ao cliente para passar para uma API.

## Conclusão

O Google LangExtract transforma os LLMs de simples chatbots em **motores de processamento de dados confiáveis**. Instale-o hoje mesmo e introduza-o em seus projetos. A dor do pré-processamento de dados será drasticamente reduzida.
