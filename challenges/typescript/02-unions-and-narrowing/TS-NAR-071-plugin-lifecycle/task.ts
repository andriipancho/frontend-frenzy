export type PluginBase = {
  readonly id: string;
  name: string;
};

export type Plugin = PluginBase & {
  enabled: boolean;
  config?: { endpoint: string };
  reason?: string;
};
