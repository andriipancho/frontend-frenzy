export function pluck(
  items: readonly object[],
  key: PropertyKey,
): unknown[] {
  return items.map((item) => Reflect.get(item, key));
}
