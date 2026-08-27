import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { getProperty } from "./task.js";

const model = { id: "u1", retries: 3, active: true };
const id = getProperty(model, "id");
const retries = getProperty(model, "retries");

type Cases = [Expect<Equal<typeof id, string>>, Expect<Equal<typeof retries, number>>];

// @ts-expect-error unknown keys must be rejected
getProperty(model, "missing");

export type TestCases = Cases;
