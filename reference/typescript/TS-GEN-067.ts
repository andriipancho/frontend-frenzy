export function assignField<T extends object, K extends keyof T>(
  target: T,
  key: K,
  value: T[K],
): void {
  Object.assign(target, { [key]: value });
}
