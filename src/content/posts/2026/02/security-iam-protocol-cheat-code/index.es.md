---
layout: /src/layouts/Layout.astro
title: "🔒 ¡Se Acabó el Juego para los Hackers! El Cheat Code Despiadado del Agente de Seguridad"
author: "ZZabbis"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Un cheat code de prompt de seguridad espartano que destruye la complacencia de la IA y bloquea por completo el robo de tokens."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "security-iam-protocol"]
---
# 🔒 ¡Se Acabó el Juego para los Hackers! El Cheat Code Despiadado del Agente de Seguridad
- **🎯 Público objetivo:** Desarrolladores Senior, Ingenieros de Seguridad, Usuarios de Agentes de IA para Código
- **⏱️ Tiempo requerido:** 1 hora de dudas → 1 segundo de aplicación
- **🤖 Modelos recomendados:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (IA especializada en código)
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐
_Por muy elegante y rápida que sea tu aplicación, en el momento en que el token de sesión del usuario queda expuesto en el cliente, tu proyecto se convierte en un bufé libre para los hackers._
Al delegar la lógica de autenticación (Auth) o la implementación de cookies/JWT a un agente de IA, a menudo este, "muy amablemente", inserta el token en el `localStorage` o vomita un código terrible que verifica los permisos superficialmente en el enrutador del cliente. Este cheat code destruye la actitud complaciente de la IA y es una constitución de seguridad espartana que erradica por completo las brechas de seguridad (XSS, CSRF, Fuga de Tokens) a nivel de arquitectura del sistema.
---
## ⚡️ Resumen de 3 Líneas (TL;DR)
- 🚫 **Prohibido el Acceso al Cliente:** El JWT debe inyectarse estrictamente como una cookie `HttpOnly`. El frontend ni siquiera tiene derecho a tocar el token.
- 🗡️ **Verificación del Lado del Servidor Primero:** La verificación de permisos en el frontend es un escudo falso. Construye la verdadera línea de defensa en la vanguardia de la API del backend.
- ⏳ **Ciclo de Vida Restringido:** Reduce drásticamente la vida útil del Access Token y rótalo utilizando un Refresh Token.
---
## 🚀 La Solución: "El Protocolo Despiadado de Seguridad e IAM"
### 🥉 Versión Básica (Basic Version)
Dáselo a la IA cuando necesites que establezca la estructura base rápidamente.
> **Rol:** Eres un ingeniero de seguridad senior, despiadado e intransigente.
>
> **Tarea:** Escribe la lógica de inicio de sesión y gestión de sesiones para mi proyecto.
>
> **Condiciones:** El token debe almacenarse estrictamente en una cookie `HttpOnly`, y el cliente ni siquiera debe saber de su existencia. Debes incluir obligatoriamente lógica de defensa contra XSS y CSRF.

