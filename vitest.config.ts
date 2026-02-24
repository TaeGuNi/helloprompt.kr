/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: [
      "src/**/*.{test,spec}.{js,ts}",
      "aura-core/tests/**/*.{test,spec}.{js,ts}",
      "tests/reinforcement/**/*.{test,spec}.{js,ts}",
    ],
    exclude: ["tests/*.spec.ts", "node_modules"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
  // biome-ignore lint/suspicious/noExplicitAny: compatibility with vitest setup
} as any);
