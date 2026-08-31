import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { failureMessage } from "./task.js";

failureMessage(new Error("offline"));
failureMessage("offline");
failureMessage({ message: "offline" });
failureMessage(null);
failureMessage(503);

type Cases = [
  Expect<Equal<Parameters<typeof failureMessage>, [unknown]>>,
  Expect<Equal<ReturnType<typeof failureMessage>, string>>,
];

export type TestCases = Cases;
