export type PluginSpec = {
  analytics: { options: { endpoint: string }; api: { track(name: string): void } };
  storage: { options: { namespace: string }; api: { read(key: string): Promise<string | undefined> } };
};

// TODO: compose the application contract from the specification.
export type PluginHost<P extends { [K in keyof P]: { options: object; api: object } }> = unknown;
