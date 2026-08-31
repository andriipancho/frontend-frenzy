import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { InferredPayload } from "./task.js";

type Cases = [
  Expect<
    Equal<
      InferredPayload<{ type: "saved"; payload: { id: string } }>,
      { id: string }
    >
  >,
  Expect<
    Equal<
      InferredPayload<{ type: "closed"; payload: undefined } | { type: "failed"; payload: Error }>,
      undefined | Error
    >
  >,
  Expect<
    Equal<
      InferredPayload<{ type: "missing" }>,
      never
    >
  >,
];

export type TestCases = Cases;
