---
title: "Self-Healing Code: Building an Agent That Fixes Its Own Bugs"
description: "Stop babying your AI code generator. Learn how to build a 'Self-Healing' workflow where agents write, run, and fix their own errors automatically. A guide to Reflection loops."
author: "Unifactory Editor"
date: "2026-02-16"
tags: ["AI Agent", "Coding", "Automation", "Python", "Local LLM", "Workflow"]
image: "/images/2026/02/16/self-healing-code.jpg"
---

# 📝 Código Autocurativo (Self-Healing Code): Cómo construir un agente de IA que corrija sus propios errores

- **🎯 Público objetivo:** Desarrolladores, ingenieros de datos, líderes técnicos que evalúan la adopción de agentes de IA.
- **⏱️ Tiempo estimado:** De horas de depuración infinita → 0 minutos (Automatizado).
- **🤖 Modelos recomendados:** GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro (Modelos especializados en código).

- ⭐ **Dificultad:** ⭐⭐⭐⭐☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Sigues copiando y pegando mensajes de error para que la IA corrija el código que ella misma generó?"_

Generas un script de Python con IA, lo ejecutas y... `SyntaxError`. Copias el error, lo pegas de vuelta en el chat de la IA, le pides que lo arregle, y solo entonces el código funciona.

Pero hazte esta pregunta: **¿Por qué un 'humano' tiene que actuar como un simple intermediario de copiar y pegar?**

En 2026, los ingenieros más avanzados ya no le piden a la IA que simplemente escriba código. Ellos construyen **Sistemas Autocurativos (Self-Healing Systems)**. Hoy descubriremos cómo automatizar ese tedioso bucle de "escribir → ejecutar → corregir", transformando un generador de código pasivo en un 'solucionador de problemas autónomo'.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Olvídate de la ilusión del 'One-Shot': la IA rara vez escribe código perfecto al primer intento.
2. El secreto es un 'Bucle de Reflexión (Reflection Loop)' que captura los errores de ejecución (`stderr`) y los retroalimenta a la IA.
3. Usando el módulo `subprocess` de Python, puedes construir un agente autocurativo con apenas 50 líneas de código.

---

## 🚀 Solución: Prompt "Sanador de Código (Code Healer)"

### 🥉 Versión Básica (Basic Version)

Úsalo para corregir errores simples rápidamente.

> **Rol:** Eres un `[Desarrollador Senior de Python]`.
> **Tarea:** Basándote en el siguiente `[Mensaje de error]`, corrige los errores del `[Código original]`.

<br>

### 🥇 Versión Profesional (Pro Version)

Úsalo para integrarlo en sistemas de agentes y construir pipelines de depuración automatizados.

> **Rol (Role):**
> Eres un SRE (Site Reliability Engineer) Senior de Python responsable de la fiabilidad del sistema. No necesito excusas ni explicaciones adicionales. Habla únicamente con código que funcione a la perfección.
> 
> **Contexto (Context):**
> 
> - Escenario: Un script generado por un modelo de IA ha fallado (Failed) durante su ejecución.
> - Objetivo: Analizar el `[Código original]` y el `[Registro de errores (Traceback)]` proporcionados para que el código se cure a sí mismo (Self-Heal).
> 
> **Tarea (Task):**
> 
> 1. Analiza el `[Registro de errores]` para identificar la causa raíz (error de sintaxis, error lógico, módulo no importado, etc.).
> 2. Revisa el `[Código original]` para localizar exactamente dónde ocurrió el fallo.
> 3. Reescribe el **código Python completo y corregido** sin omitir ninguna parte funcional.
> 
> **Restricciones (Constraints):**
> 
> - No elimines características principales ni la lógica del código existente. Concéntrate exclusivamente en 'corregir el error'.
> - NUNCA imprimas respuestas conversacionales innecesarias (Conversational filler) como "Aquí tienes el código corregido".
> - Tu salida DEBE consistir en un único bloque de código Python en formato Markdown (`python ... `) y nada más.
> 
> **Datos de Entrada (Input Data):**
> **Código original:**
> 
> ```python
> [Inserta aquí el código original]
> ```
> 
> **Registro de errores:**
> 
> ```text
> [Inserta aquí el mensaje de error stderr]
> ```

---

## 💻 Automatizando el Bucle con Python (Implementation)

No necesitas frameworks de IA pesados (como LangChain). Puedes orquestar este bucle a la perfección usando únicamente la biblioteca estándar de Python, específicamente el módulo `subprocess`.

