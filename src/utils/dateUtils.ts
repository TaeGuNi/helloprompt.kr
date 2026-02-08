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

export interface FormatDateOptions {
  dateOnly?: boolean;
}

export const formatDate = (
  dateString: string,
  lang: string,
  options: FormatDateOptions = {},
): string => {
  if (!dateString) return "";

  const targetTimezone = timezoneMap[lang] || "UTC";

  const date = new Date(dateString);
  // Invalid Date 체크
  if (isNaN(date.getTime())) {
    return dateString;
  }

  const formatOptions: Intl.DateTimeFormatOptions = {
    timeZone: targetTimezone,
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (!options.dateOnly) {
    formatOptions.hour = "2-digit";
    formatOptions.minute = "2-digit";
    formatOptions.hour12 = true;
  }

  return date.toLocaleString(lang, formatOptions);
};
