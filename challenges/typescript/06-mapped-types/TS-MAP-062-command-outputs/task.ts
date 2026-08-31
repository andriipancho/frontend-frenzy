export type CommandOutputs<U extends { command: PropertyKey; output: unknown }> = Record<PropertyKey,unknown>;
