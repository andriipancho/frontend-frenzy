import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Named, Tagged, TaggedEntity } from "./task.js";

type Expected = Named & Tagged;
type Cases = [Expect<Equal<TaggedEntity, Expected>>];
const entity: TaggedEntity = { name: "release", tags: ["stable"] };
void entity;
