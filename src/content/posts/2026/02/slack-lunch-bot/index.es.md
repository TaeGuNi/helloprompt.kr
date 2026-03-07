---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "Crea un asistente en Slack con IA y Workflow Builder que recomiende el menú del almuerzo a tu equipo sin escribir ni una línea de código."
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

## 🤖 Cómo crear un bot en Slack: Tu asistente inteligente para elegir el menú del almuerzo

- **🎯 Público objetivo:** Profesionales junior agotados por el dilema diario de elegir dónde comer y equipos de RR. HH. que buscan dinamizar el chat corporativo.
- **⏱️ Tiempo estimado:** 10 minutos (con Slack Workflow).
- **🤖 Modelo recomendado:** ChatGPT-4o (por su excelente razonamiento contextual y creatividad gastronómica).

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _«¿Qué comemos hoy? Lo que sea. ¿Pasta? Mmm, hoy no me apetece...» Pon fin a este agotador juego de adivinanzas. Delega esta decisión a la IA, reserva tu energía para lo que realmente importa y asegura tu salida a tu hora._

El mayor dilema de la vida corporativa no es el cierre trimestral, sino elegir qué almorzar. Olvídate de intentar leer la mente de tus compañeros y déjaselo al bot de tu empresa. En este artículo, te enseñaremos a crear un asistente brillante utilizando el **Workflow Builder** de Slack, ¡sin escribir ni una sola línea de código! Si le preguntas: «¿Qué comemos en un día lluvioso como hoy?», te sorprenderá respondiendo: «Para este clima, ¿qué tal un buen tazón de ramen humeante en lugar de la ensalada de siempre?».

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Configura un bot en minutos utilizando el **Workflow Builder** de Slack, de forma 100 % *no-code*.
2. Define palabras clave (ej. «recomendar almuerzo») o reacciones con emojis como activadores (*triggers*) para invocarlo.
3. Intégralo con una IA (como ChatGPT) mediante un *prompt* personalizado que sugiera menús adaptados al clima y al estado de ánimo de tu equipo.

---

## 🚀 La Solución: Prompt "Lunch Buddy" (Compañero de Almuerzo)

### 🥉 Versión Básica (Basic)

Ideal para cuando necesitas una respuesta rápida y acabar con la indecisión al instante.

> **Rol:** Eres un asistente cordial encargado de elegir el menú del almuerzo para un equipo de oficina.
>
> **Tarea:** Selecciona al azar una categoría gastronómica (comida local, china, japonesa, italiana o comida rápida). A continuación, recomienda 3 platos representativos de esa categoría que sean populares entre los oficinistas.

### 🥇 Versión Profesional (Pro)

Úsala cuando busques una recomendación de almuerzo brillante y adaptada a situaciones específicas como el clima, el estado de ánimo o la cantidad de personas.

> **Rol (Role):** Eres un *foodie* exigente y el mayor experto en encontrar los mejores restaurantes cerca de la oficina (`[Ubicación de la oficina (ej. Distrito financiero)]`).
>
> **Contexto (Context):**
> 
> - Clima: `[Clima actual (ej. Lluvioso, Soleado, Frío)]`
> - Estado de ánimo y situación: `[Ambiente del equipo (ej. Estresados por un cierre, Día de pago, Comida ligera)]`
> - Participantes: `[Composición del grupo (ej. Almorzando solo, Salida de todo el equipo, Reunión de colegas)]`
>
> **Tarea (Task):**
> 
> 1. Recomienda exactamente 1 menú de almuerzo que encaje a la perfección con la situación descrita.
> 2. Añade una justificación ingeniosa (de 1 a 2 oraciones) que resuene con el día a día de la oficina y explique por qué elegiste este plato.
> 3. El formato de salida debe ser una lista en Markdown, fácil de leer y enriquecida con emojis.
>
> **Restricciones (Constraints):**
> 
> - Excluye ingredientes demasiado polarizantes (ej. hígado, exceso de cilantro) o comidas extremadamente pesadas que provoquen somnolencia por la tarde.
>
> **Advertencia (Warning):**
> 
> - Limítate a sugerir el nombre del plato. Bajo ninguna circunstancia inventes nombres de restaurantes ficticios. Si no conoces un local real, no lo menciones. (Cero alucinaciones).

