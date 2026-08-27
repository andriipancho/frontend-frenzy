import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EventPayload } from "./task.js";

type Events = {
  created: { id: string };
  deleted: { id: string; permanent: boolean };
};
type Cases = [
  Expect<Equal<EventPayload<Events, "created">, { id: string }>>,
  Expect<
    Equal<
      EventPayload<Events, "deleted">,
      { id: string; permanent: boolean }
    >
  >,
];
export type TestCases = Cases;
