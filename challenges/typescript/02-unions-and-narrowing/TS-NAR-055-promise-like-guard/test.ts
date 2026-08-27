import { isPromiseLike } from "./task.js";

declare const input: unknown;
if (isPromiseLike(input)) {
  input.then((value) => console.log(value));
}
