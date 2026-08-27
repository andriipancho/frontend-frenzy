export function withDefault(
  factory: () => unknown,
  fallback: unknown,
): unknown {
  return factory() ?? fallback;
}
