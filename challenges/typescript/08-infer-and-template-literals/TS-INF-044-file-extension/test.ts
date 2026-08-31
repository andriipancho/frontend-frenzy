import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FileExtension } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FileExtension<"avatar.png">,
      "png"
    >
  >,
  Expect<
    Equal<
      FileExtension<"archive.tar.gz">,
      "tar.gz"
    >
  >,
  Expect<
    Equal<
      FileExtension<"README">,
      never
    >
  >,
];

export type TestCases = Cases;
