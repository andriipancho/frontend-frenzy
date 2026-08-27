import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { decode } from "./task.js";

type Cases = [
  Expect<Equal<Parameters<typeof decode>, [input: unknown]>>,
  Expect<Equal<ReturnType<typeof decode>, unknown>>,
];
decode("payload");
decode({ value: 1 });
decode(null);
export type TestCases = Cases;
