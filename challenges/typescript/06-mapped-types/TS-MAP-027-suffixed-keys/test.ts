import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Suffixed } from "./task.js";
type Cases=[Expect<Equal<Suffixed<{width:number;height:number},"Px">,{widthPx:number;heightPx:number}>>];
export type TestCases=Cases;
