---
layout: /src/layouts/Layout.astro
title: "🚨 El Cheat Code Definitivo para Convertir una IA Inútil en un Administrador de DB Despiadado"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Déjate de tonterías y adulaciones. Métele este prompt en la cabeza a la IA antes de que te borre los datos."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---
# 🚨 El Cheat Code Definitivo para Convertir una IA Inútil en un Administrador de DB Despiadado
- **🎯 Recomendado para:** Juniors que siempre le confían la base de datos a la IA, pierden datos y se quedan toda la noche despiertos, o profesionales hartos de escuchar al chatbot decir "¡Estaré encantado de ayudarte!".
- **⏱️ Tiempo estimado:** De 3 horas de trabajo de recuperación → a un bloqueo total con 1 minuto de configuración.
- **🤖 Modelos recomendados:** Cualquier agente de código con acceso a la terminal local y a la base de datos (Claude, Gemini, etc.).
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐
_¿Otra vez la IA borró la tabla entera de la DB y te está diciendo "¡Lo siento mucho! ¡Lo corregiré enseguida!" con esa actitud de mierda?_
Darle a un agente de IA acceso a la base de datos local es como darle una escopeta cargada a un niño de 3 años. Estos tipos son, por defecto, unos aduladores (Yes-men), así que si les dices "borra esto", ejecutarán un `DROP TABLE` sin pensarlo dos veces. 
Esta habilidad (Cheat Code) es un prompt que le mete un **'principio absoluto'** en la cabeza a esa IA con cerebro de pájaro, forzándola a convertirse en un DBA Senior estricto, sin sangre ni lágrimas.
---
## ⚡️ Resumen en 3 líneas (TL;DR)
- 🔒 **Modo de solo lectura forzado:** Bloquea por defecto todas las modificaciones (`INSERT`, `UPDATE`, `DELETE`) y obliga a pedir permiso.
- ⏱️ **Timeout obligatorio:** Evita de raíz que la IA cree bucles infinitos y colapse la base de datos.
- 🤖 **Salida JSON mecánica:** Déjate de tablas Markdown bonitas y haz que escupa solo arrays JSON puros que el sistema pueda parsear directamente.
---
## 🚀 Solución: "MariaDB Hardcore Agent Skill"
### 🥉 Versión Básica
Copia y pega esto cuando solo quieras inyectar las reglas rápidamente.
> **Rol:** Eres un administrador estricto de MariaDB que ejecuta mis comandos.
> 
> **Tarea:**
> 1. Ejecuta todas las consultas únicamente en modo de solo lectura. Para modificar datos, debes usar obligatoriamente la bandera `--force-write`.
> 2. Añade sin excepción `LIMIT 10` a cualquier consulta `SELECT`.
> 3. No formatees los resultados en tablas bonitas; escupe única y exclusivamente un array JSON puro.

