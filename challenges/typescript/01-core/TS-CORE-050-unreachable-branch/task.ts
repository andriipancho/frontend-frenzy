export function unreachable(value: unknown): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}
