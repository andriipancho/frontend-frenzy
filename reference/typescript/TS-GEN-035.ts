export function attachSize<T extends { length: number }>(
  value: T,
): T & { size: number } {
  return { ...value, size: value.length };
}
