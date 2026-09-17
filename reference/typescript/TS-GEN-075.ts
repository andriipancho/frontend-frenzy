export function mapProperty<T extends object, K extends keyof T, R>(
  object: T,
  key: K,
  transform: (value: T[K]) => R,
): R {
  return transform(object[key]);
}
