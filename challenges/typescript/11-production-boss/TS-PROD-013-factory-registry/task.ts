export type Services = { clock: Date; cache: Map<string, string>; queue: Set<string> };

// TODO: derive the registry from its source model.
export type FactoryRegistry<T extends object> = unknown;
