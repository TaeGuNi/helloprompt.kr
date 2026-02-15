---
title: "Estructurando Prompts Complejos: El Marco CREATE"
date: "2026-02-15"
desc: "Aprenda a obtener respuestas de IA consistentes y de alta calidad utilizando el marco CREATE, un concepto central en la ingeniería de prompts para tareas complejas."
---

# Estructurando Prompts Complejos: El Marco CREATE

A medida que los modelos de IA evolucionan, les encomendamos tareas cada vez más complejas. Si bien los prompts simples son suficientes para preguntas sencillas, instruir a la IA sobre lógica de negocios compleja o tareas creativas requiere un enfoque sistemático.

Esta publicación presenta el **Marco CREATE**, un método para estructurar lógicamente los prompts y maximizar el rendimiento de la IA.

## ¿Qué es el Marco CREATE?

CREATE representa seis elementos clave esenciales para la construcción efectiva de prompts.

1.  **C**ontext (Contexto): Asignar un rol y situación a la IA.
2.  **R**equest (Solicitud): Indicar claramente la tarea específica a realizar.
3.  **E**xamples (Ejemplos): Proporcionar ejemplos (Few-shot) del resultado deseado.
4.  **A**djustments (Ajustes): Establecer el tono, estilo y restricciones.
5.  **T**ype of Output (Tipo de Salida): Especificar el formato del resultado (tabla, código, markdown, etc.).
6.  **E**xtras (Extras): Incluir el manejo de casos extremos o instrucciones especiales.

---

## Guía Paso a Paso

### 1. Context (Contexto)

Darle a la IA una personalidad cambia significativamente la calidad de la respuesta.

> "Eres un Ingeniero de Software Senior con 10 años de experiencia. Te especializas en refactorizar código heredado (legacy) en código limpio moderno."

### 2. Request (Solicitud)

Evita la ambigüedad y usa verbos claros.

> "Analiza la función de Python proporcionada a continuación y refactorízala para mejorar la legibilidad y optimizar la velocidad de ejecución."

### 3. Examples (Ejemplos)

La IA aprende patrones a través de ejemplos. Muestra pares de entrada y salida.

> **Entrada:**
> `def calc(x,y): return x+y`
>
> **Salida:**
>
> ```python
> def add_numbers(a: int, b: int) -> int:
>     """Devuelve la suma de dos números."""
>     return a + b
> ```

### 4. Adjustments (Ajustes)

Decide el tono y la forma de la respuesta.

> "Mantén las explicaciones concisas y usa terminología profesional, pero mantén un tono amigable accesible para desarrolladores junior."

### 5. Type of Output (Tipo de Salida)

Especifica cómo quieres recibir el resultado.

> "Presenta el resultado mostrando primero el código completo modificado en un bloque de código, seguido de un resumen con viñetas de los cambios."

### 6. Extras (Extras)

Prevenir situaciones inesperadas.

> "Si se encuentra una vulnerabilidad de seguridad en el código, por favor emite un mensaje de advertencia separado además de la refactorización."

---

## Conclusión

El uso del marco CREATE te permite reducir el tiempo de escritura de prompts mientras mantienes una calidad de salida consistente. Cuando te enfrentes a problemas complejos, en lugar de preguntar vagamente, organiza tus pensamientos de acuerdo con la estructura CREATE. La IA responderá tan inteligentemente como tú la diseñes.
