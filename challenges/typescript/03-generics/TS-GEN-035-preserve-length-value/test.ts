import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { attachSize } from "./task.js";

const result = attachSize(["a", "b"]);

result.map((value) => value.toUpperCase());
result.size.toFixed();

type Cases = [
  Expect<Equal<typeof result, string[] & { size: number }>>,
];

export type TestCases = Cases;
