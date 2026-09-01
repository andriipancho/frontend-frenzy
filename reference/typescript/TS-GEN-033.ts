export interface Validator<T> {
  isValid(value: unknown): value is T;
}
