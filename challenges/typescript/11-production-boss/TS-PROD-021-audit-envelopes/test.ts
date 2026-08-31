import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AuditEnvelope, AuditPayload } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AuditEnvelope<AuditPayload>,
      ({ action: "user.invited"; email: string } & { readonly occurredAt: Date; readonly actorId: string }) | ({ action: "role.changed"; userId: string; role: string } & { readonly occurredAt: Date; readonly actorId: string })
    >
  >,
];

export type TestCases = Cases;
