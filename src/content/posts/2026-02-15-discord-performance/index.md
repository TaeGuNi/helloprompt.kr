---
title: "Discord: 성능 최적화 사례 연구"
description: "Discord가 수조 개의 메시지를 처리하고 수백만 명의 동시 사용자를 지원하기 위해 수행한 엔지니어링 최적화 여정을 깊이 있게 살펴봅니다."
date: 2026-02-15
cover: "./cover.png"
---

Discord는 겉보기에는 평범한 채팅 앱처럼 보이지만, 그 이면에는 수백만 명의 사용자가 동시에 음성, 영상, 텍스트로 소통할 수 있게 하는 거대한 엔지니어링 기술이 숨어 있습니다. 특히 1,900만 명이 넘는 사용자가 있는 Midjourney와 같은 대형 서버를 문제없이 운영하기 위해 Discord가 겪어온 최적화 여정은 분산 시스템을 다루는 엔지니어들에게 훌륭한 교과서가 됩니다.

이 글에서는 Discord가 어떻게 기술적 한계를 극복하고 성능을 최적화했는지 주요 사례를 통해 살펴봅니다.

## (Updated) (Updated) 1. 아키텍처의 핵심: 액터 모델 (The Actor Model) {#the-actor-model}

Discord 아키텍처의 기반은 1970년대에 제안된 **액터 모델(Actor Model)**입니다.

- **동시성 관리:** 공유 메모리와 락(Lock)을 사용하는 대신, 각 '액터'가 자신의 상태를 관리하고 메시지를 통해서만 서로 통신합니다. 이를 통해 교착 상태(Deadlock)나 경쟁 상태(Race Condition)를 방지합니다.
- **Elixir와 Erlang:** Discord는 이 모델을 완벽하게 지원하는 Elixir 언어를 채택했습니다. 사용자, 길드(서버), 음성 세션 등 모든 것이 하나의 '프로세스(액터)'로 취급됩니다.
- **Fan-out:** 사용자가 메시지를 보내면 길드 프로세스가 이를 받아 연결된 수천, 수만 개의 세션 프로세스로 메시지를 복사(Fan-out)하여 실시간성을 보장합니다.

## (Updated) (Updated) 2. 데이터베이스의 진화: Cassandra에서 ScyllaDB로 {#updated}

메시지 처리 레이어가 해결되자, 다음 병목은 데이터베이스였습니다.

- **Cassandra의 한계:** 초기에는 확장성이 좋은 Cassandra를 사용했지만, 데이터가 수조 건으로 늘어나자 'Hot Partition' 문제와 Java 기반의 Garbage Collection(GC)으로 인한 멈춤 현상(Stop-the-world)이 발생했습니다.
- **ScyllaDB 도입:** Discord는 C++로 작성된 ScyllaDB로 마이그레이션했습니다. ScyllaDB는 Cassandra와 호환되면서도 코어별 샤딩, GC 없음, 더 효율적인 캐시 관리를 통해 획기적인 성능 향상을 이뤄냈습니다.

## (Updated) (Updated) 3. Rust와 데이터 서비스: Thundering Herd 문제 해결 {#updated}

인기 있는 서버에서 `@everyone` 멘션이 발생하면 수천 명의 클라이언트가 동시에 API를 호출하여 데이터베이스에 과부하를 주는 **Thundering Herd** 문제가 발생했습니다.

- **Request Coalescing:** 이를 해결하기 위해 Rust로 작성된 데이터 서비스를 도입했습니다. 이 서비스는 동시에 들어오는 동일한 요청들을 하나로 묶어(Coalescing) 데이터베이스에는 단 한 번만 쿼리를 날리고, 그 결과를 기다리던 모든 요청에 반환합니다.
- **Rust의 위력:** 메모리 안전성과 GC가 없는 Rust의 특성 덕분에 예측 가능한 성능과 높은 처리량을 달성했습니다.

## (Updated) (Updated) 4. 하드웨어의 한계 극복: Super-Disk {#updated}

GCP(Google Cloud Platform) 환경에서 디스크 성능 문제에 직면했습니다.

- **문제:** 로컬 SSD는 빠르지만 데이터 유실 위험이 있고, Persistent Disk는 안전하지만 느렸습니다.
- **해결책:** 엔지니어들은 리눅스의 RAID와 쓰기 방식(Write-through cache)을 활용하여 로컬 SSD의 속도와 Persistent Disk의 안정성을 모두 잡는 'Super-Disk'라는 추상화 계층을 직접 구현했습니다.

## (Updated) (Updated) 5. 클라이언트 및 기타 최적화 {#updated}

백엔드뿐만 아니라 클라이언트와 네트워크 단에서도 다양한 최적화가 이루어졌습니다.

- **네이티브로의 회귀:** 안드로이드에서 React Native의 성능 한계(특히 이모지와 리스트 렌더링)를 느끼고, 핵심 UI 컴포넌트를 Kotlin(네이티브)으로 재작성하여 성능을 개선했습니다.
- **Passive Sessions:** 사용자가 보고 있지 않은 탭의 트래픽을 줄이는 'Passive Session' 개념을 도입하여 대역폭을 20% 절감했습니다.
- **Snowflake ID:** 시간순 정렬이 가능한 고유 ID 생성 체계인 Snowflake를 도입하여 DB 없이도 ID만으로 생성 시간을 유추하고 정렬할 수 있게 했습니다.

## (Updated) (Updated) 결론 {#conclusion}

Discord의 사례는 단순히 좋은 도구를 쓰는 것을 넘어, **"현재의 병목이 무엇인가?"**를 정확히 파악하고 창의적인 해결책을 찾아가는 엔지니어링의 정수를 보여줍니다. MongoDB에서 시작해 Cassandra를 거쳐 ScyllaDB로, Python에서 Go를 거쳐 Rust로 진화해 온 그들의 여정은 사용자 경험을 최우선으로 하는 집요한 성능 최적화의 결과물입니다.

"복잡함이 미덕은 아니지만, 사용자를 위해 필요하다면 기꺼이 복잡함을 감수한다."

이것이 Discord가 10년이 넘도록 빠르고 쾌적한 서비스를 유지하는 비결일 것입니다.

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
