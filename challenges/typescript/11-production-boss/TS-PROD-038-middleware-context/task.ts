// TODO: derive the contract without losing callable or positional information.
export type MiddlewareContext<T extends readonly ((context: object) => object)[]> = unknown;
