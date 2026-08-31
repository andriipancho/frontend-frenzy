import { matchesProperty } from "./task.js";

const record = { id: "u1", attempts: 3 };
matchesProperty(record, "id", "u2");
matchesProperty(record, "attempts", 4);
// @ts-expect-error attempts requires a number
matchesProperty(record, "attempts", "four");
// @ts-expect-error unknown key
matchesProperty(record, "active", true);
