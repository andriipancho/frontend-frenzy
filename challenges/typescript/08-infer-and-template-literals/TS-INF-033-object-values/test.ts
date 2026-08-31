import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ObjectValues } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ObjectValues<{ id: string; count: number }>,
      string | number
    >
  >,
  Expect<
    Equal<
      ObjectValues<{ ready: true; status: "ok" }>,
      true | "ok"
    >
  >,
  Expect<
    Equal<
      ObjectValues<{}>,
      unknown
    >
  >,
];

export type TestCases = Cases;
