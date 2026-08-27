export type PatchEntry<T extends object, K extends keyof T> = {
  key: K;
  value: T[keyof T];
};
