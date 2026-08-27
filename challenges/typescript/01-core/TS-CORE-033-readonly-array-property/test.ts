import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Snapshot } from "./task.js";

type Expected = { readonly tags: readonly string[] };
type Cases = [Expect<Equal<Snapshot, Expected>>];
const snapshot: Snapshot = { tags: ["stable"] };
// @ts-expect-error the property cannot be replaced
snapshot.tags = [];
// @ts-expect-error the exposed array cannot be mutated
snapshot.tags.push("latest");
export type TestCases = Cases;
