export function withDefault<T>(
  factory: () => T,
  fallback: T,
): T {
  return factory() ?? fallback;
}
