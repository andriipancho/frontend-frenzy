export interface Cache<T> {
  get(key: string): unknown;
  set(key: string, value: unknown): void;
}
