import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PayloadHandlers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PayloadHandlers<{ saved: { id: string }; closed: undefined; changed: string | undefined }>,
      { saved: (payload: { id: string }) => void; closed: (payload?: undefined) => void; changed: (payload?: string | undefined) => void }
    >
  >,
];

export type TestCases = Cases;
