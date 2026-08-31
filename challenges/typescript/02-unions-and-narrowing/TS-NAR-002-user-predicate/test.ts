import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { isUser, type User } from "./task.js";

declare const input: unknown;

if (isUser(input)) {
  input.id.toUpperCase();
  input.active.valueOf();
}

isUser({ id: "u1", active: true });
isUser({ id: 1, active: true });
isUser(null);

type Cases = [
  Expect<Equal<User, { id: string; active: boolean }>>,
  Expect<Equal<typeof isUser, (value: unknown) => value is User>>,
];

export type TestCases = Cases;
