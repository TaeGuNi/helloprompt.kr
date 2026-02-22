// Supported languages
export const LANGUAGES = [
  "ko",
  "en",
  "de",
  "es",
  "fr",
  "it",
  "ja",
  "pt",
  "ru",
  "zh",
];

// Fallback language
export const DEFAULT_LANGUAGE = "ko";

// Helper to check if a language is supported
export function isSupportedLang(lang: string) {
  return LANGUAGES.includes(lang);
}

// Generate static paths for dynamic routes ([lang])
export function getLangStaticPaths() {
  return LANGUAGES.map((lang) => ({ params: { lang } }));
}
