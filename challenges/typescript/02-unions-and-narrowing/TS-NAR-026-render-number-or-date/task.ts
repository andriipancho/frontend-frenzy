export function renderValue(value: number | Date): string {
  // TODO: narrow the union before using member-specific operations.
  return value.toFixed(2);
}
