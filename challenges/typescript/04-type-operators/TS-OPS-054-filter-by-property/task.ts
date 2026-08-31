export function filterBy(
  items: readonly object[],
  key: PropertyKey,
  value: unknown,
): object[] {
  return items.filter((item) => Reflect.get(item, key) === value);
}
