export function transformValue(
  value: unknown,
  transform: (value: unknown) => unknown,
): unknown {
  return transform(value);
}
