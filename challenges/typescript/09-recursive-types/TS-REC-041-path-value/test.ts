import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PathValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PathValue<{user:{profile:{name:string}}},"user.profile.name">,
      string
    >
  >,
  Expect<
    Equal<
      PathValue<{user:{id:number}},"user.id">,
      number
    >
  >,
  Expect<
    Equal<
      PathValue<{user:string},"missing">,
      never
    >
  >,
];

export type TestCases = Cases;
