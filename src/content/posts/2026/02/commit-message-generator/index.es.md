---
layout: /src/layouts/Layout.astro
title: "¡No Más Preocupaciones por 'Recomendar Mensaje de Commit'! Generación Automática de Conventional Commits"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt que genera mensajes de commit impecables basados en el estándar global (Conventional Commits) con solo pegar tus cambios (git diff)."
tags: ["Git", "Mensaje de Commit", "Colaboración", "Productividad"]
---

# 📝 ¡No Más Preocupaciones por "Recomendar Mensaje de Commit"! Generación Automática de Conventional Commits

- **🎯 Recomendado para:** Desarrolladores, Líderes Técnicos, Contribuidores de Open Source
- **⏱️ Tiempo requerido:** 5 minutos → 10 segundos
- **🤖 Modelo recomendado:** Todos los modelos interactivos (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐☆

> _"Escribir un buen mensaje de commit a veces duele más que resolver el propio bug."_

¿Sigues haciendo commits con mensajes como `fix: bug` o `update code`?
Los mensajes de commit de calidad son el pilar fundamental para mantener un historial limpio y facilitar la colaboración, pero tener que pensar en la redacción perfecta cada vez agota mentalmente.
Olvídate de ese dolor de cabeza. Solo tienes que copiar y pegar el resultado de `git diff` y la IA redactará un mensaje perfecto siguiendo el estándar de **Conventional Commits**, la regla de oro en el desarrollo de software moderno.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Analiza tus cambios de código y selecciona automáticamente el tipo adecuado (feat, fix, refactor, etc.).
2. Redacta un asunto claro y conciso, junto con un cuerpo detallado que explica el "porqué" y el "qué".
3. Formatea el mensaje estrictamente bajo las convenciones de tu equipo y del código abierto.

---

## 🚀 La Solución: "Generador de Mensajes de Commit de Git"

### 🥉 Basic Version (Versión Básica)

Úsala cuando necesites un resultado rápido y sin complicaciones.

> **Rol:** Eres un Mantenedor de Código Abierto estricto con el historial de Git.
> **Solicitud:** Escribe un mensaje de commit limpio usando Conventional Commits para los siguientes cambios: `[Pega tu git diff aquí]`

<br>

### 🥇 Pro Version (Versión Profesional)

Úsala cuando necesites un mensaje de commit detallado, con contexto y estructura perfecta.

> **Rol (Role):** Eres un ingeniero de software senior y mantenedor de código abierto, obsesionado con la claridad y la trazabilidad del historial de Git.
>
> **Contexto (Context):**
>
> - He modificado el código y necesito un mensaje de commit impecable para que mi equipo y mi yo del futuro puedan entender rápidamente qué cambió y por qué.
> - Estándar: Conventional Commits.
>
> **Solicitud (Task):**
>
> 1. Analiza los `[Cambios]` proporcionados a continuación y sugiere 3 opciones de mensajes de commit.
> 2. Cada opción debe seguir estrictamente la regla **Conventional Commits**.
> 3. **Formato:** `<tipo>(<alcance>): <asunto>`
> 4. **Cuerpo:** Resume la razón del cambio (Why) y el contenido exacto (What) usando viñetas (bullet points).
> 5. **Pie de página (Opcional):** Si se menciona un ticket o problema, inclúyelo con el formato `Closes #<número>`.
>
> **Cambios (Changes):**
>
> `[Pega el resultado de 'git diff' o describe brevemente tus cambios aquí]`
>
> **Restricciones (Constraints):**
>
> - El `tipo` debe ser estrictamente uno de los siguientes: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
> - El `<asunto>` no debe superar los 50 caracteres y debe estar escrito en modo imperativo (ej. "add feature" en lugar de "added feature").
> - El idioma predeterminado para el mensaje de commit es el inglés, a menos que se indique lo contrario.

---

## 💡 Comentarios del Autor (Insight)

La verdadera ventaja de este prompt no es solo ahorrar tiempo, sino **estandarizar la calidad** de tu repositorio. En entornos de trabajo ágiles o en proyectos de código abierto, un historial de Git confuso puede ser desastroso a la hora de buscar cuándo se introdujo un bug (usando `git bisect`) o al generar un `CHANGELOG` automáticamente. Al delegar esta tarea a la IA, te aseguras de que el "porqué" (la intención detrás del código) quede documentado para siempre, algo que los desarrolladores solemos olvidar por la prisa de hacer el push. Recomiendo crear un alias en tu terminal que copie automáticamente el `git diff` al portapapeles.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **Q: ¿Puedo pedirle que escriba el mensaje en español?**
  - A: Sí, por supuesto. Solo añade al prompt: "Escribe el mensaje de commit completamente en español", aunque el estándar en la mayoría de equipos globales sigue siendo el inglés.

- **Q: Mi `git diff` es demasiado largo y la IA da error, ¿qué hago?**
  - A: Si los cambios son masivos, es probable que tu commit sea demasiado grande (anti-patrón). Es una buena señal de que deberías dividir tus cambios en commits más pequeños usando `git add -p` y aplicar el prompt a cada parte por separado.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Role & Context (Rol y Contexto):** Al posicionar a la IA como un "ingeniero senior obsesionado con el historial", condicionamos sus respuestas para que sean profesionales, técnicas y sin redundancias.
2. **Constraints (Restricciones Rígidas):** Especificar el límite de 50 caracteres para el asunto y forzar el uso del modo imperativo previene que la IA cometa los errores típicos de redacción.
3. **Format (Estructura de Salida):** Obligar a separar el "qué" y el "porqué" en el cuerpo garantiza que el mensaje aporte valor real, más allá de simplemente describir los archivos modificados.

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Cambios de Entrada)

```text
Cambié el color del botón de inicio de sesión a rojo, arreglé el error donde el inicio de sesión no funcionaba. Ah, y agregué la guía de instalación al readme.
```

### ✅ Después (Resultado de la IA)

**Opción 1 (Enfoque en Corrección de Errores)**

```text
fix(auth): resolve login failure and update button style

- Fix logic error preventing user authentication
- Change login button color to red to improve visibility
- Add project installation guide to README.md
```

**Opción 2 (Desglosado para Commits Separados)**

```text
style(ui): update login button color to red
fix(auth): correct login authentication bug
docs(readme): add installation guide
```

---

## 🎯 Conclusión

Los mensajes de commit son cartas de amor (o de advertencia) para tu yo del futuro y tus compañeros de equipo.
No los escribas a la ligera bajo la presión de terminar el día. ¡Usa la IA a tu favor y conviértete en ese desarrollador al que todos felicitan diciendo: "¡Qué historial de Git tan limpio y profesional tienes!" 🍷
