export function notifyChange(
  object: Record<PropertyKey, unknown>,
  key: PropertyKey,
  next: unknown,
  listener: (change: {
    key: PropertyKey;
    previous: unknown;
    next: unknown;
  }) => void,
): void {
  const previous = object[key];
  object[key] = next;
  listener({ key, previous, next });
}
