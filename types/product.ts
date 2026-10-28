export interface ProductVariant {
  id: string;
  name: string;
  color?: string;
  inStock: boolean;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  category: string; // e.g. "hair-claws", "scrunchies", "hair-bands", "hair-pins", "kids-accessories", "gift-combos"
  price: number;
  originalPrice?: number;
  packQuantity?: string; // e.g. "Pack of 2", "Pack of 3", "Pack of 12"
  images: string[];
  variants?: ProductVariant[];
  availability: "in-stock" | "low-stock" | "pre-order";
  featured?: boolean;
  newArrival?: boolean;
  bestseller?: boolean;
  rating?: number;
  reviewsCount?: number;
  specifications?: Record<string, string>;
  colors?: string[];
  material?: string;
  size?: string;
}
