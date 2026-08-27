import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AuditFields } from "./task.js";

type Expected = { createdAt: Date } & { updatedAt: Date };
type Cases = [Expect<Equal<AuditFields, Expected>>];
const audit: AuditFields = { createdAt: new Date(), updatedAt: new Date() };
void audit;
