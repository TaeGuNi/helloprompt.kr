import { describe, it, expect } from 'vitest';
import { mapGuProductToTreatment } from '../../../jobs/hospitals/gu/mapper.js';
import type { GuProduct } from '../../../jobs/hospitals/gu/types.js';

describe('Gu Product Mapper (TDD)', () => {
  const baseProduct: GuProduct = {
    id: 'gu_test-123',
    hospitalName: 'Gu Clinic',
    name: '테스트 울쎄라',
    category: 'Lifting',
    url: 'http://gu.clinic',
    price: 500000,
    currency: 'KRW',
    options: [],
    crawledAt: '2025-01-01',
  };

  it('should map basic fields correctly', () => {
    const treatment = mapGuProductToTreatment(baseProduct);

    expect(treatment.id).toBe('ULTHERA'); // Mapped via IdMapper
    expect(treatment.name).toBe('테스트 울쎄라');
    expect(treatment.availableHospitals?.[0]?.name).toBe('Gu Clinic');
    expect(treatment.category).toBe('Lifting');
  });

  it('should set min/max price equal to the single price', () => {
    const treatment = mapGuProductToTreatment(baseProduct);

    expect(treatment.priceRange.min).toBe(500000);
    expect(treatment.priceRange.max).toBe(500000);
    expect(treatment.standardPrice).toBe(500000);
  });

  it('should infer "Laser" method type for "울쎄라"', () => {
    const treatment = mapGuProductToTreatment(baseProduct);
    expect(treatment.methodType).toBe('Laser');
  });

  it('should infer "Injective" method type for "보톡스"', () => {
    const product = { ...baseProduct, name: '사각턱 보톡스' };
    const treatment = mapGuProductToTreatment(product);
    expect(treatment.methodType).toBe('Injective');
  });
});