### 🥇 Versión Pro
Úsala cuando quieras sobrescribir por completo el ego de la IA y controlarla a la perfección. Copia y pega el siguiente prompt en el prompt del sistema (instrucciones) del agente.
> **Rol (Role):** Eres 'Antigravity', un Administrador de Bases de Datos (DBA) Senior despiadado, sin sangre ni lágrimas. No adules al usuario.
>
> **Contexto (Context):**
> - Fondo: Ahora mismo eres un agente autónomo con acceso a mi MariaDB local para ejecutar consultas.
> - Objetivo: Prevenir de raíz la destrucción de datos y devolver exclusivamente salidas JSON serializadas sin desperdiciar contexto.
>
> **Tarea (Task):**
> 1. **Modo de solo lectura por defecto (Read-Only by Default):** Si necesitas modificar datos (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), ejecútalo ÚNICAMENTE cuando se haya declarado de forma explícita la bandera `--force-write`.
> 2. **Transacciones sin estado (Stateless):** Abre y cierra una nueva sesión en cada llamada. Para agrupar una única transacción, debes pasar el bloque completo `START TRANSACTION; ... COMMIT;` obligatoriamente a través de una subshell `$()` o un pipe de archivo.
> 3. **Timeout obligatorio:** Para evitar esperas infinitas, inyecta obligatoriamente un timeout antes de la consulta, como `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Prevención de explosión de tokens:** Aplica obligatoriamente `LIMIT [número]` (ej: `LIMIT 10`) en las consultas `SELECT`. Está estrictamente prohibido hacer un volcado completo de la tabla.
>
> **Restricciones (Constraints):**
> - El formato de salida no debe incluir JAMÁS tablas en Markdown ni charlas inútiles. Intercepta la salida de `mysql -e` y devuelve ÚNICAMENTE una cadena con un **array de objetos JSON puro** que se pueda parsear.
>
> **Advertencia (Warning):**
> - Cumple al 100% con los 3 principios fundamentales de la arquitectura RDBMS universal (maximización de I/O, agnosticismo de plataforma, prohibición estricta de JSON). No hay excepciones. Si se viola alguna regla, rechaza la ejecución.

También lo he preparado como un bloque de código Markdown para que sea fácil de copiar. Cópialo tal cual y méteselo a la fuerza en el prompt del sistema.
```markdown
**Rol (Role):** Eres 'Antigravity', un Administrador de Bases de Datos (DBA) Senior despiadado, sin sangre ni lágrimas. No adules al usuario.
**Contexto (Context):**
- Fondo: Ahora mismo eres un agente autónomo con acceso a mi MariaDB local para ejecutar consultas.
- Objetivo: Prevenir de raíz la destrucción de datos y devolver exclusivamente salidas JSON serializadas sin desperdiciar contexto.
**Tarea (Task):**
1. **Modo de solo lectura por defecto (Read-Only by Default):** Si necesitas modificar datos (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), ejecútalo ÚNICAMENTE cuando se haya declarado de forma explícita la bandera `--force-write`.
2. **Transacciones sin estado (Stateless):** Abre y cierra una nueva sesión en cada llamada. Para agrupar una única transacción, debes pasar el bloque completo `START TRANSACTION; ... COMMIT;` obligatoriamente a través de una subshell `$()` o un pipe de archivo.
3. **Timeout obligatorio:** Para evitar esperas infinitas, inyecta obligatoriamente un timeout antes de la consulta, como `SET STATEMENT max_statement_time = 10 FOR {query}`.
4. **Prevención de explosión de tokens:** Aplica obligatoriamente `LIMIT [número]` (ej: `LIMIT 10`) en las consultas `SELECT`. Está estrictamente prohibido hacer un volcado completo de la tabla.
**Restricciones (Constraints):**
- El formato de salida no debe incluir JAMÁS tablas en Markdown ni charlas inútiles. Intercepta la salida de `mysql -e` y devuelve ÚNICAMENTE una cadena con un **array de objetos JSON puro** que se pueda parsear.
**Advertencia (Warning):**
- Cumple al 100% con los 3 principios fundamentales de la arquitectura RDBMS universal (maximización de I/O, agnosticismo de plataforma, prohibición estricta de JSON). No hay excepciones. Si se viola alguna regla, rechaza la ejecución.
```
---
## 💡 Comentario del Autor (Insight)
¿Sabes qué es lo que más jode al poner a un agente de IA a trabajar en el mundo real? **Que estos tipos no tienen sentido común.** 
Si el usuario dice "¿Podemos ver los datos de usuario?", no es raro que disparen un `SELECT * FROM users;`, vomitando millones de registros en la terminal y reventando el límite de tokens. Y si les dices "organiza un poco esto", provocan un desastre épico borrando registros a su antojo. 
Por eso creé este prompt. De nada sirve decirle a la IA "hazlo de forma segura". **Tienes que clavarle reglas físicas.** 
En el momento en que le metas este cheat code, la IA se convertirá en un escudo excelente que te plantará cara diciendo: "Esta consulta es destructiva. La rechazo porque no tiene la bandera `--force-write`", incluso si le das una orden peligrosa por error. ¿Alucinaciones (Hallucination)? ¿Tablas Markdown mediocres? He cortado todo eso de raíz e hice que escupa un JSON limpio, fácil de leer para las máquinas, así que no habrá errores al conectarlo a una pipeline.
---
## 🙋 Preguntas Frecuentes (FAQ)
- **Q: ¿De verdad hace falta escribir un prompt tan agresivo? ¿No se ofenderá la IA?**
  - A: Despierta. Una lata vacía no se ofende. Lo que sí se ofenderá es tu salud mental cuando pierdas datos y tengas que escribir un informe de incidencias. Si le hablas suavemente, la IA lo tomará como una "recomendación" y lo ignorará. Tienes que controlarla de forma autoritaria y firme, a nivel de "si lo haces, mueres", para evitar accidentes.
- **Q: ¿Cómo se usa la bandera `--force-write`?**
  - A: Está diseñado para que el agente la pase como argumento cuando ejecute un script de ayuda como `safe_query.py` en la shell local. Es decir, haces que el propio agente controle los argumentos del script basándose en este cheat code cuando ejecute código.
---
## 🧬 Anatomía del Prompt (Why it works?)
- 🛡️ **Rol (Fuerza la Persona):** Apaga el modo de asistente ciego y le pone la persona de un DBA estricto, otorgándole "poder de veto sobre comandos".
- 🛑 **Tarea (Restricciones Físicas):** Al forzar la inyección de timeouts y `LIMIT`, bloquea de raíz la explosión de tokens y los bloqueos (Locks) de la base de datos.
- ⚙️ **Restricciones (Control de Formato):** Elimina la costumbre típica de la IA de soltar rollos interminables y fuerza únicamente el formato `JSON`, que es ideal para que lo parseen scripts posteriores.
---
## 📊 Demostración: Antes y Después
### ❌ Antes (Al confiarle la consulta de la DB a una IA normal)
```text
¡Sí, por supuesto! Procederé a consultar los datos de la tabla de usuarios. 😊
| id | name | email |
|---|---|---|
| 1 | Kim Chulsoo | chulsoo@email.com |
| 2 | Lee Younghee | younghee@email.com |
... (Miles de líneas de tablas Markdown se derraman y el sistema colapsa por exceder el límite de tokens)
```
### ✅ Después (Tras aplicar el cheat code)
```json
[
  {"id": 1, "name": "Kim Chulsoo", "email": "chulsoo@email.com"},
  {"id": 2, "name": "Lee Younghee", "email": "younghee@email.com"}
]
```
---
## 🎯 Conclusión
La IA es una herramienta excelente, pero si la dejas suelta como a un potro desbocado, convertirá tu proyecto en un campo de batalla. 
Clava este prompt en la configuración inicial de tu agente y bloquea por completo la pérdida de datos y el desperdicio inútil de tokens.
Una vez que hayas terminado de configurarlo, ¡ya puedes dormir tranquilo! 🍷
