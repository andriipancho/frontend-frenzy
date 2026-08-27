import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Payload, VersionedPayload } from "./task.js";

type Expected = Payload & { readonly version: 1 };
type Cases = [Expect<Equal<VersionedPayload, Expected>>];
const payload: VersionedPayload = { data: "ready", version: 1 };
void payload;
