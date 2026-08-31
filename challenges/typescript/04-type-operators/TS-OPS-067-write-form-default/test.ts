import { writeDefault } from "./task.js";
import type { FormDefaults } from "./task.js";

declare const defaults: FormDefaults;
writeDefault(defaults, "email", "ada@example.com");
writeDefault(defaults, "age", 37);
// @ts-expect-error age requires a number
writeDefault(defaults, "age", "37");
// @ts-expect-error invalid form field
writeDefault(defaults, "name", "Ada");
