import { applyAccountPatch } from "./task.js";
import type { Account } from "./task.js";

declare const account: Account;
applyAccountPatch(account, {});
applyAccountPatch(account, { displayName: "Ada" });
applyAccountPatch(account, { active: false, displayName: "Grace" });
// @ts-expect-error unknown account field
applyAccountPatch(account, { role: "admin" });
// @ts-expect-error active must remain boolean
applyAccountPatch(account, { active: "no" });
