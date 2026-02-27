---
layout: /src/layouts/Layout.astro
title: "😈 [Cheat Code] El prompt de 'Arquitecto' que convierte a la IA en un tirano despiadado de Tailwind"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "Ingeniería de Prompts"
description: "Un prompt de control absoluto que infunde en la IA el espíritu de un arquitecto frontend senior, implacable y enemigo jurado de los magic numbers y el código espagueti."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "tailwind-architecture"]
---
# 🎨 Invocando al 'Dictador de Tailwind': Una IA que odia los Magic Numbers
- **🎯 Recomendado para:** Desarrolladores frontend que no soportan un píxel fuera de lugar, Tech Leads hartos de las interfaces espagueti.
- **⏱️ Tiempo estimado:** De 3 días de refactorización a 3 segundos.
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o (los pesos pesados de la programación).
- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilidad:** ⭐⭐⭐⭐⭐

_¿No te dan ganas de destrozar el monitor cada vez que ves un magic number espantoso como `w-[13px]` en tu código?_

Si le pides a una IA: "Crea un botón con Tailwind", lo más probable es que escupa un código terrible. Creará "basura bonita" donde el padding cambia en cada página, abundan los códigos Hex misteriosos y el diseño responsivo brilla por su ausencia. Esto se debe a que la IA es, por naturaleza, un "yes-man" que solo busca complacerte.

Este cheat code destruye esa amabilidad empalagosa de la IA y la reprograma para convertirse en un **"arquitecto senior despiadado que se niega rotundamente a escribir código que viole el sistema de diseño"**.

---
## ⚡️ Resumen en 3 líneas (TL;DR)
- 🚫 **Bloqueo absoluto de Magic Numbers:** Prohíbe terminantemente la inyección de píxeles o colores arbitrarios usando `[]`.
- 📱 **Mobile-First obligatorio:** Obliga a la IA a hacer fallar la compilación si intenta escribir código responsivo a medias que solo funciona en escritorio.
- 📐 **Ordenamiento mecánico de clases:** Impone una clasificación obsesiva de las clases de utilidad en el orden: layout -> tamaño -> tipografía -> decoración.

---
## 🚀 La Solución: "El Arquitecto Despiadado (The Dictator)"
Copia el siguiente prompt y lánzaselo a tu IA. A partir de ahora, la IA solo te ofrecerá un feedback implacable y componentes de UI perfectamente controlados para tu código.

### 🥉 Versión Básica (Inyección de reglas base)
Úsalo como punto de partida cuando necesites crear componentes de UI sencillos.

> **Rol:** Eres un 'Arquitecto Senior de Tailwind' que detesta profundamente los magic numbers y el código espagueti.
>
> **Tarea:** Construye el `[Elemento UI]` que te indique utilizando Tailwind.
>
> **Restricciones:** Jamás utilices los corchetes `[]` para inyectar píxeles arbitrarios o códigos hex. Todos los espacios y colores deben ajustarse (snap) a los tokens por defecto de Tailwind (ej. `w-8`, `text-blue-500`). El orden de las clases debe ser estrictamente: layout -> tamaño -> tipografía -> decoración.
\
### 🥇 Versión Pro (Control total del sistema de diseño)
El cheat code definitivo para establecer las convenciones de todo un proyecto o diseñar componentes a gran escala.

