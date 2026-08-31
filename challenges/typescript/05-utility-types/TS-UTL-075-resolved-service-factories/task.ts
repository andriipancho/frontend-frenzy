export const serviceFactories = {
  logger: () => ({
    log: (message: string) => void message,
  }),
  clock: async () => ({
    now: () => new Date(),
  }),
  config: () => Promise.resolve({
    region: "eu",
    retries: 3,
  }),
};

export type ServiceInstances = Record<
  keyof typeof serviceFactories,
  unknown
>;
