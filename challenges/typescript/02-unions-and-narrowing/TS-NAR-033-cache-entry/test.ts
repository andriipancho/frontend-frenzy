import { describeCache } from "./task.js";

describeCache({ value: "ready", expiresAt: new Date() });
describeCache({ reason: "expired" });
