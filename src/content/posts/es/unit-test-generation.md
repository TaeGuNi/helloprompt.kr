---
title: "¿Demasiado vago para escribir código de prueba? La IA lo hará por ti"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Desarrollo"
description: "Un prompt que genera automáticamente códigos de Prueba Unitaria engorrosos considerando incluso casos extremos."
tags: ["Código de Prueba", "TDD", "Jest", "JUnit"]
---

# 📝 ¿Demasiado vago para escribir código de prueba? La IA lo hará por ti

**🎯 Recomendado para:** Todos
**⏱️ Tiempo requerido:** 5 minutos

- **🤖 Modelo recomendado:** Todos los modelos de IA

| Dificultad | Efectividad | Utilidad  |
| :--------: | :---------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"¿Ocupado implementando características y código de prueba también? Pero sin pruebas, tienes que temblar de ansiedad en cada implementación."_

Las Pruebas Unitarias son esenciales para servicios estables, pero escribirlas es laborioso y tedioso. Es especialmente difícil cuidar meticulosamente los Casos Extremos. Deja esta tarea aburrida a la IA, y tú concéntrate en la implementación de la lógica.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. Si dejas la escritura de pruebas unitarias engorrosas a la IA, cuida meticulosamente incluso los casos de excepción.
2. Genera pruebas robustas considerando no solo Caminos Felices sino también Casos Extremos.
3. Asigna el rol de Ingeniero de QA para aumentar la cobertura de pruebas y asegurar la estabilidad del código.

---

## 🚀 La Solución: "Guardián de Cobertura de Pruebas"

### 🥉 Versión Básica

Úsala cuando solo necesites un resultado rápido.

**Rol:** Eres un `[Líder de Ingeniería de QA]`.
**Solicitud:** Crea un prompt que genere automáticamente códigos de Prueba Unitaria engorrosos considerando incluso casos extremos.

<br>

### 🥇 Versión Pro (Experto)

Úsala cuando necesites calidad detallada.

Copia el contenido del **PROMPT** a continuación y pégalo en ChatGPT o Claude.

> **Rol:** Eres un `[Líder de Ingeniería de QA]`.
>
> **Situación:** Necesito escribir código de prueba unitaria para la `[Función/Clase]` que escribí. Uso `[Marco de Pruebas Usado]`.
>
> **Tarea:**
>
> 1. Escribe una prueba de caso de éxito (Camino Feliz) para entrada normal.
> 2. Identifica al menos 3 situaciones de excepción potenciales y Casos Extremos, y escribe pruebas de fallo para ellos.
> 3. Agrega comentarios al código de prueba explicando qué verifica cada caso.
>
> **Código para Probar:**
> `[Pega tu código aquí]`

---

## 🧬 Anatomía del Prompt (¿Por qué funciona?)

---

## 📊 Prueba: Antes y Después

### ❌ Antes (Entrada: Función Calc Simple)

```javascript
function divide(a, b) {
  if (b === 0) throw new Error("No se puede dividir por 0.");
  return a / b;
}
```

<br>

### ✅ Después (Resultado)

```javascript
// Ejemplo de Marco Jest

describe("prueba de función divide", () => {
  // 1. Camino Feliz: División normal
  test("Dividir 10 por 2 debería devolver 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Caso Extremo: División de números negativos
  test("Dividir números negativos debería manejar el signo correctamente", () => {
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(-10, -2)).toBe(5);
  });

  // 3. Caso de Excepción: Dividir por 0
  test("Dividir por 0 debería lanzar un error", () => {
    expect(() => divide(10, 0)).toThrow("No se puede dividir por 0.");
  });

  // 4. Caso Extremo: Manejo de decimales
  test("Debería ser preciso cuando el resultado de la división es un decimal", () => {
    expect(divide(5, 2)).toBe(2.5);
  });
});
```

---

## 🎯 Conclusión

El código de prueba es un seguro para tu yo futuro. Reduce drásticamente la prima del seguro (tiempo de escritura) a través de la IA.
