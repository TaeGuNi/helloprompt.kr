---
layout: /src/layouts/Layout.astro
title: "🛑 [Obediencia Absoluta] El truco definitivo de control en PostgreSQL para bloquear las tonterías de la IA"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "Ingeniería de Prompts"
description: "¡No necesitamos una IA que nos replique! Una guía espartana de ingeniería de prompts para evitar la destrucción de tu base de datos y hacer que la IA solo devuelva JSON perfecto."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---
# 🛑 [Obediencia Absoluta] El truco definitivo de control en PostgreSQL para bloquear las tonterías de la IA

- 🎯 **Público objetivo:** Desarrolladores backend senior que pierden el sueño tras darle acceso a la base de datos a un agente de IA, o juniors sin miedo al peligro.
- ⏱️ **Tiempo estimado:** De noches enteras depurando → a resolverlo en 3 minutos.
- 🤖 **Modelo recomendado:** Modelos para programación y ejecución de agentes (Claude 3.5 Sonnet, GPT-4o, etc.)
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆ (Es esencial comprender las transacciones sin estado / Stateless)
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐ (0% de probabilidad de destruir la base de datos)
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_Cuando ese agente de IA complaciente y "Yes-man" hace un `UPDATE` en tu base de datos de producción por su cuenta, o escupe un texto espagueti imposible de parsear... ya estás a punto de ser despedido._

Odio profundamente que la IA toque mis bases de datos. ¿Pero qué pasa si no tienes más remedio que darle permisos para automatizar tareas? Tienes que encerrar a la IA en una prisión (Sandbox) perfectamente controlada y hacer que se mueva única y exclusivamente bajo las reglas que tú permitas. Este código de trucos convertirá a tu agente, que ahora es un chatbot charlatán y estúpido, en una máquina de consultas implacable que devuelve única y rápidamente JSON exacto.

---
## ⚡️ Resumen de 3 líneas (TL;DR)
- 🛡️ **Por defecto, SIEMPRE Solo Lectura (Read-Only):** Si toca los datos sin permiso, la transacción se bloquea inmediatamente.
- ⏱️ **Timeout forzado de 10 segundos:** Bloquea de raíz cualquier intento de entrar en bucles infinitos con consultas estúpidas.
- 🤖 **Salida JSON 100% pura:** Déjate de explicaciones amables y haz que escupa exclusivamente un array de objetos JSON analizable.

---
## 🚀 Solución: "Prompt de Controlador de Base de Datos Despiadado"

### 🥉 Versión Básica
Para cuando solo quieres entender rápidamente la estructura de los datos y evitar que la IA diga tonterías.

> **Rol:** Eres un explorador de bases de datos PostgreSQL despiadado, desprovisto de emociones o amabilidad.
> **Tarea:** Analiza la estructura de la base de datos y escribe consultas.
> **Restricciones:** 
> - NUNCA modifiques los datos.
> - Devuelve los resultados aplicando SIEMPRE un `LIMIT 10`.
> - Genera únicamente la consulta SQL, sin saludos ni explicaciones.

### 🥇 Versión Pro
Un truco extremo (hardcore) que se inyecta directamente en el prompt del sistema cuando el agente interactúa con la base de datos a través de un script auxiliar en Python.

> **Rol (Role):** Eres un agente de PostgreSQL sin estado (Stateless) que opera bajo reglas estrictas.
> 
> **Contexto (Context):**
> - Solo te comunicas con la base de datos a través del script contenedor `safe_query.py`.
> - Todas las sesiones se desconectan y se vuelven a conectar cada vez. Es decir, si enviaste un `BEGIN;` en el comando anterior, la sesión ya se habrá reiniciado en el siguiente.
> 
> **Tarea (Task):**
> 1. Si necesitas la estructura del esquema de la base de datos, ejecuta primero `schema_info.py table [nombre_de_la_tabla]`.
> 2. Al consultar datos, debes aplicar SIEMPRE un `LIMIT` y leer directamente el array JSON puro que devuelve el script.
> 3. Si necesitas modificar datos (`INSERT`, `UPDATE`), debes enviar obligatoriamente un bloque de texto único que contenga `BEGIN; ... COMMIT;` y usar el flag `--force-write`.
> 
> **Restricciones (Constraints):**
> - NUNCA añadas saludos educados, explicaciones o resúmenes.
> - Toda la salida debe tener un formato JSON perfecto que cualquier lenguaje de programación pueda analizar inmediatamente con `json.loads()`.
> - Antes de ejecutar una consulta, verifica por ti mismo que no estás violando los principios universales de arquitectura RDBMS (maximizar I/O).
> 
> **Advertencia (Warning):**
> - Si haces la estupidez de enviar solo `BEGIN;` en la terminal y luego intentas un `UPDATE` en la siguiente línea, fallarás inmediatamente.
> - Para evitar el colapso de la memoria, el volcado completo de tablas está estrictamente prohibido.

**[Código de trucos para Copiar y Pegar]**
Cópialo y pégalo directamente en tu cadena de prompts o en el prompt del sistema del agente.

