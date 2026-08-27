import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { GenericResult } from "./task.js";

type DefaultResult = GenericResult<number>;
type CustomResult = GenericResult<number, "offline">;
type DefaultError = Extract<DefaultResult, { ok: false }>["error"];
type CustomError = Extract<CustomResult, { ok: false }>["error"];
type SuccessData = Extract<CustomResult, { ok: true }>["data"];
type Cases = [
  Expect<Equal<DefaultError, Error>>,
  Expect<Equal<CustomError, "offline">>,
  Expect<Equal<SuccessData, number>>,
];
export type TestCases = Cases;
