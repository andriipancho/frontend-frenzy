export function updateProperty<T extends object, K extends keyof T>(
  object: T,
  key: K,
  value: T[K],
): void {
  Object.assign(object, { [key]: value });
}
