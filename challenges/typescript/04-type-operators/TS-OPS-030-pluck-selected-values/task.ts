export function pluck(
  object: Record<PropertyKey, unknown>,
  keys: readonly PropertyKey[],
): unknown[] {
  return keys.map((key) => object[key]);
}
