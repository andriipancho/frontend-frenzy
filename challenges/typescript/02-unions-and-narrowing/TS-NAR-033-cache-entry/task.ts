export type CacheEntry =
  | { value: string; expiresAt: Date }
  | { reason: string };

export function describeCache(entry: CacheEntry): string {
  if ("value" in entry) {
    entry.value.toUpperCase()
  } else if("reason" in entry) {
    entry.reason.toUpperCase()
  }
  return "";
}
