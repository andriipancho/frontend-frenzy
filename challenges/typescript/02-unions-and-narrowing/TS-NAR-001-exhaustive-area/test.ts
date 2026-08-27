import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { area, type Shape } from "./task.js";

type Cases = [
  Expect<Equal<Parameters<typeof area>, [shape: Shape]>>,
  Expect<Equal<ReturnType<typeof area>, number>>,
];

area({ kind: "circle", radius: 2 });
area({ kind: "rectangle", width: 2, height: 4 });
area({ kind: "triangle", base: 3, height: 4 });

export type TestCases = Cases;
