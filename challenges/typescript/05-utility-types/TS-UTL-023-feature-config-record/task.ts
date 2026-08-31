export type FeatureName = "search" | "billing" | "reports";

export interface FeatureConfig {
  enabled: boolean;
  rolloutPercent: number;
}

export type FeatureConfigMap = Record<string, FeatureConfig>;
