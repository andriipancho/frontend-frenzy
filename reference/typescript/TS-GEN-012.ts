export function withFallback<T>(value: T | undefined, fallback: T): T {
  return value === undefined ? fallback : value;
}
