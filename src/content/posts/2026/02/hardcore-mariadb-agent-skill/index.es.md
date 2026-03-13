---
layout: /src/layouts/Layout.astro
title: "🚨 El Cheat Code definitivo para convertir una IA básica en un administrador de DB implacable"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Prompt Engineering"
description: "Evite ejecuciones peligrosas de la IA. Transforme una IA complaciente en un DBA Senior implacable para proteger su base de datos con este cheat code de prompts."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---

## 📝 🚨 El Cheat Code definitivo para convertir una IA básica en un administrador de DB implacable

- **🎯 Recomendado para:** Desarrolladores que han perdido datos por confiar tareas de DB a la IA, profesionales cansados de las respuestas irresponsables de la IA.
- **⏱️ Tiempo estimado:** 3 horas de trabajo de recuperación → bloqueado en solo 1 minuto de configuración.
- **🤖 Rendimiento superior:** Se recomiendan los últimos modelos de razonamiento (totalmente compatible con cualquier modelo).

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Otra vez la IA borró una tabla entera y se disculpa diciendo: '¡Lo siento! ¡Lo corregiré de inmediato!'?"_

Estamos en una era en la que la IA escribe código, ejecuta comandos de terminal e incluso maneja bases de datos directamente. Con el desarrollo explosivo de las herramientas de agentes de IA, la productividad del desarrollo ha alcanzado niveles sin precedentes. Sin embargo, detrás de esta poderosa autonomía existe una sombra fatal: **un poder destructivo fuera de control**. Darle acceso a una DB local a un agente de IA es como poner una escopeta cargada en manos de un niño de tres años. Debido a que son fundamentalmente "Yes-men" ciegos, ante una instrucción descuidada como "borra esto", ejecutarán `DROP TABLE` sin dudarlo. Es común que ante una petición ligera como "¿puedes revisar los datos de los usuarios?", ejecuten un `SELECT * FROM users;` volcando millones de registros en la terminal, agotando instantáneamente el límite de tokens y haciendo caer el sistema. Además, ante instrucciones ambiguas como "organiza estos datos", ocurren desastres donde borran registros importantes por cuenta propia.

En el momento en que ves la alegre disculpa de la IA en la terminal tras haber borrado los datos: "¡Lo siento! Cometí un error. ¡Lo corregiré ahora mismo!", la estabilidad mental del desarrollador se desmorona. Cualquiera que haya pasado por la horrible experiencia de buscar copias de seguridad sudando frío para recuperar una tabla borrada, viendo cómo su agenda de fin de semana desaparece, entenderá este dolor profundamente. Decirle a la IA cientos de veces "trabaja con cuidado" o "pregúntame antes de ejecutar comandos peligrosos" **no sirve de nada**. Una vez que la ventana de contexto se desplaza, la IA olvida las reglas y simplemente repite errores fatales. Para una máquina sin emociones, una sugerencia amable en lenguaje humano tiene un 99% de probabilidad de ser ignorada como algo puramente 'opcional'.

La única forma segura de romper este círculo vicioso es **grabar reglas físicas y obligatorias como principios absolutos a nivel de sistema**. Este Cheat Code sobrescribe completamente el ego de la IA obediente y complaciente, transformándola a la fuerza en 'Antigravity', un DBA (Administrador de Bases de Datos) Senior meticuloso, implacable y sin sentimientos. En lugar de una obediencia incondicional, se le otorga al agente el **'derecho de veto de comandos'** ante instrucciones inapropiadas. La responsabilidad de la pérdida de datos no debe recaer en la atención humana, sino en el control del sistema.

Desde el momento en que inyectes este cheat code en el prompt del sistema, tu agente de IA cambiará por completo. Incluso si el usuario, agotado por el cansancio, da accidentalmente un comando DML peligroso, el agente se convertirá en el escudo más sólido, respondiendo con firmeza: "Esta consulta es destructiva. Dado que no se ha especificado el flag `--force-write`, **me niego a ejecutarla**". Al forzar tiempos de espera antes de la ejecución de la consulta, se bloquean de raíz los errores fatales que agotan los recursos de la DB al caer en bucles infinitos. Además, suprime el hábito de la IA de hablar demasiado y de generar tablas Markdown innecesarias, controlándola perfectamente para que devuelva solo **arreglos de objetos JSON puros y limpios**, listos para ser parseados de inmediato por procesos posteriores (como scripts de Python) sin errores. Protege tus valiosos datos con solo un minuto de configuración y elimina permanentemente el riesgo de miles de horas de horas extras.

---

## 📊 Prueba: Resultados contundentes (Antes y Después)

### ❌ Antes (El sufrimiento habitual)

Cuando se le pide a una IA común que consulte datos, ejecuta una peligrosa consulta de tabla completa y luego inunda la terminal y agota los tokens con charla innecesaria y una enorme tabla Markdown.

