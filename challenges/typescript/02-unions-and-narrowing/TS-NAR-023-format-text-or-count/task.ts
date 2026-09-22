export function formatValue(value: string | number): string {
  // TODO: narrow the union before using member-specific operations.
  if (typeof value === 'number') {
    return value.toString();
  }
  return value.toUpperCase();
}
