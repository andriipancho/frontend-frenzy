import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CommandLine } from "./task.js";

type Expected = [command: string, ...arguments_: string[]];
type Cases = [Expect<Equal<CommandLine, Expected>>];
const short: CommandLine = ["build"];
const long: CommandLine = ["test", "--watch", "--coverage"];
// @ts-expect-error a command name is required
const empty: CommandLine = [];
void short;
void long;
void empty;
export type TestCases = Cases;
