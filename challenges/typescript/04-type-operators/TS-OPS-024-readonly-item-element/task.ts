export interface Catalog {
  readonly items: readonly { sku: string; price: number }[];
}

export type CatalogItem = unknown;
