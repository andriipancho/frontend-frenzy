import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { move, type Direction } from "./task.js";

type Expected = "up" | "down" | "left" | "right";
type Cases = [Expect<Equal<Direction, Expected>>];
move("up");
move("left");
// @ts-expect-error diagonal movement is unsupported
move("north-east");
export type TestCases = Cases;
