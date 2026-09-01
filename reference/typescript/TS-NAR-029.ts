export function describeCallable(value: (() => void) | { kind: string }): string {
  return typeof value === "function" ? "callable" : value.kind;
}
