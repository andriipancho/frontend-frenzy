export function matchesProperty(
  object: object,
  key: PropertyKey,
  expected: unknown,
): boolean {
  return Object.is(Reflect.get(object, key), expected);
}
