export type CategorySlug =
  | 'education'
  | 'healthcare'
  | 'business-leaders'
  | 'finance-economy'
  | 'beauty-wellness';

export interface CategoryMeta {
  slug: CategorySlug;
  name: string;
  tagline: string;
}

// Display order is intentional: Education first, Beauty & Wellness last.
export const CATEGORIES: CategoryMeta[] = [
  {
    slug: 'education',
    name: 'Education',
    tagline: 'Schools, colleges, and the people shaping how the Palmetto State learns',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'Hospitals, clinics, and public health across the Lowcountry and Midlands',
  },
  {
    slug: 'business-leaders',
    name: 'Business Leaders',
    tagline: 'The founders and executives building South Carolina\u2019s economy',
  },
  {
    slug: 'finance-economy',
    name: 'Finance & Economy',
    tagline: 'Markets, jobs, and growth from Charleston to Greenville',
  },
  {
    slug: 'beauty-wellness',
    name: 'Beauty & Wellness',
    tagline: 'Spas, studios, and self-care from the coast to the Upstate',
  },
];

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
