// TODO: connect the object, key, and result types.
export function getProperty(object: object, key: string): unknown {
  return Object.getOwnPropertyDescriptor(object, key)?.value;
}
