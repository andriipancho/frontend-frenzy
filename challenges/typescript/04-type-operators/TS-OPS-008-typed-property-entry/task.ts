export function propertyEntry(
  object: object,
  key: PropertyKey,
): readonly [PropertyKey, unknown] {
  return [key, Reflect.get(object, key)];
}
