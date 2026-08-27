import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ConstructorOnly } from "./task.js";

class Service {}
type Cases = [Expect<Equal<ConstructorOnly<typeof Service>, typeof Service>>];
// @ts-expect-error ordinary callbacks are not constructors
type Invalid = ConstructorOnly<() => void>;
export type TestCases = Cases;
export type InvalidCase = Invalid;
