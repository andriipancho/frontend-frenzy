export function makeWithArgument(
  Constructor: new (argument: object) => object,
  argument: object,
): object {
  return new Constructor(argument);
}
