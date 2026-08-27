import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import type { RegistryKey } from "./task.js";

type Cases = [Expect<Equal<RegistryKey, symbol>>];

const key: RegistryKey = Symbol("session");
// @ts-expect-error text keys are not registry symbols
const invalid: RegistryKey = "session";
void key;
void invalid;

export type TestCases = Cases;
