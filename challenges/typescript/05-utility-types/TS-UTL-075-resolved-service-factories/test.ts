import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ServiceInstances } from "./task.js";

type Expected = {
  logger: { log: (message: string) => undefined };
  clock: { now: () => Date };
  config: { region: string; retries: number };
};
type Cases = [Expect<Equal<ServiceInstances, Expected>>];
export type TestCases = Cases;
