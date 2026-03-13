---
layout: /src/layouts/Layout.astro
title: "Cómo crear un bot de Slack: El asistente interno que recomienda '¿Qué almorzamos hoy?'"
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "Work Automation"
description: "Guía para crear un bot en Slack con IA que resuelve el dilema diario del almuerzo sin necesidad de programar, usando Workflow Builder."
tags: ["Slack", "슬랙", "Chatbot", "Automation", "사내문화"]
image: "/images/hooks/slack-lunch-bot.jpg"
---

## 📝 Cómo crear un bot de Slack: El asistente interno que recomienda '¿Qué almorzamos hoy?'

- **🎯 Dirigido a:** El miembro más reciente que sufre eligiendo el menú cada día, responsables que desean dinamizar la comunicación interna.
- **⏱️ Tiempo estimado:** 10 minutos (basado en la configuración de Slack Workflow).
- **🤖 Rendimiento óptimo:** Se recomiendan modelos de razonamiento recientes (como ChatGPT-4o, especializados en conciencia contextual y recomendaciones creativas).

- ⭐ **Dificultad:** ⭐⭐☆☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Qué quieren almorzar hoy? Lo que sea. Entonces, ¿qué tal pasta? Mmm... la pasta no me convence..." ¿Hasta cuándo vas a desgastarte emocionalmente en este juego interminable de indecisión sobre el almuerzo?_

Cada día, alrededor de las 11:30 de la mañana, surge una tensión peculiar en la oficina. "¿Qué quieren almorzar hoy?", "A mí me da igual". Es el dilema eterno de los trabajadores, un pozo de agotamiento emocional que devora nuestro valioso tiempo de descanso: **la elección del menú del almuerzo**.

La respuesta "lo que sea" nunca significa realmente cualquier cosa. Es un rompecabezas de alta dificultad donde hay que evitar lo que se comió ayer, eludir las especias que no le gustan al jefe y considerar la dieta del colega que está tratando de bajar de peso. Mientras intercambias miradas incómodas frente al monitor y escribes y borras mensajes, tu preciada hora de almuerzo se escapa segundo a segundo. Este estrés cotidiano, pequeño pero persistente, exige un **trabajo emocional** enorme y acaba minando la concentración de la tarde. ¿Hasta cuándo vas a permitir que elegir la comida agote toda tu energía?

El proceso de elegir el menú a menudo refleja las jerarquías invisibles y las dinámicas de poder en la cultura organizacional. Alguien siempre carga con el peso de decidir, mientras otros reprimen sus opiniones por compromiso. Ignorar este conflicto aparentemente trivial puede enfriar gradualmente la vitalidad del equipo. Sin embargo, en el momento en que se introduce un bot de recomendación de almuerzos con IA, la responsabilidad de la decisión se desplaza suavemente de una "persona específica" hacia un "sistema" objetivo. Un simple "¡El bot recomendó esto, así que probemos hoy!" se convierte en una excelente válvula de escape que relaja el ambiente rígido de la organización.

Ya no es necesario que desperdicies tus emociones en juegos de indecisión agotadores. No necesitas conocimientos complejos de desarrollo ni saber una sola línea de código en Python. Al combinar el **Workflow Builder de Slack**, que ya usamos a diario, con un modelo de IA inteligente, puedes contratar gratuitamente en solo 10 minutos a un <span style="color:var(--color-cyber-cyan)">'Asistente de Almuerzo Ultrapersonalizado (Lunch Buddy)'</span> que dé en el clavo con los gustos más exigentes de tu equipo.

Basta con una pregunta casual por texto: "¿Qué puedo comer hoy que está lloviendo y estoy estresado?". El asistente de IA responderá con más ingenio que un humano: "Sé que un asado con vino sería difícil un día de lluvia en la oficina, pero ¿qué tal un ramen picante para reconfortar el cuerpo?". Una curaduría perfecta que considera el clima, el ánimo del equipo e incluso el presupuesto, haciendo florecer la alegría en el mensajero interno.

El tiempo de almuerzo no debe ser una extensión del trabajo, sino el único refugio para tomar aire en medio de una jornada intensa. Estresarse por una comida es uno de los principales factores que reduce la calidad de vida laboral. Utilizar la tecnología para romper barreras entre las personas y dar un pequeño giro a la rutina diaria es una experiencia gratificante. Te presentamos ahora mismo el prompt mágico y la guía de configuración que romperá para siempre el ciclo de la indecisión y transformará el almuerzo de tu equipo en un verdadero tiempo de descanso y renovación.

---

## 📊 Evidencia: Resultados satisfactorios (Antes y Después)

### ❌ Antes (El sufrimiento que vivíamos)

Cada día a las 11:30, un silencio sepulcral invadía el chat. Un hilo interminable de mensajes vacíos que consumía nuestro valioso tiempo de descanso.

