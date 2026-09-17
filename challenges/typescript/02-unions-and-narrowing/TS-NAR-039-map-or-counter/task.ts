export type CountSource = Map<string, unknown> | { count: number };

export function entryCount(value: CountSource): number {
  if(value instanceof Map) {
    return value.size;
  }
  return value.count;
}
