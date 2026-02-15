---
title: "Discord: A Case Study in Performance Optimization"
description: "A deep dive into Discord's engineering journey to handle trillions of messages and millions of concurrent users."
date: 2026-02-15
cover: "./cover.png"
---

Discord might look like just another chat app on the surface, but underneath lies a massive engineering feat that enables millions of users to communicate via voice, video, and text simultaneously. Especially when handling large servers like Midjourney with over 19 million users, Discord's optimization journey serves as an excellent textbook for engineers dealing with distributed systems.

In this post, we explore how Discord overcame technical limitations and optimized performance through key case studies.

## 1. The Core Architecture: The Actor Model

The foundation of Discord's architecture is the **Actor Model**, proposed in the 1970s.

*   **Concurrency Management:** Instead of shared memory and locks, each 'actor' manages its own state and communicates only via messages. This prevents deadlocks and race conditions.
*   **Elixir and Erlang:** Discord adopted Elixir, which perfectly supports this model. Users, guilds (servers), and voice sessions are all treated as individual 'processes (actors)'.
*   **Fan-out:** When a user sends a message, the guild process receives it and copies (fans out) the message to thousands or tens of thousands of connected session processes, ensuring real-time delivery.

## 2. Database Evolution: From Cassandra to ScyllaDB

Once the message processing layer was solved, the next bottleneck was the database.

*   **Limitations of Cassandra:** Initially, Discord used Cassandra for its scalability, but as data grew to trillions of records, 'Hot Partition' issues and Java-based Garbage Collection (GC) pauses (Stop-the-world) occurred.
*   **Adopting ScyllaDB:** Discord migrated to ScyllaDB, written in C++. ScyllaDB is compatible with Cassandra but achieved dramatic performance improvements through per-core sharding, no GC, and more efficient cache management.

## 3. Rust and Data Services: Solving the Thundering Herd

When an `@everyone` mention occurs in a popular server, thousands of clients simultaneously call the API, causing a **Thundering Herd** problem that overloads the database.

*   **Request Coalescing:** To solve this, Discord introduced a Data Service written in Rust. This service groups (coalesces) simultaneous identical requests, sends a single query to the database, and returns the result to all waiting requests.
*   **Power of Rust:** Thanks to Rust's memory safety and lack of GC, Discord achieved predictable performance and high throughput.

## 4. Overcoming Hardware Limits: Super-Disk

In the GCP (Google Cloud Platform) environment, Discord faced disk performance issues.

*   **Problem:** Local SSDs are fast but risk data loss, while Persistent Disks are safe but slow.
*   **Solution:** Engineers implemented a custom abstraction layer called 'Super-Disk' using Linux RAID and write-through caching, combining the speed of local SSDs with the reliability of Persistent Disks.

## 5. Client and Other Optimizations

Optimizations were not limited to the backend but extended to the client and network layers.

*   **Return to Native:** Recognizing the performance limits of React Native on Android (especially for emoji and list rendering), key UI components were rewritten in Kotlin (native) to improve performance.
*   **Passive Sessions:** Introduced the concept of 'Passive Sessions' to reduce traffic for tabs users aren't actively viewing, saving 20% of bandwidth.
*   **Snowflake ID:** Implemented Snowflake, a unique ID generation system that allows sorting by time without a DB, inferring creation time solely from the ID.

## Conclusion

Discord's case demonstrates the essence of engineering: going beyond just using good tools to accurately identify **"What is the current bottleneck?"** and finding creative solutions. Their evolution from MongoDB to Cassandra to ScyllaDB, and from Python to Go to Rust, is a result of obsessive performance optimization prioritizing user experience.

> "Complexity is not a virtue, but we are willing to embrace complexity if it's necessary for the users."

This is likely the secret to how Discord has maintained a fast and pleasant service for over a decade.
