import { describe, it, expect } from 'vitest';
import { mapNohdProductToTreatment } from '../../../jobs/hospitals/nohd/mapper.js';
import type { NohdProduct } from '../../../jobs/hospitals/nohd/types.js';

describe('Nohd Product Mapper (TDD)', () => {
  const baseProduct: NohdProduct = {
    id: 'nohd_test-456',
    hospitalName: 'Nohd Clinic',
    name: '테스트 인모드',
    category: 'General',
    url: 'http://nohd.clinic',
    price: 300000,
    currency: 'KRW',
    options: [],
    crawledAt: '2025-01-01',
  };

  it('should map basic fields correctly', () => {
    const treatment = mapNohdProductToTreatment(baseProduct);

    expect(treatment.id).toBe('INMODE'); // Mapped via IdMapper
    expect(treatment.name).toBe('테스트 인모드');
    expect(treatment.availableHospitals?.[0]?.name).toBe('Nohd Clinic');
  });

  it('should set min/max price equal to the single price', () => {
    const treatment = mapNohdProductToTreatment(baseProduct);

    expect(treatment.priceRange.min).toBe(300000);
    expect(treatment.priceRange.max).toBe(300000);
  });

  it('should infer "Laser" method type for "인모드"', () => {
    const treatment = mapNohdProductToTreatment(baseProduct);
    expect(treatment.methodType).toBe('Laser');
  });

  it('should infer "Peel" method type for "필"', () => {
    const product = { ...baseProduct, name: '아쿠아필' };
    const treatment = mapNohdProductToTreatment(product);
    expect(treatment.methodType).toBe('Peel');
  });
});
