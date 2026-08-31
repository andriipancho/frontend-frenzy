import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PermissionCheckers, Permissions } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PermissionCheckers<Permissions>,
      { canRead: (context: { resourceId: string }) => boolean; canUpdate: (context: { resourceId: string; fields: readonly string[] }) => boolean; canPublish: (context: { resourceId: string; scheduledAt?: Date }) => boolean }
    >
  >,
];

export type TestCases = Cases;
