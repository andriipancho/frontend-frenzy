import { type Validator } from "./task.js";

declare const validator: Validator<string>;
declare const input: unknown;
if (validator.isValid(input)) {
  input.toUpperCase();
}
