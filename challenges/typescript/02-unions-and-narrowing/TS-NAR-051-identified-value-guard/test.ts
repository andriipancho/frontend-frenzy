import { hasStringId } from "./task.js";

declare const input: unknown;
if (hasStringId(input)) {
  input.id.toUpperCase();
}
