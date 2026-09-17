export function optionalValue<T>(value: T, include: boolean): T | undefined {
  return include ? value : undefined;
}
