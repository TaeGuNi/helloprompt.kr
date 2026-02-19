import type { Treatment, MethodType } from '../../../engine/types/index.js';
import type { GuProduct } from './types.js';
import { IdMapper } from '../../core/IdMapper.js';

export function mapGuProductToTreatment(product: GuProduct): Treatment {
  const price = product.price || 0;

  const nameLower = product.name.toLowerCase();
  let methodType: MethodType = 'Other';

  if (
    nameLower.includes('laser') ||
    nameLower.includes('레이저') ||
    nameLower.includes('토닝') ||
    nameLower.includes('슈링크') ||
    nameLower.includes('인모드') ||
    nameLower.includes('울쎄라')
  )
    methodType = 'Laser';
  else if (
    nameLower.includes('주사') ||
    nameLower.includes('필러') ||
    nameLower.includes('보톡스')
  )
    methodType = 'Injective';
  else if (nameLower.includes('필') || nameLower.includes('peel'))
    methodType = 'Peel';

  const standardId = IdMapper.getInstance().resolve(product.name);
  const finalId = standardId ? standardId : product.id;

  return {
    id: finalId,
    name: product.name,
    category: product.category,
    methodType,
    targetArea: 'Face',
    painLevel: 2,
    safetyLevel: 'Caution',
    downtimeLevel: 1,
    baumannTarget: [],
    goals: [],
    contraindications: [],
    priceRange: { min: price, max: price, currency: 'KRW' },
    standardPrice: price,
    durationMinutes: 30,
    availableHospitals: [
      {
        id: `gu-${product.id}`,
        name: product.hospitalName,
        optionName: product.name,
        price: price,
        currency: 'KRW',
        url: product.url,
        hospitalId: 'gu',
        location: {
          address: 'Gangnam-gu, Seoul',
        },
      },
    ],
  };
}
