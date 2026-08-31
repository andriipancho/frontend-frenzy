export type DomainError =
  | { code: "NOT_FOUND"; resource: string }
  | { code: "CONFLICT"; resource: string; version: number }
  | { code: "FORBIDDEN"; permission: string };

// TODO: preserve branch-specific information in the transformed contract.
export type ErrorsByCode<U extends { code: PropertyKey }> = unknown;
