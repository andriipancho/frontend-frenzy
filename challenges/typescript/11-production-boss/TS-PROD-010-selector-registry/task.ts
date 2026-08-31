export type State = { user: { id: string; name: string }; online: boolean; notices: readonly string[] };

// TODO: derive the registry from its source model.
export type SelectorRegistry<S extends object> = unknown;
