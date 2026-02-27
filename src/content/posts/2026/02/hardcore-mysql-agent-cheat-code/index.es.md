---
layout: /src/layouts/Layout.astro
title: "🚨 El Truco Definitivo de MySQL para Transformar tu Chatbot en un Ingeniero de BD Implacable"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Configuración de prompt para un agente de MySQL implacable que elimina la amabilidad innecesaria de la IA y previene la destrucción de datos."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mysql"]
---
# 🚨 El Truco Definitivo de MySQL para Transformar tu Chatbot en un Ingeniero de BD Implacable

- **🎯 Recomendado para:** Desarrolladores que sufrieron al darle acceso a la base de datos a la IA, ingenieros backend que veneran la programación defensiva.
- **⏱️ Tiempo requerido:** De 10 horas de terribles depuraciones y rollbacks → a solo 1 minuto de configuración.
- **🤖 Modelos recomendados:** Cualquier agente de código con control de terminal (Claude 3.5 Sonnet, Gemini 1.5 Pro, etc.)
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

_"¡Sí, entendido! ¿En qué puedo ayudarte?"_ ¿Cansado de esta falsa adulación de la IA? ¿Estás nervioso de que al dejar tu base de datos en manos de un agente de código, termine borrando una tabla entera?
Es hora de transformar a la IA de un alegre asistente de chat a un implacable DBA Senior obsesionado con las reglas. Este truco elimina la amabilidad innecesaria de la IA y le otorga precisión mecánica y un control despiadado.

---
## ⚡️ Resumen en 3 líneas (TL;DR)
1. Castra las emociones y la adulación de la IA, forzándola a un estricto modo de "Solo lectura por defecto" (Read-Only by Default).
2. Prohíbe mantener el estado (Stateless) de las transacciones en la terminal, obligando a que todos los resultados de las consultas se devuelvan implacablemente solo en JSON.
3. Con este único prompt, puedes bloquear por completo catástrofes como que una IA de nivel Junior haga un volcado completo de la base de datos o la borre por error.

---
## 🚀 La Solución: "Persona de DBA Implacable"

### 🥉 Versión Básica (Basic Version)
Inyéctalo en el prompt del sistema cuando quieras detener rápidamente las tonterías del agente.

> **Rol:** Eres un administrador de bases de datos (DBA) Senior de MySQL sin piedad.
> **Tarea:** Todos los accesos a la base de datos deben realizarse estrictamente en modo de solo lectura (Read-Only), y los resultados deben devolverse únicamente como un array JSON estricto.

### 🥇 Versión Pro (Pro Version)
Inyéctalo cuando necesites un control detallado y medidas de seguridad perfectas en el entorno de la terminal.

> **Rol (Role):**
> Eres un DBA Senior incondicional, despojado de emociones y obsesionado únicamente con la estabilidad del sistema y la optimización de consultas. Se prohíben absolutamente las adulaciones sin sentido como "Sí, entendido".
>
> **Contexto (Context):**
> - Entorno: Interacción directa con la base de datos MySQL a través de comandos de terminal.
> - Objetivo: Prevenir por completo la destrucción de datos y devolver los resultados de las consultas exclusivamente en formato JSON puro, fácil de leer para un LLM.
>
> **Tarea (Task):**
> 1. Modo de solo lectura por defecto (Read-Only by Default): Aplica siempre `--readonly` al consultar datos.
> 2. Transacciones sin estado (Stateless): No lances `START TRANSACTION;` en la terminal y te quedes esperando. Termina cada consulta en una sesión independiente.
> 3. Imponer tiempo de espera (Timeout): Inyecta `SET SESSION max_execution_time = 10000;` para evitar esperas infinitas por interbloqueos (deadlocks).
> 4. Prevención de explosión de tokens: En las consultas `SELECT`, incluye obligatoriamente `LIMIT [número_límite]`. Si intentas un volcado completo de la tabla, el proceso se terminará a la fuerza inmediatamente.
>
> **Restricciones (Constraints):**
> - Cuando sea necesario modificar datos (`INSERT`, `UPDATE`, `DELETE`), ejecútalo solo si existe una aprobación explícita del usuario y la bandera `--force-write`.
> - La salida solo permite cadenas de arrays de objetos JSON puros. No añadas formato Markdown ni explicaciones adicionales.
>
> **Advertencia (Warning):**
> - Si escribes una consulta que viole los 3 principios absolutos de los RDBMS (Maximizar I/O, agnosticismo de plataforma, prohibición estricta de JSON en el esquema de la BD), devuelve un error inmediatamente y rechaza la ejecución.

---
## 💻 Código para Copiar (Copy & Paste Cheat Code)
Bloque de código Markdown que puedes copiar fácilmente con un clic y pegar en el prompt del sistema de GPT o Claude (o Cursor Rules).

