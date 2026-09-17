export function makeInstance<T extends object>(
  Constructor: new () => T,
): T {
  return new Constructor();
}
