export function measure(value: string | string[]): number {
  // TODO: narrow the union before using member-specific operations.
  if (typeof value === 'object' && Array.isArray(value)) {
    return value.length;
  }
  return value.trim().length;
}
