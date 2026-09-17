export function makeWithArgument<TArgument extends object, TInstance extends object>(
  Constructor: new (argument: TArgument) => TInstance,
  argument: TArgument,
): TInstance {
  return new Constructor(argument);
}
