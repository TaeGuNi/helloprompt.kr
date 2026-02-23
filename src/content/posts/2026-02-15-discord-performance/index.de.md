---
title: "Discord: Eine Fallstudie zur Leistungsoptimierung"
description: "Ein tiefer Einblick in Discords technische Reise zur Bewältigung von Billionen von Nachrichten und Millionen gleichzeitiger Benutzer."
date: 2026-02-15
cover: "./cover.png"
---

Discord mag oberflächlich wie eine weitere Chat-App aussehen, aber darunter verbirgt sich eine massive technische Leistung, die es Millionen von Benutzern ermöglicht, gleichzeitig über Sprache, Video und Text zu kommunizieren. Besonders bei der Bewältigung großer Server wie Midjourney mit über 19 Millionen Benutzern dient Discords Optimierungsreise als hervorragendes Lehrbuch für Ingenieure, die mit verteilten Systemen arbeiten.

In diesem Beitrag untersuchen wir, wie Discord technische Grenzen überwunden und die Leistung durch Schlüsselfallstudien optimiert hat.

## 1. Der Kern der Architektur: Das Aktormodell (The Actor Model)

Die Grundlage von Discords Architektur ist das **Aktormodell**, das in den 1970er Jahren vorgeschlagen wurde.

- **Parallelitätsmanagement:** Anstatt gemeinsamen Speicher und Sperren (Locks) zu verwenden, verwaltet jeder 'Aktor' seinen eigenen Zustand und kommuniziert nur über Nachrichten. Dies verhindert Deadlocks und Race Conditions.
- **Elixir und Erlang:** Discord hat Elixir eingeführt, das dieses Modell perfekt unterstützt. Benutzer, Gilden (Server) und Sprachsitzungen werden alle als einzelne 'Prozesse (Aktoren)' behandelt.
- **Fan-out:** Wenn ein Benutzer eine Nachricht sendet, empfängt der Gildenprozess diese und kopiert (Fan-out) sie an Tausende oder Zehntausende verbundener Sitzungsprozesse, um eine Echtzeitübertragung zu gewährleisten.

## 2. Datenbankentwicklung: Von Cassandra zu ScyllaDB

Nachdem die Nachrichtenverarbeitungsschicht gelöst war, war der nächste Engpass die Datenbank.

- **Einschränkungen von Cassandra:** Anfangs nutzte Discord Cassandra wegen seiner Skalierbarkeit, aber als die Daten auf Billionen von Einträgen anwuchsen, traten 'Hot Partition'-Probleme und Java-basierte Garbage Collection (GC) Pausen (Stop-the-world) auf.
- **Einführung von ScyllaDB:** Discord migrierte zu ScyllaDB, das in C++ geschrieben ist. ScyllaDB ist mit Cassandra kompatibel, erzielte jedoch durch Core-basiertes Sharding, kein GC und effizienteres Cache-Management dramatische Leistungssteigerungen.

## 3. Rust und Datendienste: Das Thundering Herd Problem lösen

Wenn auf einem beliebten Server eine `@everyone`-Erwähnung erfolgt, rufen Tausende von Clients gleichzeitig die API auf, was zu einem **Thundering Herd**-Problem führt, das die Datenbank überlastet.

- **Request Coalescing:** Um dieses Problem zu lösen, führte Discord einen in Rust geschriebenen Datendienst ein. Dieser Dienst gruppiert (koalesziert) gleichzeitige identische Anfragen, sendet eine einzelne Abfrage an die Datenbank und gibt das Ergebnis an alle wartenden Anfragen zurück.
- **Die Macht von Rust:** Dank Rusts Speichersicherheit und dem Fehlen eines GC erreichte Discord eine vorhersagbare Leistung und einen hohen Durchsatz.

## 4. Hardwaregrenzen überwinden: Super-Disk

In der GCP (Google Cloud Platform)-Umgebung stieß Discord auf Probleme mit der Festplattenleistung.

- **Problem:** Lokale SSDs sind schnell, bergen aber das Risiko von Datenverlust, während persistente Festplatten (Persistent Disks) sicher, aber langsam sind.
- **Lösung:** Die Ingenieure implementierten eine benutzerdefinierte Abstraktionsschicht namens 'Super-Disk' unter Verwendung von Linux RAID und Write-Through-Caching, die die Geschwindigkeit lokaler SSDs mit der Zuverlässigkeit persistenter Festplatten kombiniert.

## 5. Client- und weitere Optimierungen

Optimierungen beschränkten sich nicht auf das Backend, sondern erstreckten sich auch auf den Client und die Netzwerkschichten.

- **Rückkehr zu Native:** Aufgrund der Leistungsgrenzen von React Native auf Android (insbesondere beim Rendern von Emojis und Listen) wurden wichtige UI-Komponenten in Kotlin (nativ) neu geschrieben, um die Leistung zu verbessern.
- **Passive Sitzungen:** Einführung des Konzepts der 'Passiven Sitzungen', um den Traffic für Tabs zu reduzieren, die Benutzer nicht aktiv ansehen, was 20 % Bandbreite spart.
- **Snowflake ID:** Implementierung von Snowflake, einem zeitlich sortierbaren eindeutigen ID-Generierungssystem, das es ermöglicht, die Erstellungszeit allein aus der ID ohne Datenbank abzuleiten.

## Fazit

Discords Fall zeigt das Wesen der Technik: über die bloße Verwendung guter Werkzeuge hinausgehen, um präzise zu identifizieren, **"Was ist der aktuelle Engpass?"** und kreative Lösungen zu finden. Ihre Entwicklung von MongoDB zu Cassandra zu ScyllaDB und von Python zu Go zu Rust ist das Ergebnis einer obsessiven Leistungsoptimierung, die das Benutzererlebnis priorisiert.

"Komplexität ist keine Tugend, aber wir sind bereit, Komplexität zu akzeptieren, wenn sie für die Benutzer notwendig ist."

Dies ist wahrscheinlich das Geheimnis, wie Discord seit über einem Jahrzehnt einen schnellen und angenehmen Service aufrechterhält.
