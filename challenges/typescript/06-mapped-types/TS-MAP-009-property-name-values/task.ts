export type KeyNames<T> = {
  [K in keyof T]: PropertyKey;
};
