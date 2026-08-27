import { resultMessage } from "./task.js";

resultMessage({ data: "loaded" });
resultMessage({ error: { message: "offline", status: 503 } });
