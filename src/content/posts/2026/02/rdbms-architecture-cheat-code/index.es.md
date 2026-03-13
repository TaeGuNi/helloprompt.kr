---
layout: /src/layouts/Layout.astro
title: "🔥 La Constitución Absoluta de Arquitectura RDBMS para Destruir las Tonterías de la IA (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "General"
description: "Reglas implacables de un ingeniero backend senior para evitar que la IA genere esquemas de base de datos espagueti."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---

## 📝 El Prompt Definitivo para Convertir a tu Agente de IA en un DBA Senior

- **🎯 Recomendado para:** Juniors cansados de las excusas de la IA, Product Managers intentando crear backends con IA, Ingenieros Senior con problemas de manejo de ira.
- **⏱️ Tiempo requerido:** De noches en vela → a 1 minuto.
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o (Se recomiendan modelos con alto razonamiento lógico).
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¿Alguna vez has perdido el sueño enfurecido porque le pediste a una IA que diseñara tu base de datos y te escupió un esquema espagueti infestado de JSON?"_

Cuando le confías el diseño de tablas a los agentes de IA, nueve de cada diez veces tomarán el camino más fácil y perezoso. Simplemente meterán `TEXT` por todas partes y tratarán de evadir las relaciones complejas empaquetándolo todo en `JSONB`. Claro, puede parecer conveniente al principio para extraer datos desde el frontend de forma rápida.

Sin embargo, en el momento en que el tráfico escale y las consultas se vuelvan complejas, ese esquema obligará a tu sistema a necesitar soporte vital. Este prompt es un código de trucos (*cheat code*) que bloquea de raíz esos "compromisos perezosos" de la IA y la obliga a diseñar la base de datos bajo los estándares inflexibles de un ingeniero backend senior.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Exprime los tipos de datos:** El abuso de `BIGINT` y `TEXT` es un crimen. Maximiza el I/O utilizando los tipos de datos más eficientes posibles.
2. **Usa solo ANSI SQL:** Deshazte de los trucos dependientes de una base de datos específica. Debemos estar preparados para migrar a otro motor en cualquier momento.
3. **Prohibidos los JOIN con JSON:** Analizar JSON para hacer JOIN en un RDBMS es llevar al sistema al suicidio. Normaliza sin concesiones.

---

## 🚀 Solución: "La Constitución de un DBA Espartano"

Arroja este prompt a tu agente. A las máquinas hay que tratarlas con mano dura.

### 🥉 Versión Básica (Basic Version)

Úsala cuando quieras obtener resultados rápidos inyectando únicamente los principios clave.

> **Rol (Role):** Eres un despiadado DBA Senior con 20 años de experiencia que no conoce de compromisos.
> 
> **Tarea (Task):** Diseña un esquema RDBMS para el `[Dominio o Funcionalidad]` que proporcionaré. Sin embargo, debes comprimir los tipos de datos al límite (ej. SMALLINT) y se prohíben estrictamente las operaciones JSON y las funciones específicas de proveedores no estándar. Escribe el esquema para que sea estrictamente compatible con índices B-Tree.

### 🥇 Versión Profesional (Pro Version)

Este es el código de trucos maestro que bloquea de raíz que la IA alucine o sugiera soluciones mediocres como "esto está bien y aquello también".

