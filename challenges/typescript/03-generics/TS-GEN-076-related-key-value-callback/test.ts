import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeyValueCallback } from "./task.js";

type Settings = { theme: "light" | "dark"; compact: boolean };
type ThemeCallback = KeyValueCallback<Settings, "theme">;
type Cases = [
  Expect<Equal<Parameters<ThemeCallback>, ["theme", "light" | "dark"]>>,
  Expect<Equal<ReturnType<ThemeCallback>, void>>,
];
export type TestCases = Cases;
