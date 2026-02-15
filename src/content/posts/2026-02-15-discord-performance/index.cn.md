---
title: "Discord：性能优化案例研究"
description: "深入探讨 Discord 处理数万亿条消息并支持数百万并发用户的工程优化之旅。"
date: 2026-02-15
cover: "./cover.png"
---

Discord 表面上看起来只是另一个聊天应用，但其背后隐藏着巨大的工程壮举，能够支持数百万用户同时通过语音、视频和文本进行交流。特别是为了稳定运行拥有超过 1900 万用户的 Midjourney 这样的大型服务器，Discord 经历的优化之旅成为了分布式系统工程师的绝佳教科书。

在这篇文章中，我们将通过关键案例探讨 Discord 如何克服技术限制并优化性能。

## 1. 架构的核心：Actor 模型 (The Actor Model) {#the-actor-model}

Discord 架构的基础是 20 世纪 70 年代提出的 **Actor 模型 (Actor Model)**。

- **并发管理：** 不使用共享内存和锁，每个“Actor”管理自己的状态，仅通过消息进行通信。这防止了死锁 (Deadlock) 和竞态条件 (Race Condition)。
- **Elixir 和 Erlang：** Discord 采用了完美支持该模型的 Elixir 语言。用户、公会（服务器）、语音会话等都被视为独立的“进程 (Actor)”。
- **Fan-out：** 当用户发送消息时，公会进程接收该消息并将其复制 (Fan-out) 到数千甚至数万个连接的会话进程，以确保实时性。

## 2. 数据库的演进：从 Cassandra 到 ScyllaDB

解决了消息处理层的问题后，下一个瓶颈是数据库。

- **Cassandra 的局限：** 最初，Discord 使用 Cassandra 是因为它的可扩展性，但随着数据增长到数万亿条，出现了“热分区 (Hot Partition)”问题和基于 Java 的垃圾回收 (GC) 导致的停顿 (Stop-the-world)。
- **引入 ScyllaDB：** Discord 迁移到了用 C++ 编写的 ScyllaDB。ScyllaDB 与 Cassandra 兼容，但通过每核分片、无 GC 以及更高效的缓存管理实现了显著的性能提升。

## 3. Rust 与数据服务：解决惊群效应 (Thundering Herd) {#thundering-herd}

当热门服务器中出现 `@everyone` 提及时，数千个客户端同时调用 API，导致数据库过载，产生**惊群效应 (Thundering Herd)**。

- **Request Coalescing：** 为了解决这个问题，Discord 引入了用 Rust 编写的数据服务。该服务将同时发生的相同请求合并 (Coalescing)，仅向数据库发送一次查询，并将结果返回给所有等待的请求。
- **Rust 的威力：** 得益于 Rust 的内存安全和无 GC 特性，Discord 实现了可预测的性能和高吞吐量。

## 4. 克服硬件限制：Super-Disk

在 GCP (Google Cloud Platform) 环境中，Discord 面临磁盘性能问题。

- **问题：** 本地 SSD 速度快但有数据丢失风险，而持久磁盘 (Persistent Disk) 安全但速度慢。
- **解决方案：** 工程师们利用 Linux RAID 和直写缓存 (Write-through cache) 实现了一个名为“Super-Disk”的自定义抽象层，结合了本地 SSD 的速度和持久磁盘的可靠性。

## 5. 客户端及其他优化

优化不仅限于后端，还延伸到了客户端和网络层。

- **回归原生：** 意识到 React Native 在 Android 上的性能限制（特别是在表情符号和列表渲染方面），Discord 将关键 UI 组件用 Kotlin (原生) 重写以提高性能。
- **Passive Sessions：** 引入了“被动会话 (Passive Session)”概念，减少用户未主动查看的标签页的流量，节省了 20% 的带宽。
- **Snowflake ID：** 实施了 Snowflake，这是一种按时间排序的唯一 ID 生成系统，无需数据库即可仅凭 ID 推断创建时间并进行排序。

## 结论

Discord 的案例不仅仅是关于使用好的工具，更展示了工程学的本质：准确识别**“当前的瓶颈是什么？”**并寻找创造性的解决方案。他们从 MongoDB 到 Cassandra 再到 ScyllaDB，从 Python 到 Go 再到 Rust 的演进过程，是始终将用户体验放在首位的执着性能优化的结果。

> “复杂性本身并非美德，但为了用户，我们愿意接受必要的复杂性。”

这可能就是 Discord 十多年来保持快速且愉快的服务的秘诀。
