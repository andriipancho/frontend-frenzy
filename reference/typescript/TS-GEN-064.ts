export type Handler<Input = unknown, Output = void> = (
  input: Input
) => Output;
