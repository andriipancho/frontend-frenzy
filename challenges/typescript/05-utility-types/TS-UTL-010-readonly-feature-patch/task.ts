export interface FeatureConfig {
  enabled: boolean;
  rolloutPercent: number;
  owner: string;
}

export type FeaturePatch = Partial<FeatureConfig>;
