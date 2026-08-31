export type StoreState = { user: { id: string; name: string }; online: boolean };

// TODO: compose the application contract from the specification.
export type StoreContract<S extends object> = unknown;
