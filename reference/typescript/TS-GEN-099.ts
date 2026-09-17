export function findBy<T extends object, K extends keyof T>(
  items: readonly T[],
  key: K,
  value: T[K],
): T | undefined {
  return items.find((item) => item[key] === value);
}
