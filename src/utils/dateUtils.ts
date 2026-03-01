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

export const getKstNow = (): Date => {
  const now = new Date();
  // Vercel Server uses UTC. KST is UTC+9.
  return new Date(now.getTime() + 9 * 60 * 60 * 1000);
};

export const formatDate = (
  dateString: string,
  lang: string,
  options: FormatDateOptions = {},
): string => {
  if (!dateString) return "";

  // 방어 로직: lang 코드가 유효하지 않으면 기본값 UTC 사용
  const targetTimezone = timezoneMap[lang] || "UTC";

  // 방어 로직: 극단적인 Epoch 값이나 Infinity 처리를 위해 string 변환 후 파싱 시도
  const date = new Date(String(dateString));

  // Invalid Date 혹은 정상 범위를 초과한 날짜인지 체크
  // Date 객체는 내부적으로 타임스탬프 값이 NaN이거나 범위를 넘으면 getTime()이 NaN을 반환함
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  // 너무 먼 미래나 과거의 (예: JS 특유의 -100000년) Date 객체 필터링 (렌더링 버그 방어)
  const year = date.getFullYear();
  if (year < 1000 || year > 9999) {
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

  try {
    return date.toLocaleString(lang, formatOptions);
  } catch (error) {
    // 만약 완전히 이상한 lang 코드가 들어와서 Intl 내부에서 RangeError: Incorrect locale information provided 가 발생할 경우 방어
    try {
      // UTC 영문 베이스로라도 우아하게 fallback 텍스트 반환
      return date.toLocaleString("en", formatOptions);
    } catch {
      return dateString; // 최후의 수단
    }
  }
};
