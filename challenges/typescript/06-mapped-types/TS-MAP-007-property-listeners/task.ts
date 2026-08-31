export type PropertyListeners<T> = {
  [K in keyof T]: (value: unknown) => void;
};
