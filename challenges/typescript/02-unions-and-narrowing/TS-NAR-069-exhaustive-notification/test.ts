import { notificationText } from "./task.js";

notificationText({ channel: "email", subject: "Welcome" });
notificationText({ channel: "sms", phone: "+48" });
notificationText({ channel: "push", title: "Update" });
