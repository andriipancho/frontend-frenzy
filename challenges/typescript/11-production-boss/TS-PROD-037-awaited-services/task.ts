// TODO: derive the contract without losing callable or positional information.
export type ResolvedServices<T extends Record<PropertyKey, (...args: never[]) => unknown>> = unknown;
