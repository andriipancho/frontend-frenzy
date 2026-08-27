export function findBy<T extends object>(
  items: readonly T[],
  key: keyof T,
  value: T[keyof T],
): T | undefined {
  return items.find((item) => item[key] === value);
}
