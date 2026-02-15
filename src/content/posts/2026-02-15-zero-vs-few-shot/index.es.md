---
title: "Zero-Shot vs Few-Shot Learning: Cuándo proporcionar ejemplos"
date: "2026-02-15"
description: "Una guía para entender cuándo usar prompting zero-shot frente a few-shot para un rendimiento óptimo del LLM."
---

En el mundo de los Grandes Modelos de Lenguaje (LLM), _cómo_ pides algo es tan importante como _qué_ pides. Dos de las técnicas más fundamentales en la ingeniería de prompts son el aprendizaje **Zero-Shot** (cero ejemplos) y **Few-Shot** (pocos ejemplos). Entender la diferencia —y saber cuándo aplicar cada una— puede elevar significativamente la calidad de tus interacciones con la IA.

## ¿Qué es el aprendizaje Zero-Shot?

El prompting **Zero-Shot** implica pedirle al modelo que realice una tarea sin proporcionar ningún ejemplo específico del resultado deseado. Confías completamente en el conocimiento preentrenado del modelo y en su capacidad para entender instrucciones en lenguaje natural.

**Ejemplo:**

> "Traduce la siguiente frase al español: 'The weather is nice today.'"

Aquí, no le has mostrado al modelo _cómo_ traducir; simplemente le has dicho _que_ traduzca.

### Cuándo usar Zero-Shot:

- **Tareas de conocimiento general:** Traducciones estándar, resúmenes o respuestas a preguntas objetivas.
- **Instrucciones simples:** Cuando la tarea es sencilla y no requiere un formato específico y complejo.
- **Escritura creativa:** Cuando quieres que el modelo sea abierto y esté menos restringido por un patrón rígido.
- **Pruebas iniciales:** A menudo es mejor empezar con zero-shot para ver qué tan bien funciona el modelo "de fábrica" antes de añadir complejidad.

## ¿Qué es el aprendizaje Few-Shot?

El prompting **Few-Shot** (a menudo llamado "Aprendizaje en Contexto") implica proporcionar al modelo algunos ejemplos (shots) de la entrada y la salida deseada antes de la consulta real. Estos ejemplos sirven como un patrón a seguir para el modelo.

**Ejemplo:**

> Traduce del inglés a una jerga pirata específica.
>
> Inglés: "Hello, how are you?"
> Pirata: "Ahoy matey, how be ye fairin'?"
>
> Inglés: "Where is the bathroom?"
> Pirata: "Where be the head?"
>
> Inglés: "I would like some water."
> Pirata:

Al ver los pares anteriores, el modelo entiende no solo que necesita traducir, sino el **tono** y **estilo** específicos requeridos.

### Cuándo usar Few-Shot:

- **Formato complejo:** Cuando necesitas la salida en una estructura específica (por ejemplo, JSON, CSV o un estilo de documento específico) que el modelo no logra producir solo con instrucciones.
- **Estilo/Tono matizado:** Al imitar una voz específica, identidad de marca o estilo lingüístico.
- **Lógica difícil:** Para tareas de razonamiento, proporcionar ejemplos de la "cadena de pensamiento" puede ayudar a guiar al modelo hacia la conclusión correcta.
- **Conceptos nuevos o personalizados:** Si estás usando palabras inventadas o terminología de dominio específica, los ejemplos las definen en contexto.

## El compromiso (Trade-off)

Aunque Few-Shot a menudo produce mayor precisión para tareas complejas, tiene un costo: la **Ventana de Contexto**.

Cada ejemplo que proporcionas consume tokens. En conversaciones o documentos muy largos, llenar el prompt con demasiados ejemplos podría limitar el espacio disponible para el contenido real que deseas procesar.

## Conclusión

Empieza con **Zero-Shot**. Los modelos modernos como GPT-4 y Claude 3 son notablemente capaces sin ejemplos. Si el modelo no logra seguir tu formato o estilo, actualiza a **Few-Shot** añadiendo 1-3 ejemplos claros y de alta calidad. Este enfoque iterativo asegura que equilibres la eficiencia con el rendimiento.
