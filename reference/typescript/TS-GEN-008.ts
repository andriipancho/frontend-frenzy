export function resolveValue<T>(value: T): Promise<T> {
  return Promise.resolve(value);
}
