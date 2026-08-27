export function assignField<T extends object>(
  target: T,
  key: keyof T,
  value: T[keyof T],
): void {
  Object.assign(target, { [key]: value });
}
