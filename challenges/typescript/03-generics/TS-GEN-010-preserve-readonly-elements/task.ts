export function copyReadonly(values: readonly unknown[]): readonly unknown[] {
  return [...values];
}
