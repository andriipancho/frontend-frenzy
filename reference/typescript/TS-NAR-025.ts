export function normalizeValue(value: string | boolean): string {
  return typeof value === "string" ? value.trim() : String(value);
}
