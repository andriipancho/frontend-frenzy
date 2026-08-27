import { assignField } from "./task.js";

const settings = { retries: 3, secure: true };
assignField(settings, "retries", 4);
assignField(settings, "secure", false);
// @ts-expect-error retries is numeric
assignField(settings, "retries", false);
// @ts-expect-error secure is boolean
assignField(settings, "secure", 1);
