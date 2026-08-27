import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { OperationValue } from "./task.js";

type Expected = string | Error;
type Cases = [Expect<Equal<OperationValue, Expected>>];
const value: OperationValue = "ready";
const failure: OperationValue = new Error("offline");
void value; void failure;
