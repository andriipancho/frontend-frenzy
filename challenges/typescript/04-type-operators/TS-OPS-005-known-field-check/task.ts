export function hasField(object: object, key: PropertyKey): boolean {
  return key in object;
}
