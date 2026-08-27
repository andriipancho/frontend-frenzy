export function compose(
  first: (value: unknown) => unknown,
  second: (value: unknown) => unknown,
): (value: unknown) => unknown {
  return (value) => second(first(value));
}
