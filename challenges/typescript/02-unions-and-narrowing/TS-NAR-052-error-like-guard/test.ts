import { isErrorLike } from "./task.js";

declare const input: unknown;
if (isErrorLike(input)) {
  input.message.toUpperCase();
}
