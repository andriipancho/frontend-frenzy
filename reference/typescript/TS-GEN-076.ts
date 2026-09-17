export type KeyValueCallback<
  T extends object,
  K extends keyof T,
> = (key: K, value: T[K]) => void;
