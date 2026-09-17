export function preserveTuple<T extends readonly unknown[]>(values: T): T {
  return values;
}
