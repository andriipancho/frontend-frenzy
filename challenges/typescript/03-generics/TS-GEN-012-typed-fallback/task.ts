export function withFallback(value: unknown | undefined, fallback: unknown): unknown {
  return value === undefined ? fallback : value;
}
