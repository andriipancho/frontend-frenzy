import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { VersionNumber } from "./task.js";

type Cases = [
  Expect<
    Equal<
      VersionNumber<"v1">,
      1
    >
  >,
  Expect<
    Equal<
      VersionNumber<"v42">,
      42
    >
  >,
  Expect<
    Equal<
      VersionNumber<"version2">,
      never
    >
  >,
];

export type TestCases = Cases;
