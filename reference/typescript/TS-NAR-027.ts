export function labelValue(value: symbol | string): string {
  return typeof value === "string" ? value.toUpperCase() : (value.description ?? "");
}
