import type { ReadonlyKeys } from "./task.js";

const user: ReadonlyKeys<{ id: string; name: string }, "id"> = { id: "u1", name: "Ada" };
// @ts-expect-error id is protected
user.id = "u2";
user.name = "Grace";
