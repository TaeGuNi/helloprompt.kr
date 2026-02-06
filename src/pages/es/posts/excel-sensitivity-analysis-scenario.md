---
layout: /src/layouts/Layout.astro
title: "Análisis de Sensibilidad de Excel: Preparación Perfecta para Escenarios 'Qué Pasaría Si'"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatización de Trabajo"
description: "¿Cuánto disminuye la ganancia si el tipo de cambio sube 10%? Calculando docenas de casos a la vez con función Tabla de Datos de Excel."
tags: ["Excel", "AnálisisSensibilidad", "Escenario", "TablaDatos"]
---

# 📝 Análisis de Sensibilidad de Excel: Preparación Perfecta para Escenarios "Qué Pasaría Si"

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos
> **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Nadie conoce el futuro. Pero podemos calcular todos los futuros."_

Lo más importante al planificar negocio es variable. Tabla de **'Análisis de Sensibilidad'** mostrando cómo cambia la ganancia operativa cuando cambia tipo de cambio, precio de materia prima, volumen de ventas, etc. Usando clave de trucos oculta de Excel **'Tabla de Datos'**, puedes auto-generar 100 escenarios con una fórmula.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Estableciendo relación entre variables (Tipo de cambio, Volumen de ventas) y resultado (Ganancia operativa)
2. Generando matriz utilizando función 'Análisis de hipótesis > Tabla de datos'
3. Simulando resultado cuando dos variables cambian simultáneamente

---

## 🚀 La Solución: "Generador de Matriz de Escenarios"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un `[Experto en Modelado Financiero]` en oficina de planificación estratégica.
> **Solicitud:** ¿Cuánto disminuye la ganancia si el tipo de cambio sube 10%? Calculando docenas de casos a la vez con función Tabla de Datos de Excel.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y úsalo.

> **Rol:** Eres un `[Experto en Modelado Financiero]` en oficina de planificación estratégica.
>
> **Contexto:** Quiero hacer **Análisis de Sensibilidad** en Excel.
>
> - **Meta:** Observar cambio de 'Ganancia Operativa'
> - **Variable 1 (Fila):** Tipo de Cambio (1,200 KRW ~ 1,400 KRW, unidad 50 KRW)
> - **Variable 2 (Columna):** Volumen de Ventas (10k ~ 50k, unidad 10k)
>
> **Tarea:**
>
> 1. Dime orden paso a paso para usar función **'Tabla de Datos'** de Excel.
> 2. Explica claramente dónde vincular Celda de Entrada de Fila y Celda de Entrada de Columna para no confundirse.
> 3. Da consejo para derivar perspicacia como "Se necesita cobertura ya que la ganancia cae en picada si sube tipo de cambio" viendo tabla completada.
>
> **Restricciones:**
>
> - Especifica ruta de menú (Pestaña Datos > Análisis de hipótesis > Tabla de datos).

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

```text
¿Cómo hacer escenario de fluctuación de tipo de cambio en Excel?
```

### ✅ Después (Resultado)

```text
### 🌪️ Guía de 3 Pasos de Análisis de Sensibilidad de Excel

**1. Poniendo el Tablero (Estructura de Matriz)**
- Ingresa escenarios de **Tipo de Cambio** (1200, 1250...) en Columna A (Vertical).
- Ingresa escenarios de **Volumen de Ventas** (10k, 20k...) en Fila 1 (Horizontal).
- **Clave:** Debes vincular **'Fórmula de Cálculo de Ganancia Operativa (=C10)'** a la celda **Esquina (A1)** donde Columna A y Fila 1 se encuentran.

**2. Lanzando Magia (Ejecutando Tabla de Datos)**
- Selecciona tabla entera ➔ Pestaña [Datos] ➔ [Análisis de hipótesis] ➔ Clic [Tabla de datos].
- **Celda de entrada de fila:** Clic celda **'Volumen de Ventas'** de datos originales (¡Porque es eje horizontal!)
- **Celda de entrada de columna:** Clic celda **'Tipo de Cambio'** de datos originales (¡Porque es eje vertical!)

**3. Verificando Resultado**
- Momento que presionas Aceptar, blancos en tabla se llenan con docenas de estimaciones de ganancia operativa.
- **💡 Consejo:** Aplica Formato Condicional (Escalas de Color). 'Línea muerta' donde ganancia se vuelve déficit (Rojo) se ve de un vistazo.
```

---

## 🎯 Conclusión

Cuando ejecutivo pregunta "¿Qué pasa si tipo de cambio se vuelve 1,350?", no entres en pánico y lee coordenada (1350, Volumen de Ventas) de tabla de Excel. Eso es 'talento preparado'.

¡Ahora sal del trabajo! 🍷
