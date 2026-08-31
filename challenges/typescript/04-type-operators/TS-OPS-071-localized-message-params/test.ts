import { translate } from "./task.js";

translate("welcome", { name: "Ada" });
translate("unread", { count: 3 });
translate("offline", {});
// @ts-expect-error welcome requires name
translate("welcome", { count: 3 });
// @ts-expect-error unread requires count
translate("unread", { name: "Ada" });
