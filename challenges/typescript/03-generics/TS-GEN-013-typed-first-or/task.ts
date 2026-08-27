export function firstOr(values: readonly unknown[], fallback: unknown): unknown {
  return values[0] ?? fallback;
}
