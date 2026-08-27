import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { withRetries, type Config } from "./task.js";

type Cases = [
  Expect<Equal<Parameters<typeof withRetries>, [config: Config, retries: number]>>,
  Expect<Equal<ReturnType<typeof withRetries>, Config>>,
];

const config: Config = { endpoint: "/api", retries: 2 };
withRetries(config, 4);

// @ts-expect-error readonly input remains protected
config.endpoint = "/other";

export type TestCases = Cases;
