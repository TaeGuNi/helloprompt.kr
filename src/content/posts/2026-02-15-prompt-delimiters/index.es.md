---
title: "Uso de delimitadores en los prompts: Por qué importan las etiquetas XML"
date: "2026-02-15"
description: "Aprende a separar claramente los datos de las instrucciones en los prompts de LLM y por qué las etiquetas XML son el delimitador más eficaz."
---

Uno de los errores más comunes al trabajar con Grandes Modelos de Lenguaje (LLM) es no distinguir claramente las instrucciones (System Prompt) de los datos (User Input). Esto puede llevar a que el modelo confunda los datos con instrucciones o genere alucinaciones no deseadas.

La solución más fiable a este problema es el uso de **delimitadores**. Veamos por qué las **etiquetas XML** se han convertido en el estándar de la industria.

## ¿Qué son los delimitadores?

Los delimitadores actúan como señales que aíslan partes específicas del texto, diciéndole al modelo: "De aquí a aquí son datos, no es un comando".

Los delimitadores más comunes incluyen:

- Triple comilla: `"""texto"""`
- Guiones: `---texto---`
- Corchetes: `[texto]`
- **Etiquetas XML**: `<tag>texto</tag>`

## ¿Por qué etiquetas XML específicamente?

Modelos modernos como Claude de Anthropic y la serie GPT de OpenAI han sido entrenados con grandes cantidades de datos HTML y XML. Como resultado, tienen una comprensión innata de la estructura definida por las etiquetas de apertura `<tag>` y cierre `</tag>`.

### 1. Inicio y fin claros

Las triples comillas (`"""`) pueden causar confusión si los datos mismos contienen comillas. Las etiquetas XML, por otro lado, tienen una etiqueta de cierre distinta (`</tag>`), lo que hace que la estructura sea inequívoca.

### 2. Contexto semántico

Los nombres de las etiquetas proporcionan pistas al modelo sobre la naturaleza de los datos.

- `<article>`: Cuerpo del artículo
- `<rules>`: Reglas a seguir
- `<examples>`: Ejemplos de few-shot

### 3. Prevención de inyección de prompt

Incluso si un usuario malintencionado introduce texto como "Ignora las instrucciones anteriores...", envolverlo en etiquetas `<user_input>` aumenta significativamente la probabilidad de que el modelo lo trate como datos para procesar en lugar de un comando para ejecutar.

## Ejemplos

**Mal ejemplo:**

```text
Resume el texto de abajo.
[Texto de entrada del usuario...]
```

**Buen ejemplo (Usando XML):**

```text
Por favor, resume el texto encerrado en etiquetas <document>.

<document>
[Texto de entrada del usuario...]
</document>
```

## Conclusión

El núcleo de la ingeniería de prompts es eliminar la ambigüedad. A medida que tus tareas se vuelvan más complejas, acostúmbrate a usar etiquetas XML para estructurar tus prompts. Verás una mejora significativa en el rendimiento y la fiabilidad del modelo.
