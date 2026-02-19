import { describe, it, expect } from 'vitest';
import { extractJsonFromHtml } from '../../../jobs/hospitals/seye/parser.js';
import type { SeyeOption } from '../../../jobs/hospitals/seye/types.js';
import { MOCK_NEXT_DATA_HTML, MOCK_EMPTY_HTML } from '../fixtures/seye_html.js';

describe('Seye Clinic Parser (TDD)', () => {
  it('should extract product options from Next.js hydration data', () => {
    const result = extractJsonFromHtml(MOCK_NEXT_DATA_HTML);

    expect(result).not.toBeNull();
    expect(result?.options).toHaveLength(2);

    // Check specific values
    const pico = result!.options!.find(
      (o: SeyeOption) => o.name === 'Pico Toning',
    );
    expect(pico).toBeDefined();
    expect(pico!.price).toBe(99000);
    expect(pico!.originalPrice).toBe(150000);

    const aqua = result!.options!.find(
      (o: SeyeOption) => o.name === 'Aqua Peel',
    );
    expect(aqua).toBeDefined();
    expect(aqua!.price).toBe(50000);
  });

  it('should extract translations correctly', () => {
    const result = extractJsonFromHtml(MOCK_NEXT_DATA_HTML);

    expect(result?.translations).toBeDefined();
    expect(result?.translations.ko).toBeDefined();
    expect(result?.translations.ko.name).toBe('피코 토닝');
    expect(result?.translations.en.description).toBe('Melasma treatment');
  });

  it('should return null for empty HTML or missing data', () => {
    const result = extractJsonFromHtml(MOCK_EMPTY_HTML);
    expect(result).toBeNull();
  });

  it('should handle malformed hydration data gracefully', () => {
    const malformedHtml = `<script>self.__next_f.push([1,"INVALID JSON START..."]);</script>`;
    const result = extractJsonFromHtml(malformedHtml);
    expect(result).toBeNull();
  });
});
