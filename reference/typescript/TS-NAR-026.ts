export function renderValue(value: number | Date): string {
  return typeof value === "number" ? value.toFixed(2) : value.toISOString();
}
