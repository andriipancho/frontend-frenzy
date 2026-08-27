export function labelValue(value: symbol | string): string {
  // TODO: narrow the union before using member-specific operations.
  return value.toUpperCase();
}
