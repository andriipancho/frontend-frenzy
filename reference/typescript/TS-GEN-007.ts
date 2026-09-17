export function lastItem<T>(values: readonly T[]): T | undefined {
  return values.at(-1);
}
