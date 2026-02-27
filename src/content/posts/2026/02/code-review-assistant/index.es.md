---
layout: /src/layouts/Layout.astro
title: " \"AI로 내 코드의 구멍을 찾아라! (버그 사냥꾼)\""
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "개발"
description: " \"La guía definitiva de prompts para un revisor de código con IA, diseñada para desarrolladores junior que trabajan sin un mentor.\""
tags: ["코딩", "버그", "Refactoring", "ChatGPT", "개발자"]
---

# 📝 ¡Encuentra los agujeros en tu código con IA! (Cazador de Bugs)

- **🎯 Recomendado para:** Desarrolladores junior que trabajan sin un mentor, profesionales inseguros antes de un despliegue en producción.
- **⏱️ Tiempo estimado:** De 3 horas de depuración → reducido a 10 minutos.
- **🤖 Modelo recomendado:** Claude 3.5 Sonnet (el mejor para análisis de código), ChatGPT (GPT-4o).

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"Funciona perfecto en mi máquina... pero, ¿explotará cuando lo suba a producción?"_

Cuando programas solo, es fácil caer en el temible punto ciego de "no saber lo que no sabes". Tu código puede funcionar, pero quizás sea lento, vulnerable a hackeos o un código espagueti imposible de mantener.
Ahora puedes someter tu código a la revisión de un evaluador de IA con el nivel de un ingeniero principal de Google, disponible las 24 horas y sin agotarse. Desde bugs ocultos y lógica ineficiente, hasta vulnerabilidades de seguridad críticas, la IA detectará cada detalle con precisión milimétrica.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. No le arrojes el código sin más; asígnale a la IA la **persona clara de un ingeniero principal de Google**.
2. En lugar de un simple "revisa esto", especifica **4 criterios de revisión clave**: bugs, seguridad, legibilidad y rendimiento.
3. No confíes ciegamente en las sugerencias de la IA (Refactoring); exige que explique el motivo de cada cambio en los comentarios para que puedas validarlo y aprender.

---

## 🚀 Solución: "Revisor de Código con IA"

### 🥉 Versión Básica (Basic Version)

Úsala cuando necesites un escaneo rápido para detectar problemas críticos.

> **Rol:** Eres un desarrollador Backend/Frontend Senior con 10 años de experiencia.
> **Instrucción:** Revisa el siguiente código y encuentra cualquier bug crítico o antipatrón (anti-pattern) que deba corregirse inmediatamente.
>
>
> [Pega tu código aquí]
>
### 🥇 Versión Pro (Pro Version)

Recomendada para elevar la calidad de tu código a nivel de producción (Production) y obtener una justificación objetiva y técnica para el refactoring.

> **Rol (Role):** Eres un Ingeniero de Software Principal ex-Google con 15 años de experiencia. Eres un experto absoluto en Código Limpio (Clean Code) y optimización de sistemas.
>
> **Contexto (Context):**
>
> - Lenguaje: `[Python / JavaScript / Java, etc.]`
> - Framework: `[React / Spring / Django, etc.]`
> - Propósito: Esta función se encarga de `[gestionar el inicio de sesión de usuarios y las sesiones]`.
>
> **Código (Input):**
>
>
> [Pega aquí el código que deseas revisar]
>
>
> **Instrucción (Task):**
> Revisa mi código de manera estricta desde las siguientes 4 perspectivas y proporciona el código completo mejorado:
>
> 1. **Bugs (Bug):** Manejo de excepciones omitido o posibles errores latentes que podrían ocurrir en tiempo de ejecución (Edge cases).
> 2. **Seguridad (Security):** Vulnerabilidades del framework como Inyección SQL, XSS, CSRF, etc.
> 3. **Legibilidad (Readability):** Reglas de nomenclatura para variables y funciones, y posibles violaciones del Principio de Responsabilidad Única (SRP).
> 4. **Rendimiento (Performance):** Bucles innecesarios y cuellos de botella en términos de complejidad temporal (Big-O).
>
> **Restricciones (Constraints):**
>
> - Al presentar el código mejorado, explica detalladamente el **porqué (Why)** de cada refactorización utilizando comentarios (`//` o `#`) junto a cada cambio.
> - Nunca alteres la intención original de la lógica de negocio.
> - Optimiza el código utilizando únicamente las funciones nativas del lenguaje, sin añadir bibliotecas externas.
>
> **Advertencias (Warning):**
>
> - No sugieras sintaxis de la que no estés completamente seguro ni funciones obsoletas (deprecated). Si no sabes algo, simplemente responde "No lo sé". (Evita alucinaciones).

