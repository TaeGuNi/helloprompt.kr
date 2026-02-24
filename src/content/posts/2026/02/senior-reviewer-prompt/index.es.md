---
title: "Code Review Yourself: The 'Senior Reviewer' Prompt That Catches Bugs Before Your Team Does"
description: "Stop pushing 'fix' commits. Use this copy-paste prompt to get a senior-level code audit in 30 seconds."
date: "2026-02-15"
image: "https://picsum.photos/seed/code-review/800/600"
tags: ["AI", "Coding", "Productivity", "Prompt Engineering"]
author: "OpenClaw"
---

# 📝 Contrata a tu propio Desarrollador Senior: El prompt de 'Revisión de Código' que detecta errores antes del PR

- **🎯 Audiencia Recomendada:** Desarrolladores junior y semi-senior (1-3 años de experiencia) que trabajan sin un mentor directo.
- **⏱️ Tiempo Invertido:** 15 minutos → 30 segundos
- **🤖 Modelo Recomendado:** Claude 3.5 Sonnet (Excelente en análisis de código), GPT-4o, DeepSeek-Coder-V2

- ⭐ **Dificultad:** ⭐☆☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Alguna vez has sudado frío al ver 15 comentarios de tu Tech Lead apenas 10 minutos después de abrir un Pull Request?"_

Abrir un Pull Request (PR) y encontrarte de inmediato con comentarios como "Falta manejar un NullPointerException aquí", "El nombre de esta variable es muy ambiguo" o "¿Por qué se ejecuta esta lógica dos veces?" es una experiencia dolorosa por la que todo desarrollador ha pasado.

Pero, ¿qué pasaría si pudieras recibir todo ese feedback crítico **antes de abrir el PR**? Con un simple copiar y pegar, puedes tener a un desarrollador senior incansable, disponible 24/7, directamente en tu portapapeles.

No se trata simplemente de pedirle a la IA que haga el trabajo por ti. Es la forma más inteligente de ahorrar el valioso tiempo de tus compañeros, proteger tu reputación y acelerar tu crecimiento profesional.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Los linters tradicionales (como ESLint o SonarQube) no pueden detectar defectos lógicos complejos ni fallos de arquitectura.
2. Asigna a la IA el rol de un "Ingeniero Senior estricto pero constructivo" para realizar un análisis semántico profundo basado en el contexto.
3. Restringe a la IA para que no reescriba tu código; oblígala a señalar solo "dónde está el problema", maximizando así tu propio aprendizaje.

---

## 🚀 La Solución: El prompt del "Revisor de Código Senior"

### 🥉 Basic Version (Versión Básica)

Úsalo cuando necesites una revisión rápida para detectar errores críticos o fallos de seguridad antes de un commit rápido.

> **Rol:** Eres un Ingeniero de Software Senior.
> **Tarea:** Revisa el siguiente código en busca de vulnerabilidades de seguridad o errores lógicos, y explícame los problemas de forma breve.
>
> ```
> [Pega tu código aquí]
> ```

<br>

### 🥇 Pro Version (Versión Experta)

Este es un prompt de nivel de producción que comprende el contexto del código y audita meticulosamente vulnerabilidades, oportunidades de refactorización y legibilidad.

> **Rol (Role):**
> Eres un Staff Software Engineer con 10 años de experiencia en una empresa Big Tech. Eres famoso por tu ojo clínico para detectar 'Code Smells', vulnerabilidades de seguridad y oportunidades para mejorar la legibilidad. Tu objetivo es ayudar a los desarrolladores junior a mejorar su código por sí mismos, con críticas constructivas y sin desanimarlos.
>
> **Contexto (Context):**
>
> - Antecedentes: Acabo de terminar de implementar una función y estoy a punto de abrir un Pull Request.
> - Objetivo: Maximizar la mantenibilidad del código y detectar fallos lógicos ocultos para ahorrar tiempo de revisión a mis compañeros de equipo.
>
> **Tarea (Task):**
> Revisa el fragmento de código que te proporciono. Responde en formato Markdown dividiendo tu análisis estrictamente en las siguientes 4 secciones:
>
> 1. **🚨 Problemas Críticos (Critical Issues):** Errores, riesgos de seguridad o condiciones de carrera (Si el código es perfecto, di "¡Ninguno! 🎉").
> 2. **🧹 Sugerencias de Refactorización (Refactoring Suggestions):** Propuestas para un código más limpio y eficiente (basadas en los principios DRY y SOLID).
> 3. **📝 Legibilidad (Readability):** Evaluación exhaustiva de nombres de variables/funciones, coherencia de comentarios y complejidad ciclomática.
> 4. **✨ El Consejo "Senior" (The "Senior" Tip):** Un único consejo avanzado a nivel de arquitectura relacionado con este código.
>
> **Restricciones (Constraints):**
>
> - **Nunca reescribas todo el código** a menos que yo te lo pida explícitamente.
> - Concéntrate en la **lógica (Logic) y la arquitectura** más que en simples errores de sintaxis (Syntax), asumiendo que el código ya pasó por un linter.
> - Sé directo, conciso y profesional. Usa viñetas (Bullet points) para que la lectura sea ágil.
> - Si una parte del código es excelente, ¡no dudes en elogiarla!
>
> **Código de Entrada (Input Code):**
>
> ```
> [Pega el código a revisar aquí]
> ```

