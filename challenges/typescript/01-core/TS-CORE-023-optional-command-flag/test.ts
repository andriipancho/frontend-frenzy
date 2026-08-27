import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Command } from "./task.js";

type Expected = [name: string, force?: boolean];
type Cases = [Expect<Equal<Command, Expected>>];
const normal: Command = ["build"];
const forced: Command = ["build", true];
// @ts-expect-error the optional flag must be boolean
const invalid: Command = ["build", "yes"];
void normal;
void forced;
void invalid;
export type TestCases = Cases;
