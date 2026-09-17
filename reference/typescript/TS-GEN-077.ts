export function mapValues<T, R>(
  values: readonly T[],
  transform: (value: T) => R,
): R[] {
  return values.map(transform);
}