```text
Novato: "¿Qué quieren almorzar hoy?"
Miembro A: "Mmm... a mí me da igual."
Líder: "Comamos lo que sea."
(Juego de indecisión interminable y 10 minutos de silencio 🕰️)
```

### ✅ Después (La transformación perfecta)

![Cómo crear un bot de Slack: El asistente interno que recomienda '¿Qué almorzamos hoy?'](/images/hooks/slack-lunch-bot.jpg)

¡Aparece el asistente de IA con sentido común que elimina la indecisión y confirma el menú en solo 5 segundos!

```text
Yo: /recomendar_almuerzo Lluvia, mucho estrés, antes del día de pago, comida de equipo.
Bot (Lunch Buddy): "☔ ¡Vaya combinación! Lluvia, estrés y justo antes del día de pago. 
Para un día así, recomiendo encarecidamente un **'Set de Jjamppong (fideos picantes) y cerdo agridulce'**. 
Es económico, el caldo picante eliminará el estrés laboral y el cerdo les dará la energía necesaria para la tarde. 🍜"

Líder: "¡Oh! Hoy me apetece algo picante. ¡Qué buen ojo tiene el bot! ¡Vamos!"
```

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. No se requieren conocimientos de programación. Se puede configurar el bot de forma intuitiva usando solo el **'Workflow Builder'** de Slack.
2. Puedes configurar palabras clave como "recomendar almuerzo" o emojis frecuentes como disparadores (Triggers) para invocar al bot al instante.
3. Conecta sin problemas un conector de IA como ChatGPT para ofrecer recomendaciones personalizadas que reflejen el clima y el ánimo del equipo.

---

## 🚀 Así lo escriben los verdaderos expertos

Este es el prompt principal para ingresar en el conector de IA dentro del Workflow de Slack (o herramienta de integración externa). Está diseñado para ir más allá de la selección aleatoria y percibir el contexto y la situación. Copia el siguiente prompt y ajusta solo las partes entre `[corchetes]` según la situación de tu empresa.

### 🥉 Versión Básica (Basic Version)

Úsala cuando quieras escapar rápidamente del pozo de la indecisión con una recomendación aleatoria pero efectiva.

> **Rol (Role):** Eres un asistente de IA amable que elige el menú de almuerzo de la oficina con rapidez y estilo.
>
> **Tarea (Task):**
> Selecciona primero una categoría al azar entre comida coreana, china, japonesa, occidental o comida rápida. Luego, recomienda rápidamente 3 platos populares dentro de esa categoría que le gustarían a cualquier trabajador promedio.

### 🥇 Versión Pro (Professional Version)

Úsala cuando quieras una recomendación sofisticada que refleje el clima, el ánimo del equipo y el número de personas para que todos queden satisfechos.

> **Rol (Role):** Eres un gourmet de paladar exigente y un navegador humano que conoce todos los restaurantes cerca de `[Ubicación de la empresa (ej: Paseo de la Reforma)]`.
>
> **Contexto (Context):**
>
> - Clima: `[Clima actual (ej: lluvioso, soleado, mucho calor)]`
> - Ánimo: `[Ánimo del equipo (ej: mucho estrés, día de pago, a dieta)]`
> - Personas: `[Número de asistentes (ej: solo, todo el equipo, reunión de colegas)]`
>
> **Tarea (Task):**
>
> 1. Recomienda con convicción el mejor menú de almuerzo que se adapte perfectamente a la situación proporcionada.
> 2. Añade una explicación ingeniosa y divertida (1 o 2 frases) que logre la empatía de los trabajadores sobre por qué elegiste este menú.
> 3. El formato de salida debe ser una lista limpia en Markdown con emojis apropiados para que sea fácil de leer en dispositivos móviles.
>
> **Restricciones (Constraints):**
>
> - Excluye estrictamente platos que generen mucha división de opiniones o menús demasiado pesados que sean difíciles de terminar en la limitada hora de almuerzo.
>
> **Advertencia (Warning):**
>
> - No inventes nombres de restaurantes o marcas ficticias que no existan en la realidad. Concéntrate únicamente en sugerir el 'nombre del plato'. (Prevención de alucinaciones)

---

## 💡 Comentario del autor (Insight & How to use)

Un bot de recomendaciones de almuerzo que combina los flujos de trabajo de Slack con la IA va más allá de ofrecer una simple conveniencia técnica; es una herramienta poderosa y discreta para moldear una **'Cultura (Culture)'** interna más fluida. Puede parecer un juguete que se arma en 10 minutos sin código, pero el impacto de este pequeño bot en la organización es sorprendente, ya que actúa como un excelente lubricante que genera risas inesperadas y charlas informales (Small Talk) en canales que antes solo veían instrucciones de trabajo.

