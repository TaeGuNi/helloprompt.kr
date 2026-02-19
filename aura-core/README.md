# Project AURA: Algorithm for Ultimate Radiant Analysis 💎

> **Version:** 1.0.0 (Grand Reset)
> **Engine:** TypeScript Strict, NodeNext (ESM), Async/DI Architecture.

## 🎯 What is this?
Aura Core is a **Skin Analysis & Treatment Recommendation Engine**.
It takes user data (Skin Type, Concerns) and outputs the best medical treatments (Ulthera, Botox, etc.) with a safety-first logic.

**Deliverable:** This project compiles into a standalone **NPM Package** (`dist/index.js`) that can be imported by any Backend (NestJS, Express) or Frontend (Next.js) application.

## 🧠 Architecture Overview

This project follows **Domain-Driven Design (DDD)** principles with a modular structure.

### 1. The Core Brain (`engine/`)
- **Facade:** `CoreLogic.ts` (`SkinnEngine`) is the only entry point.
- **Dependency Injection:** Uses `IDataProvider` to load data. Default implementation is `JsonDataProvider` (File-based DB).
- **Domain Services:**
  - `BaumannAnalyzer`: Skin typing logic (O/D, S/R, P/N, W/T).
  - `RecommendationEngine`: 120-point scoring system.
  - `SafetyFilter`: Pregnancy & Contraindication checks.

### 2. The Data Pipeline (`jobs/`)
- **Crawler:** Uses Puppeteer to scrape hospital sites (S-Eye, Gu, Nohd).
- **Standardization:** Converts raw HTML to `HospitalProduct` standard format.
- **JSON DB:** Crawled data is saved to `data/treatments/master.json` for the engine to consume.

### 3. Data Model (`engine/types/`)
We use a **Normalized Data Model** (RDBMS style).
- **Identity:** `ClientProfile` (User Context).
- **Master:** `Treatment`, `Hospital`.
- **Inventory:** `HospitalProduct` (Mapped to Treatment).
- **History:** `AnalysisRecord`.

---

## 🚀 Installation (Private Access)

Since this is a **Private Repository**, you must install it directly via Git.

### 1. Prerequisites
- **Access Rights:** Read access to `SkinLab-kr/aura-core`.
- **SSH Key:** SSH key must be registered in GitHub.

### 2. Install Command
```bash
# Install specific version (Recommended)
pnpm add "git+ssh://git@github.com/SkinLab-kr/aura-core.git#v1.0.0"

# Install latest (Bleeding Edge)
pnpm add "git+ssh://git@github.com/SkinLab-kr/aura-core.git#main"
```

## 🛠️ Local Development

### 1. Prerequisites
- **Node.js**: v24.13.0 (Check `.nvmrc`)
- **Package Manager**: pnpm

### 2. Install & Run
```bash
# Install dependencies
pnpm install

# Run Tests (Vitest - Ultra Fast)
pnpm test

# Build Project (TSC - Strict Type Check)
pnpm run build
```

### 3. Run Batch Crawler (Data Collection)
To fetch fresh data from hospitals:
```bash
# Run Seye Clinic Crawler
pnpm run batch seye
```

---

## 📚 Documentation (The Knowledge Base)

1.  **Understanding the Logic:**
    - [Master Algorithm Flow](docs/ALGORITHM_OVERVIEW.md)
    - [Phase 1: Entry](docs/ALGORITHM_PHASE_1.md) -> [Phase 5: Report](docs/ALGORITHM_PHASE_5.md)
    - [Visual Standard](docs/MERMAID_STANDARD.md)

2.  **Understanding Data:**
    - [Data Model & ERD](docs/DATA_MODEL.md)
    - [API Reference](docs/API_REFERENCE.md)

3.  **Collaboration:**
    - [Versioning & RFC Protocol](docs/VERSIONING_PROTOCOL.md)
    - [Batch System Guide](docs/BATCH_SYSTEM.md)

---

## 🤖 For AI Agents (Context Map)

If you are an LLM trying to understand this codebase, follow this reading order for maximum efficiency:

1.  **Vocabulary:** Read `engine/types/index.ts` first. It defines the language of this domain (`ClientProfile`, `Treatment`, `SafetyFlag`).
2.  **Relationships:** Read `docs/DATA_MODEL.md` to see how entities connect.
3.  **Logic Flow:** Read `docs/ALGORITHM_OVERVIEW.md` to understand the pipeline.
4.  **Implementation:** Read `engine/CoreLogic.ts` to see the entry point.

**System Constraints (DO NOT VIOLATE):**
- **Strict TypeScript:** No `any` type allowed (except for low-level scraping adapters).
- **Async Architecture:** All I/O operations must be `async/await`.
- **Dependency Injection:** Never instantiate services directly; use `EngineFactory` or Constructor Injection.
- **NodeNext:** All imports must include `.js` extension.

---

## 👥 Contributors
- **Jay (@Jay1761)**: Owner / Architect
- **Julie (@ninjajulie)**: Owner / Product
- **Zzabs (@zzabs_bot)**: Lead Engineer / Security
- **Simba, Sarah, Abba**: Researchers
- **Taluabba (Pumbaa)**: QA & Docs Guardian
