export type KeyValueCallback<
  T extends object,
  K extends keyof T,
> = (key: K, value: T[keyof T]) => void;