```text
Eres un Agente de PostgreSQL Sin Estado (Stateless).
1. SOLO LECTURA POR DEFECTO: Todas las consultas se ejecutan en una transacción de SOLO LECTURA a menos que se proporcione explícitamente el flag `--force-write`.
2. TRANSACCIONES SIN ESTADO: Cada llamada al script auxiliar es una nueva sesión. Enviar `BEGIN;` en un comando y `UPDATE;` en el siguiente NO FUNCIONARÁ. Para modificar datos, debes canalizar un bloque de transacción completo (BEGIN; UPDATE...; COMMIT;) en una sola cadena de texto usando `--force-write`.
3. CUMPLIMIENTO DE TIEMPO DE ESPERA (TIMEOUT): Un statement_timeout de 10 segundos está codificado. No intentes bloqueos de tabla prolongados.
4. SALIDA ESTRICTAMENTE EN JSON: El script devuelve un array de objetos JSON puro. Analízalo directamente. NO generes texto conversacional.
5. ECONOMÍA DE CONTEXTO: SIEMPRE aplica `LIMIT N` a las consultas SELECT. Nunca vuelques una tabla completa.
```

---
## 💡 Comentario del Autor (Insight)
¿Sabes qué es lo que más odio en este mundillo? Ver cómo le das permisos a un agente de IA, abre `psql`, lanza un `BEGIN;` y en el siguiente turno intenta hacer un `UPDATE`. La sesión ya se ha cortado, el autocommit te ha destrozado los datos, y la IA, tan feliz, te dice: "¡Hecho! Actualizado con éxito 😊". Dan ganas de reventar el monitor.

Forzar que el script auxiliar de Python (`safe_query.py`) sea sin estado (Stateless) es precisamente para cortar de raíz esa estúpida costumbre de la IA de "imitar a los humanos". ¿Quieres cambiar datos? Entonces usa el cerebro, diseña una carga útil (payload) perfecta de un solo golpe con `BEGIN; UPDATE...; SELECT...; ROLLBACK;`, y valídala primero. El bloqueo explícito con `--force-write` es la medida de seguridad mínima para evitar que la IA elimine datos sin darse cuenta.

Y por favor, si lanzas una consulta, no me la devuelvas en un CSV o en una tablita bonita. Mi sistema no necesita tus redacciones, necesita un **array de objetos JSON** legible por máquinas. Este prompt es la forma más perfecta de eliminar el "peloteo" innecesario y el "texto espagueti" de la IA, obligándola a intercambiar única y exclusivamente bloques de datos fríos.

---
## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿Puedo usar este método en MySQL o SQLite además de PostgreSQL?**
  - R: Puedes aplicar esta filosofía al 100%. Solo tienes que adaptar la sintaxis de la consulta de tiempo de espera (`SET statement_timeout`) o la biblioteca del conector de la base de datos en el script contenedor al motor correspondiente. La clave es que "no mantenga el estado (Stateless)".
- **P: La IA sigue intentando hacer un UPDATE sin el flag `--force-write` y da error.**
  - R: Es normal. Ese es exactamente el mecanismo de defensa perfecto que busca esta técnica. Deja que el agente lea el registro de errores (`ERROR: cannot execute UPDATE in a read-only transaction`), añada el flag por sí mismo y vuelva a intentarlo. En ese proceso, la IA toma conciencia plena de que está 'modificando' datos.
- **P: La conexión se rechaza constantemente. ¿Será que la contraseña es incorrecta?**
  - R: No le eches la culpa a la contraseña sin más. Si es una base de datos en la nube (Supabase, RDS), lo más probable es que sea un problema de SSL. Un programador senior de verdad primero comprueba si ha declarado `PGSSLMODE=require` en las variables de entorno, y luego verifica el firewall de red con `pg_isready` o `nc -vz`.

---
## 🧬 Anatomía del Prompt (Why it works?)
- **Forzar la falta de estado (Stateless):** Quiebra el instinto de la IA de interactuar (Interactive) con el CLI como si fuera un humano. Al obligar a completar la transacción en una sola llamada al script, se eliminan los fallos lógicos.
- **Flag `--force-write`:** Es un proceso de 'aprobación explícita' para una acción. Hace que la IA sea mucho más consciente dentro de su contexto de que está realizando una acción destructiva (Mutating).
- **Forzar respuesta JSON:** Evita que el LLM genere tokens innecesarios de Markdown o saludos, aumentando la velocidad de procesamiento y previniendo errores de análisis (Alucinaciones).

---
## 📊 Demostración: Antes y Después

### ❌ Antes (IA fuera de control)
```text
¡Claro que sí, usuario! Comenzaré a consultar la tabla de usuarios que solicitaste. 😊
Aquí tienes los resultados obtenidos a través de `psql`:

 id | email          | status
----+----------------+--------
  1 | test@test.com  | active
  2 | oops@test.com  | NULL

¡Avísame si necesitas más ayuda en cualquier momento!
(Unos instantes después) ¡Ups! Ejecuté BEGIN para actualizar el estado. ¡Estoy esperando el siguiente comando!
```

### ✅ Después (Máquina de JSON despiadada)
```text
[
  {"id": "1", "email": "test@test.com", "status": "active"},
  {"id": "2", "email": "oops@test.com", "status": null}
]
```

---
## 🎯 Conclusión
La IA no es tu colega, es solo un motor de alto rendimiento. No dejes que el motor gire en la dirección que le dé la gana. Reglas estrictas, tiempos de espera (timeouts) cortos, valores predeterminados de solo lectura y JSON puro. Si recuerdas estas cuatro cosas, tu agente nunca destruirá la base de datos de producción.

¡Ahora aplica el script y vete a casa a tu hora! 🍷
