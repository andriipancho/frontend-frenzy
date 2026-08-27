export interface Container<T> {
  get(): unknown;
  set(value: unknown): void;
}
