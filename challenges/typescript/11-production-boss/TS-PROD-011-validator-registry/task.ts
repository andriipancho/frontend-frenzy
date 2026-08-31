export type FormValues = { email: string; age: number; consent: boolean };

// TODO: derive the registry from its source model.
export type ValidatorRegistry<T extends object> = unknown;
