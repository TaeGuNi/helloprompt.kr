import type { Treatment, MethodType } from '../../../engine/types/index.js';
import type { SeyeProduct } from './types.js';
import { IdMapper } from '../../core/IdMapper.js';

export function mapSeyeProductToTreatment(product: SeyeProduct): Treatment {
  // 1. Method Type Inference
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
  else if (nameLower.includes('관리') || nameLower.includes('care'))
    methodType = 'Other';

  // 2. Price Calculation
  let minPrice = 0;
  let maxPrice = 0;

  if (product.options && product.options.length > 0) {
    const prices = product.options.map((o) => o.price);
    minPrice = Math.min(...prices);
    maxPrice = Math.max(...prices);
  }

  // 3. ID Resolution
  const standardId = IdMapper.getInstance().resolve(product.name);
  const finalId = standardId ? standardId : `seye_${product.id}`;

  // 4. Construct Treatment
  return {
    id: finalId,
    name: product.name,
    category: product.category || 'General',
    methodType,
    targetArea: 'Face',
    painLevel: 2,
    safetyLevel: 'Caution',
    downtimeLevel: 1,
    baumannTarget: [],
    goals: [],
    contraindications: [],
    priceRange: {
      min: minPrice,
      max: maxPrice,
      currency: 'KRW',
    },
    durationMinutes: 30,
    availableHospitals: [
      {
        id: `seye-${product.id}`,
        name: 'Seye Clinic',
        optionName: product.name, // Preserving original name for context
        price: minPrice,
        currency: 'KRW',
        url: product.url,
        hospitalId: 'seye',
        location: {
          address: 'Gangnam-gu, Seoul',
        },
      },
    ],
    standardPrice: minPrice,
  };
}
