import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeyboardAction } from "./task.js";

type Expected = "next" | "previous" | "select" | "dismiss";
type Cases = [Expect<Equal<KeyboardAction, Expected>>];
const action: KeyboardAction = "select";
// @ts-expect-error unsupported action
const invalid: KeyboardAction = "submit";
void action; void invalid;
