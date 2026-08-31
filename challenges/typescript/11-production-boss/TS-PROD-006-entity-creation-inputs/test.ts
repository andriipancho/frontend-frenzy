import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CreateInput, StoredUser } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CreateInput<StoredUser, "id" | "createdAt">,
      { name: string; role: "admin" | "member" }
    >
  >,
];

export type TestCases = Cases;
