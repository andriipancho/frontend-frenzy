import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ObjectKey } from "./task.js";

type Cases = [Expect<Equal<ObjectKey<{ id: string; active: boolean }>, "id" | "active">>];
// @ts-expect-error this alias accepts object models only
type Invalid = ObjectKey<string>;
export type TestCases = Cases;
export type InvalidCase = Invalid;
