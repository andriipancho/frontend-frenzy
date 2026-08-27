import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { firstOr } from "./task.js";

const value = firstOr<string>([], "missing");
type Cases = [Expect<Equal<typeof value, string>>];
export type TestCases = Cases;
