export function formatDate(value: Date, locale: string): string {
  return value.toLocaleDateString(locale);
}

export type DateFormatter = (...args: unknown[]) => unknown;
