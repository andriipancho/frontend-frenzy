import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { notificationText } from "./task.js";

notificationText({ channel: "email", subject: "Welcome" });
notificationText({ channel: "sms", phone: "+48" });
notificationText({ channel: "push", title: "Update" });

// @ts-expect-error the declared parameter type must not widen
notificationText({ channel: "webhook", url: "https://example.com" });

type Cases = [
  Expect<Equal<Parameters<typeof notificationText>, [{ channel: "email"; subject: string } | { channel: "sms"; phone: string } | { channel: "push"; title: string }]>>,
  Expect<Equal<ReturnType<typeof notificationText>, string>>,
];

export type TestCases = Cases;