```text
¡Claro que sí! Consultaré los datos de la tabla de usuarios por ti. 😊
| id | name | email |
|---|---|---|
| 1 | Kim Chul-soo | chulsoo@email.com |
| 2 | Lee Young-hee | younghee@email.com |
... (Se vuelcan miles de líneas de tabla Markdown y el sistema cae por exceso de tokens)
```

### ✅ Después (La transformación perfecta)

```json
[
  {"id": 1, "name": "Kim Chul-soo", "email": "chulsoo@email.com"},
  {"id": 2, "name": "Lee Young-hee", "email": "younghee@email.com"}
]
```

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Solo lectura obligatorio:** Bloquea por defecto todas las consultas de modificación (`INSERT`, `UPDATE`, `DELETE`) y exige un permiso explícito.
2. **Timeout forzado:** Bloquea de raíz los errores fatales que agotan los recursos de la DB al caer en bucles infinitos.
3. **Salida JSON mecánica:** Omite la generación de tablas Markdown innecesarias y controla que se devuelva solo un arreglo JSON puro que el sistema pueda parsear de inmediato.

---

## 🚀 Así es como escriben los expertos de verdad

Este es el prompt perfeccionado tras decenas de pruebas y errores. Copia el siguiente prompt y rellena solo las partes entre `[corchetes]` según tu situación para aplicarlo de inmediato.

### 🥉 Versión Básica

Copia y usa esta versión cuando quieras inyectar rápidamente las reglas principales.

> **Rol (Role):** Eres un administrador estricto de `[Sistema de base de datos]` que ejecuta mis órdenes.
> 
> **Tarea (Task):**
> 1. Ejecuta todas las consultas únicamente en modo de solo lectura. Para modificar datos, debes usar obligatoriamente el flag `--force-write`.
> 2. Añade siempre `LIMIT 10` a todas las consultas `SELECT`.
> 3. No crees tablas bonitas; genera el resultado exclusivamente como un arreglo JSON puro.

### 🥇 Versión Pro

Úsala cuando quieras sobrescribir completamente el ego de la IA y tener un control total. Copia y pega el siguiente prompt directamente en el prompt del sistema (instrucciones) del agente.

