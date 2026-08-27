import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Notification } from "./task.js";

type Expected =
  | { channel: "email"; address: string; phone?: never; deviceToken?: never }
  | { channel: "sms"; phone: string; address?: never; deviceToken?: never }
  | { channel: "push"; deviceToken: string; address?: never; phone?: never };
type Cases = [Expect<Equal<Notification, Expected>>];
// @ts-expect-error email requires an address
const missing: Notification = { channel: "email" };
// @ts-expect-error channel fields cannot be mixed
const mixed: Notification = { channel: "sms", phone: "+48", address: "a@example.com" };
void missing; void mixed;
export type TestCases = Cases;
