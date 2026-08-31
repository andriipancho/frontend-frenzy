import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { reduceTodos } from "./task.js";

reduceTodos([], { type: "add", todo: { id: "t1", done: false } });
reduceTodos([], { type: "toggle", id: "t1" });
reduceTodos([], { type: "clear" });

// @ts-expect-error the declared parameter type must not widen
reduceTodos([], { type: "remove", id: "t1" });

type Cases = [
  Expect<Equal<Parameters<typeof reduceTodos>, [{ id: string; done: boolean }[], { type: "add"; todo: { id: string; done: boolean } } | { type: "toggle"; id: string } | { type: "clear" }]>>,
  Expect<Equal<ReturnType<typeof reduceTodos>, { id: string; done: boolean }[]>>,
];

export type TestCases = Cases;
