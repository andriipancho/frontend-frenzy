import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { identity, type Matrix } from "./task.js";

type Cases = [Expect<Equal<Matrix, number[][]>>];
const matrix: Matrix = [[1, 2], [3, 4]];
void identity;
void matrix;
export type TestCases = Cases;
