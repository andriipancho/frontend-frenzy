export function createAccessor(key: PropertyKey) {
  return (object: object): unknown => Reflect.get(object, key);
}
