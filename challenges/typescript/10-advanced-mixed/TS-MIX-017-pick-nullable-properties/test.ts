import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickNullable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickNullable<{id:string;name:string|null;note:null}>,
      Pick<{id:string;name:string|null;note:null},"name"|"note">
    >
  >,
];
export type TestCases = Cases;
