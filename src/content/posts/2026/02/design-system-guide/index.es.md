---
layout: /src/layouts/Layout.astro
title: "디자인 시스템 구축: 디자이너와 개발자가 안 싸우는 법"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "디자인/UX"
description: "Cómo sincronizar las variables de Figma con las de CSS. Guía experta para construir un sistema de diseño basado en Design Tokens y evitar conflictos."
tags: ["디자인시스템", "Figma", "CSS", "UI-UX", "협업"]
---

# 🎨 Construcción de un Sistema de Diseño: Cómo evitar que Diseñadores y Desarrolladores se peleen

- **🎯 Público objetivo:** Desarrolladores que reciben comentarios como "el color del botón no coincide con el diseño", diseñadores frustrados pensando "el desarrollador arruinó mi diseño".
- **⏱️ Tiempo estimado:** 10 minutos → Reducido a 1 minuto (Diseño inicial de tokens y conversión automática de código)
- **🤖 Modelo recomendado:** ChatGPT-4o, Claude 3.5 Sonnet (Diseño de arquitectura y generación de código)

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿No era el Primary Color `#0055FF`? ¿Por qué aquí en producción dice `#0050FF`?"_

Los colores y márgenes codificados (hardcoded) que están dispersos por toda la base de código son los principales culpables de convertir el mantenimiento en un verdadero infierno. Es hora de implementar **Design Tokens (Tokens de Diseño)**. Definir todos los elementos visuales —como colores, tipografías, márgenes y sombras— en variables semánticas compartidas es la garantía más sólida para alinear a tu equipo. Una vez que se establece un ecosistema basado en tokens, experimentarás la magia de que el código del desarrollador se sincronice automáticamente en el instante en que el diseñador modifica un valor en Figma.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Tokenización del diseño:** En lugar de usar valores Hexadecimales absolutos como `#0055FF`, utilizamos un lenguaje común y semántico como `primary-500`.
2. **Aplicación de variables en Figma:** Aprovechamos las funciones de Variables y Styles de Figma para definir las propiedades visuales como tokens bien estructurados.
3. **Sincronización de código:** Basándonos en los datos extraídos, los convertimos automáticamente en `tailwind.config.ts` o variables CSS globales para aplicarlos al proyecto frontend.

---

## 🚀 Solución: "Prompt Generador de Design Tokens"

### 🥉 Versión Básica (Basic Version)

Utiliza este prompt cuando necesites estructurar la paleta de colores inicial y no sepas por dónde empezar para nombrar las variables.

> **Tarea (Task):**
> Estoy planificando la paleta de colores del sistema de diseño para un nuevo producto.
> Quiero dividir los colores `[Primary (Azul)]`, `[Secondary (Gris)]` y `[Error (Rojo)]` en 9 niveles cada uno, desde el 100 hasta el 900.
> Recomiéndame en una tabla los códigos Hex para cada nivel, acompañados de nombres semánticos e intuitivos (por ejemplo, `text-primary`, `bg-surface-default`) para que pueda aplicarlos directamente a nuestro código.

<br>

### 🥇 Versión Profesional (Pro Version)

Úsalo para convertir los datos JSON de los tokens extraídos de Figma en un código perfecto, escalable y listo para tu entorno de desarrollo.

> **Rol (Role):** Eres un Ingeniero de Design Ops Senior con 10 años de experiencia y un Arquitecto Frontend experto.
>
> **Contexto (Context):**
>
> - Antecedentes: Un diseñador ha definido los Design Tokens en Figma y los ha extraído en formato JSON.
> - Objetivo: Debes transformar este JSON en un código perfectamente aplicable de inmediato en nuestro proyecto frontend.
>
> **Datos de Entrada:**
>
> `[Pega aquí el JSON de los tokens extraídos de Figma]`
>
> **Tarea (Task):**
>
> 1. Analiza los datos de entrada y conviértelos al formato del archivo de configuración de **Tailwind CSS (`tailwind.config.ts`)** más reciente.
> 2. Para no depender exclusivamente de un framework CSS, escribe también el código equivalente en **Variables CSS nativas (`:root { --color-blue-500: ... }`)**.
> 3. Añade una estrategia y código de ejemplo para soportar el modo oscuro (`@media (prefers-color-scheme: dark)` o mediante la clase `.dark`), asegurando que se adapte automáticamente al tema del sistema del usuario.
>
> **Restricciones (Constraints):**
>
> - Proporciona el resultado **únicamente** en bloques de código Markdown (`ts`, `css`).
> - Mantén estrictamente el formato kebab-case para todos los nombres de las variables.
>
> **Advertencia (Warning):**
>
> - No inventes valores de colores ni niveles arbitrarios que estén fuera de la estructura JSON proporcionada. (Prevención estricta de alucinaciones).

