---
layout: /src/layouts/Layout.astro
title: "Calendario de Pago de Préstamos: Principal e Interés Igual vs Principal Igual"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatización de Trabajo"
description: "Plantilla de calculadora de intereses de préstamos hecha directamente en Excel sin necesidad de entrar en sitios bancarios."
tags: ["Excel", "InterésPréstamo", "FunciónFinanciera", "PMT"]
---

# 📝 Calendario de Pago de Préstamos: Principal e Interés Igual vs Principal Igual

> **🎯 Recomendado para:** Todos
> **⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Pagando 1 millón de wones mensuales, ¿cuánto es principal y cuánto es interés?"_

Existen en gran medida dos métodos de pago de préstamos. **'Principal e Interés Igual'** donde el pago mensual es el mismo, y **'Principal Igual'** donde disminuye con el tiempo. ¿Cuál es ventajoso para mí? Hacer un calendario de pago completo usando funciones financieras de Excel (`PMT`, `IPMT`, `PPMT`) muestra la diferencia total de intereses de un vistazo.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Auto-calcular pago mensual (Principal + Interés) con función `PMT` (PAGO)
2. Separar porción de interés y principal con funciones `IPMT` (PAGOINT) y `PPMT` (PAGOPRIN)
3. Generar calendario que muestra cambio de saldo por ronda de pago (1~360 rondas)

---

## 🚀 La Solución: "Auto Calculadora de Préstamos"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

> **Rol:** Eres un `[Experto en Excel Financiero]`.
> **Solicitud:** Plantilla de calculadora de intereses de préstamos hecha directamente en Excel sin necesidad de entrar en sitios bancarios.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y úsalo.

> **Rol:** Eres un `[Experto en Excel Financiero]`.
>
> **Contexto:** Quiero hacer un calendario de préstamos del método de **Pago de Principal e Interés Igual** en Excel.
>
> - **Monto del Préstamo:** 100 Millones KRW (B1)
> - **Tasa de Interés Anual:** 4.5% (B2)
> - **Período de Pago:** 10 Años (120 Meses) (B3)
>
> **Tarea:**
>
> 1. Dime **fórmula de función `PMT`** para encontrar pago mensual total (Principal + Interés).
> 2. Dime fórmulas para encontrar **Interés (`IPMT`)** y **Principal (`PPMT`)** saliendo en la N-ésima ronda (ej., 1ra ronda) respectivamente.
> 3. Da fórmula aplicando referencia absoluta ($) para que pueda arrastrar y llenar desde la 1ra hasta la 120a ronda.
>
> **Restricciones:**
>
> - No olvides dividir la tasa de interés anual por 12 ya que es cálculo mensual.

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada)

```text
¿Cómo calcular interés de préstamo en Excel?
```

### ✅ Después (Resultado)

````text
### 🏦 Colección de Fórmulas de Pago de Préstamos de Excel

**1. Pago Mensual (Total Principal + Interés)**
```text
=PMT($B$2/12, $B$3*12, -$B$1)
```
````

_Resultado: Aprox 1,036,384 KRW (Pagar tanto mensualmente)_

**2. ¿Cuánto es interés? (Basado en 1ra ronda)**

- Asumiendo ronda (1, 2, 3...) está en Columna A:

```text
=IPMT($B$2/12, A5, $B$3*12, -$B$1)
```

_(A5 es ronda actual. Arrastrar hacia abajo)_

**3. ¿Cuánto es principal?**

```text
=PPMT($B$2/12, A5, $B$3*12, -$B$1)
```

**💡 Análisis:**
En etapa temprana `IPMT` (Interés) es grande y `PPMT` (Principal) es pequeño, pero la porción de pago de principal aumenta con el tiempo.

```

---

## 🎯 Conclusión

Verificar el costo total de interés visualmente quema tu voluntad de pagar el préstamo. Dibuja tu propio mapa de pago con Excel.

¡Ahora sal del trabajo! 🍷
```
