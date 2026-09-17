export type ApiPage<T = unknown> = {
  items: T[];
  page: number;
  total: number;
};
