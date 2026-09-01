export function measure(value: string | string[]): number {
  return typeof value === "string" ? value.trim().length : value.length;
}
