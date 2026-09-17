export function tap<T>(
  value: T,
  effect: (value: T) => void,
): T {
  effect(value);
  return value;
}
