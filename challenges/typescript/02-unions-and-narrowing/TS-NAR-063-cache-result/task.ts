export type CacheResult = | {
  state: "hit";
  value: string;
} | {
  state: "miss";
} | {
  state: "stale",
  ageSeconds: number;
  value: string;
};
