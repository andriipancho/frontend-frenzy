import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SettingsView } from "./task.js";

type Expected = {
  readonly apiUrl: string;
  readonly retries: number;
  readonly debug: boolean;
};
type Cases = [Expect<Equal<SettingsView, Expected>>];
export type TestCases = Cases;
