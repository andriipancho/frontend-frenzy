export function repeat(value: unknown, count: number): unknown[] {
  return Array.from({ length: count }, () => value);
}
