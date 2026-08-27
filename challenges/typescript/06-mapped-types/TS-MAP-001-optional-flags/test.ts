import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import type { OptionalFlags } from "./task.js";

type Source = { searchable: string; pageSize: number; cached: Date };
type Expected = { searchable?: boolean; pageSize?: boolean; cached?: boolean };

type Cases = [Expect<Equal<OptionalFlags<Source>, Expected>>];

const flags: OptionalFlags<Source> = { searchable: true, cached: false };

// @ts-expect-error mapped values must be boolean
const invalid: OptionalFlags<Source> = { pageSize: 20 };

void flags;
void invalid;

export type TestCases = Cases;
