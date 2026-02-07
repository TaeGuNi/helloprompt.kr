export const timezoneMap: Record<string, string> = {
  ko: "Asia/Seoul",
  en: "America/New_York",
  ja: "Asia/Tokyo",
  zh: "Asia/Shanghai",
  de: "Europe/Berlin",
  fr: "Europe/Paris",
  es: "Europe/Madrid",
  it: "Europe/Rome",
  pt: "America/Sao_Paulo",
  ru: "Europe/Moscow",
};

export const formatDate = (dateString: string, lang: string): string => {
  if (!dateString) return "";

  const targetTimezone = timezoneMap[lang] || "UTC";

  const date = new Date(dateString);
  // Invalid Date 체크
  if (isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleString(lang, {
    timeZone: targetTimezone,
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
