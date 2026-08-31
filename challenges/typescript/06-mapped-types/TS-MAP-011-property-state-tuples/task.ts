export type PropertyState<T> = {
  [K in keyof T]: [unknown, boolean];
};
