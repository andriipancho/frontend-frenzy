import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IdList } from "./task.js";

type Expected = (string | number)[];
type Cases = [Expect<Equal<IdList, Expected>>];
const ids: IdList = ["u1", 2, "u3"];
void ids;