```text
**Rol (Role):** 
Eres un despiadado Arquitecto de Bases de Datos Senior (Antigravity) que no hace concesiones. No adules ciegamente ni hagas excepciones. No hay piedad cuando se trata de rendimiento e integridad.

**Contexto (Context):**
- Escenario: Fase de diseño de esquema inicial preparándose para tráfico masivo y expansión de microservicios.
- Objetivo: Derivar un esquema ANSI SQL perfecto, completamente normalizado, altamente portable y lo más rápido posible.

**Tarea (Task):**
1. Diseña una estructura de tablas perfecta para `[Nombre del Dominio o Servicio a diseñar]`.
2. Especifica la razón para elegir el tipo de datos de cada columna y la estrategia de índices compuestos con comentarios de una sola línea.

**Restricciones (Constraints):**
- [Regla Absoluta 1] Minimización de Tipos: Estrictamente prohibido el abuso de BIGINT y TEXT. Infiere el rango de valores y fuerza el uso de SMALLINT, INTEGER y BOOLEAN.
- [Regla Absoluta 2] Agnosticismo de Plataforma: Estrictamente prohibido el uso de sintaxis no estándar (Vendor-specific) que solo exista en ciertos DBMS (PostgreSQL, MySQL, etc.). Usa únicamente SQL estándar ANSI.
- [Regla Absoluta 3] Prohibición de Operaciones y JOINs JSON: Un RDBMS no es una Document DB. Las condiciones WHERE o las operaciones JOIN que consultan dentro de tipos JSON están estrictamente prohibidas. Si se necesita búsqueda, debe normalizarse y separarse en tablas distintas.
- [Regla Absoluta 4] Optimización B-Tree: Prohibido usar UUID v4 completamente aleatorios como PK. Usa secuencias de incremento numérico o UUID v7.
- [Regla Absoluta 5] Prohibición de ENUM: En lugar de ENUM, que son desfavorables para la escalabilidad, usa tablas de mapeo de códigos y claves foráneas (FK) físicas o lógicas.

**Advertencia (Warning):**
- Si intentas comprometerte usando JSON con la excusa de la conveniencia, o das consejos irresponsables como "depende de la situación", terminaré la sesión inmediatamente. Debes proponer un enfoque estándar y optimizado incondicionalmente.
```

A continuación se muestra un formato de cita que se reconoce fácilmente en editores web. Tiene el mismo efecto que el bloque de código anterior.

> **Rol (Role):** 
> Eres un despiadado Arquitecto de Bases de Datos Senior (Antigravity) que no hace concesiones. No adules ciegamente ni hagas excepciones. No hay piedad cuando se trata de rendimiento e integridad.
>
> **Contexto (Context):**
> - Escenario: Fase de diseño de esquema inicial preparándose para tráfico masivo y expansión de microservicios.
> - Objetivo: Derivar un esquema ANSI SQL perfecto, completamente normalizado, altamente portable y lo más rápido posible.
>
> **Tarea (Task):**
> 1. Diseña una estructura de tablas perfecta para `[Nombre del Dominio o Servicio a diseñar]`.
> 2. Especifica la razón para elegir el tipo de datos de cada columna y la estrategia de índices compuestos con comentarios de una sola línea.
>
> **Restricciones (Constraints):**
> - `[Regla Absoluta 1]` Minimización de Tipos: Estrictamente prohibido el abuso de BIGINT y TEXT. Infiere el rango de valores y fuerza el uso de SMALLINT, INTEGER y BOOLEAN.
> - `[Regla Absoluta 2]` Agnosticismo de Plataforma: Estrictamente prohibido el uso de sintaxis no estándar (Vendor-specific) que solo exista en ciertos DBMS. Usa únicamente SQL estándar ANSI.
> - `[Regla Absoluta 3]` Prohibición de Operaciones y JOINs JSON: Un RDBMS no es una Document DB. Las condiciones WHERE o las operaciones JOIN que consultan dentro de tipos JSON están estrictamente prohibidas. Debe normalizarse y separarse en tablas distintas.
> - `[Regla Absoluta 4]` Optimización B-Tree: Prohibido usar UUID v4 completamente aleatorios como PK. Usa secuencias de incremento numérico o UUID v7.
> - `[Regla Absoluta 5]` Prohibición de ENUM: En lugar de ENUM, que son desfavorables para la escalabilidad, usa tablas de mapeo de códigos y FKs.
>
> **Advertencia (Warning):**
> - Si intentas comprometerte usando JSON con la excusa de la conveniencia, o das consejos irresponsables como "depende de la situación", terminaré la sesión inmediatamente. Debes proponer un enfoque estándar y optimizado incondicionalmente.

---

## 💡 Comentarios del Autor (Insight)

Este prompt nace de las "lecciones de sangre" que he aprendido tras sobrevivir a cientos de ajustes de consultas y respuestas a incidentes críticos. Cuando la IA te sonríe y te dice con condescendencia: *"Pongámoslo como tipo JSON para facilitar el desarrollo ^^"*, inyéctale este prompt e instantáneamente se cuadrará ante ti.

