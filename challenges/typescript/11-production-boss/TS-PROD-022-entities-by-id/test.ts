import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EntitiesByKind, Entity } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EntitiesByKind<Entity>,
      { user: Record<string, { id: string; name: string }>; team: Record<string, { id: string; members: number }>; project: Record<string, { id: string; archived: boolean }> }
    >
  >,
];

export type TestCases = Cases;
