export async function asyncMap(
  value: unknown,
  transform: (value: unknown) => Promise<unknown>,
): Promise<unknown> {
  return transform(value);
}
