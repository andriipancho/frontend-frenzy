import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ConnectionPhase } from "./task.js";

type Expected = "idle" | "connecting" | "connected" | "closed";
type Cases = [Expect<Equal<ConnectionPhase, Expected>>];
const phase: ConnectionPhase = "connecting";
// @ts-expect-error unsupported phase
const invalid: ConnectionPhase = "waiting";
void phase; void invalid;
