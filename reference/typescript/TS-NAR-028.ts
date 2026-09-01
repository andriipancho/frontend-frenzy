export function encodeInteger(value: bigint | number): string {
  return typeof value === "bigint" ? value.toString() : value.toFixed();
}
