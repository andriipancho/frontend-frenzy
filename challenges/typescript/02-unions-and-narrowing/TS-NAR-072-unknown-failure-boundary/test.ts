import { failureMessage } from "./task.js";

failureMessage(new Error("offline"));
failureMessage("offline");
failureMessage({ message: "offline" });
failureMessage(null);
failureMessage(503);
