---
layout: /src/layouts/Layout.astro
title: "Excel, JSON, CSV... Escapa de la Pesadez de la Conversión de Formato de Datos"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Codificación/Desarrollo"
description: "JSON a CSV, XML a JSON. Deja las molestas tareas de conversión de formato de datos a la IA. Las estructuras anidadas complejas no son un problema."
tags: ["Conversión de Datos", "JSON", "CSV", "Excel", "Productividad"]
---

# 📝 Excel, JSON, CSV... Escapa de la Pesadez de la Conversión de Formato de Datos

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Por favor, convierte el contenido de este archivo Excel a JSON y envíalo a la API."_

Convertir formatos de datos es común mientras se desarrolla.
Usar herramientas de conversión en línea se siente incómodo subiendo datos de la empresa, y escribir scripts toma más esfuerzo de lo que vale.
Solo raspa datos y pégalos. La IA entiende perfectamente y los convierte.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Conversión de formato libre como JSON ↔ CSV ↔ XML
2. Eliminar campos innecesarios y cambiar estructura de datos (Mapeo)
3. Conversión altamente útil como generar declaraciones SQL Insert

---

## 🚀 La Solución: "Convertidor de Datos Universal"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un experto en Ingeniería de Datos y ETL (Extracción, Transformación, Carga).
> **Solicitud:** JSON a CSV, XML a JSON. Crea un prompt que deje las molestas tareas de conversión de formato de datos a la IA. Las estructuras anidadas complejas no son un problema.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un experto en Ingeniería de Datos y ETL (Extracción, Transformación, Carga).
>
> **Contexto:** Necesito convertir datos que tengo en un formato utilizable en otro sistema.
>
> **Tarea:**
>
> 1. Convierte los datos de **[Formato Fuente]** a continuación a **[Formato Destino]**.
> 2. Aplica `[Regla de Cambio de Nombre de Campo]` durante la conversión.
> 3. Imprime solo el resultado limpiamente para que pueda verificar si los datos son correctos.
>
> **Datos Fuente:**
>
> ```
> [Pega los datos originales aquí]
> ```
>
> **Reglas de Conversión:**
>
> - Formato Fuente: `[ej.: CSV]`
> - Formato Destino: `[ej.: Matriz JSON]`
> - Cambio de Campo: `[ej.: Cambiar 'Nombre' -> 'name', 'Edad' -> 'age' y excluir 'Dirección']`

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (CSV de Entrada)

```csv
Nombre,Edad,Trabajo
Hong Gildong,30,Desarrollador
Kim Cheolsoo,25,Diseñador
```

### ✅ Después (Resultado - JSON + Cambio de Nombre de Campo)

**Solicitud:** Convertir CSV a JSON pero cambiar a nombres de campo en inglés.

```json
[
  {
    "name": "Hong Gildong",
    "age": 30,
    "job": "Desarrollador"
  },
  {
    "name": "Kim Cheolsoo",
    "age": 25,
    "job": "Diseñador"
  }
]
```

### ✅ Después (Resultado - Declaración SQL Insert)

**Solicitud:** Cambiar a declaración INSERT utilizable en la tabla `users` de MySQL.

```sql
INSERT INTO users (name, age, job) VALUES
('Hong Gildong', 30, 'Desarrollador'),
('Kim Cheolsoo', 25, 'Diseñador');
```

---

## 🎯 Conclusión

No pierdas tiempo luchando con funciones de Excel o escribiendo regex para conversión de datos.
En el momento en que le dices "Cambia esto así" a la IA, la hora de salida se acerca. 🍷