---

## 💡 Comentario del Autor (Insight)

Un bot de Slack es mucho más que un simple capricho técnico: es una herramienta estratégica para moldear la **cultura** de tu empresa. Actúa como un lubricante social, inyectando dosis de humor y temas de conversación ligeros en canales que suelen estar asfixiados por reportes y directrices rígidas. Si este asistente de almuerzos tiene buena acogida, abrirá la puerta a iniciativas más amplias, como un «bot de reconocimientos», un «bot de cumpleaños» o un «facilitador de retrospectivas semanales». Así se construye una organización más conectada y humana. Además, si integras este *prompt* con plataformas de automatización como Zapier o Make, superarás las limitaciones nativas de Slack y darás vida a un asistente de IA verdaderamente autónomo.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: Mi empresa usa la versión gratuita de Slack, ¿podemos utilizar el Workflow Builder?**
  - R: Lamentablemente, el Workflow Builder es una función exclusiva de los planes de pago (Pro en adelante). Sin embargo, si estás en el plan gratuito, puedes usar plataformas como Zapier o Make para "escuchar" canales específicos y devolver sugerencias mediante la API de OpenAI (ChatGPT).

- **P: ¿Qué ventaja tiene esto frente a programar el bot desde cero (por ejemplo, en Python)?**
  - R: Programar un bot con librerías como `slack-bolt` (Python o Node.js) te da control total para diseñar interfaces ricas (botones, ventanas modales) y conectarlo con bases de datos internas. ¿El problema? Requiere mantenimiento constante y costos de servidor. Para resolver el dilema del almuerzo mediante sugerencias de texto, un enfoque *no-code* es infinitamente más rápido, barato y eficiente.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Inyección de variables contextuales (Contextual Variables):** En lugar del clásico y aburrido «recomienda algo para comer», las variables (`[ ]`) obligan a la IA a considerar factores como el clima, el estrés del equipo o el número de comensales. Esto transforma respuestas genéricas en sugerencias empáticas y a medida.
2. **Control estricto de alucinaciones (Constraint Setting):** A través de la sección `Advertencia (Warning)`, le imponemos a la IA las reglas no escritas de la oficina (comidas que no den sueño, evitar ingredientes divisivos) y eliminamos el riesgo de que invente restaurantes que no existen en la vida real.
3. **Rol inmersivo (Role-playing):** Al definir a la IA como un «*foodie* exigente», cambiamos radicalmente el tono. Deja de ser un simple dispensador de datos para convertirse en un colega carismático que sabe exactamente lo que el equipo necesita.

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
Bot (Lunch Buddy): "☔ ¡Día lluvioso, nivel de estrés alto y a solo días de cobrar!
Para un clima y un ánimo así, recomiendo encarecidamente un buen **'Combo de Ramen picante con Gyozas'**.
¡Suden el estrés con un caldo ardiente y recarguen baterías para conquistar la tarde con este poderoso combo! 🍜"
Jefe de equipo: "Vaya, justo me apetecía algo picante. ¡Vamos!"
```

---

## 🎯 Conclusión

Sobrevivir a la jornada laboral ya es un reto suficiente; la hora del almuerzo debería ser sagrada, deliciosa y, sobre todo, libre de estrés. Un bot tan simple como este tiene el poder de relajar la dinámica del equipo y erradicar la fatiga de decisión diaria.

A partir de hoy, pon fin al juego de las adivinanzas y deja el menú en manos de tu **asistente inteligente**. ¡Disfruten de la comida, recarguen energías y aseguren su salida puntual del trabajo! 🍷
