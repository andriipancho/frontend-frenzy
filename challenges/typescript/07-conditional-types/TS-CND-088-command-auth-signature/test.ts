import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CommandHandler } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CommandHandler<{ payload: { id: string }; auth: true; result: { saved: true } }>,
      (token: string, payload: { id: string }) => Promise<{ saved: true }>
    >
  >,
  Expect<
    Equal<
      CommandHandler<{ payload: void; auth: false; result: { ok: true } }>,
      (payload: void) => Promise<{ ok: true }>
    >
  >,
];

export type TestCases = Cases;
