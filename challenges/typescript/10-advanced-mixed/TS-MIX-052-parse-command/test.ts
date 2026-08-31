import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseCommand } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseCommand<"user.create">,
      {domain:"user";action:"create"}
    >
  >,
];
export type TestCases = Cases;
