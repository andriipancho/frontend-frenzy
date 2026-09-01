export type CountSource = Map<string, unknown> | { count: number };

export function entryCount(value: CountSource): number {
  return value instanceof Map ? value.size : value.count;
}
