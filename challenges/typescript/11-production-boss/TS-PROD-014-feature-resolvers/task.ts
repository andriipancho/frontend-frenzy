export type Features = { beta: boolean; region: string; maxItems: number };
export type RequestContext = { userId: string; country: string };

// TODO: derive the registry from its source model.
export type FeatureResolvers<F extends object, C> = unknown;
