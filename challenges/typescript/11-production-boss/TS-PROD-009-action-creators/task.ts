export type Action =
  | { type: "add"; text: string }
  | { type: "remove"; id: string }
  | { type: "clear" };

// TODO: derive the registry from its source model.
export type ActionCreators<U extends { type: PropertyKey }> = unknown;