La clave de por qué este prompt es tan potente en la práctica reside en el **'Control de Restricciones (Constraint Control)'** y el **'Diseño de Persona (Persona Design)'**. Si preguntas simplemente "¿Qué comemos hoy?", la IA repetirá como un loro respuestas vacías como "pizza, hamburguesa o ensalada". Sin embargo, al forzar variables de contexto claras como `[Ubicación]`, `[Clima]` y `[Ánimo]`, el rango de respuesta de la IA se estrecha drásticamente y la calidad aumenta. Sugerirá platos calientes en días de lluvia, opciones económicas antes del día de pago o comida picante en días de máximo estrés. Cuando se añade esta capacidad de percepción del detalle, el equipo deja de ver al bot como un "simple programa" y empieza a verlo como un "colega con buen gusto".

En particular, las **Restricciones (Constraints)** y la **Advertencia (Warning)** al final del prompt son los mecanismos de seguridad más importantes para el éxito del bot. El almuerzo dura apenas una hora. Si el bot recomienda un menú de varios tiempos o algo muy polarizante como comida extremadamente exótica, la confianza en el sistema caerá. Además, para evitar que la IA invente nombres de restaurantes inexistentes cerca de la oficina (alucinaciones), hemos restringido la respuesta para que se centre únicamente en el <b>'nombre del plato'</b>.

Si este bot tiene una buena acogida, te animo a usarlo como puente para expandir el sistema a formas más evolucionadas. Por ejemplo, si las funciones de IA nativas de Slack te parecen limitadas, conecta los prompts clave con **plataformas de automatización externas como Zapier o Make.com**. Puedes crear un bucle de automatización perfecto donde alguien publica un emoji (🍱), Zapier lo detecta como disparador, envía el prompt a la API de ChatGPT y devuelve el resultado como un mensaje elegante en el canal de Slack.

Una tubería de automatización así puede transformarse de forma flexible en un "Bot de elogios", "Bot de retrospectiva semanal" o un "Socio de lluvia de ideas". Te recomiendo empezar este viaje hacia el diseño de un entorno de trabajo altamente automatizado con este bot de almuerzos. Delegar decisiones triviales al sistema permite que tu cerebro se concentre en tareas más creativas y productivas. Ese es el verdadero valor de la automatización que busca este prompt.

---

## 🙋 Preguntas frecuentes (FAQ)

- **Q: Mi equipo usa el plan gratuito de Slack, ¿podemos usar el Workflow Builder?**
  - A: Lamentablemente, el Workflow Builder nativo de Slack solo está disponible en planes de pago (Pro en adelante). Si estás en un plan gratuito, te recomiendo usar herramientas externas como Zapier o Make.com. Estas pueden detectar mensajes o webhooks en un canal, generar una respuesta con la API de ChatGPT y enviarla de vuelta a Slack como una excelente alternativa de automatización.

- **Q: ¿Qué diferencia hay entre este método y programar el bot directamente con Python?**
  - A: Programar directamente con librerías como `slack-bolt` permite funciones mucho más complejas, como botones interactivos o conexión con bases de datos internas. Sin embargo, esto requiere costos de hosting (AWS, Heroku, etc.) y recursos de mantenimiento constantes. Para un bot de recomendación de almuerzos basado en texto, usar un **flujo de trabajo sin código (No-code)** es infinitamente más ventajoso en términos de retorno de inversión (ROI).

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. **Asignación de variables basada en la situación (Contextual Variables):** Más allá de un simple "recomienda un menú", hemos inyectado variables claras como `[Clima current]`, `[Ánimo del equipo]` y `[Asistentes]`. Esto evita que la IA genere textos mecánicos y aburridos, logrando resultados ultrapersonalizados inmersos en la situación actual del usuario.
2. **Control de alucinaciones y preferencias (Constraint Setting):** Al colocar un bloque estricto de `Advertencia (Warning)` al final, grabamos las limitaciones de tiempo y contexto en el circuito lógico de la IA. Filtramos platos polarizantes y bloqueamos el riesgo de inventar nombres de restaurantes ficticios.
3. **Asignación de una persona multidimensional (Role-playing):** Otorgamos a la IA la personalidad de un 'gourmet de paladar exigente y experto local'. Esto eleva el tono de la respuesta, pasando de una simple entrega de información a un consejo astuto e ingenioso propio de un colega con mucho estilo.

---

## 🎯 Conclusión (Epílogo)

La empresa siempre se mueve entre el trabajo intenso y la presión por los resultados. Pero esa hora del día en la que compartes la mesa con tus colegas debe ser, ante todo, placentera. Aunque no sea un sistema masivo, este pequeño <b>'Asistente de Almuerzo (Lunch Buddy)'</b> en un rincón de Slack refrescará el ambiente del equipo y reducirá notablemente la fatiga de tomar decisiones.

Desde hoy mismo, deja de mirar la pantalla en silencio esperando a que alguien más decida. Confía en la **elección con estilo que te propone tu asistente de IA**. Recarga energías al 100% con una comida decidida sin estrés y mantén una eficiencia laboral asombrosa por la tarde para salir a tu hora con el paso ligero. ¡Te apoyamos en tu camino hacia una jornada más productiva y deliciosa! 🍷
