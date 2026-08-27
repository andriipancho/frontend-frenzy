import { isUser } from "./task.js";

declare const input: unknown;

if (isUser(input)) {
  input.id.toUpperCase();
  input.active.valueOf();
}

isUser({ id: "u1", active: true });
isUser({ id: 1, active: true });
isUser(null);
