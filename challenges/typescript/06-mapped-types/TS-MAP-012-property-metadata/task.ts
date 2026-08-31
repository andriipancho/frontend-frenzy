export type PropertyMetadata<T> = {
  [K in keyof T]: { value: unknown; dirty: boolean; touched: boolean };
};
