export function hasPropertyValue<T extends object, K extends keyof T>(
  object: T,
  key: K,
  value: T[K],
): boolean {
  return object[key] === value;
}
