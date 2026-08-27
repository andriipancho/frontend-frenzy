import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ConfigReader } from "./task.js";

type Config = { endpoint: string; retries: number; secure: boolean };
declare const reader: ConfigReader<Config>;
const endpoint = reader.get("endpoint");
const retries = reader.get("retries");
type Cases = [
  Expect<Equal<typeof endpoint, string>>,
  Expect<Equal<typeof retries, number>>,
];
export type TestCases = Cases;
