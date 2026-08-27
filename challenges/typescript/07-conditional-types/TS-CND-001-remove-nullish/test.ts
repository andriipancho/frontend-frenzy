import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import type { Defined } from "./task.js";

type Cases = [
  Expect<Equal<Defined<string | null | undefined>, string>>,
  Expect<Equal<Defined<0 | false | "" | null>, 0 | false | "">>,
  Expect<Equal<Defined<undefined>, never>>,
];

export type TestCases = Cases;
