import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IdentifiedHandler } from "./task.js";

type Expected = ((event: string) => void) & { readonly id: string };
type Cases = [Expect<Equal<IdentifiedHandler, Expected>>];
declare const handler: IdentifiedHandler;
handler("open");
handler.id.toUpperCase();
