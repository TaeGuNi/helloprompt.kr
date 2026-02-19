export interface HospitalProductOption {
  name: string;
  price: number;
  originalPrice?: number;
}

export interface HospitalProduct {
  id: string; // PK
  hospitalId: string; // FK -> Hospital.id
  treatmentId?: string; // FK -> Treatment.id (Mapping Result)

  name: string; // Hospital's display name
  price: number; // Representative price
  currency: string;
  url?: string;

  options?: HospitalProductOption[];

  crawledAt: string;
}
