import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Entity } from "./task.js";

type Expected = { readonly id: string; name: string };
type Cases = [Expect<Equal<Entity, Expected>>];
const entity: Entity = { id: "e1", name: "Draft" };
entity.name = "Published";
// @ts-expect-error identity cannot change
entity.id = "e2";
export type TestCases = Cases;
