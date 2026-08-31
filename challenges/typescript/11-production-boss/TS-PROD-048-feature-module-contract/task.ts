export type FeatureSpec = {
  search: { config: { limit: number }; state: { query: string }; actions: "submit" | "clear" };
  profile: { config: { editable: boolean }; state: { name: string }; actions: "save" };
};

// TODO: compose the application contract from the specification.
export type FeatureModules<F extends { [K in keyof F]: { config: object; state: object; actions: PropertyKey } }> = unknown;
