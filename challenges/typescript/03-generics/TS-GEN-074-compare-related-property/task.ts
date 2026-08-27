export function hasPropertyValue<T extends object>(
  object: T,
  key: keyof T,
  value: T[keyof T],
): boolean {
  return object[key] === value;
}
