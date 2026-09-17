export type ConstructorOnly<T extends abstract new (...args: never[]) => unknown> = T;
