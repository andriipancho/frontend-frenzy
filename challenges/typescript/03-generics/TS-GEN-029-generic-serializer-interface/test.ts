import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Serializer } from "./task.js";

type Model = { ready: boolean };
type Expected = { encode(value: Model): string; decode(value: string): Model };
type Cases = [Expect<Equal<Serializer<Model>, Expected>>];
export type TestCases = Cases;
