export function readProperty(object: object, key: PropertyKey): unknown {
  return Reflect.get(object, key);
}
