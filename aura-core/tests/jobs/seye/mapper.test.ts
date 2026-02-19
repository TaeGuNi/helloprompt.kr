import { describe, it, expect } from 'vitest';
import { mapSeyeProductToTreatment } from '../../../jobs/hospitals/seye/mapper.js';
import type { SeyeProduct } from '../../../jobs/hospitals/seye/types.js';

describe('Seye Product Mapper (TDD)', () => {
  const baseProduct: SeyeProduct = {
    id: 'test-123',
    hospitalName: 'Seye Clinic',
    name: '테스트 시술',
    category: '1',
    url: 'http://test.com',
    options: [
      { name: 'Basic', price: 100000 },
      { name: 'Premium', price: 200000 },
    ],
    crawledAt: '2025-01-01T00:00:00Z',
  };

  it('should map basic fields correctly', () => {
    const treatment = mapSeyeProductToTreatment(baseProduct);

    expect(treatment.id).toBe('seye_test-123');
    expect(treatment.name).toBe('테스트 시술');
    expect(treatment.availableHospitals?.[0]?.name).toBe('Seye Clinic');
    expect(treatment.category).toBe('1');
  });

  it('should calculate price range from options', () => {
    const treatment = mapSeyeProductToTreatment(baseProduct);

    expect(treatment.priceRange.min).toBe(100000);
    expect(treatment.priceRange.max).toBe(200000);
    expect(treatment.priceRange.currency).toBe('KRW');
  });

  it('should infer "Laser" method type correctly', () => {
    const laserProduct = { ...baseProduct, name: '피코 웨이 레이저 토닝' };
    const treatment = mapSeyeProductToTreatment(laserProduct);
    expect(treatment.methodType).toBe('Laser');
  });

  it('should infer "Injective" method type correctly', () => {
    const injectProduct = { ...baseProduct, name: '리쥬란 힐러 주사' };

    expect(mapSeyeProductToTreatment(injectProduct).methodType).toBe(
      'Injective',
    );
  });

  it('should default to "Other" for unknown names', () => {
    const unknownProduct = { ...baseProduct, name: '신비한 시술' };
    const treatment = mapSeyeProductToTreatment(unknownProduct);
    expect(treatment.methodType).toBe('Other');
  });
});
