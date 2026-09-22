export function labelValue(value: symbol | string): string {
  // TODO: narrow the union before using member-specific operations.
  if (typeof value === 'symbol') {
    return value.toString();
  }
  return value.toUpperCase();
}
