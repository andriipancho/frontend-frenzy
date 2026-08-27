export function measure(value: string | string[]): number {
  // TODO: narrow the union before using member-specific operations.
  return value.trim().length;
}
