import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { readServiceOption } from "./task.js";
import type { ServiceOptions } from "./task.js";

declare const options: ServiceOptions;
const retries = readServiceOption(options, "api", "retries");
const enabled = readServiceOption(options, "cache", "enabled");
type Cases = [
  Expect<Equal<typeof retries, number>>,
  Expect<Equal<typeof enabled, boolean>>,
];
// @ts-expect-error ttl is not an api option
readServiceOption(options, "api", "ttl");
export type TestCases = Cases;
