export type CatalogEntry = {
  readonly sku: string;
  readonly position: readonly [number, number];
  description?: string;
  readonly tags: readonly string[];
};
