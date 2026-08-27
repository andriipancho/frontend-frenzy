export interface Transformer<Input, Output> {
  transform(value: unknown): unknown;
}
