export type Transition =
  | { from: "draft"; to: "review" | "archived" }
  | { from: "review"; to: "published" | "draft" }
  | { from: "published"; to: "archived" };

// TODO: preserve every key-specific relationship in the derived contract.
export type TransitionTable<T extends { from: PropertyKey; to: PropertyKey }> = unknown;
