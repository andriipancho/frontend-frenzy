export function encodeInteger(value: bigint | number): string {
  // TODO: narrow the union before using member-specific operations.
  if (typeof value === 'bigint') {
    return value.toString();
  }
  return value.toFixed();
}
