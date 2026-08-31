export function writeProperty(
  object: Record<PropertyKey, unknown>,
  key: PropertyKey,
  value: unknown,
): void {
  object[key] = value;
}
