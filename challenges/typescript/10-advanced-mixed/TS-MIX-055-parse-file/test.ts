import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseFile } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseFile<"avatar.png">,
      {base:"avatar";extension:"png"}
    >
  >,
];
export type TestCases = Cases;
