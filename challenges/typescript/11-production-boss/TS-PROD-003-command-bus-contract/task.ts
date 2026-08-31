export type Commands = {
  createUser: { input: { email: string }; output: { id: string }; async: true };
  resetCache: { input: { region: string }; output: boolean; async: false };
};

// TODO: preserve every key-specific relationship in the derived contract.
export type CommandBus<C extends { [K in keyof C]: { input: unknown; output: unknown; async: boolean } }> = unknown;
