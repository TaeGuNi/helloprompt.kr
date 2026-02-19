# Aura Core Batch System 🚜

The Batch System is a modular framework for crawling, parsing, and normalizing treatment data from external hospital sources. It ensures that Aura Core always has up-to-date pricing and treatment specifications.

## 1. Architecture

The system is designed with extensibility in mind:

- **`jobs/core/`**: Contains the `BaseJob` abstract class and types. All jobs must inherit from `BaseJob`.
- **`jobs/hospitals/`**: Directory for hospital-specific logic. Each hospital gets its own folder (e.g., `seye`).
- **`jobs/index.ts`**: The registry of all available jobs.
- **`scripts/run-batch.ts`**: The CLI entry point for executing jobs.

## 2. Usage

### Run a specific job
To execute a crawler for a specific hospital (e.g., 'seye'):

```bash
pnpm run batch seye
```

This command will:
1.  Initialize the `SeyeJob`.
2.  Crawl the hospital's data (using Puppeteer/Cheerio).
3.  Save raw data to `data/raw/seye/`.
4.  Normalize and save the final JSON to `data/treatments/seye.json`.

### Available Jobs
| Job ID | Hospital Name | Description |
| :--- | :--- | :--- |
| `seye` | S-Eye Clinic | Parses HTML table data for prices and event items. |
| `gu` | Gu Clinic | Crawler for treatment reservation page. |
| `nohd` | Nohd Clinic | Crawler for product categories. |

## 3. Developer Guide

### Adding a New Job
1.  Create a new folder in `jobs/hospitals/` (e.g., `jobs/hospitals/new_clinic/`).
2.  Implement `crawler.ts`, `parser.ts`, and `mapper.ts`.
3.  Create an `index.ts` that exports a class extending `BaseJob`.
4.  Register the new job in `jobs/index.ts`.

```typescript
// jobs/index.ts
export const jobs: Record<string, ITreatmentJob> = {
    'seye': new SeyeJob(),
    'new_clinic': new NewClinicJob(), // Register here
};
```

### Output Location
- **Raw Data:** `data/raw/<job_id>/*.json` (For debugging/archiving)
- **Final Data:** `data/treatments/<job_id>.json` (Used by Aura Engine)

## 4. Dependencies
- **Puppeteer**: For headless browser automation.
- **Cheerio**: For fast HTML parsing.
- **ts-node**: For executing TypeScript jobs directly.
