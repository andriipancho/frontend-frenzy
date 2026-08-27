import { reduceTodos } from "./task.js";

reduceTodos([], { type: "add", todo: { id: "t1", done: false } });
reduceTodos([], { type: "toggle", id: "t1" });
reduceTodos([], { type: "clear" });
