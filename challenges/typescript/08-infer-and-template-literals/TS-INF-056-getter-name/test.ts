import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { GetterName } from "./task.js";

type Cases = [
  Expect<
    Equal<
      GetterName<"name">,
      "getName"
    >
  >,
  Expect<
    Equal<
      GetterName<"userId">,
      "getUserId"
    >
  >,
  Expect<
    Equal<
      GetterName<"x" | "y">,
      "getX" | "getY"
    >
  >,
];

export type TestCases = Cases;
