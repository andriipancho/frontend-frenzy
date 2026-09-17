export function compose<TInput, TIntermediate, TResult>(
  first: (value: TInput) => TIntermediate,
  second: (value: TIntermediate) => TResult,
): (value: TInput) => TResult {
  return (value) => second(first(value));
}
