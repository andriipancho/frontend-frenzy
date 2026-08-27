import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Listener } from "./task.js";

type Expected = (event: string) => void;
type Cases = [Expect<Equal<Listener, Expected>>];
const listener: Listener = (event) => {
  console.log(event);
};
const returningListener: Listener = (event) => event.length;
void listener;
void returningListener;
export type TestCases = Cases;
