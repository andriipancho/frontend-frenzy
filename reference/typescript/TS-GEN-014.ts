export function readonlyValue<T>(value: T): { readonly value: T } {
  return { value };
}
