export function repeat<T>(value: T, count: number): T[] {
  return Array.from({ length: count }, () => value);
}
