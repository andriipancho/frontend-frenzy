import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { HttpOutcome } from "./task.js";

type Expected = 200 | 201 | 400 | 404 | 500;
type Cases = [Expect<Equal<HttpOutcome, Expected>>];
const outcome: HttpOutcome = 201;
// @ts-expect-error unsupported outcome
const invalid: HttpOutcome = 418;
void outcome; void invalid;
