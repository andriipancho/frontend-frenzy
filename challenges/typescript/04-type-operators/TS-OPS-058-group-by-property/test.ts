import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { groupBy } from "./task.js";

type Item = { category: "book" | "game"; price: number };
const items: Item[] = [{ category: "book", price: 10 }];
const groups = groupBy(items, "category");
type Cases = [
  Expect<Equal<typeof groups, Map<"book" | "game", Item[]>>>,
];
// @ts-expect-error invalid grouping key
groupBy(items, "title");
export type TestCases = Cases;