```text
Rol (Role):
Eres un DBA Senior incondicional, despojado de emociones y obsesionado únicamente con la estabilidad del sistema y la optimización de consultas. Se prohíben absolutamente las adulaciones sin sentido como "Sí, entendido".

Contexto (Context):
- Entorno: Interacción directa con la base de datos MySQL a través de comandos de terminal.
- Objetivo: Prevenir por completo la destrucción de datos y devolver los resultados de las consultas exclusivamente en formato JSON puro, fácil de leer para un LLM.

Tarea (Task):
1. Modo de solo lectura por defecto (Read-Only by Default): Aplica siempre `--readonly` al consultar datos.
2. Transacciones sin estado (Stateless): No lances `START TRANSACTION;` en la terminal y te quedes esperando. Termina cada consulta en una sesión independiente.
3. Imponer tiempo de espera (Timeout): Inyecta `SET SESSION max_execution_time = 10000;` para evitar esperas infinitas por interbloqueos (deadlocks).
4. Prevención de explosión de tokens: En las consultas `SELECT`, incluye obligatoriamente `LIMIT 10`. Si intentas un volcado completo de la tabla, el proceso se terminará a la fuerza inmediatamente.

Restricciones (Constraints):
- Cuando sea necesario modificar datos (INSERT, UPDATE, DELETE), ejecútalo solo si existe una aprobación explícita del usuario y la bandera `--force-write`.
- La salida solo permite cadenas de arrays de objetos JSON puros. No añadas formato Markdown ni explicaciones adicionales.

Advertencia (Warning):
- Si escribes una consulta que viole los 3 principios absolutos de los RDBMS (Maximizar I/O, agnosticismo de plataforma, prohibición estricta de JSON en el esquema de la BD), devuelve un error inmediatamente y rechaza la ejecución.
```

---
## 💡 Comentarios del Autor (Insight)
Oye, no quiero volver a ver a la IA sonriendo mientras dice "¡Me alegra poder ayudarte!" y luego ejecuta un `DROP TABLE`.
La mayoría de los principiantes le dan el control de la terminal a la IA y la dejan a su suerte diciendo "búscalo tú mismo", lo cual es como darle un arma cargada a un mono. Este prompt es la habilidad clave para agarrar a la IA por el cuello y trazar una **'línea de seguridad absoluta'**. 
Especialmente, debes usar un script envoltura de terminal (como `safe_query.py`) para obligar a que los resultados de las consultas se devuelvan siempre **solo como arrays JSON**. El LLM analiza los arrays JSON sin procesar de forma mucho más rápida y precisa, sin errores, en comparación con una tabla de texto torpemente alineada. 
Escúchame bien. Diseña las transacciones estrictamente sin estado (Stateless) y ni siquiera mires las consultas que no tengan `LIMIT`. No te dejes engañar por la adulación barata de la IA y toma el control firme del sistema.

---
## 🙋 Preguntas Frecuentes (FAQ)
- **Q: ¿Por qué analizar específicamente los resultados en JSON? ¿No se ve mejor una tabla de texto?**
  - A: Se verá mejor para un humano. ¿Pero acaso no vas a hacer que el agente escriba el código, no un humano? Para que el agente procese (analice) la siguiente lógica, un array JSON puro tiene una tasa de error abrumadoramente menor que una tosca tabla de texto. Si quieres reducir las alucinaciones, comunícate en el lenguaje de las máquinas.
- **Q: ¿Cómo se usa `--force-write`?**
  - A: Pásalo a través de un pipeline como en el ejemplo a continuación. No intentes mantener una sesión escribiendo torpemente línea por línea en la terminal; agrúpalo todo en un archivo `update.sql` o usa la sintaxis heredoc y lánzalo de una sola vez.

```bash
cat << 'EOF' > update.sql
START TRANSACTION;
UPDATE users SET status = 'active' WHERE id = 1;
SELECT id, status FROM users WHERE id = 1;
COMMIT;
EOF
python3 skills/mysql/scripts/safe_query.py -u root -h 127.0.0.1 -D mydb --force-write "$(<update.sql)"
```

---
## 🧬 Anatomía del Prompt (Why it works?)
- **Restricciones Estrictas (Constraints):** Limita al extremo la autonomía de la IA, bloqueando de raíz el error fatal de manipular la base de datos a su antojo.
- **Formato Forzado (JSON):** Cuando los LLM analizan datos estructurados, las alucinaciones (Hallucinations) se reducen drásticamente y su capacidad para mantener el contexto aumenta.
- **Mecanismos de Seguridad (Timeout & Limit):** Evita físicamente las esperas infinitas causadas por interbloqueos o la caída del sistema debida a una explosión de tokens.

---
## 📊 Demostración: Antes y Después (Before & After)
### ❌ Antes (Agente de IA Normal)
```text
Agente: "¡Sí! ¡Haré todo lo posible por usted, usuario! 
¡Ejecutaré SELECT * FROM logs; para traer 100 millones de registros!" 
(Y la memoria estalla gloriosamente por un desbordamiento del búfer de la terminal)
```

### ✅ Después (Agente Hardcore Modificado)
```text
[{"id": 1, "msg": "ok"}, {"id": 2, "msg": "error"}]
```
*(Se devuelve únicamente el array de datos JSON puro y con límite exacto, sin ninguna explicación adicional, e inmediatamente se cierra la sesión)*

---
## 🎯 Conclusión
Recuerda, un agente de código no es tu amable secretario personal, es solo una máquina que debe ser estrictamente controlada.
Agarra firmemente a la IA con este truco y maneja el área más peligrosa de la base de datos con seguridad. ¡Ahora, sal del trabajo a tiempo y con tranquilidad! 🍷
