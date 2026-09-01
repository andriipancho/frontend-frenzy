export function cleanText(value: string | null): string {
  return value === null ? "" : value.trim();
}
