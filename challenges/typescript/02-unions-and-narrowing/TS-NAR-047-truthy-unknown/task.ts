export function normalizeUnknown(value: unknown): string | undefined {
  if (value) {
    return value.trim();
  }
  return undefined;
}
