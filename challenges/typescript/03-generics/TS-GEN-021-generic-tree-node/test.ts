import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TreeNode } from "./task.js";

type Expected = { value: string; children: TreeNode<string>[] };
type Cases = [Expect<Equal<TreeNode<string>, Expected>>];
export type TestCases = Cases;
