import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EmitArguments } from "./task.js";

type Expected = [
  event: "connected" | "disconnected",
  payload: { at: Date },
];
type Cases = [Expect<Equal<EmitArguments, Expected>>];
export type TestCases = Cases;
