export function formatValue(value: string | number): string {
  return typeof value === "string" ? value.toUpperCase() : value.toFixed(2);
}
