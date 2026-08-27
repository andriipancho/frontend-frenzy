import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { InteractiveProps } from "./task.js";

type Expected =
  | { as: "link"; label: string; href: string; onClick?: never }
  | { as: "button"; label: string; onClick: () => void; href?: never };
type Cases = [Expect<Equal<InteractiveProps, Expected>>];
// @ts-expect-error link requires href
const missing: InteractiveProps = { as: "link", label: "Docs" };
// @ts-expect-error modes cannot be mixed
const mixed: InteractiveProps = { as: "button", label: "Save", onClick() {}, href: "/" };
void missing; void mixed;
export type TestCases = Cases;
