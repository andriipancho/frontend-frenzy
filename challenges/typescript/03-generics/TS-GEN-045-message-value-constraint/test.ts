import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { preserveMessage } from "./task.js";

const error = preserveMessage({ message: "offline", status: 503 });

error.status.toFixed();

type Cases = [
  Expect<Equal<typeof error, { message: string; status: number }>>,
];

export type TestCases = Cases;
