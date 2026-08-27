import { hasPropertyValue } from "./task.js";

const record = { status: "ready", attempts: 2 };
hasPropertyValue(record, "status", "ready");
hasPropertyValue(record, "attempts", 2);
// @ts-expect-error status is a string
hasPropertyValue(record, "status", 2);
// @ts-expect-error attempts is a number
hasPropertyValue(record, "attempts", "two");
