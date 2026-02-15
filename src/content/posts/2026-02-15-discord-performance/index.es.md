---
title: "Discord: Un estudio de caso en optimización del rendimiento"
description: "Una inmersión profunda en el viaje de ingeniería de Discord para manejar billones de mensajes y millones de usuarios concurrentes."
date: 2026-02-15
cover: "./cover.png"
---

A simple vista, Discord puede parecer solo otra aplicación de chat, pero en su interior alberga una proeza de ingeniería masiva que permite a millones de usuarios comunicarse por voz, video y texto simultáneamente. Especialmente cuando se trata de manejar servidores grandes como Midjourney con más de 19 millones de usuarios, el viaje de optimización de Discord sirve como un excelente libro de texto para ingenieros que trabajan con sistemas distribuidos.

En este artículo, exploramos cómo Discord superó limitaciones técnicas y optimizó el rendimiento a través de casos de estudio clave.

## 1. El núcleo de la arquitectura: El Modelo de Actores (The Actor Model)

La base de la arquitectura de Discord es el **Modelo de Actores**, propuesto en la década de 1970.

*   **Gestión de concurrencia:** En lugar de memoria compartida y bloqueos (locks), cada 'actor' gestiona su propio estado y se comunica solo a través de mensajes. Esto previene los interbloqueos (deadlocks) y las condiciones de carrera.
*   **Elixir y Erlang:** Discord adoptó Elixir, que soporta este modelo perfectamente. Los usuarios, gremios (servidores) y sesiones de voz son tratados como procesos (actores) individuales.
*   **Fan-out:** Cuando un usuario envía un mensaje, el proceso del gremio lo recibe y lo copia (fan-out) a miles o decenas de miles de procesos de sesión conectados, asegurando la entrega en tiempo real.

## 2. Evolución de la base de datos: De Cassandra a ScyllaDB

Una vez resuelta la capa de procesamiento de mensajes, el siguiente cuello de botella fue la base de datos.

*   **Limitaciones de Cassandra:** Inicialmente, Discord usó Cassandra por su escalabilidad, pero a medida que los datos crecieron a billones de registros, surgieron problemas de 'Hot Partition' y pausas de recolección de basura (GC) basadas en Java.
*   **Adopción de ScyllaDB:** Discord migró a ScyllaDB, escrito en C++. ScyllaDB es compatible con Cassandra pero logró mejoras dramáticas en el rendimiento gracias a la fragmentación por núcleo (sharding), la ausencia de GC y una gestión de caché más eficiente.

## 3. Rust y servicios de datos: Solucionando el problema de la manada (Thundering Herd)

Cuando ocurre una mención `@everyone` en un servidor popular, miles de clientes llaman simultáneamente a la API, causando un problema de **Thundering Herd** que sobrecarga la base de datos.

*   **Coalescencia de solicitudes (Request Coalescing):** Para solucionar esto, Discord introdujo un servicio de datos escrito en Rust. Este servicio agrupa (coalesce) solicitudes idénticas simultáneas, envía una sola consulta a la base de datos y devuelve el resultado a todas las solicitudes en espera.
*   **El poder de Rust:** Gracias a la seguridad de memoria de Rust y la ausencia de GC, Discord logró un rendimiento predecible y un alto rendimiento.

## 4. Superando límites de hardware: Super-Disk

En el entorno de GCP (Google Cloud Platform), Discord enfrentó problemas de rendimiento de disco.

*   **Problema:** Los SSD locales son rápidos pero con riesgo de pérdida de datos, mientras que los discos persistentes son seguros pero lentos.
*   **Solución:** Los ingenieros implementaron una capa de abstracción personalizada llamada 'Super-Disk' utilizando RAID de Linux y caché de escritura (write-through), combinando la velocidad de los SSD locales con la fiabilidad de los discos persistentes.

## 5. Optimizaciones en el cliente y más allá

Las optimizaciones no se limitaron al backend, sino que se extendieron al cliente y a las capas de red.

*   **Regreso a lo nativo:** Reconociendo los límites de rendimiento de React Native en Android (especialmente para emojis y renderizado de listas), los componentes clave de la interfaz de usuario se reescribieron en Kotlin (nativo) para mejorar el rendimiento.
*   **Sesiones pasivas:** Se introdujo el concepto de 'Sesiones pasivas' para reducir el tráfico en pestañas que los usuarios no están viendo activamente, ahorrando un 20% de ancho de banda.
*   **Snowflake ID:** Se implementó Snowflake, un sistema de generación de ID único ordenable por tiempo, que permite inferir el tiempo de creación solo a partir del ID sin necesidad de una base de datos.

## Conclusión

El caso de Discord demuestra la esencia de la ingeniería: ir más allá de usar buenas herramientas para identificar con precisión **"¿Cuál es el cuello de botella actual?"** y encontrar soluciones creativas. Su evolución de MongoDB a Cassandra a ScyllaDB, y de Python a Go a Rust, es el resultado de una optimización obsesiva del rendimiento priorizando la experiencia del usuario.

> "La complejidad no es una virtud, pero estamos dispuestos a aceptar la complejidad si es necesaria para los usuarios."

Este es probablemente el secreto de cómo Discord ha mantenido un servicio rápido y agradable durante más de una década.
