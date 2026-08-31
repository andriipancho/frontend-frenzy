import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RepeatValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RepeatValue<"x",3>,
      ["x","x","x"]
    >
  >,
  Expect<
    Equal<
      RepeatValue<number,1>,
      [number]
    >
  >,
  Expect<
    Equal<
      RepeatValue<true,0>,
      []
    >
  >,
];

export type TestCases = Cases;
