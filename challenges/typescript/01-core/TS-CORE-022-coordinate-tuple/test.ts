import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { origin, type Point } from "./task.js";

type Cases = [Expect<Equal<Point, [number, number]>>];
const point: Point = [10, 20];
// @ts-expect-error a point needs two coordinates
const incomplete: Point = [10];
void origin;
void point;
void incomplete;
export type TestCases = Cases;
