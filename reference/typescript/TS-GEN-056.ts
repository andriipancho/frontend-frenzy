export function transformValue<T, R>(value: T, transform: (value: T) => R): R {
  return transform(value);
}
