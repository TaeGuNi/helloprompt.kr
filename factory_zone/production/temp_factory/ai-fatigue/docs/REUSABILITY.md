# Code Reusability & i18n Strategy

This document outlines the strategy used to maximize code reusability and simplify maintenance for the multilingual support in `helloprompt.kr`.

## Core Principle: "Single Source of Truth"

Instead of repeating language codes (`en`, `de`, `es`, etc.) across multiple files, we define them in one place and import them wherever needed. This ensures consistency and makes adding new languages a breeze.

## 1. Centralized Language Configuration

**File:** `src/i18n/languages.ts`

This file acts as the central registry for all supported languages.

```typescript
// Supported languages list
export const LANGUAGES = ["en", "de", "es", "fr", "it", "ja", "pt", "ru", "zh"];

// Helper for dynamic routing
export function getLangStaticPaths() {
  return LANGUAGES.map((lang) => ({ params: { lang } }));
}
```

## 2. Dynamic Routing (`getStaticPaths`)

Astro's dynamic routing requires `getStaticPaths` to return an array of parameters. We replaced the hardcoded arrays with our helper function.

### Before (Repetitive)

```typescript
// src/pages/[lang]/rss.xml.ts
export function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "de" } },
    // ... repeating for 9 languages
  ];
}
```

### After (Reusable)

```typescript
// src/pages/[lang]/rss.xml.ts
import { getLangStaticPaths } from "../../i18n/languages";

// One-line export!
export const getStaticPaths = getLangStaticPaths;
```

This pattern is applied to:

- `src/pages/[lang]/rss.xml.ts` (RSS Feed)
- `src/pages/[lang]/atom.xml.ts` (Atom Feed)
- `src/pages/[lang]/[...page].astro` (Post List & Pagination)
- `src/pages/[lang]/tags/[tag].astro` (Tag Archives)

## 3. Dynamic Content Loading

For page content (markdown files), we use `import.meta.glob` combined with our language list to dynamically group posts by language.

**Example: `src/pages/[lang]/tags/[tag].astro`**

```typescript
import { LANGUAGES } from "../../../i18n/languages";

// ... inside getStaticPaths
const postsByLang = {};

// Initialize structure dynamically
LANGUAGES.forEach((lang) => {
  postsByLang[lang] = [];
});

// Load and sort posts automatically
for (const [path, post] of Object.entries(allPostsFile)) {
  const match = path.match(/\/src\/pages\/([^\/]+)\/posts\//);
  if (match) {
    const lang = match[1];
    if (postsByLang[lang]) postsByLang[lang].push(post);
  }
}
```

## Benefits

1.  **Maintenance:** Adding a language (e.g., `vi`) only requires adding `'vi'` to the `LANGUAGES` array in `src/i18n/languages.ts`. All routes (RSS, Atom, Tags, Pagination) will support it instantly.
2.  **Consistency:** Eliminates the risk of forgetting a language in one specific file (e.g., "RSS works in German but Atom doesn't").
3.  **Readability:** Reduces boilerplate code, making the logic in each page file clearer.
