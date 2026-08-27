export type CacheResult = {
  state: "hit" | "miss" | "stale";
  value?: string;
  ageSeconds?: number;
};
