export interface FormData {
  name: string;
  phone: string;
  email: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  image: string;
}

export interface FeatureCard {
  number: string;
  title: string;
  description?: string;
  icon?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}