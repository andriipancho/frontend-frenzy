export function errorMessage(value: Error | string): string {
  return value instanceof Error ? value.message : value;
}
