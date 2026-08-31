export type Config = {
  readonly endpoint: string;
  readonly retries: number;
};

export function withRetries(config: Config, retries: number): Config {
  // TODO: preserve the input and return an updated configuration.
  const newConfig = {...config};
  newConfig.retries = retries;
  return newConfig;
}
