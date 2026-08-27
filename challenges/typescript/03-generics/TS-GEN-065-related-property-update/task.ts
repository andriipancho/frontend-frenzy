export function updateProperty<T extends object>(
  object: T,
  key: keyof T,
  value: T[keyof T],
): void {
  Object.assign(object, { [key]: value });
}
