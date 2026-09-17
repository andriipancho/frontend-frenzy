export type PluginBase = {
  readonly id: string;
  name: string;
};

export type Plugin = PluginBase &
  (
    | { enabled: true; config: { endpoint: string }; reason?: never }
    | { enabled: false; reason: string; config?: never }
  );
