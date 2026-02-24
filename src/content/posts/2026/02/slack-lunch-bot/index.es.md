---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: " \"Descubre cómo conectar el Workflow Builder de Slack con IA para crear un asistente personalizado que recomiende menús de almuerzo para tu equipo, sin necesidad de saber programar.\""
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Cómo crear un bot en Slack: Tu asistente personal para elegir el almuerzo

- **🎯 Público objetivo:** Empleados junior que sufren a diario para elegir el menú, equipos de RR. HH. que buscan revitalizar el ambiente en el chat corporativo.
- **⏱️ Tiempo estimado:** 10 minutos (usando Slack Workflow).
- **🤖 Modelo recomendado:** ChatGPT-4o (Excelente capacidad de razonamiento contextual y creatividad para menús).

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Qué almorzamos hoy? Lo que sea. ¿Pasta? Mmm, hoy no me apetece... Pon fin al agotador juego de adivinanzas diario y delega esta tarea a tu asistente de IA para reservar tu energía y salir a tiempo del trabajo."_

El mayor dilema del oficinista: elegir el menú del almuerzo. Ya no tienes que leerle la mente a tus compañeros; simplemente pregúntale al bot del chat de tu empresa. Te enseñamos cómo crear un bot increíblemente astuto a través de los flujos de trabajo (Workflows) de Slack, ¡sin escribir ni una sola línea de código! Si le dices: "¿Qué comemos hoy que llueve?", te responderá: "Para un día lluvioso, ¿qué tal un buen plato de ramen caliente en lugar de la típica ensalada?".

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Configura un bot automatizado utilizando el **'Workflow Builder'** de Slack sin necesidad de programar.
2. Establece palabras clave (ej. "recomendar almuerzo") o reacciones con emojis como activadores (Triggers) para llamar al bot.
3. Conecta un integrador de IA (como ChatGPT) para ejecutar un prompt personalizado que sugiera menús de almuerzo adaptados al clima y la situación de tu equipo.

---

## 🚀 La Solución: Prompt "Lunch Buddy" (Compañero de Almuerzo)

### 🥉 Versión Básica (Basic)

Ideal para cuando necesitas una respuesta rápida y acabar con la indecisión al instante.

> **Rol:** Eres un asistente amable encargado de elegir el menú de almuerzo para los empleados de la oficina.
>
> **Tarea:**
> Elige al azar una categoría entre comida local, china, japonesa, italiana o comida rápida. Luego, recomienda 3 platos representativos dentro de esa categoría que generalmente les gusten a los oficinistas.

<br>

### 🥇 Versión Profesional (Pro)

Úsala cuando quieras una recomendación de almuerzo brillante y adaptada a situaciones específicas como el clima, el estado de ánimo o la cantidad de personas.

> **Rol (Role):** Eres un gastrónomo exigente y un navegador experto en los mejores restaurantes cerca de la oficina (`[Ubicación de la oficina (ej. Centro de la ciudad)]`).
>
> **Contexto (Context):**
> 
> - Clima: `[Clima actual (ej. Lloviendo, Soleado, Frío)]`
> - Estado de ánimo y situación: `[Ambiente del equipo (ej. Estresados, Día de pago, A dieta)]`
> - Participantes: `[Composición del grupo (ej. Comiendo solo, Cena de todo el equipo, Reunión de colegas)]`
>
> **Tarea (Task):**
> 
> 1. Recomienda exactamente 1 menú de almuerzo que se adapte a la perfección a la situación descrita.
> 2. Añade una explicación ingeniosa (1 o 2 oraciones) que resuene con los oficinistas sobre por qué elegiste este menú.
> 3. El formato de salida debe ser una lista en Markdown, fácil de leer y que incluya emojis.
>
> **Restricciones (Constraints):**
> 
> - Excluye menús que polaricen demasiado los gustos (ej. hígado encebollado, platos con exceso de cilantro) o comidas demasiado pesadas que sean difíciles de terminar durante la hora del almuerzo.
>
> **Advertencia (Warning):**
> 
> - Concéntrate en el nombre del plato en sí y no inventes nombres de restaurantes específicos si no estás absolutamente seguro. (Evita alucinaciones).

