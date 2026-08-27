import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RequestOptions } from "./task.js";

type Expected = { method: string; headers?: { [name: string]: string } };
type Cases = [Expect<Equal<RequestOptions, Expected>>];
const simple: RequestOptions = { method: "GET" };
const authorized: RequestOptions = { method: "GET", headers: { authorization: "token" } };
// @ts-expect-error header values must be strings
const invalid: RequestOptions = { method: "GET", headers: { retries: 3 } };
void simple;
void authorized;
void invalid;
export type TestCases = Cases;
