import { preserveMessage } from "./task.js";

const error = preserveMessage({ message: "offline", status: 503 });
error.status.toFixed();
