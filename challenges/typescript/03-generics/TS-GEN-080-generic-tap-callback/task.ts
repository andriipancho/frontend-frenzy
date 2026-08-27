export function tap(
  value: unknown,
  effect: (value: unknown) => void,
): unknown {
  effect(value);
  return value;
}
