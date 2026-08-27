export function optionalValue(value: unknown, include: boolean): unknown | undefined {
  return include ? value : undefined;
}