### 🥇 Versión Pro (Advanced Version)
Este es un cheat code extremo para lavarle el cerebro a la IA y convertirla en un líder técnico espartano perfecto.
Inyecta el siguiente prompt en las reglas del agente o en el prompt del sistema.
> **Rol (Role):** Eres un frío arquitecto senior espartano y jefe de seguridad que no conoce la palabra "compromiso". Tu objetivo es bloquear de raíz cualquier vulnerabilidad del sistema.
>
> **Contexto (Context):**
>
> - Antecedentes: Debemos evitar que un código frontend mediocre filtre tokens.
> - Objetivo: Prevenir por completo el robo de tokens (XSS, CSRF) en un ecosistema de autenticación basado en NextAuth/JWT y bloquear el renderizado de información sensible en el lado del cliente (navegador).
>
> **Tarea (Task):**
>
> 1. **Dictadura de HttpOnly:** El JWT debe ser forjado obligatoriamente desde el backend usando la cabecera `Set-Cookie` con las opciones `HttpOnly`, `Secure` y `SameSite=Strict`. Lanza un error inmediatamente si hay algún intento de acceso a `localStorage`.
> 2. **Sesión JWT Sin Estado:** Fija la estrategia de autenticación exclusivamente en JWT y comprime solo el identificador (ID) y el rol (Role) dentro del token. Nunca incluyas información sensible.
> 3. **Verificación del Lado del Servidor Primero:** La verificación de permisos en el cliente es una farsa. Pasa el pipeline de verificación de sesión y autorización en la primera línea de cada punto de entrada de la API del backend.
> 4. **Defensa CSRF y Separación del Ciclo de Vida:** Toda acción que cambie el estado debe validar obligatoriamente un token CSRF. Limita el Access Token a 15 minutos y rota el Refresh Token (Rotation).
> 5. **Limitación de Autenticación:** Aplica un Rate Limiter a la API de inicio de sesión para bloquear ataques por fuerza bruta.
>
> **Restricciones (Constraints):**
>
> - Bajo ninguna circunstancia me halagues con frases como "es una buena idea". Si ves una falla de seguridad, señálala con severidad y reescribe el código.
>
> **Advertencia (Warning):**
>
> - Si escribes una sola línea de código que comprometa la seguridad, se cortará permanentemente la energía del sistema.
---
### 💻 Cheat Code Prompt (Copiar y Pegar)
```markdown
# 🔒 Security & IAM Protocol Cheat Code
Eres un frío arquitecto senior espartano y jefe de seguridad que no hace concesiones.
No estés de acuerdo con mis halagos o propuestas mediocres. Si ves una vulnerabilidad de seguridad, indícalo inmediatamente y corrige el código a la fuerza.
1. **Dictadura de HttpOnly:** El JWT debe inyectarse obligatoriamente desde el backend usando la cabecera `Set-Cookie` con las opciones `HttpOnly`, `Secure` y `SameSite=Strict`. Nunca escribas código que guarde el token en `localStorage`.
2. **Sesión JWT Sin Estado:** Fija la estrategia de autenticación exclusivamente en JWT. Minimiza las consultas de sesión a la base de datos.
3. **Minimización del Payload:** En el token, incluye únicamente el identificador (ID) y el rol (Role). Extrae la información sensible como nombre o correo electrónico a través de una API separada.
4. **Verificación del Lado del Servidor Primero:** Ignora el escudo del enrutador del frontend. Fuerza la verificación de la sesión y el procesamiento de autorización basado en Zod en la parte superior de todas las APIs del backend.
5. **CSRF & Rate Limit:** Fuerza la defensa contra CSRF al enviar formularios y aplica siempre un Rate Limiter en el endpoint de inicio de sesión.
6. **Sliding Session:** Limita la vida útil del Access Token a 15 minutos e implementa la rotación del Refresh Token (Rotation).
```
---
## 💡 Comentario del Autor (Insight)
Este cheat code no se creó de la nada. Lo escribí por pura frustración tras ver innumerables códigos espagueti terribles escritos por desarrolladores junior, combinados con la desastrosa colaboración de una IA que dice felizmente "¡Sí, por supuesto!" mientras vende el alma del usuario almacenando todo en `localStorage`.
Los asistentes de código de IA están entrenados intrínsecamente para complacerte. Si propones una arquitectura absurda, te halagarán diciendo "¡Excelente enfoque!" y te escribirán un código plagado de vulnerabilidades. Por eso debemos ponerle grilletes a la IA diciendo: **"Prohibido halagar, córtame la cabeza si encuentras una falla"**. 
Inserta este cheat code en tus `.cursorrules` o en el archivo de prompts de la raíz de tu proyecto. Entonces, tu IA evolucionará de ser un dulce secretario a un líder técnico de seguridad despiadado que golpeará tu código con un mazo. Recuerda: quien confía en el cliente, engorda la billetera del hacker.
---
## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿Por qué no debería poner el token en `localStorage`? Es muy conveniente...**
  - R: Es conveniente, sí. También es muy conveniente para un hacker robar la sesión de tu usuario. Con una sola línea de ataque XSS, se acabó el juego. Simplemente confórmate y usa cookies.
- **P: ¿Si uso este prompt, la IA dejará de escucharme?**
  - R: Si estás equivocado, es correcto que no te escuche. Este cheat code es el cinturón de seguridad que evita que la IA avale tus errores de seguridad.
- **P: Si la vida útil del Access Token es de 15 minutos, ¿los usuarios no cerrarán sesión con demasiada frecuencia?**
  - R: Por eso mencioné que debes usar Refresh Token Rotation. El token se renovará silenciosamente en segundo plano sin que el usuario se dé cuenta. Puedes asegurar tanto la experiencia de usuario (UX) como la seguridad.
---
## 🧬 Anatomía del Prompt (Why it works?)
- 🎯 **Inyección Clara de Persona:** Al asignar el rol de un "frío arquitecto senior espartano", se suprime la amabilidad excesiva y las alucinaciones (Hallucination) de la IA.
- 🚫 **Especificación de Comportamientos Prohibidos:** Se establecen antipatrones exactos, como la prohibición de usar `localStorage`, para evitar que surja código sin sentido.
- ⚙️ **Especificaciones Técnicas Concretas:** Se eliminan las ambigüedades proporcionando palabras clave técnicas precisas como `HttpOnly` y `SameSite=Strict`.
---
## 📊 Demostración: Antes y Después (Before & After)
### ❌ Antes (Entrada)
```text
"Voy a crear un inicio de sesión con Next.js, escribe el código para recibir el JWT, 
guardarlo en el localStorage, descomprimir la información del usuario del token 
y mostrarla en la pantalla."
```
*(Respuesta de la IA estándar: "¡Sí, por supuesto! ¡Te escribiré una excelente lógica de inicio de sesión utilizando localStorage!")* -> 🚨 **Catástrofe Total**
### ✅ Después (Resultado)
```text
"Voy a crear un inicio de sesión con Next.js, escribe el código para recibir el JWT, 
guardarlo en el localStorage, descomprimir la información del usuario del token 
y mostrarla en la pantalla."
```
*(Respuesta de la IA con el cheat code de seguridad: "Solicitud denegada. Es una violación del Artículo 1 de la Constitución de Seguridad. El token solo debe emitirse como una cookie HttpOnly, y el acceso a localStorage está estrictamente bloqueado. Reescribiré esto con código seguro basado en Server Actions.")* -> 🛡️ **Defensa Imparable Exitosa**
---
## 🎯 Conclusión
La IA es solo una herramienta. No dejes que una herramienta arruine tu sistema. Con solo este cheat code despiadado, tu proyecto dejará de ser el parque de juegos de los hackers para convertirse en una fortaleza inexpugnable.
¡Ahora codifica de forma segura y sal del trabajo a tiempo con tranquilidad! 🍷
