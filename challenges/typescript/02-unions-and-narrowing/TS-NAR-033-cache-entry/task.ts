export type CacheEntry =
  | { value: string; expiresAt: Date }
  | { reason: string };

export function describeCache(entry: CacheEntry): string {
  return entry.value.toUpperCase();
}
