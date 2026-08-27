export function encodeInteger(value: bigint | number): string {
  // TODO: narrow the union before using member-specific operations.
  return value.toFixed();
}
