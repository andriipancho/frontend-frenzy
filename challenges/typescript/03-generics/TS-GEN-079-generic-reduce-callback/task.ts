export function reduceValues(
  values: readonly unknown[],
  initial: unknown,
  reducer: (accumulator: unknown, value: unknown) => unknown,
): unknown {
  return values.reduce(reducer, initial);
}
