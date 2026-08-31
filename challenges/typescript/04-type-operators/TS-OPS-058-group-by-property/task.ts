export function groupBy(
  items: readonly object[],
  key: PropertyKey,
): Map<unknown, object[]> {
  const groups = new Map<unknown, object[]>();
  for (const item of items) {
    const value = Reflect.get(item, key);
    groups.set(value, [...(groups.get(value) ?? []), item]);
  }
  return groups;
}
