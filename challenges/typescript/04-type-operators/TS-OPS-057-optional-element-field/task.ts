export function elementField(
  items: readonly object[],
  index: number,
  key: PropertyKey,
): unknown {
  return items[index] && Reflect.get(items[index], key);
}