---

## 💡 Comentario del Autor (Insight)

Construir un sistema de diseño no significa trazar un plan maestro gigantesco y terminarlo de una sola vez. Si intentas tokenizar a la perfección todos los componentes y la tipografía desde el primer día, es muy probable que te agotes, el equipo pierda el impulso y abandonen la iniciativa.
Recomiendo encarecidamente una estrategia de **Adopción Incremental (Incremental Adoption)**: comienza reemplazando con variables los elementos **"más utilizados y repetitivos"** (por ejemplo, el color de fondo del Botón Primario o el color principal del texto del cuerpo).
Ese pequeño primer token será el paso fundamental que reducirá drásticamente los costos de comunicación y los roces innecesarios entre diseñadores y desarrolladores.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Qué plugin de Figma debo usar para extraer y exportar tokens?**
  - R: En la industria actual, **'Tokens Studio for Figma'** se utiliza como el estándar de facto. Permite extraer el JSON y sincronizarlo directamente con tu repositorio de GitHub mediante PRs. Recientemente, la función nativa de Variables de Figma ha madurado muchísimo, por lo que la integración directa a través de su API REST también es una tendencia al alza.

- **P: Somos una startup muy pequeña de 2 o 3 personas, ¿realmente necesitamos invertir tiempo en un sistema de diseño?**
  - R: Si el equipo tiene 2 o más personas construyendo la UI, o si el mantenimiento del proyecto se extenderá por más de 3 meses, es absolutamente necesario. La deuda técnica de "lo ordenamos luego cuando tengamos tiempo" terminará convirtiéndose en una bomba de tiempo que paralizará la velocidad del proyecto. Recuerda que tu "yo del futuro" también es, a efectos prácticos, otro desarrollador al que le estás dejando el problema.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Obligación de nomenclatura semántica:** Fomenta el uso de nombres basados en el contexto y significado, como "color de fondo del botón principal (`bg-primary-default`)", en lugar de descripciones visuales literales como "azul claro". De esta manera, si el branding cambia de azul a morado en el futuro, solo necesitarás actualizar un valor Hex base para que se refleje instantáneamente en todo el producto.
2. **Delegación de la conversión repetitiva de formatos:** Escribir y formatear manualmente un JSON inmenso para pasarlo a un objeto de Tailwind o a la sintaxis de variables CSS es una tortura para cualquier humano. La IA brilla con luz propia en este tipo de transformación de código estructurado, ofreciendo una velocidad y precisión implacables que eliminan por completo el error humano (Human Error).

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Entrada)

Cada vez que cambia el diseño, el equipo tiene que buscar y reemplazar los códigos Hexadecimales uno por uno en más de 100 archivos diferentes. Un proceso propenso a errores y omisiones. 😱

```css
.button-primary {
  background-color: #3b82f6;
}

.text-highlight {
  color: #3b82f6;
}
```

### ✅ Después (Resultado)

Modificas un único valor central y la interfaz de usuario de todo el ecosistema de la aplicación se actualiza con una consistencia perfecta. 🚀

```css
:root {
  --primary-500: #3b82f6;
  --bg-primary-default: var(--primary-500);
}

.button-primary {
  background-color: var(--bg-primary-default);
}
```

---

## 🎯 Conclusión

El traductor ideal entre diseño y desarrollo no debe ser una 'persona' mediando emociones y malentendidos, sino un **'sistema'** robusto con reglas claras.
No discutan más por píxeles sueltos y valores de color. Empiecen a comunicarse usando el idioma común e inequívoco de los tokens.

**"Estimado desarrollador, el fondo de esta tarjeta no es `gray-200`, es `surface-subtle`. Por favor, revisa los tokens actualizados."** 🍷
