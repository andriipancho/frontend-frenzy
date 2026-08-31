import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EventPayload } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EventPayload<{ type: "saved"; payload: { id: string } } | { type: "closed"; payload: undefined }, "saved">,
      { id: string }
    >
  >,
  Expect<
    Equal<
      EventPayload<{ type: "saved"; payload: string } | { type: "failed"; payload: Error }, "saved" | "failed">,
      string | Error
    >
  >,
];

export type TestCases = Cases;
