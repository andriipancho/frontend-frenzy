export function cloneObject<T extends object>(value: T): T {
  return { ...value };
}
