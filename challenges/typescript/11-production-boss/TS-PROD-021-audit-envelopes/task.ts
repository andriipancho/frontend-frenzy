export type AuditPayload =
  | { action: "user.invited"; email: string }
  | { action: "role.changed"; userId: string; role: string };

// TODO: preserve branch-specific information in the transformed contract.
export type AuditEnvelope<U extends { action: PropertyKey }> = unknown;
