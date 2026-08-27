export function attachSize(
  value: { length: number },
): { length: number } & { size: number } {
  return { ...value, size: value.length };
}
