export type ConfigByEnvironment = {
  development: { debug: true; apiUrl: string };
  production: { debug: false; apiUrl: string; cdnUrl: string };
};

export function environmentConfig(
  configs: ConfigByEnvironment,
  environment: keyof ConfigByEnvironment,
): ConfigByEnvironment[keyof ConfigByEnvironment] {
  return configs[environment];
}
