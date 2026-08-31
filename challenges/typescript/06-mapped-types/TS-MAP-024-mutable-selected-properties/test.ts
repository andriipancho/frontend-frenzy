import type { MutableKeys } from "./task.js";

const config: MutableKeys<{ readonly id: string; readonly value: number }, "value"> = { id: "x", value: 1 };
config.value = 2;
// @ts-expect-error id stays readonly
config.id = "y";
