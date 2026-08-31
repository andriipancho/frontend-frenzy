export function filterByProperty(
  items: readonly object[],
  key: PropertyKey,
  predicate: (value: unknown) => boolean,
): object[] {
  return items.filter((item) => predicate(Reflect.get(item, key)));
}
