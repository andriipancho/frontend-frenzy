import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SettingsWriters, Settings } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SettingsWriters<Settings>,
      { setTheme: (value: "light" | "dark") => void; setPageSize: (value: number) => void; setTelemetry: (value: boolean) => void }
    >
  >,
];

export type TestCases = Cases;
