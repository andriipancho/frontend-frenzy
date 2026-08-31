import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TopicEvent } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TopicEvent<"users:created">,
      ["users", "created"]
    >
  >,
  Expect<
    Equal<
      TopicEvent<"billing:invoice:paid">,
      ["billing", "invoice:paid"]
    >
  >,
  Expect<
    Equal<
      TopicEvent<"ready">,
      never
    >
  >,
];

export type TestCases = Cases;
