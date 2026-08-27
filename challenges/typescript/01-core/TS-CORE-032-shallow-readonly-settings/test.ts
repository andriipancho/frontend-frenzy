import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Settings } from "./task.js";

type Expected = { readonly preferences: { theme: string } };
type Cases = [Expect<Equal<Settings, Expected>>];
const settings: Settings = { preferences: { theme: "dark" } };
settings.preferences.theme = "light";
// @ts-expect-error the preferences reference is readonly
settings.preferences = { theme: "system" };
export type TestCases = Cases;
