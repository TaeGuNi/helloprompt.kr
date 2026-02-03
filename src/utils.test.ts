// 테스트 코드 (검증부)
import { describe, it, expect } from 'vitest';
import { formatDate } from './utils';

describe('Utility: 날짜 포맷터', () => {
    it('날짜 문자열을 한국어 형식으로 변환해야 한다', () => {
        const input = '2026-02-04';
        const expected = '2026년 2월 4일';
        expect(formatDate(input)).toBe(expected);
    });
});
