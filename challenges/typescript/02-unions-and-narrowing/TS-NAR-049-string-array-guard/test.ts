import { isStringArray } from "./task.js";

declare const input: unknown;
if (isStringArray(input)) {
  input.map((item) => item.toUpperCase());
}
