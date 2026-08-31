// TODO: derive the contract without losing callable or positional information.
export type TupleSpecRecord<T extends readonly (readonly [PropertyKey, unknown])[]> = unknown;
