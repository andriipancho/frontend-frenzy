export const regions = ["eu", "us", "apac"] as const;
export type Region = string;

export type RegionEndpoints = Record<string, string>;
