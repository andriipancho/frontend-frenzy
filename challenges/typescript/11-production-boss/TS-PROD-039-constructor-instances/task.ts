// TODO: derive the contract without losing callable or positional information.
export type ServiceInstances<T extends Record<PropertyKey, abstract new (...args: never[]) => unknown>> = unknown;
