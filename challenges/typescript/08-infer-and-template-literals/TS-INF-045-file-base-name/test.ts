import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FileBaseName } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FileBaseName<"avatar.png">,
      "avatar"
    >
  >,
  Expect<
    Equal<
      FileBaseName<"archive.tar.gz">,
      "archive"
    >
  >,
  Expect<
    Equal<
      FileBaseName<"README">,
      "README"
    >
  >,
];

export type TestCases = Cases;
