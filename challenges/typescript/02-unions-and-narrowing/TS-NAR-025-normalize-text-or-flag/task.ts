export function normalizeValue(value: string | boolean): string {
  // TODO: narrow the union before using member-specific operations.
  return value.trim();
}
