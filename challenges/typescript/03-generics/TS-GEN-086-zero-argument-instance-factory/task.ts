export function makeInstance(
  Constructor: new () => object,
): object {
  return new Constructor();
}
