export function filterValues(
  values: readonly unknown[],
  predicate: (value: unknown) => boolean,
): unknown[] {
  return values.filter(predicate);
}
