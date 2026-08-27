export interface Validator<T> {
  isValid(value: unknown): boolean;
}
