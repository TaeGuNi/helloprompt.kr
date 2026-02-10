---
layout: /src/layouts/Layout.astro
title: "Análisis de Viabilidad de Inversión: Excel de Cálculo Automático de VAN y TIR"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatización de Trabajo"
description: "¿Debería hacer este negocio? Calcule fácilmente el Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR), indicadores clave de la decisión de inversión, con Excel."
tags: ["Excel", "AnálisisInversión", "VAN", "TIR"]
---

# 📝 Análisis de Viabilidad de Inversión: Excel de Cálculo Automático de VAN y TIR

**🎯 Recomendado para:** Todos
**⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"¿Es rentable invertir 100 millones ahora y ganar 200 millones en 5 años? Depende de la tasa de interés."_

No debes mirar solo el monto de la ganancia. Porque el valor del dinero cambia con el tiempo. **VAN (Valor Actual Neto)** y **TIR (Tasa Interna de Retorno)**, las reglas de oro de las decisiones de inversión corporativa. Los conceptos son difíciles, pero con funciones de Excel, incluso los estudiantes de primaria pueden calcular. La IA crea fórmulas de plantilla perfectas.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Comprender conceptos de VAN y TIR basados en datos de Flujo de Caja
2. Crear fórmulas de cálculo automático utilizando funciones `NPV` (VNA), `IRR` (TIR) de Excel
3. Sugerir criterios de juicio de inversión según cambios en la tasa de descuento (tasa de interés)

---

## 🚀 La Solución: "IA Revisora de Inversiones"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

- **Rol:** Eres un `[Experto en Modelado Financiero]`.
  **Solicitud:** ¿Debería hacer este negocio? Calcule fácilmente el Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR), indicadores clave de la decisión de inversión, con Excel.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y úsalo.

- **Rol:** Eres un `[Experto en Modelado Financiero]`.
  > **Contexto:** Quiero analizar la viabilidad de inversión de un nuevo proyecto con Excel.
  >
  > - **Inversión Inicial (Año 0):** -100 Millones KRW (Celda B2)
  > - **Ingresos Esperados (Año 1~5):** 30 Millones KRW anualmente (Celdas B3~B7)
  > - **Tasa de Descuento (Retorno Requerido):** 10% (Celda C2)
  >
  > **Tarea:**
  >
  > 1. Dime **fórmula de Excel para encontrar VAN (Valor Actual Neto)** de este proyecto.
  > 2. Dime **fórmula de Excel para encontrar TIR (Tasa Interna de Retorno)**.
  > 3. Explica criterios de juicio sobre si invertir o no cuando los resultados del cálculo son **VAN > 0** o **TIR > Tasa de Descuento**.
  >
  > **Restricciones:**
  >
  > - Escribe la fórmula observando que la función `NPV` (VNA) de Excel debe ingresarse desde el Año 1. (Procesar inversión inicial por separado)

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

```text
Dime cómo encontrar VAN TIR en Excel.
```

### ✅ Después (Resultado)

```text
### 📊 Fórmulas de Excel para Análisis de Inversión

**1. Encontrar VAN (Valor Actual Neto)**
- **Fórmula:** `=B2 + NPV(C2, B3:B7)`
- **Interpretación:** Simplemente suma la inversión inicial (-100M), y descuenta solo los ingresos del Año 1 con la función NPV para ser preciso.
- **Juicio:** Si el resultado es **mayor que 0**, ¡invierte! (Negocio que hace dinero)

**2. Encontrar TIR (Tasa Interna de Retorno)**
- **Fórmula:** `=IRR(B2:B7)`
- **Interpretación:** Simplemente toma todo el rango desde la inversión inicial hasta el último ingreso.
- **Juicio:** Si el resultado (ej., 15%) es **mayor que la tasa de descuento (10%)**, ¡invierte!

**💡 Resumen:**
VAN muestra cantidad (¿Cuánto ganado?), TIR muestra tasa de retorno (¿Qué % ganado?). Mejor si ambos satisfacen.
```

---

## 🎯 Conclusión

La inversión no es corazonada sino ciencia. Previene errores multimillonarios con dos líneas de fórmulas de Excel.

¡Ahora sal del trabajo! 🍷
