export interface Transformer<Input, Output> {
  transform(value: Input): Output;
}
