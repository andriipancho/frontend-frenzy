import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { createTimestamped } from "./task.js";

const entity = createTimestamped({ id: "post-1", published: false });
type Cases = [
  Expect<
    Equal<
      typeof entity,
      { id: string; published: boolean } & { createdAt: Date }
    >
  >,
];
export type TestCases = Cases;
