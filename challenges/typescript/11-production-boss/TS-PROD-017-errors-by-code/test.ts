import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ErrorsByCode, DomainError } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ErrorsByCode<DomainError>,
      { NOT_FOUND: { resource: string }; CONFLICT: { resource: string; version: number }; FORBIDDEN: { permission: string } }
    >
  >,
];

export type TestCases = Cases;
