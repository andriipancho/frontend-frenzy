export function toErrorMessage(value: unknown): string {
  // TODO: narrow value before reading from it.
  return value.message;
}