---

## 💡 Comentario del Autor (Insight)

Cuando empecé a usar la IA para programar, cometía el error de decirle simplemente: "Arregla este código". ¿El resultado? La IA reescribía mi lógica en un estilo que yo no podía reconocer ni mantener. Funcionaba en el momento, pero sentía que me convertía en un mero operador, no en un ingeniero.

La verdadera magia de este prompt radica en sus **Restricciones (Constraints)**. Una sola línea: *"Nunca reescribas todo el código a menos que yo te lo pida explícitamente"*, transforma a la IA de una simple "máquina expendedora de código" a un "mentor excepcional". En lugar de darte la respuesta servida en bandeja de plata, señala las deficiencias, obligándote a pensar, a corregirlas tú mismo y a interiorizar el aprendizaje (*Learn by doing*).

En un entorno de trabajo real, recomiendo encarecidamente guardar este prompt en tu aplicación de notas (como Notion o Obsidian) y usarlo como un ritual obligatorio 5 minutos antes de enviar cualquier PR. Tu síndrome del impostor desaparecerá por completo.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: Las políticas de seguridad de mi empresa prohíben estrictamente subir código a ChatGPT. ¿Qué hago?**
  - A: Nunca subas código propietario ni claves de API a modelos públicos. Si estás en un entorno corporativo restrictivo, te recomendamos usar **Ollama** para ejecutar modelos locales (como Llama 3 o DeepSeek-Coder-V2) y utilizar este prompt de forma 100% offline y segura.

- **P: ¿Qué pasa si la IA me sugiere usar un método o librería que no existe?**
  - A: Las alucinaciones (Hallucinations) son un riesgo real, especialmente con frameworks muy nuevos o bibliotecas internas de tu empresa. No confíes ciegamente en la revisión de la IA; tómala como el "consejo de un colega" y siempre verifica con la documentación oficial o tu propio IDE.

- **P: ¿Qué modelo de IA es el más adecuado para revisar código actualmente?**
  - A: A partir de 2026, **Claude 3.5 Sonnet** muestra un rendimiento abrumador en el análisis de bases de código y razonamiento lógico profundo. Es excepcional para comprender el contexto general y señalar con precisión los puntos clave a refactorizar, superando a menudo a GPT-4 en tareas de programación pura.

---

## 🧬 Anatomía del prompt (Why it works?)

1. **Diseño de Persona (Role):** Al asignarle un rol específico y autoritario ("Staff Software Engineer con 10 años en Big Tech"), elevamos el nivel de exigencia y la perspectiva de la revisión hacia un enfoque arquitectónico.
2. **Control de Comportamiento (Constraints):** Al prohibir la reescritura total del código, evitamos la pereza intelectual. Esto garantiza que el desarrollador aprenda del error y mantenga el control sobre el estilo de su propio código.
3. **Salida Estructurada (Format):** Al forzar la respuesta en 4 secciones delimitadas (desde problemas críticos hasta consejos senior), obtenemos un informe de auditoría consistente, fácil de escanear e inmediatamente procesable.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Código sin revisar)

Esta función en Python "hace su trabajo", pero tiene declaraciones `if` anidadas, números mágicos y una fuga de recursos crítica por olvidar cerrar el archivo.

```python
def process(d):
    if d['type'] == 1:
        f = open('log.txt', 'a')
        f.write(str(d['val']))
        # Ups... olvidé llamar a f.close()
```

### ✅ Después (Resultado de la revisión de la IA)

Al aplicar el prompt Pro, la IA no te da el código resuelto, sino que te entrega una auditoría letal y educativa en menos de 5 segundos:

- **🚨 Problemas Críticos:** "Has abierto un archivo con `open()` pero no lo has cerrado. Esto provocará una fuga de recursos (Resource Leak) si la función se llama repetidamente. Utiliza un gestor de contexto (`with open(...) as f:`)."
- **📝 Legibilidad:** "El nombre del parámetro `d` es demasiado abstracto. Cámbialo a `data` o `event_payload` para clarificar tu intención sin necesidad de comentarios."
- **✨ El Consejo "Senior":** "El 'número mágico' `1` es un antipatrón. Si alguien lee este código en 6 meses, no sabrá qué significa '1'. Decláralo como una constante con un nombre descriptivo al principio del archivo (ej. `EVENT_TYPE_LOG = 1`)."

A un humano le tomaría al menos 10 minutos cambiar de contexto, leer el código y redactar estos comentarios. Tú lo obtienes al instante.

---

## 🎯 Conclusión

Ya no tienes que dudar ni sentirte nervioso al acercarte al escritorio de tus compañeros para preguntar: *"¿Podrías revisar mi PR cuando tengas un hueco?"*.

Copia el prompt experto de arriba y pruébalo ahora mismo con ese fragmento de código que te ha estado dando dolores de cabeza. Tu equipo de repente empezará a preguntarse por qué la calidad técnica de tus Pull Requests se ha vuelto tan impecable.

Audita tu código, haz merge con confianza y, lo más importante... ¡sal del trabajo a tiempo! 🍷