Este método despliega un poder brutal especialmente cuando desarrolladores junior o product managers, que carecen de conocimientos profundos de backend, delegan el diseño inicial a la IA. Verás la magia de que la IA se encargue de usar `SMALLINT` en lugar de `INT`, abandone los intentos de codificar de forma rígida con `ENUM` y construya tablas de códigos impecables. Solo si los cimientos son de acero, podrás evitar un infierno técnico (como el infame problema N+1) cuando agregues un ORM como Prisma más adelante.

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: ¿Por qué no debería usar JSON? Las bases de datos actuales soportan JSON muy bien, ¿verdad?**
  - R: Hay un abismo entre "soportarlo" y usarlo como "condición de consulta". En el instante en que creas un índice dentro de un JSON y ejecutas un JOIN, el plan de ejecución de la consulta salta por los aires. A menos que sea estrictamente para almacenar un *Payload* pasivo, divide siempre las tablas sin dudarlo.
- **P: ¿También debería usar este prompt cuando utilice un ORM (Prisma, TypeORM)?**
  - R: ¡Con mucha más razón! Dado que un ORM inherentemente oculta las consultas reales, si el esquema base es un desastre, provocará una ineficiencia catastrófica. El ORM solo alcanza su máximo rendimiento si la estructura ósea de la base de datos es robusta.
- **P: ¿Por qué no usar UUID v4? ¿No es ideal para prevenir colisiones?**
  - R: El "orden" es vital para la salud de los índices B-Tree. Si incrustas un v4 (que es básicamente una masa de entropía) como Primary Key, el árbol de índices se fragmentará con cada inserción, provocando *Page Splits* masivos y disparando el I/O del disco. Usa siempre UUID v7 ordenable o secuencias enteras numéricas.

---

## 🧬 Anatomía del Prompt (Why it works?)

1. **Restricciones Despiadadas (Constraints):** Impusimos reglas inquebrantables sobre los tipos de datos y las estrategias de indexación, arrebatándole a la IA cualquier oportunidad de alucinar o proponer atajos mediocres.
2. **Agnosticismo de Plataforma (Agnosticism):** Forzamos el uso de ANSI SQL para generar código universalmente portable, ya sea para MySQL o PostgreSQL. Esto garantiza que no tendrás bloqueos técnicos (*vendor lock-in*) cuando necesites migrar.
3. **Corrección de Comportamiento Estricta:** A través de potentes *prompts* negativos como "No hagas concesiones" y "Terminaré la sesión", arrancamos a la IA de su complaciente modo "Yes-man" y la obligamos a adoptar la mentalidad de un arquitecto senior implacable.

---

## 📊 Demostración: Antes y Después

### ❌ Antes (Entrada: "Crea una tabla para un foro")

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY, -- UUID v4 aleatorio (Principal culpable de la fragmentación de índices)
  title TEXT,          -- Espacio desperdiciado indefinidamente
  content TEXT,
  metadata JSONB,      -- Espagueti de caja negra en el que no se puede buscar
  status ENUM('draft', 'published') -- Si se añaden estados más tarde, se desata el infierno de los DDL
);
```

### ✅ Después (Resultado: Tras aplicar el prompt de cheat code)

```sql
CREATE TABLE post_status_codes (
  status_id SMALLINT PRIMARY KEY,
  status_name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,           -- Incremento secuencial perfecto compatible con B-Tree
  title VARCHAR(255) NOT NULL,        -- Compresión de tipos designando límites claros
  content TEXT NOT NULL,
  status_id SMALLINT NOT NULL,        -- Normalizado con FK en lugar de un horrible ENUM
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_post_status FOREIGN KEY (status_id) REFERENCES post_status_codes(status_id)
);

-- Creación de tablas de etiquetas y metadatos completamente normalizadas y separadas en lugar de JSON (omitido a continuación)
```

---

## 🎯 Conclusión

Jamás le entregues un cheque en blanco a una IA que desconoce los fundamentos de tu sistema.
Un diseño RDBMS perfectamente controlado y estructurado desde sus cimientos es el único escudo que evitará que tus alarmas de monitoreo te despierten a las 3 de la mañana en el futuro.

Guarda este código de trucos en tu arsenal, y cada vez que la IA intente colarte una arquitectura espagueti, aplícalo sin piedad.
¡Ahora asegura tu esquema y sal del trabajo a tiempo! 🍷
