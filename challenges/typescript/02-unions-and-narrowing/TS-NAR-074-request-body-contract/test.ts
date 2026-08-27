import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Request } from "./task.js";

type JsonBody = { [key: string]: unknown };
type Expected =
  | { method: "GET"; body?: never; id?: never }
  | { method: "POST"; body: JsonBody; id?: never }
  | { method: "DELETE"; id: string; body?: never };
type Cases = [Expect<Equal<Request, Expected>>];
// @ts-expect-error POST requires a body
const missing: Request = { method: "POST" };
// @ts-expect-error GET cannot carry a body
const mixed: Request = { method: "GET", body: {} };
void missing; void mixed;
export type TestCases = Cases;
