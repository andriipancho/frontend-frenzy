import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FileDescriptor } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FileDescriptor<"avatar.png">,
      { name: "avatar"; extension: "png"; original: "avatar.png" }
    >
  >,
  Expect<
    Equal<
      FileDescriptor<"README">,
      { name: "README"; extension: never; original: "README" }
    >
  >,
];

export type TestCases = Cases;
