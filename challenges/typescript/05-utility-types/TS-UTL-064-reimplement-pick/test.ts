import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyPick } from "./task.js";

type Source = {
  readonly id: string;
  name?: string;
  active: boolean;
};
type Expected = { readonly id: string; name?: string };
type Cases = [
  Expect<Equal<MyPick<Source, "id" | "name">, Expected>>,
];
export type TestCases = Cases;
