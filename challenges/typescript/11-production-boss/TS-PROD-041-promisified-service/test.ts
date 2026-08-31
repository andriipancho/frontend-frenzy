import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Promisified } from "./task.js";

type Cases = [
  Expect<
    Equal<
      Promisified<{ load(id: string): { name: string }; save(value: string, force?: boolean): Promise<boolean>; version: "v1" }>,
      { load: (id: string) => Promise<{ name: string }>; save: (value: string, force?: boolean) => Promise<boolean>; version: "v1" }
    >
  >,
];

export type TestCases = Cases;
