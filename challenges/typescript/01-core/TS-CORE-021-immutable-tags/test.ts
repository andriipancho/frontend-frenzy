import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { tags } from "./task.js";

type Cases = [Expect<Equal<typeof tags, readonly string[]>>];
// @ts-expect-error exported tags are immutable
tags.push("browser");
export type TestCases = Cases;
