import type { FormWriter } from "./task.js";

type Profile = { displayName: string; notifications: boolean };
declare const writer: FormWriter<Profile>;
writer.setField("displayName", "Ada");
writer.setField("notifications", true);
// @ts-expect-error displayName requires a string
writer.setField("displayName", false);
// @ts-expect-error notifications requires a boolean
writer.setField("notifications", "yes");
