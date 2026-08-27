import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ThemeName } from "./task.js";

type Expected = "light" | "dark" | "system";
type Cases = [Expect<Equal<ThemeName, Expected>>];
const theme: ThemeName = "system";
// @ts-expect-error unsupported theme
const invalid: ThemeName = "contrast";
void theme; void invalid;
