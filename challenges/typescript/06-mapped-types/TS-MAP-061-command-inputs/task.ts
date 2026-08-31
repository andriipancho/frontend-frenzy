export type CommandInputs<U extends { command: PropertyKey; input: unknown }> = Record<PropertyKey,unknown>;
