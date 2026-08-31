import { hasField } from "./task.js";

const user = { id: "u1", name: "Ada" };
hasField(user, "id");
hasField(user, "name");
// @ts-expect-error age is not a known field
hasField(user, "age");
