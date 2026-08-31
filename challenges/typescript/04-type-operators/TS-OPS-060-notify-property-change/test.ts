import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { notifyChange } from "./task.js";

const state = { count: 1, label: "ready" };
notifyChange(state, "count", 2, (change) => {
  type Cases = [
    Expect<Equal<typeof change.key, "count">>,
    Expect<Equal<typeof change.previous, number>>,
    Expect<Equal<typeof change.next, number>>,
  ];
  const checked: Cases = [true, true, true];
  void checked;
});
// @ts-expect-error count requires a number
notifyChange(state, "count", "two", () => {});
