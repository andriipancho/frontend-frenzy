import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ContactId } from "./task.js";

type Expected = string | number;
type Cases = [Expect<Equal<ContactId, Expected>>];
const modern: ContactId = "c1";
const legacy: ContactId = 42;
void modern; void legacy;
