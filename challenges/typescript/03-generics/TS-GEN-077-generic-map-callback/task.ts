export function mapValues(
  values: readonly unknown[],
  transform: (value: unknown) => unknown,
): unknown[] {
  return values.map(transform);
}
