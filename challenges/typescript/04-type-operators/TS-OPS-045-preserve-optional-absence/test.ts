import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { telemetry } from "./task.js";

type Cases = [Expect<Equal<keyof typeof telemetry, "endpoint">>];
// @ts-expect-error this concrete config has no sampleRate key
telemetry.sampleRate;
export type TestCases = Cases;
