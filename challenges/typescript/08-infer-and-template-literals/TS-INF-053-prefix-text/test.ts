import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PrefixedText } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PrefixedText<"get", "User">,
      "getUser"
    >
  >,
  Expect<
    Equal<
      PrefixedText<"data-", "id">,
      "data-id"
    >
  >,
];

export type TestCases = Cases;
