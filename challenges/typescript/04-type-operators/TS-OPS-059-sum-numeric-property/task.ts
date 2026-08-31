export function sumField(
  items: readonly object[],
  key: PropertyKey,
): number {
  return items.reduce((sum, item) => sum + Number(Reflect.get(item, key)), 0);
}
