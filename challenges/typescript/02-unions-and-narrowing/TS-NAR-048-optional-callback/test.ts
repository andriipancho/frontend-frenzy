import { complete } from "./task.js";

complete((result) => console.log(result), "ready");
complete(undefined, "ready");
