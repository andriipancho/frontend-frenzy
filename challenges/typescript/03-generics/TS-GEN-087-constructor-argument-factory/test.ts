import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { makeWithArgument } from "./task.js";

class User {
  constructor(readonly input: { id: string }) {}
}
const user = makeWithArgument(User, { id: "user-1" });
type Cases = [Expect<Equal<typeof user, User>>];
// @ts-expect-error the constructor requires an id
makeWithArgument(User, { name: "Ada" });
export type TestCases = Cases;
