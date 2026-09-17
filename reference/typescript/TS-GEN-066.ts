export function pluck<T extends object, K extends keyof T>(
  items: readonly T[],
  key: K,
): T[K][] {
  return items.map((item) => item[key]);
}
