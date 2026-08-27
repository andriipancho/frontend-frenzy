export function mapProperty(
  object: object,
  key: PropertyKey,
  transform: (value: unknown) => unknown,
): unknown {
  return transform(Reflect.get(object, key));
}
