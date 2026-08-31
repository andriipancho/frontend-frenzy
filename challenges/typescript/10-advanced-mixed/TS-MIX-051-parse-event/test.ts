import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseEvent } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseEvent<"user:created">,
      {namespace:"user";event:"created"}
    >
  >,
];
export type TestCases = Cases;
