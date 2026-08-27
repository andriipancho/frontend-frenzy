import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PayloadQueue } from "./task.js";

type Cases = [Expect<Equal<PayloadQueue, unknown[]>>];
const queue: PayloadQueue = ["text", 42, { ready: true }];
const payload = queue[0];
// @ts-expect-error unknown values cannot be used without narrowing
payload.toString();
export type TestCases = Cases;
