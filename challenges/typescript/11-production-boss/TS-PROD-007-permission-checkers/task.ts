export type Permissions = {
  read: { resourceId: string };
  update: { resourceId: string; fields: readonly string[] };
  publish: { resourceId: string; scheduledAt?: Date };
};

// TODO: preserve every key-specific relationship in the derived contract.
export type PermissionCheckers<P extends object> = unknown;
