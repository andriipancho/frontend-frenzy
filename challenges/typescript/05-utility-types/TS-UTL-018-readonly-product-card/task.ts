export interface Product {
  sku: string;
  name: string;
  price: number;
  imageUrl: string;
  inventory: number;
  supplierId: string;
}

export type ProductCard = Pick<
  Product,
  "sku" | "name" | "price" | "imageUrl"
>;
