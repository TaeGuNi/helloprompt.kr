import { describe, it, expect } from 'vitest';
import { IdMapper } from '../../../jobs/core/IdMapper.js';

describe('IdMapper', () => {
  const mapper = IdMapper.getInstance();

  it('should map "울쎄라" to "ULTHERA"', () => {
    expect(mapper.resolve('정품 울쎄라 300샷')).toBe('ULTHERA');
    expect(mapper.resolve('Ulthera Lifting')).toBe('ULTHERA');
  });

  it('should map "슈링크" to "SHURINK"', () => {
    expect(mapper.resolve('슈링크 리프팅')).toBe('SHURINK');
  });

  it('should return null for unknown treatments', () => {
    expect(mapper.resolve('신비한 물약')).toBeNull();
  });

  it('should handle partial matches', () => {
    expect(mapper.resolve('프리미엄 인모드 FX')).toBe('INMODE');
  });
});