---

## 💡 Comentario del Autor (Insight)

Un bot en Slack va mucho más allá de ser una simple "función" técnica; es una herramienta poderosa para moldear la **cultura** corporativa. Actúa como un lubricante social que aporta pequeñas dosis de humor y temas de conversación en canales que de otro modo estarían llenos de directrices rígidas. Si comienzas con un bot de recomendaciones de almuerzo y logras una buena acogida, puedes expandirlo fácilmente a un "Bot de elogios", "Bot de cumpleaños" o "Bot de retrospectiva semanal", contribuyendo enormemente a construir una organización más flexible y positiva. Especialmente, si integras este prompt con herramientas de automatización como Zapier o Make, superarás las limitaciones nativas de Slack y evolucionarás hacia un asistente de IA verdaderamente inteligente.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: Mi empresa usa la versión gratuita de Slack, ¿podemos usar el Workflow Builder?**
  - R: Lamentablemente, el Workflow Builder de Slack solo está disponible en los planes de pago (Pro en adelante). Si estás en el plan gratuito, puedes usar alternativas como Zapier o Make.com para detectar mensajes en canales específicos y enviar la respuesta a través de la API de ChatGPT como una solución indirecta.

- **P: ¿En qué se diferencia esto de programar el bot manualmente (por ejemplo, con Python)?**
  - R: Desarrollar con librerías como `slack-bolt` en Python te permite crear interacciones mucho más avanzadas: botones, ventanas modales e integración con la base de datos de la empresa. Sin embargo, esto conlleva gastos de servidor y mantenimiento. Para respuestas simples basadas en texto o recomendaciones de menús, un flujo de trabajo "No-code" es infinitamente más eficiente.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Asignación de variables contextuales (Contextual Variables):** En lugar de un simple "recomienda un menú", al proporcionar variables (`[ ]`) como el clima, el estado de ánimo y el número de personas, obligamos a la IA a evitar respuestas genéricas y a generar sugerencias altamente personalizadas y empáticas.
2. **Control de alucinaciones y preferencias (Constraint Setting):** A través de la `Advertencia (Warning)`, le enseñamos a la IA las particularidades de la hora del almuerzo (límite de tiempo, gustos extremos) y eliminamos de raíz el riesgo de que invente restaurantes inexistentes (alucinaciones).
3. **Juego de roles (Role-playing):** Al asignarle la personalidad detallada de "gastrónomo y navegador experto", transformamos el tono del mensaje de una fría entrega de datos al de un colega cercano e ingenioso.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (El silencio incómodo del almuerzo)

```text
Empleado Junior: "¿Qué les gustaría almorzar hoy?"
Compañero A: "Mmm... me da igual, lo que sea."
Jefe de equipo: "Cualquier cosa está bien."
(Un interminable juego de adivinanzas y 10 minutos de silencio absoluto 🕰️)
```

### ✅ Después (La intervención del asistente de IA)

```text
Yo: /almuerzo
Bot (Lunch Buddy): "☔ ¡Día lluvioso, estrés y víspera de pago para todo el equipo!
Para un día así, recomiendo encarecidamente un buen **'Combo de Ramen picante con Gyozas'**.
¡Eliminen el estrés del trabajo con un caldo ardiente y recarguen energías para la tarde con un acompañamiento contundente! 🍜"
Jefe de equipo: "Vaya, hoy justo me apetecía algo picante. ¡Vamos!"
```

---

## 🎯 Conclusión

La oficina es un lugar de trabajo arduo, pero la hora del almuerzo debe ser sagrada, deliciosa y libre de estrés. Un pequeño bot puede suavizar la dinámica del equipo y reducir drásticamente la fatiga que supone tomar decisiones diarias.

Hoy, detén el juego de adivinanzas y confía el almuerzo de tu equipo a la **elección inteligente de tu asistente de IA**. ¡Espero que disfruten de una comida fantástica y salgan puntuales del trabajo! 🍷
