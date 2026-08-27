import { isNonEmptyString } from "./task.js";

declare const input: unknown;
if (isNonEmptyString(input)) {
  input.toUpperCase();
}
