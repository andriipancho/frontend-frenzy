import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { toErrorMessage } from "./task.js";

type Cases = [Expect<Equal<ReturnType<typeof toErrorMessage>, string>>];

toErrorMessage(new Error("offline"));
toErrorMessage("offline");
toErrorMessage({ message: "offline" });
toErrorMessage(null);

export type TestCases = Cases;
