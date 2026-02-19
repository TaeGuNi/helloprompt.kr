import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  // 1. Global Ignores
  {
    ignores: ["dist/", ".astro/", "node_modules/", ".vercel/"],
  },

  // 2. TypeScript & JavaScript Config
  ...tseslint.configs.recommended,

  // 3. Astro Config
  ...eslintPluginAstro.configs.recommended,

  // 4. Custom Rules
  {
    rules: {
      // Astro components often use variables in the template but not script
      // This rule helps reduce noise
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
];