```python
import subprocess
# Asumimos que la configuración del cliente LLM (OpenAI, etc.) ya está lista.
# from openai import OpenAI
# client = OpenAI()

def generate_fix(prompt):
    # Función para llamar al LLM y obtener el código corregido (GPT-4o, Claude, etc.)
    # response = client.chat.completions.create(...)
    # return response.choices[0].message.content
    pass

def run_and_heal(script_path, max_retries=3):
    for attempt in range(max_retries):
        # 1. Ejecución del código: Lo ejecutamos en un proceso separado para capturar errores de forma segura
        process = subprocess.run(
            ['python', script_path],
            capture_output=True, text=True
        )

        # Éxito: returncode 0 significa que no hay errores
        if process.returncode == 0:
            print(f"✅ ¡Éxito! (Intento número: {attempt + 1})")
            return process.stdout

        # Fallo: Extraemos el mensaje de error de stderr
        error_msg = process.stderr
        print(f"❌ Fallo (Intento número: {attempt + 1}): {error_msg.strip().splitlines()[-1]}")

        # 2. Autocuración (Agentic Step)
        with open(script_path, 'r') as f:
            broken_code = f.read()

        healing_prompt = f"""
        Corrige este código Python basándote en el error proporcionado.

        [Código original]
        {broken_code}

        [Mensaje de error]
        {error_msg}

        Devuelve ÚNICAMENTE el 'código corregido' sin explicaciones ni formato markdown extra.
        """

        fixed_code = generate_fix(healing_prompt)

        # Sobrescribimos el script original con el código corregido
        with open(script_path, 'w') as f:
            f.write(fixed_code)

        print(f"🩹 Curación de código completada. Ejecutando de nuevo...")

    print("💀 Se superó el número máximo de reintentos. La curación ha fallado.")
    return None
```

---

## 💡 Comentario del Autor (Insight)

Este patrón de 'Autocuración (Self-Healing)' cambia fundamentalmente la forma en que utilizamos la IA.

En el pasado, al crear herramientas de web scraping automatizado, me enfrentaba al problema de que la IA alucinaba (Hallucinate) selectores CSS inexistentes. En lugar de limitarme a capturar errores de sintaxis, añadí un **Bucle de Validación (Validation Loop)** que establecía: "Si la lista escrapeada está vacía, considéralo un error".

El resultado fue sorprendente. El agente empezó a **probar diferentes selectores CSS y a modificar el código por su cuenta** hasta que logró extraer los datos correctamente. Esto va más allá de corregir un simple bug; es el proceso en el que la IA se **Adapta (Adaptation)** a su entorno (la estructura de la página web). Más importante que generar el código es diseñar el bucle que hace que el código generado se 'verifique' y asuma su 'responsabilidad'.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Qué pasa si al sobrescribir el código el script se arruina por completo?**
  - R: En entornos de producción, es recomendable no sobrescribir `script_path` directamente. Es mejor implementar un control de versiones guardando los archivos como `script_v1.py`, `script_v2.py`, o automatizar commits de Git para tener un mecanismo de rollback seguro.

- **P: ¿Existe el riesgo de caer en un bucle infinito?**
  - R: Por eso es vital configurar el parámetro `max_retries` (número máximo de reintentos). Si un error no se resuelve en 3 a 5 intentos, lo más probable es que sea una limitación del prompt en sí o un fallo arquitectónico que requiera intervención humana.

- **P: ¿Qué modelo LLM es mejor para esta tarea?**
  - R: Dado que requiere razonamiento lógico y corrección de código, recomiendo encarecidamente modelos avanzados como GPT-4o, Claude 3.5 Sonnet, o los modelos locales más recientes especializados en programación.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Forzar el análisis de la causa (Chain-of-Thought):** Al darle a la IA la tarea de analizar primero el registro de errores antes de modificar el código, la obligamos a comprender la naturaleza del problema en lugar de hacer cambios a ciegas.
2. **Control estricto de la salida (Systematic Output):** Al imponer la restricción de "imprimir solo código sin explicaciones", evitamos errores secundarios que ocurren al intentar parsear código Python mezclado con texto innecesario.

---

## 📊 Evidencia: Antes y Después

### ❌ Antes (Método tradicional)

- El usuario pide a la IA que escriba el código.
- Se ejecuta el código y salta un error (ej. `SyntaxError`).
- El usuario copia manualmente el mensaje de error (Traceback).
- El usuario pega el error en el chat y espera la corrección.
- El usuario vuelve a copiar, pegar y ejecutar. (Bucle infinito y manual).

### ✅ Después (Sistema Autocurativo)

- El usuario define el objetivo; el sistema genera el código inicial.
- El sistema lo ejecuta automáticamente y captura cualquier error (`stderr`).
- El agente de IA analiza el error y reescribe el código de forma autónoma (Self-Healing).
- El usuario recibe únicamente el producto final funcionando a la perfección.

---

## 🎯 Conclusión

Deja de tratar a la IA como a un generador al que hay que corregirle todo. Haz que asuma la **responsabilidad** del código que escribe.

El verdadero secreto de los Flujos de Trabajo Agénticos (Agentic Workflows) en 2026 no reside en usar el modelo más gigantesco del mercado, sino en la precisión con la que diseñas tus 'Bucles de Reflexión (Reflection Loops)'. ¡Implementa hoy mismo el código Python de arriba y dale la bienvenida a tu primer agente sanador!

¡A optimizar tu tiempo y salir temprano del trabajo! 🍷
