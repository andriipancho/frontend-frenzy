export function normalizeValue(value: string | boolean): string {
  // TODO: narrow the union before using member-specific operations.
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }
  return value.trim();
}
