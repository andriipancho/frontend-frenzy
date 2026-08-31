import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ActionType } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ActionType<"user", "created">,
      "USER/CREATED"
    >
  >,
  Expect<
    Equal<
      ActionType<"cart", "itemAdded">,
      "CART/ITEMADDED"
    >
  >,
];

export type TestCases = Cases;
