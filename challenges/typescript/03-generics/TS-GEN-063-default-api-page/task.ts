export type ApiPage<T = unknown> = {
  items: unknown[];
  page: number;
  total: number;
};
