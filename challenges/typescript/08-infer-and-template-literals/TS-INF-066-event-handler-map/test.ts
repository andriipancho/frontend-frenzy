import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EventHandlers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EventHandlers<{ saved: { id: string }; closed: undefined }>,
      { onSaved: (payload: { id: string }) => void; onClosed: (payload: undefined) => void }
    >
  >,
];

export type TestCases = Cases;
