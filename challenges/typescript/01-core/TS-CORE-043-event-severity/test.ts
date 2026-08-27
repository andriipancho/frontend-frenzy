import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Event } from "./task.js";

type Severity = "info" | "warning" | "error";
type Expected = { severity: Severity; message: string };
type Cases = [Expect<Equal<Event, Expected>>];
const event: Event = { severity: "warning", message: "High latency" };
// @ts-expect-error debug is not routed by this pipeline
const invalid: Event = { severity: "debug", message: "details" };
void event;
void invalid;
export type TestCases = Cases;
