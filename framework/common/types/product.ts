import { ProductPriceRange } from "@framework/schema";

export interface ProductImage {
  url: string;
  alt?: string;
}

export interface ProductPrice {
  value: number;
  currencyCode: "USD" | "EUR" | string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  vendor: string;
  slug: string;
  path: string;
  images: ProductImage[];
  price: ProductPrice;
}
