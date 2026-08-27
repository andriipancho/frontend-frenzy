import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { tagValue } from "./task.js";

const tagged = tagValue({ id: 1 }, "cached");
type Cases = [
  Expect<
    Equal<
      typeof tagged,
      { value: { id: number }; tag: "cached" }
    >
  >,
];
export type TestCases = Cases;
