import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { contactAddress } from "./task.js";

contactAddress({ email: "team@example.com" });
contactAddress({ phone: "+48123456789" });

// @ts-expect-error the declared parameter type must not widen
contactAddress({});

type Cases = [
  Expect<Equal<Parameters<typeof contactAddress>, [{ email: string } | { phone: string }]>>,
  Expect<Equal<ReturnType<typeof contactAddress>, string>>,
];

export type TestCases = Cases;
