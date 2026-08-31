import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseEnvironment } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseEnvironment<"APP_PORT">,
      {namespace:"app";key:"port"}
    >
  >,
];
export type TestCases = Cases;
