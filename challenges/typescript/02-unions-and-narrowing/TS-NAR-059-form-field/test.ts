import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FormField } from "./task.js";

type Expected =
  | { type: "text"; value: string; options?: never }
  | { type: "checkbox"; value: boolean; options?: never }
  | { type: "select"; value: string; options: string[] };
type Cases = [Expect<Equal<FormField, Expected>>];
// @ts-expect-error checkbox values are boolean
const invalid: FormField = { type: "checkbox", value: "yes" };
void invalid;
export type TestCases = Cases;
