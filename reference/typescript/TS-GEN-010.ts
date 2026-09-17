export function copyReadonly<T>(values: readonly T[]): readonly T[] {
  return [...values];
}
