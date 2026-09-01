export function toHref(value: URL | string): string {
  return value instanceof URL ? value.href : value;
}
