import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResourcePermission } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResourcePermission<"invoice:approve" | "user:invite">,
      { resource: "invoice"; action: "approve" } | { resource: "user"; action: "invite" }
    >
  >,
];

export type TestCases = Cases;
