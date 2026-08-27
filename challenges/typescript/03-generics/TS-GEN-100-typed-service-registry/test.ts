import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ServiceRegistry } from "./task.js";

type Services = {
  logger: { log(message: string): void };
  clock: { now(): Date };
};
declare const registry: ServiceRegistry<Services>;
const logger = registry.get("logger");
const clock = registry.get("clock");
registry.set("logger", { log: (message) => void message });
// @ts-expect-error logger registrations require a log method
registry.set("logger", { now: () => new Date() });
type Cases = [
  Expect<Equal<typeof logger, Services["logger"]>>,
  Expect<Equal<typeof clock, Services["clock"]>>,
];
export type TestCases = Cases;
