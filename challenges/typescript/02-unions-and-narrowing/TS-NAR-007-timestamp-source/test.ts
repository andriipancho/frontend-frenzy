import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Timestamp } from "./task.js";

type Expected = Date | number;
type Cases = [Expect<Equal<Timestamp, Expected>>];
const date: Timestamp = new Date();
const epoch: Timestamp = 1_700_000_000_000;
void date; void epoch;
