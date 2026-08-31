export function selectFields(
  object: object,
  keys: readonly PropertyKey[],
): unknown[] {
  return keys.map((key) => Reflect.get(object, key));
}
