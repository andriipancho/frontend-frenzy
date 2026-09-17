export type CallableOnly<T extends (...args: never[]) => unknown> = T;
