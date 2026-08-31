import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PrimaryRegion } from "./task.js";

type Cases = [Expect<Equal<PrimaryRegion, "eu-central-1">>];
export type TestCases = Cases;
