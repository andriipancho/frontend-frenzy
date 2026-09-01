export function displayLabel(value: string | null | undefined): string {
  return value == null ? "" : value.trim();
}
