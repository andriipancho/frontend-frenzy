export interface Container<T> {
  get(): T;
  set(value: T): void;
}