---

## 💡 Comentarios del autor (Insight)

Este prompt es mi "arma secreta", la misma que me brindó una inmensa tranquilidad mental en mis primeros años como desarrollador cuando dudaba de la calidad de mi propio código.
Especialmente en las áreas de 'Seguridad (Security)' y 'Casos extremos (Edge cases)', la IA capta de forma mecánica los detalles que el ojo humano suele pasar por alto por fatiga, salvándome de más de un desastre monumental en producción.
Sin embargo, no te limites a copiar y pegar el código corregido por la IA. La razón por la que incluimos la restricción `explica detalladamente el porqué del refactoring utilizando comentarios` es para que tú mismo puedas interiorizar la visión y el riguroso criterio de un desarrollador senior a través de estas revisiones, acelerando tu propio aprendizaje.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Puedo copiar y pegar todo el código del proyecto de mi empresa?**
  - R: **¡Absolutamente no!** Filtrar código de tu empresa es una grave violación de las políticas de seguridad. Antes de enviar cualquier fragmento, asegúrate de enmascarar (censurar con `***`) las API Keys, contraseñas de bases de datos y la lógica de negocio central. Haz tus consultas dividiendo el código en las funciones o clases mínimas necesarias para la revisión.

- **P: ¿La IA siempre me dará la respuesta perfecta? ¿No necesito probarlo?**
  - R: Las IA también sufren de alucinaciones (Hallucination). Ocasionalmente, podrían sugerir el uso de bibliotecas inexistentes o cometer errores de sintaxis en edge cases muy específicos. Siempre debes ejecutar el código sugerido en tu entorno local y validarlo con pruebas unitarias antes de fusionarlo con la rama principal.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Asignación de una Persona Estricta (Perspective):** Al imponer el estándar más alto como "Ingeniero Principal de Google", obligamos a la IA a no conformarse con un código que "simplemente funciona", sino a ofrecer feedback riguroso desde la perspectiva del 'Código Limpio' (Clean Code).
2. **Criterios de Evaluación Multidimensionales (Specific Goals):** Si solo pides "revisar", la IA se limitará a corregir errores tipográficos superficiales. Al proporcionar 4 métricas claras: bugs, seguridad, legibilidad y rendimiento, hemos diseñado un diagnóstico profundo y tridimensional.
3. **Diseño Orientado al Aprendizaje (Explanation):** Recibir únicamente la respuesta correcta no mejora tus habilidades a largo plazo. Al exigir que la IA justifique cada cambio con comentarios, buscamos un efecto de tutoría (Tutoring) que te obligue a reflexionar sobre la arquitectura de tu propio código.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Input: Lógica de consulta a la Base de Datos para principiantes)

```python
def get_user_data(user_id):
    # Concatena directamente el id introducido por el usuario en la consulta (¡Peligroso!)
    sql = "SELECT * FROM users WHERE id = '" + user_id + "'"
    cursor.execute(sql)
    return cursor.fetchone()
```

### ✅ Después (Output: Lógica fortalecida en seguridad y legibilidad)

```python
def get_user_data(user_id):
    """
    Recupera la información de un usuario específico.
    """
    # [Security] Uso de Parameterized Query (variables de enlace) para prevenir Inyección SQL
    # [Readability] Separación de la consulta para mejorar la legibilidad y mantenimiento
    query = "SELECT * FROM users WHERE id = %s"

    try:
        cursor.execute(query, (user_id,))
        result = cursor.fetchone()

        # [Bug] Manejo proactivo de excepciones en caso de que no haya resultados
        if not result:
            return None

        return result

    except Exception as e:
        # [Bug] Registro de errores en tiempo de ejecución (se recomienda usar un logger en producción)
        print(f"Database error occurred: {e}")
        return None
```

**Resumen de la revisión:** Concatenar directamente la entrada del usuario en la consulta te expone a ataques letales de Inyección SQL. Se ha parcheado la vulnerabilidad utilizando una variable de enlace (`%s`) y se ha añadido un bloque de manejo de excepciones `try-except` para evitar que el servicio colapse silenciosamente si falla la conexión o la consulta a la base de datos.

---

## 🎯 Conclusión

No existe el código perfecto en este mundo, pero siempre podemos escribir un código más robusto que el de ayer.
Empieza hoy mismo a elevar la calidad de tu código junto a tu mentor de IA, quien criticará tu trabajo de la manera más fría, objetiva y constructiva posible.

¡Ahora sí, puedes salir del trabajo a tu hora con total tranquilidad! 🍷
