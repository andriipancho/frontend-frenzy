export function preserveConfig<T extends { endpoint: string }>(config: T): T {
  return config;
}
