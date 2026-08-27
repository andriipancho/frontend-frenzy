import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { makeInstance } from "./task.js";

class Session {
  token = "active";
}
const session = makeInstance(Session);
type Cases = [Expect<Equal<typeof session, Session>>];
export type TestCases = Cases;
