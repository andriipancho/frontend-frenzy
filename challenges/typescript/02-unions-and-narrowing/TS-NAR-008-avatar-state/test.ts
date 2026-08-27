import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Avatar } from "./task.js";

type Expected = string | null;
type Cases = [Expect<Equal<Avatar, Expected>>];
const url: Avatar = "/avatar.png";
const missing: Avatar = null;
void url; void missing;
