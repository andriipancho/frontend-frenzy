export function copyProperty(
  source: Record<PropertyKey, unknown>,
  target: Record<PropertyKey, unknown>,
  key: PropertyKey,
): void {
  target[key] = source[key];
}
