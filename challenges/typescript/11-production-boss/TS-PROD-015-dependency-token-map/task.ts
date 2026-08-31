export type Dependencies = { logger: { log(message: string): void }; storage: { get(key: string): Promise<string | undefined> } };

// TODO: derive the registry from its source model.
export type DependencyTokens<T extends object> = unknown;
