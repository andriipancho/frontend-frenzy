export function reduceValues<T, TAccumulator>(
  values: readonly T[],
  initial: TAccumulator,
  reducer: (accumulator: TAccumulator, value: T) => TAccumulator,
): TAccumulator {
  return values.reduce(reducer, initial);
}
