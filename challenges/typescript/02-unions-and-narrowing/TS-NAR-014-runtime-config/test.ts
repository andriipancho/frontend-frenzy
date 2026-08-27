import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ActiveConfig, Config, RuntimeState } from "./task.js";

type Expected = Config & RuntimeState;
type Cases = [Expect<Equal<ActiveConfig, Expected>>];
const config: ActiveConfig = { endpoint: "/api", ready: true };
void config;
