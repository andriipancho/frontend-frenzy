import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { HandlerName } from "./task.js";

type Cases = [
  Expect<
    Equal<
      HandlerName<"click">,
      "onClick"
    >
  >,
  Expect<
    Equal<
      HandlerName<"userCreated">,
      "onUserCreated"
    >
  >,
  Expect<
    Equal<
      HandlerName<"ready" | "close">,
      "onReady" | "onClose"
    >
  >,
];

export type TestCases = Cases;
