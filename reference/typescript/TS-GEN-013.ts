export function firstOr<T>(values: readonly T[], fallback: T): T {
  return values[0] ?? fallback;
}
