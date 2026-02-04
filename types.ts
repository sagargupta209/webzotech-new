export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  subtitle: string;
  isPopular?: boolean;
  features: string[]; // Simplification for the clone
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface UPIAccount {
  id: number;
  name: string;
  upiId: string;
  mainAccount: string;
  balance: string;
}

export interface SubAccount {
  id: number;
  subAccount: string;
  parentAccount: string;
}