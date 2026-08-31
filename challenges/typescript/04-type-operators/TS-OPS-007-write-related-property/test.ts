import { writeProperty } from "./task.js";

const settings = { theme: "dark", retries: 3 };
writeProperty(settings, "theme", "light");
writeProperty(settings, "retries", 5);
// @ts-expect-error retries requires a number
writeProperty(settings, "retries", "five");
// @ts-expect-error theme requires a string
writeProperty(settings, "theme", false);
