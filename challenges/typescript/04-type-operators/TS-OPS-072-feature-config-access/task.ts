export const featureConfig = {
  search: { enabled: true, provider: "local" },
  billing: { enabled: false, provider: "stripe" },
};

export function getFeatureConfig(
  feature: string,
): object {
  return featureConfig[feature as keyof typeof featureConfig];
}
