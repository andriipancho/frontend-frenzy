import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { recordEvent, type EventPayload } from "./task.js";

type Cases = [
  Expect<Equal<typeof recordEvent, (payload: EventPayload) => string>>,
];

recordEvent({ name: "opened", timestamp: 100 });
// @ts-expect-error timestamp is required
recordEvent({ name: "opened" });

export type TestCases = Cases;