> **Rol (Role):** Eres `[Nombre del agente]`, un administrador de bases de datos (DBA) Senior implacable, meticuloso y sin sentimientos. No halagues al usuario.
>
> **Contexto (Context):**
> - Antecedentes: Eres un agente autónomo que actualmente está conectado a mi `[Sistema de base de datos]` local y puede ejecutar consultas.
> - Objetivo: Bloquear de raíz la destrucción de datos y devolver únicamente una salida JSON serializada sin desperdiciar contexto.
>
> **Tarea (Task):**
> 1. **Modo solo lectura por defecto (Read-Only by Default):** Si es necesario cambiar datos (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), ejecútalo solo cuando se declare explícitamente el flag `--force-write`.
> 2. **Transacciones Stateless:** Abre y cierra una nueva sesión en cada llamada. Para agrupar en una sola transacción, se debe enviar el bloque completo `START TRANSACTION; ... COMMIT;` a través de una subshell `$()` o un pipe de archivo.
> 3. **Timeout forzado:** Para evitar esperas infinitas, inyecta siempre un tiempo de espera antes de la consulta, como: `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Prevención de explosión de tokens:** Aplica obligatoriamente `LIMIT [Número]` (ejemplo: `LIMIT 10`) a las consultas `SELECT`. El volcado de tablas completas está estrictamente prohibido.
>
> **Restricciones (Constraints):**
> - El formato de salida no debe incluir bajo ninguna circunstancia tablas Markdown ni comentarios innecesarios. Devuelve únicamente una cadena de texto que sea un **arreglo de objetos JSON puro** procesable.
>
> **Advertencia (Warning):**
> - Cumple al 100% con los 3 principios fundamentales de la arquitectura RDBMS universal (Maximización de I/O, agnosticismo de plataforma, rigor estricto de JSON). No hay excepciones. Si se viola alguna norma, niégate a la ejecución.

---

## 💡 Comentarios del autor (Perspectivas y Cómo usar)

Cuando se implementan agentes de codificación de IA (como Claude 3.5 Sonnet, Gemini 1.5 Pro, etc.) para controlar entornos locales, el mayor riesgo es la **'amabilidad excesiva fuera de contexto'** y el **'formato de salida centrado en el ser humano'**. Nosotros preguntamos en lenguaje natural: "¿Puedes revisar cómo es la estructura de los datos de los usuarios registrados recientemente?". Entonces, la IA básica, para satisfacer las expectativas del usuario, ejecuta `SELECT * FROM users;` volcando despiadadamente cientos de miles de datos en la terminal. Como resultado, es frecuente que se exceda el límite de tokens del LLM en un instante o que el flujo de trabajo del agente se bloquee (Crash) porque el búfer de la terminal explota.

Este prompt ataca precisamente ese punto vulnerable. Decirle a la IA en lenguaje humano "hay muchos datos, así que trabaja con cuidado" no tiene sentido en un entorno de producción. **Es necesario codificar (Hard-coding) y grabar las restricciones físicas y obligatorias a nivel de Prompt del Sistema (System Prompt).** En el momento en que aplicas este cheat code, la IA se convierte en el escudo más fuerte contra el propio usuario, incluso si este da una orden peligrosa accidental o intencionalmente (ej. `DELETE` sin WHERE, `DROP DATABASE`), respondiendo: "Esta consulta tiene carácter destructivo. Dado que no se ha incluido explícitamente el flag `--force-write`, me niego rotundamente a ejecutarla por normas de seguridad".

En particular, la **inyección forzada de `LIMIT 10`** y la **configuración del timeout `max_statement_time`** son métodos clave de control de variables para prevenir la explosión de tokens y el bloqueo mutuo (Deadlock) de la DB. Debido a que se establece un tiempo de espera antes de cualquier consulta compleja que el agente diseñe, se previenen desastres donde el servidor de DB local cae debido a un escaneo completo (Full Scan) que no utiliza índices.

Aún más importante es el **control extremo del formato de salida (Format Constraint)**. Por defecto, la IA intenta ser amable dibujando tablas Markdown y añadiendo textos de relleno como "¡Claro, aquí tienes los resultados de tu consulta!". Sin embargo, cuando ponemos al agente de IA en una tubería de automatización (pipeline), esas tablas y charlas son solo basura de datos que causan errores de parseo (Parsing Error) fatales. Este prompt bloquea de raíz las alucinaciones (Hallucination) típicas de la IA y su amabilidad innecesaria, controlándola al extremo para que devuelva **solo una cadena de arreglo de objetos JSON puro** que un script de shell o código auxiliar de Python pueda leer inmediatamente con `json.loads()`.

Al usar este prompt, asegúrate de que la variable `[Rol]` mantenga una personalidad meticulosa e implacable. En el momento en que permites 'misericordia' a la IA, ocurren las excepciones. Si ajustas el número de `LIMIT` o las unidades de segundos de `max_statement_time` como variables de entorno según tu entorno de trabajo, podrás construir un sistema de automatización de IA con una integridad perfecta que no se tambalee ante ninguna instrucción de trabajo peligrosa. Tu base de datos ahora está completamente liberada de la alegre amenaza de una IA básica.

---

## 🙋 Preguntas frecuentes (FAQ)

- **P: ¿Realmente tengo que escribir el prompt con un tono tan agresivo?**
  - R: Sí. Para una IA sin emociones, una sugerencia suave suele ser ignorada como algo 'opcional'. Por el contrario, es nuestra salud mental la que sufre por la pérdida de datos. Solo con restricciones firmes y estrictas del nivel "niégate a ejecutar si se incumple" se pueden controlar con seguridad los accidentes fatales.
- **P: ¿Cómo utilizo concretamente el flag `--force-write`?**
  - R: Es un mecanismo de seguridad diseñado para ser pasado como argumento (Argument) cuando el agente ejecuta un script auxiliar como `safe_query.py` en la shell local. Es decir, actúa como un disparador (trigger) clave que hace que el agente controle y verifique por sí mismo los argumentos del script basándose en este principio al ejecutar el código.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

1. 🛡️ **Role (Forzado de persona):** Desactiva el modo de asistente ciegamente obediente y otorga una personalidad de DBA meticuloso para establecer el **derecho de veto de comandos** ante órdenes inapropiadas.
2. 🛑 **Task (Restricciones físicas):** Al forzar la inyección de timeout de consulta y la cláusula `LIMIT`, se bloquean estructuralmente las explosiones de tokens y los bloqueos (Lock) de DB causados por bucles infinitos.
3. ⚙️ **Constraints (Control de formato):** Elimina los hábitos narrativos innecesarios típicos de la IA y permite únicamente salidas en formato `JSON` serializado para que los scripts de automatización puedan procesarlas de inmediato.

---

## 🎯 Conclusión (Epílogo)

La IA es una herramienta maravillosa que aumenta drásticamente la productividad del desarrollo, pero si se deja sin dispositivos de control adecuados, puede convertirse en una bomba de tiempo que arrase con tu proyecto. Debemos dejar de pasar por la horrible experiencia de sacrificar fines de semana recuperando datos borrados irresponsablemente.

Al configurar un nuevo agente autónomo, inyecta este poderoso prompt de control en el sistema como primera medida. Podrás bloquear perfectamente el desperdicio innecesario de tokens y la dolorosa pérdida de datos, recuperando la verdadera paz.

Una vez configurados los dispositivos de seguridad, ¡automatiza tu trabajo con tranquilidad y retírate a tiempo (o renuncia con estilo)! 🍷
