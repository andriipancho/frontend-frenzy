import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { formatCell } from "./task.js";
import type { Row } from "./task.js";

declare const row: Row;
formatCell(row, "createdAt", (value) => {
  type Case = Expect<Equal<typeof value, Date>>;
  const checked: Case = true;
  return checked ? value.toISOString() : "";
});
formatCell(row, "score", (value) => value.toFixed(1));
// @ts-expect-error score formatter receives a number
formatCell(row, "score", (value: string) => value);
