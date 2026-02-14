---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Domina la extracción de datos estructurados con Google LangExtract"
date: 2024-05-20
pubDate: 2024-05-20
description: "Aprende a extraer JSON preciso y datos estructurados de LLMs usando la nueva biblioteca LangExtract de Google."
author: "Hello Prompt"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "Google LangExtract Logo"
tags: ["Google", "LLM", "Data Extraction", "Python", "AI"]
---

Si bien los modelos de lenguaje grandes (LLM) son excelentes para escribir poesía o generar código, a menudo tienen dificultades con la tarea más necesaria en las aplicaciones empresariales: **la extracción de datos estructurados**. Extraer información específica del texto y ajustarla con precisión al formato JSON ha sido un desafío solo con la ingeniería de prompts.

Google recientemente reveló **LangExtract**, una nueva biblioteca de Python que aborda este problema de frente. En este artículo, exploraremos qué es LangExtract y cómo puede revolucionar tus pipelines de datos.

## ¿Qué es LangExtract?

LangExtract funciona sobre los modelos Gemini y Vertex AI de Google, convirtiendo datos de texto no estructurados en objetos estructurados (generalmente modelos Pydantic o Dataclasses de Python). Ofrece una **seguridad de tipos** y una **capacidad de recuperación de errores** mucho más sólidas que los analizadores tradicionales de LangChain o las instrucciones simples de prompts.

### Características clave

1.  **Extracción basada en esquemas**: Define un modelo Pydantic y obliga al LLM a generar datos que coincidan exactamente con ese esquema.
2.  **Autocorrección (Self-Correction)**: Si el modelo genera un formato incorrecto, la biblioteca detecta automáticamente los errores de análisis y pide al modelo que se corrija a sí mismo, obteniendo un resultado válido.
3.  **Optimización para Gemini**: Aprovecha las capacidades de llamadas a funciones de los últimos modelos Gemini Pro y Flash de Google para realizar tareas de extracción de manera rápida y rentable.

## Ejemplo de uso

Veamos un ejemplo de extracción de información de una reunión a partir de un cuerpo de correo electrónico simple.

```python
from google.langextract import DataExtractor
from pydantic import BaseModel, Field
from datetime import datetime

# 1. Definir el esquema para la extracción de datos
class MeetingInfo(BaseModel):
    topic: str = Field(description="Tema de la reunión")
    participants: list[str] = Field(description="Lista de nombres de los participantes")
    start_time: datetime = Field(description="Hora de inicio de la reunión")
    location: str | None = Field(description="Ubicación de la reunión (null si no hay)")

# 2. Inicializar el extractor (usando el modelo Gemini)
extractor = DataExtractor(model="gemini-1.5-flash")

email_content = """
Hemos programado la reunión de 'Estrategia de Marketing Q3' para el próximo martes a las 2 PM.
Los asistentes son Juan, María y Carlos.
La ubicación es la Sala de Conferencias 301. ¡No lleguen tarde!
"""

# 3. Ejecutar la extracción de datos
meeting = extractor.extract(MeetingInfo, email_content)

print(meeting)
# Salida:
# topic='Estrategia de Marketing Q3'
# participants=['Juan', 'María', 'Carlos']
# start_time=datetime(2024, 5, 21, 14, 0)
# location='Sala de Conferencias 301'
```

## ¿Por qué LangExtract?

Anteriormente, tenías que usar expresiones regulares (Regex) o escribir prompts complejos, pero con LangExtract, puedes construir pipelines de datos con un enfoque **code-first** (primero el código). Es particularmente útil para extraer argumentos clave necesarios para respuestas de documentos recuperados en sistemas RAG (Generación Aumentada por Recuperación), o estructurar información de pedidos en chatbots de atención al cliente para pasarla a una API.

## Conclusión

Google LangExtract transforma los LLM de simples chatbots en **motores de procesamiento de datos confiables**. Instálalo hoy e introdúcelo en tus proyectos. El dolor del preprocesamiento de datos se reducirá drásticamente.
