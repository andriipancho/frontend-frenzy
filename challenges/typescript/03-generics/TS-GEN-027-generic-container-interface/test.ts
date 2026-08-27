import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Container } from "./task.js";

type Expected = { get(): string; set(value: string): void };
type Cases = [Expect<Equal<Container<string>, Expected>>];
export type TestCases = Cases;
