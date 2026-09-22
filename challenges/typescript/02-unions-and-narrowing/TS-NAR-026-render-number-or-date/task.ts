export function renderValue(value: number | Date): string {
  // TODO: narrow the union before using member-specific operations.
  if (value instanceof Date) {
    return value.toString();
  }
  return value.toFixed(2);
}
