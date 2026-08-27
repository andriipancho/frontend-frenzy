import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { mergeObjects } from "./task.js";

const merged = mergeObjects({ id: "u1" }, { active: true });
type Cases = [Expect<Equal<typeof merged, { id: string } & { active: boolean }>>];
// @ts-expect-error primitives are not merge inputs
mergeObjects("left", { active: true });
export type TestCases = Cases;
