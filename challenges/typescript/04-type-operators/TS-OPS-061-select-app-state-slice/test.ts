import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { selectSlice } from "./task.js";
import type { AppState } from "./task.js";

declare const state: AppState;
const cart = selectSlice(state, "cart");
const online = selectSlice(state, "online");
type Cases = [
  Expect<Equal<typeof cart, { itemIds: string[] }>>,
  Expect<Equal<typeof online, boolean>>,
];
// @ts-expect-error invalid state slice
selectSlice(state, "profile");
export type TestCases = Cases;
