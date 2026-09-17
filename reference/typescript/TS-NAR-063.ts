export type CacheResult =
  | { state: "hit"; value: string }
  | { state: "miss" }
  | { state: "stale"; value: string; ageSeconds: number };
