import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SuccessPayloads } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SuccessPayloads<{ user: { ok: true; data: { id: string } }; save: { ok: false; error: string }; ping: { ok: true; data: "pong" } }>,
      { user: { id: string }; save: never; ping: "pong" }
    >
  >,
];

export type TestCases = Cases;
