export function filterValues<T>(
  values: readonly T[],
  predicate: (value: T) => boolean,
): T[] {
  return values.filter(predicate);
}
