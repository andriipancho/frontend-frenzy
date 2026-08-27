import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Envelope } from "./task.js";

type Payload = { userId: string };
type Cases = [Expect<Equal<Envelope<Payload>, { topic: string; payload: Payload }>>];
export type TestCases = Cases;
