import { createDatabase } from "./task.js";

createDatabase("postgres://localhost", 10);
createDatabase("postgres://localhost", 10, true);
// @ts-expect-error pool size must be numeric
createDatabase("postgres://localhost", "10");
// @ts-expect-error URL is required
createDatabase();
