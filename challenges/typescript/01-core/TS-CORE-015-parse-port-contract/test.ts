import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { parsePort } from "./task.js";

type Cases = [Expect<Equal<typeof parsePort, (value: string) => number>>];

const port: number = parsePort("3000");
void port;

export type TestCases = Cases;
