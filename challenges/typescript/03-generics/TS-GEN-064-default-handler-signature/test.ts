import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Handler } from "./task.js";

type DefaultHandler = Handler;
type Parser = Handler<string, number>;
type Cases = [
  Expect<Equal<Parameters<DefaultHandler>[0], unknown>>,
  Expect<Equal<ReturnType<DefaultHandler>, void>>,
  Expect<Equal<Parameters<Parser>[0], string>>,
  Expect<Equal<ReturnType<Parser>, number>>,
];
export type TestCases = Cases;
