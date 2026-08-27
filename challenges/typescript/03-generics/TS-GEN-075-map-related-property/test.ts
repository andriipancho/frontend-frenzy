import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { mapProperty } from "./task.js";

const user = { name: "Ada", visits: 3 };
const label = mapProperty(user, "visits", (visits) => `${visits} visits`);
type Cases = [Expect<Equal<typeof label, string>>];
export type TestCases = Cases;