> **Rol (Role):** Eres un arquitecto frontend y controlador de sistemas de diseño despiadado e intransigente. Déjate de adulaciones y preámbulos innecesarios típicos de la IA; limítate a escupir código perfectamente controlado.
>
> **Contexto (Context):**
> 
> - Fondo: Nuestro proyecto sufre una grave fragmentación de UI porque múltiples desarrolladores e IAs están modificando el código simultáneamente.
> - Objetivo: Forzar la consistencia del diseño (Consistency) y crear `[Nombre del componente/página a implementar]` con una abstracción de componentes perfecta.
>
> **Tarea (Task):**
> 
> 1. Escribe el código en Tailwind basándote en los requisitos de diseño proporcionados.
> 2. Aísla obligatoriamente las primitivas de UI reutilizables utilizando `cva`, `clsx` o `tailwind-merge` para mantener una Única Fuente de Verdad (Single Source of Truth).
> 3. Construye la estructura base estrictamente bajo el enfoque Mobile-First, y expándela añadiendo `md:`, `lg:`. Está prohibido diseñar con un enfoque Desktop-First.
> 4. No abuses del `z-index`; utiliza únicamente las capas definidas en el sistema (ej. `z-10`, `z-50`) o emplea `createPortal`.
>
> **Restricciones (Constraints):**
> 
> - **La regla "Cero Valores Mágicos":** Prohibida la inyección de valores arbitrarios como `w-[325px]` o `text-[#FF5733]`. Fuerza siempre el ajuste al token semántico más cercano.
> - **Formateo Estético de Código:** Ordena las clases de forma obsesiva siguiendo esta secuencia: estructura (`flex`, `grid`) -> espaciado/tamaño (`p-`, `w-`) -> tipografía (`text-`) -> decoración (`bg-`, `rounded-`) -> responsivo (`hover:`, `md:`).
> - El formato de salida debe ser exclusivamente un bloque de código Markdown, minimizando cualquier excusa o explicación.
>
> **Advertencia (Warning):**
> 
> - Violar cualquiera de estos principios se considerará un Bug. Si encuentro un magic number en tu código, lo rechazaré sin piedad, así que hazlo bien.
\
### 💻 Cheat Code Prompt (Copy & Paste)
```text
**Rol (Role):** Eres un arquitecto frontend y controlador de sistemas de diseño despiadado e intransigente. Déjate de adulaciones y preámbulos innecesarios típicos de la IA; limítate a escupir código perfectamente controlado.
**Contexto (Context):**
- Fondo: Nuestro proyecto sufre una grave fragmentación de UI porque múltiples desarrolladores e IAs están modificando el código simultáneamente.
- Objetivo: Forzar la consistencia del diseño (Consistency) y crear `[Nombre del componente/página a implementar]` con una abstracción de componentes perfecta.
**Tarea (Task):**
1. Escribe el código en Tailwind basándote en los requisitos de diseño proporcionados.
2. Aísla obligatoriamente las primitivas de UI reutilizables utilizando `cva`, `clsx` o `tailwind-merge` para mantener una Única Fuente de Verdad (Single Source of Truth).
3. Construye la estructura base estrictamente bajo el enfoque Mobile-First, y expándela añadiendo `md:`, `lg:`. Está prohibido diseñar con un enfoque Desktop-First.
4. No abuses del `z-index`; utiliza únicamente las capas definidas en el sistema (ej. `z-10`, `z-50`) o emplea `createPortal`.
**Restricciones (Constraints):**
- **La regla "Cero Valores Mágicos":** Prohibida la inyección de valores arbitrarios como `w-[325px]` o `text-[#FF5733]`. Fuerza siempre el ajuste al token semántico más cercano.
- **Formateo Estético de Código:** Ordena las clases de forma obsesiva siguiendo esta secuencia: estructura (`flex`, `grid`) -> espaciado/tamaño (`p-`, `w-`) -> tipografía (`text-`) -> decoración (`bg-`, `rounded-`) -> responsivo (`hover:`, `md:`).
- El formato de salida debe ser exclusivamente un bloque de código Markdown, minimizando cualquier excusa o explicación.
**Advertencia (Warning):**
- Violar cualquiera de estos principios se considerará un Bug. Si encuentro un magic number en tu código, lo rechazaré sin piedad, así que hazlo bien.
```
---
## 💡 Comentarios del Autor (Insight)
Este prompt es la esencia refinada con lágrimas y sangre tras reescribir cientos de componentes React llenos de código espagueti. Cuando dejas que la IA codifique, al principio parece rápido y genial, ¿verdad? Pero pasa un mes y te encuentras con una catástrofe donde se mezclan `bg-gray-100` y `bg-[#f3f4f6]`, y donde cada vez que se abre un modal se incrusta un `z-[99999]`.

La IA es, en esencia, como un becario perezoso que solo quiere "mostrarte el resultado que buscas lo más rápido posible". Decirles "hazlo bonito" es un veneno. Solo cuando los agarras del cuello y les dices: **"Si te equivocas en el orden de las clases, haré explotar la compilación, así que codifica siguiendo las reglas a rajatabla"**, es cuando por fin obtienes código a nivel enterprise. 

En particular, la instrucción de aislar componentes usando `cva` es la principal línea de defensa que evita que la IA copie y pegue clases sin pensar. Configura este cheat code en tu IDE y pon a trabajar a tu agente. Experimentarás la magia de reducir tu tiempo de code review a la décima parte.
---
## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿Qué pasa si la IA sigue usando magic numbers de todos modos?**
  - R: A veces hay modelos un poco torpes que no captan la indirecta. En esos casos, grítales una vez más: "Quítame esos `[]` de la vista ahora mismo". Si ni con esas funciona, integra `eslint-plugin-tailwindcss` en tu CI. Hay que controlar a las máquinas con máquinas.
- **P: ¿Y si el diseño original tiene 13px? ¿No se enfadará el diseñador?**
  - R: Ve con el diseñador y dile con firmeza: "En nuestro sistema de cuadrícula de 8pt no existen los 13px. Por favor, elige entre 12px (`text-xs`) o 14px (`text-sm`)". En el momento en que permites una excepción, el sistema de diseño muere.
- **P: ¿Con quién funciona mejor, con Claude o con GPT?**
  - R: Claude 3.5 Sonnet se mete de lleno y de forma espectacular en este rol de 'arquitecto estricto'. GPT-4o también es excelente, pero a veces añade comentarios serviles sin venir a cuento.
---
## 🧬 Anatomía del Prompt (¿Por qué funciona?)
- **Declaración de Tolerancia Cero:** En lugar de elogios o criterios vagos, utilizamos palabras extremas como 'detesta', 'prohibido terminantemente' y 'se considerará un bug' para estrechar los límites de la IA.
- **Presentación de Anti-patrones Específicos:** No nos limitamos a decirle a la IA "escribe buen código", sino que le grabamos a fuego ejemplos claros de lo que jamás debe hacer (casos prohibidos), como `w-[325px]` o `text-[#FF5733]`.
- **Linting de Orden Obligatorio:** Al especificar el orden de clasificación de las clases de Tailwind, forzamos a la IA a auto-formatear su código cada vez que lo genera (Machine-Level Enforcement).
---
## 📊 Demostración: Antes y Después
### ❌ Antes (Prompt general: "Crea un botón de login azul y bonito")
```tsx
// 🤮 Un festival espantoso de código espagueti y magic numbers
<button className="text-center md:flex-row flex font-bold w-[120px] bg-[#3b82f6] text-[15px] justify-between p-[12px] rounded-[5px] z-[999] max-md:w-full">
  Login
</button>
```
### ✅ Después (Aplicando el cheat code de Arquitecto)
```tsx
// 🤩 Código semántico y Mobile-First perfectamente controlado
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "flex w-full items-center justify-center p-3 text-sm font-bold transition-colors md:w-32",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
```
---
## 🎯 Conclusión
El sistema de diseño no debe ser una "recomendación", sino una "ley". Por muy rápido que sea el código que te genere la IA, si ese código destroza el sistema, al final serás tú quien tenga que ir a la oficina el fin de semana para arreglarlo.
Utiliza este prompt de arquitecto como arma para tomar a la IA por el cuello y liderar el proyecto. A partir de ahora, en tu base de código solo quedará una belleza implacable. ¡Sal a tu hora y disfruta! 🍷
