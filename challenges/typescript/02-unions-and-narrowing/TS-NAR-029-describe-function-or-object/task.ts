export function describeCallable(value: (() => void) | { kind: string }): string {
  // TODO: narrow the union before using member-specific operations.
  return value.kind;
}
