import { attachSize } from "./task.js";

const result = attachSize(["a", "b"]);
result.map((value) => value.toUpperCase());
result.size.toFixed();
