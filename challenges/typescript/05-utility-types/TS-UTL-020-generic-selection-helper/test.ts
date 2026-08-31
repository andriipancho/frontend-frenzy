import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Selection } from "./task.js";

type Source = {
  readonly id: string;
  name?: string;
  active: boolean;
};
type Cases = [
  Expect<Equal<
    Selection<Source, "id" | "name">,
    { readonly id: string; name?: string }
  >>,
];
export type TestCases = Cases;
