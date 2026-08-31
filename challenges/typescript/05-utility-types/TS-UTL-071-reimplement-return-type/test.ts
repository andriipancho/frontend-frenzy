import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyReturnType } from "./task.js";

type Loader = (id: string) => Promise<{ id: string } | null>;
type Cases = [
  Expect<Equal<
    MyReturnType<Loader>,
    Promise<{ id: string } | null>
  >>,
];
export type TestCases = Cases;
