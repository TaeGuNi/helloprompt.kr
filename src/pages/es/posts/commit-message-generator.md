---
layout: /src/layouts/Layout.astro
title: "¡No Más Preocupaciones por 'Recomendar Mensaje de Commit'! Generación Automática de Conventional Commits"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "Un prompt que escribe mensajes de commit limpios adaptados a los estándares globales (Conventional Commits) si solo pegas los cambios (`git diff`)."
tags: ["Git", "Mensaje de Commit", "Colaboración", "Productividad"]
---

# 📝 ¡No Más Preocupaciones por "Recomendar Mensaje de Commit"! Generación Automática de Conventional Commits

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos
> **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Escribir mensajes de commit es más difícil que escribir código..."_

`fix: bug`, `update code`... ¿Estás haciendo commits así?
Los buenos mensajes de commit son el núcleo de la gestión del historial, pero escribirlos cada vez me da dolor de cabeza.
Solo lanza el contenido de `git diff`, y lo sacará en el estilo **Conventional Commits**, el estándar del campo de código abierto.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Analizar cambios y seleccionar automáticamente el tipo apropiado (feat, fix, refactor, etc.)
2. Escribir asunto conciso y claro y cuerpo detallado
3. Formato adaptado a las convenciones del equipo

---

## 🚀 La Solución: "Generador de Mensajes de Commit de Git"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un Mantenedor de Código Abierto obsesionado con la gestión del historial de Git.
> **Solicitud:** Escribe un mensaje de commit limpio adaptado a los estándares globales (Conventional Commits) si solo pego los cambios (`git diff`).

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un Mantenedor de Código Abierto obsesionado con la gestión del historial de Git.
>
> **Contexto:** Modifiqué el código, y necesito un mensaje de commit limpio que los colegas puedan entender fácilmente.
>
> **Tarea:**
> Analiza los `[Cambios]` a continuación y recomienda 3 mensajes de commit que se ajusten a las reglas de **Conventional Commits**.
>
> 1. **Formato:** `<type>(<scope>): <subject>`
> 2. **Cuerpo:** Resume la razón del cambio (Why) y el contenido del cambio (What) con viñetas.
> 3. **Pie de página:** (Opcional) Si hay un número de problema, agrégalo en formato `Closes #123`.
>
> **Cambios (git diff o resumen):**
>
> ```
> [Escribe el resultado de `git diff` o los cambios simplemente aquí]
> ```
>
> **Restricciones:**
>
> - Tipos de Type: Selecciona uno de `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
> - El Asunto no debe exceder los 50 caracteres y comenzar con un imperativo (raíz del verbo). (Inglés es el predeterminado)

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Cambios de Entrada)

"Cambié el color del botón de inicio de sesión a rojo, arreglé el error donde el inicio de sesión no funcionaba. Ah, e agregué la guía de instalación al readme."

### ✅ Después (Resultado)

**Opción 1 (Enfoque en Corrección de Errores)**

```text
fix(auth): resolve login failure issue and update button style

- Fix logic error preventing user login
- Change login button color to red for better visibility
- Add installation guide to README.md
```

**Opción 2 (Enfoque en Mejora de UI)**

```text
style(ui): update login button color and fix login bug

- Change login button color to red
- Fix login functionality bug
- docs: update installation guide in README
```

---

## 🎯 Conclusión

Los mensajes de commit son cartas a tu yo futuro y colegas.
No los escribas a la ligera. ¡Obtén ayuda de la IA y escucha el cumplido "El registro de commit de esta persona es tan limpio"! 🍷
