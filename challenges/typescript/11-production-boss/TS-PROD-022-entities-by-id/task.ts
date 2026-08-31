export type Entity =
  | { kind: "user"; id: string; name: string }
  | { kind: "team"; id: string; members: number }
  | { kind: "project"; id: string; archived: boolean };

// TODO: preserve branch-specific information in the transformed contract.
export type EntitiesByKind<U extends { kind: PropertyKey }> = unknown;
